import { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ContentContext } from "../../contexts/ContentContext";
import { GramContext } from "../../contexts/GramContext";
import classes from "../../styles/ContentDetail.module.css";

function ContentDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state;

  const isGram = location.pathname.includes("/gram");
  const { deleteValue } = isGram
    ? useContext(GramContext)
    : useContext(ContentContext);

  const handleDelete = () => {
    deleteValue(item.id);
    navigate(-1);
  };

  if (!item) {
    navigate("/");
  } else {
    return (
      <div className={classes.container}>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.subTitle}>
          <div className={classes.subLeft}>
            <div>{item.author}</div>
            <div>{item.createdAt}</div>
          </div>
          <span>
            <div className={classes.navContainer}>
              <NavLink to="/add" state={location}>
                수정
              </NavLink>
              <button onClick={handleDelete}>삭제</button>
              <NavLink to="/">홈으로</NavLink>
            </div>
          </span>
        </div>
        <div className={classes.content}>{item.content}</div>
      </div>
    );
  }
}
export default ContentDetail;
