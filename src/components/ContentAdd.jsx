import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentContext } from "../contexts/ContentContext";
import classes from "../styles/ContentAdd.module.css";
import { GramContext } from "../contexts/GramContext";

function ContentAdd() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.state.includes("gram")) {
    var context = useContext(GramContext);
  } else {
    var context = useContext(ContentContext);
  }
  const { addValue, updateValue } = context;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const item = location.state;

  useEffect(() => {
    if (item == "gram" || item == "recipe") {
      setIsEdit(false);
      setId(null);
    } else if (item) {
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
    navigate(-1);
  };

  return (
    <div className={classes.AddContainer}>
      <div>
        <label>작성자</label>
        <input
          value={author}
          maxLength={15}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>제목</label>
        <input
          value={title}
          maxLength={15}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>내용</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className={classes.ContentAddButton}>
        <button onClick={handleSubmit}>{isEdit ? "변경" : "추가"}</button>
        <button onClick={() => navigate(-1)}>취소</button>
      </div>
    </div>
  );
}

export default ContentAdd;
