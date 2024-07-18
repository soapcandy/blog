import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../contexts/ContentContext";
import FoodgramItem from "../components/foodgram/FoodgramItem";

function FoodgramPage() {
  const { contentValue } = useContext(ContentContext);
  return (
    <div>
      {contentValue.map((item) => (
        <FoodgramItem key={item.id} item={item} />
      ))}
      <NavLink to={"/add"}>글쓰기</NavLink>
    </div>
  );
}
export default FoodgramPage;
