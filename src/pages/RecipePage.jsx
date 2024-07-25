import { NavLink, useLocation } from "react-router-dom";
import RecipeItem from "../components/recipe/RecipeItem";
import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../contexts/ContentContext";
import classes from "../styles/recipe/RecipePage.module.css";
import useSearch from "../hooks/useSearch";

function RecipePage() {
  const { contentValue } = useContext(ContentContext);
  const { filterItems, filteredItems } = useSearch(contentValue);
  const item = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    filterItems(searchValue);
  }, [searchValue, contentValue]);

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
      {filteredItems.map((item) => (
        <RecipeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default RecipePage;
