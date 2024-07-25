import { NavLink } from "react-router-dom";
import classes from "../../styles/recipe/RecipeItem.module.css";
import backgroundImage from "../../img/istockphoto.jpg";

function FoodgramItem({ item }) {
  return (
    <NavLink to={`${item.id}`} state={item} className={classes.recipeContainer}>
      <div
        className={classes.recipeImage}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div>
        <div className={classes.recipeTitle}>{item.title}</div>
        <div className={classes.recipeContent}>{item.content}</div>
      </div>
    </NavLink>
  );
}

export default FoodgramItem;
