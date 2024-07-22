import { NavLink } from "react-router-dom";
import classes from "../../styles/recipe/RecipeItem.module.css";

function ContentItem({ item }) {
  return (
    <NavLink to={`${item.id}`} state={item} className={classes.RecipeContainer}>
      <div className={classes.RecipeImage}>이미지 위치</div>
      <div>
        <div className={classes.RecipeTitle}>{item.title}</div>
        <div className={classes.RecipeContent}>{item.content}</div>
      </div>
    </NavLink>
  );
}
export default ContentItem;
