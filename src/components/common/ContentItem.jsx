import { NavLink } from "react-router-dom";
import classes from "../../styles/recipe/RecipeItem.module.css";
import background from "../../img/istockphoto.jpg";

function ContentItem({ item }) {
  return (
    <NavLink to={`${item.id}`} state={item} className={classes.RecipeContainer}>
      <div
        className={classes.RecipeImage}
        style={{ backgroundImage: `${background}` }}
      ></div>
      <div>
        <div className={classes.RecipeTitle}>{item.title}</div>
        <div className={classes.RecipeContent}>{item.content}</div>
      </div>
    </NavLink>
  );
}
export default ContentItem;
