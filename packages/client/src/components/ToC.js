export const ToC = ({ list }) => () => (
  <div className="toc">
    <ol>
      {list.map(({ index, title }) => (
        <li key={title}>
          <a href={`#slide-${index}`} title={title}>
            <span className="chapter">{title}</span>
          </a>
        </li>
      ))}
    </ol>
  </div>
);
