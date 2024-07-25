import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import FoodgramItem from "../components/foodgram/FoodgramItem";
import classes from "../styles/recipe/RecipePage.module.css";
import { GramContext } from "../contexts/GramContext";
import useSearch from "../hooks/useSearch";
import { SearchContext } from "../contexts/SearchContext";

function FoodgramPage() {
  const { contentValue } = useContext(GramContext);
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
        <FoodgramItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FoodgramPage;
