import { useState } from "react";

function ContentAdd({ setContentValue }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = () => {
    const newContent = {
      id: id,
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    setContentValue(newContent);
    setTitle("");
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
