# 📖 AI Book Writer - Complete Usage Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [Setting Up](#setting-up)
3. [Writing Your First Book](#writing-your-first-book)
4. [Advanced Features](#advanced-features)
5. [Backend Server](#backend-server)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)
8. [FAQ](#faq)

## Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A Claude API key from Anthropic (get one at https://console.anthropic.com/)
- Optional: Node.js 14+ for running the backend server

### 3-Minute Setup
1. Open `book_writing_agent.html` in your web browser
2. Enter your Claude API key
3. Fill in your book details (title, genre, concept)
4. Click "🚀 CREATE MY BOOK! 🚀"
5. Wait for the magic to happen!

## Setting Up

### Getting Your Claude API Key
1. Visit https://console.anthropic.com/
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy and paste it into the application

### Backend Server (Optional)
The backend server provides additional features like manuscript storage and server-side exports.

```bash
cd backend
npm install
npm start
```

The server will start on http://localhost:3001

## Writing Your First Book

### Step 1: Configure API Settings
- **API Key**: Your Anthropic Claude API key
- **Model**: Choose between:
  - `Claude Sonnet 4`: Balanced performance and cost (recommended)
  - `Claude Opus 4`: Highest quality, higher cost

### Step 2: Define Your Book Vision
- **Title**: Give your book a compelling title
- **Genre**: Select from fantasy, sci-fi, mystery, romance, thriller, literary, or historical
- **Target Length**:
  - Novella: 20-50k words (~15 chapters)
  - Novel: 50-100k words (~25 chapters)
  - Epic Novel: 100k+ words (~35 chapters)
- **Concept**: Write a detailed description including:
  - Main plot points
  - Character descriptions
  - Setting and world details
  - Themes and tone
  - Any specific story beats you want

### Step 3: Add References (Optional)
- **Style References**: Upload books that match your desired writing style
- **Research Materials**: Upload world-building docs, character sheets, historical research
- **Writing Style Notes**: Describe the tone, pacing, dialogue style you want

### Step 4: Generate Your Book

#### Option A: Full Pipeline (Recommended for first-time users)
1. Click "🚀 Run Full Pipeline"
2. The system will:
   - Generate a detailed outline (Planning Agent)
   - Create a scene-by-scene storyboard (Storyboard Agent)
   - Develop chapter-specific instructions (Chapter Agent)
   - Write the first chapter (Writing Agent)
3. Review the first chapter
4. Run quality benchmark
5. If satisfied, click "📚 Write FULL Book"

#### Option B: Step-by-Step
1. Click each agent button in sequence:
   - "1. 📋 Planning Agent"
   - "2. 🎬 Storyboard Agent"
   - "3. 📑 Chapter Detailing"
   - "4. ✍️ Write First Chapter"
2. Review each output before proceeding
3. Click "📚 Write FULL Book" when ready

### Step 5: Monitor Progress
- Watch the progress bar fill up
- See token usage and cost in real-time
- Track chapter completion in the Chapter Navigator
- View analytics as chapters are completed

### Step 6: Export Your Manuscript
Once writing is complete, export in your preferred format:
- **TXT**: Plain text with chapter markers
- **Markdown**: Formatted with headers and structure
- **HTML**: Beautiful, print-ready format
- **JSON**: Complete project data for backup

## Advanced Features

### State Persistence & Resume
Your progress is automatically saved after each chapter. You can:
- Close your browser and resume later
- Refresh the page without losing work
- Continue from exactly where you left off

To manually clear all data:
1. Click "🗑️ Clear All Data"
2. Confirm the action (this cannot be undone!)

### Quality Benchmarking
Test the quality before committing to a full book:
1. After the first chapter is written, click "🧪 Run Quality Test"
2. Review the scores:
   - Plot Coherence
   - Character Consistency
   - Prose Quality
   - Pacing
   - Overall Score
3. Adjust your settings if needed
4. Re-run the pipeline with improvements

### Analytics Dashboard
Real-time insights into your manuscript:
- **Total Words**: Complete word count across all chapters
- **Average Chapter Length**: Mean words per chapter
- **Reading Time**: Estimated minutes to read (250 words/min)
- **Completion**: Percentage of book completed

### Writing Reports
Generate comprehensive reports:
1. Click "📊 Generate Report"
2. View detailed statistics:
   - Chapter breakdown
   - Cost analysis
   - Token usage
   - Reading time estimates

### Style Analysis
Understand your writing metrics:
1. Click "🔍 Analyze Style"
2. See analysis of:
   - Sentence length
   - Paragraph structure
   - Readability metrics

### Manuscript Viewer
Preview your book in a clean, distraction-free view:
1. Click "👁️ View Manuscript"
2. A new window opens with your book
3. Beautiful typography optimized for reading
4. Print directly from this view if desired

### Continue Writing
If generation is interrupted:
1. Click "▶️ Continue Writing"
2. The system resumes from the last completed chapter
3. All previous work is preserved

## Backend Server

### Starting the Server
```bash
cd backend
npm start
```

### Available Endpoints

#### GET /health
Check server status
```bash
curl http://localhost:3001/health
```

#### GET /api/manuscripts
List all saved manuscripts
```bash
curl http://localhost:3001/api/manuscripts
```

#### POST /api/manuscripts
Save a manuscript
```bash
curl -X POST http://localhost:3001/api/manuscripts \
  -H "Content-Type: application/json" \
  -d '{"id": "my-book-123", "data": {...}}'
```

#### GET /api/analytics/:id
Get analytics for a manuscript
```bash
curl http://localhost:3001/api/analytics/my-book-123
```

## Troubleshooting

### API Connection Issues
**Problem**: "API Connection failed"
**Solutions**:
- Verify your API key is correct
- Check your internet connection
- Ensure you have API credits available
- Try a different Claude model

### Generation Stopped Mid-Book
**Problem**: Writing stopped before completion
**Solutions**:
- Click "▶️ Continue Writing" to resume
- Check console for error messages
- Verify API credits haven't been exhausted
- Your progress is auto-saved - nothing is lost!

### High Costs
**Problem**: Token usage is higher than expected
**Solutions**:
- Use Claude Sonnet instead of Opus
- Reduce context length (shorter book concept)
- Remove unnecessary style references
- Use "Calculate Cost" before starting

### Poor Quality Output
**Problem**: Writing doesn't match expectations
**Solutions**:
- Provide more detailed book concept
- Add style references from books you like
- Be specific about writing style notes
- Use higher quality model (Opus)
- Adjust quality threshold and re-run benchmark

### Browser Crashes or Freezes
**Problem**: Browser becomes unresponsive
**Solutions**:
- Your work is auto-saved to localStorage
- Reload the page to recover
- Consider writing in smaller batches
- Close other browser tabs to free memory

## Best Practices

### 📝 Writing Effective Prompts

#### Book Concept
```
Good: "A cyberpunk thriller set in 2089 Tokyo where a rogue AI detective
must solve a series of murders that blur the line between virtual and
physical reality. Themes of identity, consciousness, and what it means
to be human in a digital age. Fast-paced with philosophical undertones."

Bad: "A story about a detective and AI"
```

#### Writing Style
```
Good: "Concise, punchy prose similar to William Gibson. Short, impactful
sentences. Heavy on atmosphere and sensory details. Sparse but meaningful
dialogue. Present tense, third person limited POV."

Bad: "Good writing"
```

### 💰 Managing Costs

1. **Start Small**: Write just the first chapter, review it, then commit to the full book
2. **Use Sonnet**: Claude Sonnet 4 offers excellent quality at 1/5 the cost of Opus
3. **Optimize Context**: Don't upload unnecessary reference materials
4. **Calculate First**: Always use the cost estimator before starting
5. **Monitor Usage**: Watch the token counter in real-time

### ⚡ Optimizing Quality

1. **Be Specific**: Detailed prompts yield better results
2. **Use Examples**: Upload style references from books you admire
3. **Iterate**: Review the first chapter and adjust if needed
4. **Benchmark**: Use quality testing before full generation
5. **Provide Context**: Rich world-building leads to consistent output

### 🔒 Security Best Practices

1. **Never Share API Keys**: Keep your Claude API key private
2. **Don't Commit Keys**: Ensure .gitignore excludes sensitive files
3. **Use Environment Variables**: For production deployments
4. **Rotate Keys**: Periodically regenerate API keys
5. **Monitor Usage**: Check Anthropic console for unexpected activity

## FAQ

### Q: How long does it take to write a full novel?
**A**: Depends on the model and length:
- Novella (15 chapters): 30-45 minutes with Sonnet
- Novel (25 chapters): 1-1.5 hours with Sonnet
- Epic (35 chapters): 1.5-2.5 hours with Sonnet

### Q: Can I edit the generated text?
**A**: Currently, you can:
- Export and edit in your preferred text editor
- Re-run specific chapters (coming soon)
- View and copy text from the manuscript viewer

### Q: What if I run out of API credits mid-generation?
**A**: No problem! Your progress is auto-saved. Add more credits and click "▶️ Continue Writing"

### Q: Can I use this for commercial purposes?
**A**: Yes! Check Anthropic's terms of service for Claude API usage rights.

### Q: How much does it cost to generate a book?
**A**: Rough estimates with Claude Sonnet 4:
- Novella: $2-5
- Novel: $5-12
- Epic Novel: $12-25

Use the built-in cost calculator for accurate estimates.

### Q: Can I change the writing style mid-book?
**A**: Not currently. For best consistency, define your style upfront.

### Q: Is my data stored anywhere?
**A**:
- Frontend: Only in your browser's localStorage
- Backend: Only if you explicitly save to the backend server
- Anthropic: They may retain data per their privacy policy

### Q: Can I write non-fiction?
**A**: Absolutely! Just adjust your genre and concept accordingly.

### Q: What's the maximum book length?
**A**: Technically unlimited, but we recommend:
- Keep under 50 chapters for consistency
- Consider splitting very long works into volumes

### Q: Can multiple people collaborate?
**A**: Not yet, but collaborative features are on the roadmap!

## Support & Community

### Getting Help
- Check this guide first
- Review error messages in the console
- Search existing GitHub issues
- Create a new issue with detailed information

### Contributing
We welcome contributions! See CONTRIBUTING.md for guidelines.

### Updates
Watch the repository for new features and improvements.

---

Happy writing! 📚✨
