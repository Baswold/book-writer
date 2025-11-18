const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Data directory for storing manuscripts
const DATA_DIR = path.join(__dirname, 'data');

// Ensure data directory exists
(async () => {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    console.log('Data directory initialized');
  } catch (error) {
    console.error('Failed to create data directory:', error);
  }
})();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Get all saved manuscripts
app.get('/api/manuscripts', async (req, res) => {
  try {
    const files = await fs.readdir(DATA_DIR);
    const manuscripts = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(DATA_DIR, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(content);
        manuscripts.push({
          id: file.replace('.json', ''),
          title: data.metadata?.title || 'Untitled',
          lastModified: (await fs.stat(filePath)).mtime,
          chapters: data.chapters?.length || 0,
          words: data.metadata?.totalWords || 0
        });
      }
    }

    res.json({ manuscripts });
  } catch (error) {
    console.error('Error fetching manuscripts:', error);
    res.status(500).json({ error: 'Failed to fetch manuscripts' });
  }
});

// Get specific manuscript
app.get('/api/manuscripts/:id', async (req, res) => {
  try {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    const content = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    res.json(data);
  } catch (error) {
    console.error('Error fetching manuscript:', error);
    res.status(404).json({ error: 'Manuscript not found' });
  }
});

// Save manuscript
app.post('/api/manuscripts', async (req, res) => {
  try {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.status(400).json({ error: 'Missing id or data' });
    }

    const filePath = path.join(DATA_DIR, `${id}.json`);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    res.json({
      success: true,
      message: 'Manuscript saved successfully',
      id,
      path: filePath
    });
  } catch (error) {
    console.error('Error saving manuscript:', error);
    res.status(500).json({ error: 'Failed to save manuscript' });
  }
});

// Update manuscript
app.put('/api/manuscripts/:id', async (req, res) => {
  try {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Missing data' });
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    res.json({
      success: true,
      message: 'Manuscript updated successfully'
    });
  } catch (error) {
    console.error('Error updating manuscript:', error);
    res.status(500).json({ error: 'Failed to update manuscript' });
  }
});

// Delete manuscript
app.delete('/api/manuscripts/:id', async (req, res) => {
  try {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    await fs.unlink(filePath);

    res.json({
      success: true,
      message: 'Manuscript deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting manuscript:', error);
    res.status(500).json({ error: 'Failed to delete manuscript' });
  }
});

// Export manuscript in various formats
app.post('/api/export/:id/:format', async (req, res) => {
  try {
    const { id, format } = req.params;
    const filePath = path.join(DATA_DIR, `${id}.json`);
    const content = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(content);

    let exportContent = '';
    let contentType = 'text/plain';
    let filename = `${data.metadata?.title || 'book'}.${format}`;

    switch (format) {
      case 'txt':
        exportContent = generateTXT(data);
        contentType = 'text/plain';
        break;
      case 'md':
      case 'markdown':
        exportContent = generateMarkdown(data);
        contentType = 'text/markdown';
        filename = `${data.metadata?.title || 'book'}.md`;
        break;
      case 'html':
        exportContent = generateHTML(data);
        contentType = 'text/html';
        break;
      case 'json':
        exportContent = JSON.stringify(data, null, 2);
        contentType = 'application/json';
        break;
      default:
        return res.status(400).json({ error: 'Unsupported format' });
    }

    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(exportContent);
  } catch (error) {
    console.error('Error exporting manuscript:', error);
    res.status(500).json({ error: 'Failed to export manuscript' });
  }
});

// Analytics endpoint
app.get('/api/analytics/:id', async (req, res) => {
  try {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    const content = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(content);

    const analytics = {
      totalChapters: data.chapters?.length || 0,
      totalWords: data.chapters?.reduce((sum, ch) => sum + (ch.wordCount || 0), 0) || 0,
      averageChapterLength: 0,
      tokenUsage: data.metadata?.tokenUsage || { input: 0, output: 0, total: 0, cost: 0 },
      estimatedReadingTime: 0,
      chapterBreakdown: []
    };

    if (analytics.totalChapters > 0) {
      analytics.averageChapterLength = Math.round(analytics.totalWords / analytics.totalChapters);
      analytics.estimatedReadingTime = Math.round(analytics.totalWords / 250); // 250 words per minute

      analytics.chapterBreakdown = data.chapters.map((ch, idx) => ({
        chapter: idx + 1,
        words: ch.wordCount || 0,
        readingTime: Math.round((ch.wordCount || 0) / 250)
      }));
    }

    res.json(analytics);
  } catch (error) {
    console.error('Error generating analytics:', error);
    res.status(404).json({ error: 'Manuscript not found' });
  }
});

// Helper functions for export formats
function generateTXT(data) {
  const title = data.metadata?.title || 'Untitled';
  const genre = data.metadata?.genre || 'Unknown';
  const chapters = data.chapters || [];

  let content = `${title.toUpperCase()}\n${'='.repeat(title.length)}\n\n`;
  content += `Genre: ${genre}\n`;
  content += `Chapters: ${chapters.length}\n`;
  content += `Word Count: ${data.metadata?.totalWords?.toLocaleString() || 0}\n`;
  content += `Generated: ${new Date(data.metadata?.generated || Date.now()).toLocaleDateString()}\n\n`;
  content += `${'='.repeat(60)}\n\n`;

  chapters.forEach((chapter) => {
    content += `\nCHAPTER ${chapter.number}\n${'-'.repeat(20)}\n\n`;
    content += chapter.text + '\n\n';
    content += `${'='.repeat(60)}\n`;
  });

  return content;
}

function generateMarkdown(data) {
  const title = data.metadata?.title || 'Untitled';
  const genre = data.metadata?.genre || 'Unknown';
  const chapters = data.chapters || [];

  let content = `# ${title}\n\n`;
  content += `**Genre:** ${genre}\n\n`;
  content += `**Chapters:** ${chapters.length}\n\n`;
  content += `**Word Count:** ${data.metadata?.totalWords?.toLocaleString() || 0}\n\n`;
  content += `**Generated:** ${new Date(data.metadata?.generated || Date.now()).toLocaleDateString()}\n\n`;
  content += `---\n\n`;

  chapters.forEach((chapter) => {
    content += `## Chapter ${chapter.number}\n\n`;
    content += chapter.text + '\n\n';
    content += `---\n\n`;
  });

  return content;
}

function generateHTML(data) {
  const title = data.metadata?.title || 'Untitled';
  const genre = data.metadata?.genre || 'Unknown';
  const chapters = data.chapters || [];
  const wordCount = data.metadata?.totalWords || 0;

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: Georgia, serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.8;
            background: #f9f9f9;
        }
        .book-header {
            text-align: center;
            margin-bottom: 60px;
            padding-bottom: 30px;
            border-bottom: 2px solid #333;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            color: #2c3e50;
        }
        .metadata {
            color: #7f8c8d;
            font-style: italic;
        }
        .chapter {
            background: white;
            padding: 40px;
            margin-bottom: 40px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        .chapter-number {
            font-size: 0.9em;
            color: #3498db;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        .chapter-content {
            text-align: justify;
            white-space: pre-wrap;
        }
        .page-break {
            page-break-after: always;
        }
        @media print {
            body {
                background: white;
            }
            .chapter {
                box-shadow: none;
                page-break-after: always;
            }
        }
    </style>
</head>
<body>
    <div class="book-header">
        <h1>${title}</h1>
        <div class="metadata">
            <p>Genre: ${genre}</p>
            <p>${chapters.length} Chapters • ${wordCount.toLocaleString()} Words</p>
            <p>Generated: ${new Date(data.metadata?.generated || Date.now()).toLocaleDateString()}</p>
        </div>
    </div>
`;

  chapters.forEach((chapter, index) => {
    html += `    <div class="chapter${index < chapters.length - 1 ? ' page-break' : ''}">
        <div class="chapter-number">Chapter ${chapter.number}</div>
        <div class="chapter-content">${chapter.text}</div>
    </div>\n`;
  });

  html += `</body>
</html>`;

  return html;
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(port, () => {
  console.log(`
╔════════════════════════════════════════════════╗
║   📚 AI Book Writer Backend Server            ║
║                                                ║
║   Status: Running                              ║
║   Port: ${port}                                   ║
║   URL: http://localhost:${port}                   ║
║   Health: http://localhost:${port}/health         ║
║                                                ║
║   Endpoints:                                   ║
║   - GET  /api/manuscripts                      ║
║   - GET  /api/manuscripts/:id                  ║
║   - POST /api/manuscripts                      ║
║   - PUT  /api/manuscripts/:id                  ║
║   - DELETE /api/manuscripts/:id                ║
║   - POST /api/export/:id/:format               ║
║   - GET  /api/analytics/:id                    ║
╚════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
