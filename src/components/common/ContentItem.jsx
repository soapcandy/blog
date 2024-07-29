import { NavLink } from "react-router-dom";
import classes from "C:/React/blog/src/styles/ContentItem.module.css";
import background from "C:/React/blog/src/img/istockphoto.jpg";

function ContentItem({ item }) {
  return (
    <NavLink to={`${item.id}`} state={item} className={classes.container}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div>
        <div className={classes.title}>{item.title}</div>
        <div className={classes.content}>{item.content}</div>
      </div>
    </NavLink>
  );
}
export default ContentItem;
