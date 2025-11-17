# Contributing to AI Book Writer

First off, thank you for considering contributing to AI Book Writer! It's people like you that make this tool better for everyone.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards
- **Be Respectful**: Treat everyone with respect
- **Be Constructive**: Provide helpful feedback
- **Be Patient**: Not everyone has the same level of experience
- **Be Inclusive**: Welcome diverse perspectives

## How Can I Contribute?

### Reporting Bugs
Before creating bug reports, please check existing issues to avoid duplicates.

When creating a bug report, include:
- **Clear title and description**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, Node version)

Example:
```markdown
**Bug**: Export to HTML fails with special characters

**Steps to Reproduce**:
1. Write a chapter with em-dashes (—)
2. Click "Export HTML"
3. Open exported file

**Expected**: Special characters render correctly
**Actual**: Special characters show as �

**Browser**: Chrome 120.0
**OS**: macOS 14.0
```

### Suggesting Features
We love feature suggestions! Please provide:
- **Clear use case**: Why is this feature needed?
- **Detailed description**: How should it work?
- **Alternatives considered**: What other approaches exist?
- **Mockups/Examples**: Visual aids are helpful!

### Code Contributions

#### Areas We Need Help
- 🎨 **UI/UX improvements**
- 📱 **Mobile responsiveness**
- 🧪 **Testing framework**
- 📚 **Documentation**
- 🌐 **Internationalization**
- ♿ **Accessibility features**
- 🔌 **Plugin system**
- 📊 **Advanced analytics**

#### Good First Issues
Look for issues tagged with `good-first-issue` or `help-wanted`

## Development Setup

### Prerequisites
```bash
# Node.js 14 or higher
node --version

# npm or yarn
npm --version
```

### Getting Started
```bash
# Clone the repository
git clone https://github.com/yourusername/ai-book-writer.git
cd ai-book-writer

# Install backend dependencies
cd backend
npm install

# Start backend server
npm start

# Open frontend
# Simply open book_writing_agent.html in your browser
```

### Project Structure
```
ai-book-writer/
├── book_writing_agent.html    # Main frontend application
├── backend/
│   ├── index.js               # Express server
│   ├── package.json
│   └── data/                  # Manuscript storage
├── README.md
├── USAGE_GUIDE.md
├── CONTRIBUTING.md
└── .gitignore
```

## Pull Request Process

### Before You Start
1. **Check existing PRs**: Make sure no one else is working on the same thing
2. **Create an issue**: Discuss your approach first for large changes
3. **Fork the repo**: Work in your own fork
4. **Create a branch**: Use descriptive branch names

### Branch Naming
```bash
# Features
git checkout -b feature/add-epub-export

# Bug fixes
git checkout -b fix/export-special-characters

# Documentation
git checkout -b docs/improve-api-documentation
```

### Making Changes
1. **Write clear code**: Follow our coding standards
2. **Comment complex logic**: Help future developers understand
3. **Test thoroughly**: Ensure nothing breaks
4. **Update documentation**: Keep docs in sync with code

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```bash
# Format
<type>(<scope>): <subject>

# Examples
feat(export): add EPUB export functionality
fix(api): handle rate limiting errors
docs(readme): update installation instructions
style(ui): improve mobile responsiveness
refactor(backend): simplify manuscript storage logic
test(export): add unit tests for export functions
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style/formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Submitting a PR
1. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

2. **Create Pull Request** on GitHub with:
   - Clear title following commit message format
   - Detailed description of changes
   - Link to related issues
   - Screenshots/GIFs for UI changes
   - Testing steps

3. **PR Template**
   ```markdown
   ## Description
   Brief description of the changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Related Issues
   Fixes #123

   ## Testing
   - [ ] Tested locally
   - [ ] Added/updated tests
   - [ ] All tests pass

   ## Screenshots
   (if applicable)

   ## Checklist
   - [ ] Code follows project style
   - [ ] Self-review completed
   - [ ] Comments added for complex code
   - [ ] Documentation updated
   - [ ] No new warnings
   ```

### Review Process
1. **Maintainer review**: We'll review your PR within a few days
2. **Feedback**: We may request changes
3. **Updates**: Push updates to your branch
4. **Approval**: Once approved, we'll merge!
5. **Credit**: You'll be added to contributors list

## Coding Standards

### JavaScript Style
```javascript
// Use const/let, not var
const apiKey = 'sk-...';
let chapterCount = 0;

// Use arrow functions
const calculateCost = (tokens) => {
    return (tokens / 1000000) * costPerMillion;
};

// Use template literals
const message = `Chapter ${chapterNumber} completed!`;

// Use async/await over callbacks
async function writeChapter(chapterNum) {
    try {
        const result = await callClaudeAPI(prompt);
        return result;
    } catch (error) {
        log(`Error: ${error.message}`);
    }
}

// Add meaningful comments
// Calculate estimated reading time based on 250 words per minute
const readingTime = Math.round(totalWords / 250);
```

### HTML/CSS
```html
<!-- Use semantic HTML -->
<section class="manuscript-section">
    <h2>Chapter 1</h2>
    <article class="chapter-content">...</article>
</section>

<!-- Accessible forms -->
<label for="bookTitle">Book Title:</label>
<input type="text" id="bookTitle" aria-label="Enter your book title">
```

```css
/* Use meaningful class names */
.chapter-navigator { }
.export-button { }

/* Mobile-first responsive design */
.container {
    width: 100%;
    max-width: 1400px;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
```

### Backend Best Practices
```javascript
// Use descriptive route names
app.get('/api/manuscripts/:id', getManuscript);
app.post('/api/manuscripts', saveManuscript);

// Error handling
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
});

// Input validation
if (!req.body.id || !req.body.data) {
    return res.status(400).json({ error: 'Missing required fields' });
}

// Async/await with try-catch
async function saveManuscript(req, res) {
    try {
        const result = await storage.save(req.body);
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
```

## Testing Guidelines

### Manual Testing Checklist
Before submitting a PR, test:

**Frontend**:
- [ ] API connection works
- [ ] All agent buttons function correctly
- [ ] Chapter generation completes
- [ ] Export works for all formats
- [ ] Analytics display correctly
- [ ] State persistence works
- [ ] Mobile view works
- [ ] No console errors

**Backend**:
- [ ] Server starts without errors
- [ ] All endpoints respond correctly
- [ ] Data persists correctly
- [ ] Error handling works
- [ ] CORS is configured properly

### Future: Automated Tests
We plan to add:
- Unit tests for utility functions
- Integration tests for API endpoints
- E2E tests for user workflows

## Documentation

### Code Comments
```javascript
/**
 * Generates a complete manuscript chapter by chapter
 * @param {number} totalChapters - Number of chapters to generate
 * @returns {Promise<Array>} Array of chapter objects
 */
async function writeFullManuscript(totalChapters) {
    // Implementation
}
```

### README Updates
If you add features, update:
- Feature list
- Usage instructions
- Configuration options
- Examples

### Changelog
We maintain a changelog (coming soon). Add your changes under "Unreleased"

## Recognition

### Contributors
All contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Acknowledged in the README

### Significant Contributions
Major features or improvements may warrant:
- Blog post feature
- Social media shoutout
- Maintainer status consideration

## Questions?

- **General questions**: Open a GitHub Discussion
- **Bug reports**: Create an Issue
- **Security concerns**: Email security@example.com (use responsibly)
- **Feature ideas**: Start a Discussion first

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for making AI Book Writer better! 🎉📚
