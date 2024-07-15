import RecipeItem from "./RecipeItem";

function RecipeList({ contentValue }) {
  return (
    <div>
      {contentValue.map((item) => (
        <RecipeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default RecipeList;
