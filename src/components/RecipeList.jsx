import RecipeItem from "./RecipeItem";

function RecipeList() {
  const test = [
    {
      id: 1,
      author: "홍길동",
      title: "1번만들기",
      content: "이렇게 저렇게 만든다",
      date: "2024-07-15",
    },
    {
      id: 2,
      author: "김철수",
      title: "2번만들기",
      content: "나도 몰라",
      date: "2024-07-16",
    },
  ];

  return (
    <div>
      {test.map((item) => (
        <RecipeItem key={test.id} item={item} />
      ))}
    </div>
  );
}
export default RecipeList;
