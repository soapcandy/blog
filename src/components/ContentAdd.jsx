import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ContentAdd({ addValue, updateValue }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setAuthor(item.author);
      setContent(item.content);
      setIsEdit(true);
      setId(item.id);
    } else {
      setIsEdit(false);
      setId(null);
    }
  }, [item]);

  const handleSubmit = () => {
    const newContent = {
      id: id || Date.now(),
      author,
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };

    if (isEdit) {
      updateValue(newContent);
    } else {
      addValue(newContent);
    }

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
      <button onClick={handleSubmit}>{isEdit ? "Update" : "Add"}</button>
    </div>
  );
}

export default ContentAdd;
