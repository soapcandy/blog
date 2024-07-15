import { useEffect, useState } from "react";
import ContentAdd from "./components/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipePage from "./pages/RecipePage";

function App() {
  const [contentValue, setContentValue] = useState([]);

  const addValue = (contentList) => {
    setContentValue([...contentValue, contentList]);
  };

  const updateValue = (updatedContent) => {
    const updatedList = contentValue.map((item) =>
      item.id === updatedContent.id ? updatedContent : item
    );
    setContentValue(updatedList);
  };

  const deleteValue = (id) => {
    const updatedList = contentValue.filter((item) => item.id !== id);
    setContentValue(updatedList);
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
        <Route
          path="/add"
          element={<ContentAdd addValue={addValue} updateValue={updateValue} />}
        />
        <Route
          path="/:id"
          element={<RecipeDetail deleteValue={deleteValue} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
