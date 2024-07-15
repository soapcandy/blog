import { useState } from "react";

function ContentAdd({ addValue }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = () => {
    const newContent = {
      id,
      author,
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    addValue(newContent);
    setTitle("");
    setAuthor("");
    setContent("");
    setId(id + 1);
  };

  return (
    <div>
      <div>
        <label>제목</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>작성자</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ContentAdd;
