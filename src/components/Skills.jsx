import './Skills.css'

const skills = [
  {
    category: 'AI Platforms & Strategy',
    items: [
      'Anthropic Claude API',
      'ChatGPT / OpenAI',
      'Google Gemini',
      'ServiceNow Now Assist',
      'AI-ready documentation architecture',
      'RAG-optimized structured content',
      'Content governance for LLM consumption',
    ],
  },
  {
    category: 'Prompt Engineering',
    items: [
      'Structured system prompt design',
      'Multi-turn conversation design',
      'Task decomposition',
      'Chain-of-thought prompting',
      'Output evaluation & rubric design',
      'CONVERSE Framework (AI-readiness)',
    ],
  },
  {
    category: 'Authoring & Documentation',
    items: [
      'DITA & OxygenXML',
      'MadCap Flare',
      'Markdown / MDX',
      'Confluence',
      'Swagger / OpenAPI',
      'Figma',
      'Information Architecture',
    ],
  },
  {
    category: 'Dev & Tooling',
    items: [
      'React artifact development',
      'MCP tool integrations',
      'Agentic workflow design',
      'Git & GitHub',
      'VS Code Docs-as-Code',
      'Adobe Analytics',
      'Agile sprint tooling',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <hr className="divider" />
      <div className="container" style={{ paddingTop: 'var(--section-gap)' }}>
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I bring to the table</h2>
        <div className="skills-grid">
          {skills.map(({ category, items }) => (
            <div key={category} className="skill-card">
              <h3>{category}</h3>
              <ul>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
