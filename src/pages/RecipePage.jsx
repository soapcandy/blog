import { NavLink, useLocation } from "react-router-dom";
import RecipeItem from "../components/recipe/RecipeItem";
import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import classes from "../styles/recipe/RecipePage.module.css";

function RecipePage() {
  const { contentValue } = useContext(ContentContext);
  const item = useLocation();

  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to="/add" state={item}>
          글쓰기
        </NavLink>
      </div>
      {contentValue.map((item) => (
        <RecipeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default RecipePage;
