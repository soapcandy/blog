import { NavLink } from "react-router-dom";
import "../../styles/SubHeader.css";

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
    <>
      {category.map((c) => (
        <NavLink
          className={"category"}
          key={c.name}
          to={c.name === "Recipe" ? "/" : `/${c.name}`}
          style={{}}
        >
          {c.text}
        </NavLink>
      ))}
    </>
  );
}
export default SubHeader;
