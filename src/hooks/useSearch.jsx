import { useEffect, useState } from "react";

function useSearch({ contentValue }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(contentValue);

  useEffect(() => {
    const searchTerm = searchValue.trim().toLowerCase();
    const filtered = contentValue.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredItems(filtered);
  }, [searchValue, contentValue]);

  return { searchValue, setSearchValue, filterItems: filteredItems };
}
export default useSearch;
