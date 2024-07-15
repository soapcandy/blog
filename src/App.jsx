import { useEffect, useState } from "react";
import ContentAdd from "./components/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import RecipePage from "./pages/RecipePage";

function App() {
  const [contentValue, setContentValue] = useState([]);
  const addValue = (contentList) => {
    setContentValue([...contentValue, contentList]);
  };

  useEffect(() => {
    const getList = JSON.parse(localStorage.getItem("List"));
    setContentValue(getList);
  }, []);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(contentValue));
  }, [contentValue]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipePage contentValue={contentValue} />} />
        <Route path="/add" element={<ContentAdd addValue={addValue} />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
