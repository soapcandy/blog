import { NavLink } from "react-router-dom";
import classes from "../../styles/SubHeader.module.css";
import { useState } from "react";

const category = [
  {
    name: "Recipe",
    text: "레시피",
  },
  {
    name: "gram",
    text: "맛집",
  },
];

function SubHeader() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes.subHeader}>
        {category.map((c) => (
          <NavLink
            className={classes.category}
            key={c.name}
            to={c.name === "Recipe" ? "/" : `/${c.name}`}
          >
            {c.text}
          </NavLink>
        ))}
      </div>
      {/* <div className={classes.inputText}>
        <input
          type="text"
          placeholder="레시피 검색..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div> */}
    </div>
  );
}
export default SubHeader;
