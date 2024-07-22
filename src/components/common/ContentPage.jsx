import { NavLink } from "react-router-dom";
import { useContext } from "react";
import classes from "../../styles/recipe/RecipePage.module.css";
import { ContentContext } from "../../contexts/ContentContext";

function ContentPage({ ItemComponent }) {
  const { contentValue } = useContext(ContentContext);

  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to={"/add"}>글쓰기</NavLink>
      </div>
      {contentValue.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ContentPage;
