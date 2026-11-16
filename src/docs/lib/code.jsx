/**
 * Just enough syntax colour for a docs page: quoted strings and `//` comments.
 * No highlighter dependency, no tokenizer to keep in step with a grammar.
 */
function highlight(line) {
  return line.split(/('(?:[^'\\]|\\.)*'|`[^`]*`|\/\/.*$)/g).map((part, index) => {
    if (!part) return null
    if (part.startsWith("'") || part.startsWith('`')) {
      return (
        <span key={index} className="text-accent">
          {part}
        </span>
      )
    }
    if (part.startsWith('//')) {
      return (
        <span key={index} className="text-paper/30">
          {part}
        </span>
      )
    }
    return <span key={index}>{part}</span>
  })
}

export function CodeText({ code }) {
  return (
    <>
      {code.split('\n').map((line, index) => (
        <span key={index} className="block whitespace-pre">
          {line ? highlight(line) : ' '}
        </span>
      ))}
    </>
  )
}
