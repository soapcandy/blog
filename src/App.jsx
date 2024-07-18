import { useEffect, useState } from "react";
import ContentAdd from "./components/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipePage from "./pages/RecipePage";
import { ContentProvider } from "./contexts/ContentContext";

function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <Routes>
          <Route path="/" element={<RecipePage />} />
          <Route path="/add" element={<ContentAdd />} />
          <Route path="/:id" element={<RecipeDetail />} />
        </Routes>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;
