import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentContext } from "../contexts/ContentContext";
import { GramContext } from "../contexts/GramContext";
import classes from "../styles/ContentAdd.module.css";

function ContentAdd() {
  const navigate = useNavigate();
  const location = useLocation();

  const isGram = location.state.pathname.includes("/gram");
  const { addValue, updateValue } = isGram
    ? useContext(GramContext)
    : useContext(ContentContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  const item = location.state.state;

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
    <div className={classes.addContainer}>
      <div>
        <label>작성자</label>
        <input
          className={classes.input}
          value={author}
          maxLength={15}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>제목</label>
        <input
          className={classes.input}
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
      <div className={classes.contentAddButton}>
        <button onClick={() => navigate(-1)}>취소</button>
        <button onClick={handleSubmit}>{isEdit ? "변경" : "추가"}</button>
      </div>
    </div>
  );
}

export default ContentAdd;
