import { useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ContentItem from "./ContentItem";
import useSearch from "../../hooks/useSearch";
import { SearchContext } from "../../contexts/SearchContext";
import classes from "../../styles/ContentPage.module.css";

function ContentPage({ context }) {
  const { contentValue } = useContext(context);
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
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ContentPage;
