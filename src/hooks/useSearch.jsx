import { useEffect, useState } from "react";

function useSearch(contentValue) {
  const [filteredItems, setFilteredItems] = useState(contentValue);

  const filterItems = (searchValue) => {
    const searchTerm = searchValue.trim().toLowerCase();
    const filtered = contentValue.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filtered);
  };

  return { filterItems, filteredItems };
}
export default useSearch;
