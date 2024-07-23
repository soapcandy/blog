import { NavLink } from "react-router-dom";
import classes from "../../styles/recipe/RecipePage.module.css";
import ContentItem from "./ContentItem";

function ContentPage({ state, contentValue }) {
  return (
    <div>
      <div className={classes.addContainer}>
        <NavLink to="/add" state={state}>
          글쓰기
        </NavLink>
      </div>
      {contentValue.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ContentPage;
