import { NavLink } from "react-router-dom";
import classes from "../../styles/SubHeader.module.css";
import { useContext, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";

const category = [
  {
    name: "recipe",
    text: "레시피",
  },
  {
    name: "gram",
    text: "맛집",
  },
  {
    name: "gram2",
    text: "테스트1",
  },
  {
    name: "gram3",
    text: "테스트2",
  },
];

function SubHeader() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={classes.container}>
      <div className={classes.subHeader}>
        {category.map((c) => (
          <NavLink
            className={classes.category}
            key={c.name}
            to={c.name === "recipe" ? "/" : `/${c.name}`}
          >
            {c.text}
          </NavLink>
        ))}
      </div>
      <div className={classes.inputText}>
        <input
          type="text"
          placeholder="레시피 검색..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
}
export default SubHeader;
