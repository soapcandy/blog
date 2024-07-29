import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [contentValue, setContentValue] = useState([]);

  useEffect(() => {
    const getList = JSON.parse(localStorage.getItem(key)) || [];
    setContentValue(getList);
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contentValue));
  }, [key, contentValue]);

  const addValue = (contentList) => {
    setContentValue((prev) => [...prev, contentList]);
  };

  const updateValue = (updatedContent) => {
    setContentValue((prev) =>
      prev.map((item) =>
        item.id === updatedContent.id ? updatedContent : item
      )
    );
  };

  const deleteValue = (id) => {
    setContentValue((prev) => prev.filter((item) => item.id !== id));
  };

  return { contentValue, addValue, updateValue, deleteValue };
}

export default useLocalStorage;
