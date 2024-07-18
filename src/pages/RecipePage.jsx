import { NavLink } from "react-router-dom";
import RecipeItem from "../components/recipe/RecipeItem";
import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";

function RecipePage() {
  const { contentValue } = useContext(ContentContext);
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
