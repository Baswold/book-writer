# 📚 AI Book Writing Agent System

An advanced, web-based framework designed to assist authors in writing high-quality books using a coordinated team of AI agents powered by the Claude API. This tool streamlines the creative process from initial concept to a polished first draft, providing robust controls for quality, style, and cost management.

## ✨ Key Features

*   **🤖 Multi-Agent Writing Pipeline:** A sophisticated, multi-step process that mimics a professional writing team:
    *   **📋 Planning Agent:** Takes your core concept and generates a comprehensive outline, including plot structure, character arcs, and thematic elements.
    *   **🎬 Storyboard Agent:** Converts the outline into a detailed, scene-by-scene storyboard, focusing on narrative flow, pacing, and dramatic tension.
    *   **📑 Chapter Detailing Agent:** Enriches the storyboard with specific, actionable instructions for each chapter, covering tone, dialogue style, and descriptive needs.
    *   **✍️ Writing Agent:** Executes the detailed instructions to write the actual manuscript, chapter by chapter, ensuring stylistic and narrative consistency.

*   **📖 Stylistic Emulation:** Upload reference texts (`.pdf`, `.txt`, `.epub`) to guide the AI's writing style. The system analyzes the provided works to capture the desired tone, voice, and prose quality.

*   **🔍 Deep Context Integration:** Provide extensive research materials, world-building documents, and character sheets to ensure the AI has a deep understanding of your story's universe.

*   **⚡ Quality & Cost Control:**
    *   **Quality Benchmarking:** Before committing to a full book, the system generates a sample chapter and evaluates it against user-defined quality metrics (e.g., plot coherence, prose quality). This allows you to "test drive" the output and prevent costly revisions.
    *   **💰 Price Estimator:** Get a transparent, upfront cost estimate based on your project's target length and the selected AI model. This helps you manage your budget effectively.

*   ** UI:** A beautiful, intuitive, and responsive user interface that makes managing the entire book creation process simple and enjoyable.

## 🚀 Getting Started

To run the application, simply open the `book_writing_agent.html` file in your preferred web browser.

### Prerequisites

*   A modern web browser (Chrome, Firefox, Safari, Edge).
*   A valid API key for the Anthropic Claude API.

### Step-by-Step Usage

1.  **API Configuration:**
    *   Enter your Claude API Key in the designated field.
    *   Select your desired Claude model (`Sonnet` for a balance of cost and quality, `Opus` for the highest quality).
    *   Click `Test Connection` to ensure your API key is working correctly.

2.  **Define Your Vision:**
    *   Fill out the "Book Vision" section with your book's title, genre, target length, and a detailed description of the concept, themes, and characters.

3.  **Provide Context & Style:**
    *   In the "Style References" section, upload one or more books that exemplify the writing style you want to achieve.
    *   In the "Context & Research" section, upload any relevant world-building documents, character sheets, or research notes.

4.  **Estimate the Cost:**
    *   Click the `Calculate Cost` button in the "Price Estimator" section to get a budget forecast for your project.

5.  **Run the Pipeline:**
    *   You can run each agent individually for granular control or execute the entire sequence at once.
    *   Click the **🚀 CREATE MY BOOK! 🚀** button to initiate the full, end-to-end writing process.

6.  **Monitor Progress:**
    *   The "Progress Dashboard" will show the real-time status of each agent and the overall progress.
    *   The "Output Console" provides detailed logs of the system's operations.

7.  **Review & Benchmark:**
    *   Once the first chapter is written, use the "Quality Benchmarking" tool to run a quality test. The results will be displayed, helping you decide whether to proceed with the rest of the book.

## 🛠️ Technology Stack

*   **Frontend:** HTML5, CSS3, JavaScript (ES6+)
*   **AI Engine:** Anthropic Claude API
*   **Core Logic:** Vanilla JavaScript for all client-side operations, including API calls and agent management.

This project is intentionally self-contained in a single HTML file for simplicity and portability, requiring no complex setup, build steps, or backend server.

## ✅ Recently Completed Features

*   [x] **Full Manuscript Generation:** Complete chapter-by-chapter manuscript generation with automatic progress tracking and resume capability
*   [x] **State Persistence:** Auto-save functionality using `localStorage` - close your browser and resume later without losing progress
*   [x] **Export Options:** Export your manuscript in TXT, Markdown, HTML, and JSON formats with beautiful formatting
*   [x] **Advanced Analytics:** Real-time analytics dashboard with word counts, chapter statistics, and visual charts
*   [x] **Chapter Navigator:** Quick navigation through all written chapters with word count display
*   [x] **Token Tracking:** Real-time token usage and cost tracking for budget management
*   [x] **Retry Logic:** Automatic retry with exponential backoff for API failures - more reliable manuscript generation
*   [x] **Manuscript Viewer:** Open your manuscript in a new window with beautiful typography
*   [x] **Backend API:** Full-featured Express backend with manuscript storage, retrieval, and export endpoints
*   [x] **Writing Reports:** Generate detailed reports about your manuscript including statistics and cost analysis
*   [x] **Style Analysis:** Analyze your writing style with sentence and paragraph metrics

## 🚀 Advanced Features

### 📊 Analytics & Insights
- **Real-time Dashboard:** Track total words, average chapter length, reading time, and completion percentage
- **Chapter Length Charts:** Visual representation of word count distribution across chapters
- **Writing Reports:** Comprehensive reports including chapter statistics, cost analysis, and progress tracking
- **Style Analysis:** Automated analysis of sentence structure, paragraph length, and readability metrics

### 💾 Data Management
- **Auto-Save:** Your progress is automatically saved to localStorage after each chapter
- **Resume Capability:** Continue writing from where you left off, even after closing your browser
- **Export Formats:**
  - **TXT:** Plain text format with chapter markers
  - **Markdown:** Formatted markdown with proper headings
  - **HTML:** Beautiful, print-ready HTML with professional styling
  - **JSON:** Complete project data including metadata and analytics

### 🔄 Reliability Features
- **API Retry Logic:** Automatic retries with exponential backoff (3 attempts with 2s, 4s, 8s delays)
- **Error Handling:** Comprehensive error handling throughout the application
- **Progress Recovery:** If generation fails, your progress is saved and you can resume

### 🖥️ Backend Server
A robust Express.js backend server with the following endpoints:
- `GET /health` - Health check endpoint
- `GET /api/manuscripts` - List all saved manuscripts
- `GET /api/manuscripts/:id` - Get specific manuscript
- `POST /api/manuscripts` - Save new manuscript
- `PUT /api/manuscripts/:id` - Update manuscript
- `DELETE /api/manuscripts/:id` - Delete manuscript
- `POST /api/export/:id/:format` - Export manuscript in specified format
- `GET /api/analytics/:id` - Get detailed analytics for a manuscript

## 🎯 Future Roadmap

*   [ ] **Interactive Rich Text Editor:** Edit and revise chapters directly in the browser
*   [ ] **Multiple AI Models:** Support for different Claude models with automatic fallback
*   [ ] **Collaborative Writing:** Multi-user support for collaborative book writing
*   [ ] **Version Control:** Track changes and revisions with git-like versioning
*   [ ] **EPUB Export:** Professional e-book format export
*   [ ] **PDF Export:** Print-ready PDF generation with custom formatting

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements, please open an issue or submit a pull request.

## 📄 License

This project is open-source and available to everyone.