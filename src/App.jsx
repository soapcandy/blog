import { useState } from "react";
import ContentAdd from "./components/ContentAdd";
import RecipeList from "./components/RecipeList";

function App() {
  const [contentValue, setContentValue] = useState([]);

  const addValue = (contentList) => {
    setContentValue([...contentValue, contentList]);
  };

  console.log(contentValue);
  return (
    <>
      <RecipeList contentValue={contentValue} />
      <ContentAdd addValue={addValue} />
    </>
  );
}

export default App;
