import { useLocation } from "react-router-dom";

function RecipeDetail() {
  const location = useLocation();
  const item = location.state;

  return (
    <>
      <div>{item.author}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.createdAt}</div>
    </>
  );
}
export default RecipeDetail;
