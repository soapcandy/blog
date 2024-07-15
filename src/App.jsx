import { useState } from "react";
import ContentAdd from "./components/ContentAdd";
import RecipeList from "./components/RecipeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [contentValue, setContentValue] = useState([]);

  const addValue = (contentList) => {
    setContentValue([...contentValue, contentList]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList contentValue={contentValue} />} />
        <Route path="/add" element={<ContentAdd addValue={addValue} />} />
      </Routes>
      {/* <RecipeList contentValue={contentValue} />
      <ContentAdd addValue={addValue} /> */}
    </BrowserRouter>
  );
}

export default App;
