import { NavLink, useLocation } from "react-router-dom";
import RecipeItem from "../components/recipe/RecipeItem";
import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import classes from "../styles/recipe/RecipePage.module.css";
import useSearch from "../hooks/useSearch";

function RecipePage() {
  const { contentValue } = useContext(ContentContext);
  const { searchValue, setSearchValue, filterItems } = useSearch({
    contentValue,
  });
  const item = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.inputText}>
        <input
          type="text"
          placeholder="레시피 검색..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={classes.addContainer}>
        <NavLink to="/add" state={item}>
          글쓰기
        </NavLink>
      </div>
      {filterItems.map((item) => (
        <RecipeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default RecipePage;
