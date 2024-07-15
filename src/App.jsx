import { useState } from "react";
import ContentAdd from "./components/ContentAdd";
import RecipeList from "./components/RecipeList";

function App() {
  const [contentValue, setContentValue] = useState();

  return (
    <>
      <RecipeList />
      <ContentAdd setContentValue={setContentValue} />
    </>
  );
}

export default App;
