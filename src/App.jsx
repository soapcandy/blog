import ContentAdd from "./components/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import { ContentProvider } from "./contexts/ContentContext";
import FoodgramPage from "./pages/FoodgramPage";
import MainFrame from "./pages/MainFrame";
import ContentDetail from "./components/common/ContentDetail";

function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <Routes>
          <Route element={<MainFrame />}>
            <Route path="/" element={<RecipePage />} />
            <Route path="/add" element={<ContentAdd />} />
            <Route path="/:type?/:id" element={<ContentDetail />} />
            <Route path="/gram" element={<FoodgramPage />} />
          </Route>
        </Routes>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;
