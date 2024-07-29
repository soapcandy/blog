import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const { contentValue, addValue, updateValue, deleteValue } =
    useLocalStorage("list");

  return (
    <ContentContext.Provider
      value={{ contentValue, addValue, updateValue, deleteValue }}
    >
      {children}
    </ContentContext.Provider>
  );
};
