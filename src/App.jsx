import ContentAdd from "./components/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipePage from "./pages/RecipePage";
import { ContentProvider } from "./contexts/ContentContext";
import SubHeader from "./components/layouts/SubHeader";
import FoodgramPage from "./pages/FoodgramPage";

function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <SubHeader />
        <Routes>
          <Route path="/" element={<RecipePage />} />
          <Route path="/add" element={<ContentAdd />} />
          <Route path="/:id" element={<RecipeDetail />} />
          <Route path="/gram" element={<FoodgramPage />} />
        </Routes>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;
