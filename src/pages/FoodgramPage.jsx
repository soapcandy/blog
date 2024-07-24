import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FoodgramItem from "../components/foodgram/FoodgramItem";
import classes from "../styles/recipe/RecipePage.module.css";
import { GramContext } from "../contexts/GramContext";
import useSearch from "../hooks/useSearch";

function FoodgramPage() {
  const { contentValue } = useContext(GramContext);
  const { filterItems, filteredItems } = useSearch(contentValue);
  const item = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    filterItems(searchValue);
  }, [searchValue]);

  return (
    <div className={classes.container}>
      <div className={classes.inputText}>
        <input
          type="text"
          placeholder="맛집 찾기..."
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
        <FoodgramItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FoodgramPage;
