import { NavLink } from "react-router-dom";
import classes from "../../styles/SubHeader.module.css";

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
  return (
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
  );
}
export default SubHeader;
