import { NavLink, useLocation } from "react-router-dom";
import RecipeItem from "../components/recipe/RecipeItem";
import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../contexts/ContentContext";
import classes from "../styles/recipe/RecipePage.module.css";
import useSearch from "../hooks/useSearch";
import { SearchContext } from "../contexts/SearchContext";

function RecipePage() {
  const { contentValue } = useContext(ContentContext);
  const { searchValue } = useContext(SearchContext);
  const { filterItems, filteredItems } = useSearch(contentValue);
  const item = useLocation();

  useEffect(() => {
    filterItems(searchValue);
  }, [searchValue, contentValue]);

  return (
    <div className={classes.container}>
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
