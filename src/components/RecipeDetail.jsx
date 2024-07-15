import { NavLink, useLocation } from "react-router-dom";

function RecipeDetail({ deleteValue }) {
  const location = useLocation();
  const item = location.state;

  const handleDelete = () => {
    deleteValue(item.id);
  };

  return (
    <>
      <div>{item.author}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.createdAt}</div>
      <NavLink to={"/add"} state={item}>
        수정
      </NavLink>
      <NavLink to={"/"} onClick={handleDelete}>
        삭제
      </NavLink>
      <NavLink to={"/"}>홈으로</NavLink>
    </>
  );
}
export default RecipeDetail;
