import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
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
    <ContentContext.Provider
      value={{ contentValue, addValue, updateValue, deleteValue }}
    >
      {children}
    </ContentContext.Provider>
  );
};
