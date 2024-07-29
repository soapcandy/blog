import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GramContext = createContext();

export const GramProvider = ({ children }) => {
  const { contentValue, addValue, updateValue, deleteValue } =
    useLocalStorage("gramList");

  return (
    <GramContext.Provider
      value={{ contentValue, addValue, updateValue, deleteValue }}
    >
      {children}
    </GramContext.Provider>
  );
};
