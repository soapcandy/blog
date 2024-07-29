import ContentAdd from "./components/input/ContentAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipePage from "./pages/RecipePage";
import { ContentProvider } from "./contexts/ContentContext";
import FoodgramPage from "./pages/FoodgramPage";
import MainFrame from "./pages/MainFrame";
import ContentDetail from "./components/common/ContentDetail";
import { GramProvider } from "./contexts/GramContext";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <GramProvider>
          <SearchProvider>
            <Routes>
              <Route element={<MainFrame />}>
                <Route path="/" element={<RecipePage />} />
                <Route path="/add" element={<ContentAdd />} />
                <Route path="/:type?/:id" element={<ContentDetail />} />
                <Route path="/gram" element={<FoodgramPage />} />
              </Route>
            </Routes>
          </SearchProvider>
        </GramProvider>
      </ContentProvider>
    </BrowserRouter>
  );
}

export default App;
