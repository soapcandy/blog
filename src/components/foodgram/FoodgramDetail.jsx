import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ContentContext } from "../../contexts/ContentContext";
import classes from "../../styles/recipe/RecipeDetail.module.css";

function FoodgramDetail() {
  const { deleteValue } = useContext(ContentContext);
  const location = useLocation();
  const item = location.state;

  const handleDelete = () => {
    deleteValue(item.id);
  };

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
            <NavLink to={"/add"} state={item}>
              수정
            </NavLink>
            <NavLink to={"/"} onClick={handleDelete}>
              삭제
            </NavLink>
            <NavLink to={"/"}>홈으로</NavLink>
          </div>
        </span>
      </div>
      <div className={classes.content}>{item.content}</div>
    </div>
  );
}
export default FoodgramDetail;
