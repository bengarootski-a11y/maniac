import { Fragment } from "react";
import type { ReactNode } from "react";

// Renders plain-text content (from Tina textarea fields) into body copy.
// Paragraphs are separated by a blank line. Inline markup supported:
//   *italics*  **bold**  [label](https://url)
// Output matches the previous design (italic show titles, etc.). Paragraph
// spacing is handled by .rich in CSS.

const INLINE = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\))/g;

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2]) {
      nodes.push(<strong key={key++}>{m[2]}</strong>);
    } else if (m[3]) {
      nodes.push(<em key={key++}>{m[3]}</em>);
    } else if (m[4]) {
      nodes.push(
        <a key={key++} href={m[5]} target="_blank" rel="noopener noreferrer">
          {m[4]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export default function RichText({ content }: { content?: string }) {
  const paragraphs = (content || "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="rich">
      {paragraphs.map((p, i) => (
        <p key={i} className="body-copy">
          <Fragment>{renderInline(p)}</Fragment>
        </p>
      ))}
    </div>
  );
}
