import { createContext, useEffect, useState } from "react";

export const GramContext = createContext();

export const GramProvider = ({ children }) => {
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
    const getList = JSON.parse(localStorage.getItem("gramList"));
    setContentValue(getList);
  }, []);

  useEffect(() => {
    localStorage.setItem("gramList", JSON.stringify(contentValue));
  }, [contentValue]);

  return (
    <GramContext.Provider
      value={{ contentValue, addValue, updateValue, deleteValue }}
    >
      {children}
    </GramContext.Provider>
  );
};
