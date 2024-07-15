import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContentAdd({ addValue }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newContent = {
      id: Date.now(),
      author,
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    addValue(newContent);
    setTitle("");
    setAuthor("");
    setContent("");
    navigate("/");
  };

  return (
    <div>
      <div>
        <label>작성자</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
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
