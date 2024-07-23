import { NavLink } from "react-router-dom";
import { useContext } from "react";
import FoodgramItem from "../components/foodgram/FoodgramItem";
import classes from "../styles/recipe/RecipePage.module.css";
import { GramContext } from "../contexts/GramContext";

function FoodgramPage() {
  const { contentValue } = useContext(GramContext);

  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to="/add" state="gram">
          글쓰기
        </NavLink>
      </div>
      {contentValue.map((item) => (
        <FoodgramItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default FoodgramPage;
