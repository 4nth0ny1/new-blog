"use client";

export const TableOfContents = ({ nodes }: any) => {
  if (!nodes?.length) {
    return null;
  }

  return (
    <div className={"toc"}>
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes: any) {
  return (
    <ul>
      {nodes.map((node: any) => (
        <li key={node.data.hProperties.id}>
          <a href={`#${node.data.hProperties.id}`}>{node.value}</a>
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}
