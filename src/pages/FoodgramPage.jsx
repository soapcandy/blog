import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import FoodgramItem from "../components/foodgram/FoodgramItem";
import classes from "../styles/recipe/RecipePage.module.css";

function FoodgramPage() {
  const { contentValue } = useContext(ContentContext);
  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to={"/add"}>글쓰기</NavLink>
      </div>
      {contentValue.map((item) => (
        <FoodgramItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FoodgramPage;
