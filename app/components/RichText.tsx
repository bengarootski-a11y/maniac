import { Fragment } from "react";
import type { ReactNode } from "react";

// Lightweight renderer for TinaCMS rich-text fields. Handles the node types
// the editor produces (paragraphs, headings, lists, links, line breaks and
// inline marks) without shipping the full TinaMarkdown runtime to the browser.
// Paragraphs use .body-copy; spacing between them is handled by .rich in CSS.

/* eslint-disable @typescript-eslint/no-explicit-any */
type Node = any;

function renderChildren(children: Node[] | undefined): ReactNode {
  if (!children) return null;
  return children.map((child, i) => <Fragment key={i}>{renderNode(child)}</Fragment>);
}

function renderText(node: Node): ReactNode {
  let el: ReactNode = node.text ?? "";
  if (node.italic) el = <em>{el}</em>;
  if (node.bold) el = <strong>{el}</strong>;
  if (node.code) el = <code>{el}</code>;
  return el;
}

function renderNode(node: Node): ReactNode {
  if (!node) return null;
  switch (node.type) {
    case "text":
      return renderText(node);
    case "p":
      return <p className="body-copy">{renderChildren(node.children)}</p>;
    case "h1":
      return <h1>{renderChildren(node.children)}</h1>;
    case "h2":
      return <h2>{renderChildren(node.children)}</h2>;
    case "h3":
      return <h3>{renderChildren(node.children)}</h3>;
    case "ul":
      return <ul>{renderChildren(node.children)}</ul>;
    case "ol":
      return <ol>{renderChildren(node.children)}</ol>;
    case "li":
      return <li>{renderChildren(node.children)}</li>;
    case "lic":
      return <>{renderChildren(node.children)}</>;
    case "a":
      return (
        <a href={node.url} target="_blank" rel="noopener noreferrer">
          {renderChildren(node.children)}
        </a>
      );
    case "br":
      return <br />;
    default:
      return renderChildren(node.children);
  }
}

export default function RichText({ content }: { content: unknown }) {
  const root = content as Node;
  return <div className="rich">{renderChildren(root?.children)}</div>;
}
