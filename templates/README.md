# 📚 Book Templates

This directory contains pre-made templates to help you get started with your book writing journey. Each template provides a comprehensive structure including character archetypes, plot beats, worldbuilding elements, and writing style guidelines.

## Available Templates

### 🐉 Epic Fantasy Adventure
**File**: `fantasy-epic.json`
**Style**: Brandon Sanderson, Patrick Rothfuss
**Length**: Epic Novel (35 chapters, 100k+ words)
**Cost**: $15-25 (Sonnet), $75-125 (Opus)

Perfect for:
- Hard magic systems
- Multi-POV epic narratives
- Complex worldbuilding
- Political intrigue
- Hero's journey with twists

**Key Features**:
- Detailed magic system framework
- Character archetype templates
- World building prompts
- Three-act structure outline

---

### 🚀 Science Fiction Thriller
**File**: `scifi-thriller.json`
**Style**: Blake Crouch, Andy Weir
**Length**: Novel (25 chapters, 50-100k words)
**Cost**: $8-12 (Sonnet), $40-60 (Opus)

Perfect for:
- Hard sci-fi with real science
- Fast-paced thrillers
- Ethical dilemmas
- Tech-based mysteries
- Near-future settings

**Key Features**:
- Grounded science frameworks
- Technology worldbuilding
- Thriller pacing structure
- Twist planning guides

---

### 🔍 Psychological Mystery Thriller
**File**: `mystery-thriller.json`
**Style**: Gillian Flynn, Paula Hawkins
**Length**: Novel (25 chapters, 50-100k words)
**Cost**: $8-12 (Sonnet), $40-60 (Opus)

Perfect for:
- Unreliable narrators
- Dual timelines
- Small-town secrets
- Psychological depth
- Twist endings

**Key Features**:
- Unreliable narrator techniques
- Dual timeline structure
- Clue planting system
- Character secret templates

---

## How to Use Templates

### Method 1: Copy & Paste (Easiest)

1. **Open the template JSON file**
   ```bash
   cat templates/fantasy-epic.json
   ```

2. **Copy the relevant sections** into the AI Book Writer interface:
   - `bookVision.concept` → Book Concept & Vision
   - `bookVision.worldContext` → World & Character Context
   - `bookVision.writingStyle` → Writing Style Notes
   - `bookVision.genre` → Genre dropdown
   - `bookVision.targetLength` → Target Length dropdown

3. **Customize** the template:
   - Replace placeholders like `[Your World Name]`
   - Add your unique elements
   - Adjust character names and details
   - Modify plot points to fit your story

4. **Generate** your book!

### Method 2: Import (Coming Soon)
Future versions will support direct template import via the UI.

---

## Template Anatomy

Each template includes:

### Metadata
```json
{
  "templateName": "Epic Fantasy Adventure",
  "description": "Brief description",
  "genre": "fantasy",
  "targetLength": "epic",
  "estimatedChapters": 35
}
```

### Book Vision
- **Title**: Suggested title with placeholders
- **Genre**: Genre classification
- **Target Length**: Novella, Novel, or Epic
- **Concept**: Detailed plot summary and key elements
- **World Context**: Worldbuilding, magic systems, politics, history, characters
- **Writing Style**: Prose style, pacing, dialogue, tone guidelines

### Hints
Practical tips for making the template work best with AI generation.

### Estimated Cost
Approximate cost ranges for Sonnet and Opus models.

---

## Customization Tips

### Make It Your Own

1. **Change Names**: Replace all placeholder names with your unique choices
2. **Adjust Setting**: Modify the world to fit your vision
3. **Personalize Characters**: Give characters your own backgrounds and motivations
4. **Add Unique Elements**: Insert your creative ideas into the framework
5. **Modify Pacing**: Adjust chapter count and structure as needed

### Common Placeholders to Replace

- `[Your World Name]`
- `[Your Concept]`
- `[Adjective]`
- `[Noun]`
- Character names (all are suggestions)
- Location names (feel free to change)

### Blending Templates

You can mix elements from different templates:

**Example**: Sci-Fi Mystery
- Use sci-fi worldbuilding from `scifi-thriller.json`
- Apply mystery structure from `mystery-thriller.json`
- Adjust pacing and tone accordingly

---

## Quality Tips

### For Best Results

1. **Be Specific**: The more detail you provide, the better the output
2. **Maintain Consistency**: Keep character names and details consistent
3. **Set Clear Rules**: Define your magic/tech systems clearly
4. **Plan Your Twists**: Know your major revelations ahead of time
5. **Review First Chapter**: Use quality benchmark before full generation

### What to Add

Even with templates, add these personal touches:

- **Unique Hook**: What makes YOUR story different?
- **Thematic Depth**: What is your book really about?
- **Emotional Core**: What emotional journey are characters on?
- **Voice**: What's the specific narrative voice?
- **Tone**: Dark? Hopeful? Cynical? Sincere?

---

## Cost Optimization

### Budget-Conscious Approach

1. **Start with Sonnet**: Use Claude Sonnet 4 for 80% less cost
2. **Test First**: Generate only Chapter 1, review, then commit
3. **Optimize Context**: Don't include unnecessary world details
4. **Use Templates**: Pre-structured prompts use tokens efficiently

### Cost Comparison

| Model | Novella | Novel | Epic |
|-------|---------|-------|------|
| **Sonnet 4** | $3-6 | $8-12 | $15-25 |
| **Opus 4** | $15-30 | $40-60 | $75-125 |

*Estimates vary based on prompt complexity and context length*

---

## Template Creation

### Want to Create Your Own Template?

Share your templates with the community!

**Required Elements**:
- Complete metadata section
- Detailed book vision
- World context and characters
- Writing style guidelines
- Practical hints
- Cost estimates

**Template Guidelines**:
- Follow the JSON structure
- Provide specific, actionable details
- Include diverse, well-rounded characters
- Offer flexibility for customization
- Test with AI Book Writer first

**Submit**: Create a pull request to add your template!

---

## Template Roadmap

### Coming Soon

- 📖 **Literary Fiction**
- 💕 **Contemporary Romance**
- 🏛️ **Historical Fiction**
- 😱 **Horror/Gothic**
- 🌟 **Young Adult**
- 🦾 **Cyberpunk**
- 🌊 **Magical Realism**
- 🕵️ **Cozy Mystery**

### Want a Specific Template?

Request new templates by:
1. Opening a GitHub issue
2. Describing the genre/style you want
3. Listing example authors
4. Explaining what makes this genre unique

---

## Examples & Inspiration

### Books Written with These Templates

*(Coming soon - community showcases)*

### Template Variations

See `examples/` directory (coming soon) for:
- Character variations
- Plot alternatives
- Different subgenres
- Tone modifications

---

## Support & Resources

### Questions?
- Check the main [USAGE_GUIDE.md](../USAGE_GUIDE.md)
- Read the [README.md](../README.md)
- Open a GitHub issue

### Share Your Success!
- Tag us with #AIBookWriter
- Share your published works
- Contribute improvements to templates

---

## License

Templates are released under MIT License. Use freely for your books!

**Note**: AI-generated content rights belong to you. Check Anthropic's terms for Claude API usage.

---

Happy writing! May these templates help you create something amazing. 📚✨
