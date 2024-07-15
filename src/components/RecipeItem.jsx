function RecipeItem({ item }) {
  return (
    <>
      <div>{item.author}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.date}</div>
      <div>---------------------</div>
    </>
  );
}
export default RecipeItem;
