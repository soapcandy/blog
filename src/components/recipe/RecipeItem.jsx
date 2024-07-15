import { NavLink } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <NavLink to={`${item.id}`} state={item}>
      <div>{item.author}</div>
      <div>{item.title}</div>
      <div>---------------------</div>
    </NavLink>
  );
}
export default RecipeItem;
