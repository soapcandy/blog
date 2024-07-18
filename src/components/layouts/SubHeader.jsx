import { NavLink } from "react-router-dom";

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
        <NavLink key={c.name} to={c.name === "Recipe" ? "/" : `/${c.name}`}>
          {c.text}
        </NavLink>
      ))}
    </>
  );
}
export default SubHeader;
