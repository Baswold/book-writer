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

##  roadmap

*   [ ] **Full Manuscript Generation:** Implement the logic to loop through all chapters and generate a complete book.
*   [ ] **Interactive Editor:** Add a rich text editor to allow for real-time editing and feedback on the generated text.
*   [ ] **Export Options:** Allow users to export the final manuscript in various formats (e.g., `.docx`, `.epub`, `.pdf`).
*   [ ] **State Persistence:** Use `localStorage` to save project state, so you can close the browser and resume your work later.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements, please open an issue or submit a pull request.

## 📄 License

This project is open-source and available to everyone.