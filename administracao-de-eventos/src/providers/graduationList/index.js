import { createContext, useState } from "react";

export const GraduationListContext = createContext();

export function GraduationListProvider({ children }) {
  const [graduationList, setGraduationList] = useState([]);

  function addToGraduation(item) {
    setGraduationList([...graduationList, item]);
  }

  function removeFromGraduation(id) {
    const filteredList = graduationList.filter((elt) => {
      return elt.id !== id;
    });

    setGraduationList(filteredList);
  }

  return (
    <GraduationListContext.Provider
      value={{ graduationList, addToGraduation, removeFromGraduation }}
    >
      {children}
    </GraduationListContext.Provider>
  );
}
