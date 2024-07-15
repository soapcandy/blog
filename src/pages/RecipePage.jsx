import { NavLink } from "react-router-dom";
import RecipeItem from "../components/RecipeItem";

function RecipePage({ contentValue }) {
  return (
    <div>
      {contentValue.map((item) => (
        <RecipeItem key={item.id} item={item} />
      ))}
      <NavLink to={"/add"}>글쓰기</NavLink>
    </div>
  );
}
export default RecipePage;
