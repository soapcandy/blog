import { NavLink } from "react-router-dom";
import classes from "../../styles/recipe/RecipePage.module.css";

function ContentPage({ state }) {
  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to="/add">글쓰기</NavLink>
      </div>
      {contentValue.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ContentPage;
