
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ markdownContent }:{markdownContent:string}) => (
  <div>
    <ReactMarkdown>{markdownContent}</ReactMarkdown>
  </div>
);

export default MarkdownRenderer;