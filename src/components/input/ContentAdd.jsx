import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentContext } from "../../contexts/ContentContext";
import { GramContext } from "../../contexts/GramContext";
import classes from "../../styles/ContentAdd.module.css";
import InputField from "./InputField";

function ContentAdd() {
  const navigate = useNavigate();
  const location = useLocation();

  const isGram = location.state.pathname.includes("/gram");
  const { addValue, updateValue } = isGram
    ? useContext(GramContext)
    : useContext(ContentContext);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    id: null,
  });
  const [isEdit, setIsEdit] = useState(false);
  const item = location.state.state;

  useEffect(() => {
    if (item && (item === "gram" || item === "recipe")) {
      resetForm();
    } else if (item) {
      setFormData({
        title: item.title,
        author: item.author,
        content: item.content,
        id: item.id,
      });
      setIsEdit(true);
    } else {
      resetForm();
    }
  }, [item]);

  const resetForm = () => {
    setFormData({ title: "", author: "", content: "", id: null });
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newContent = {
      ...formData,
      id: formData.id || Date.now(),
      createdAt: new Date().toLocaleString(),
    };

    isEdit ? updateValue(newContent) : addValue(newContent);
    resetForm();
    isEdit ? navigate(-2) : navigate(-1);
  };

  return (
    <div className={classes.addContainer}>
      <InputField
        label="작성자"
        value={formData.author}
        onChange={handleChange}
        maxLength={15}
        name="author"
      />
      <InputField
        label="제목"
        value={formData.title}
        onChange={handleChange}
        maxLength={15}
        name="title"
      />
      <div>
        <label>내용</label>
        <textarea
          value={formData.content}
          onChange={handleChange}
          name="content"
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
