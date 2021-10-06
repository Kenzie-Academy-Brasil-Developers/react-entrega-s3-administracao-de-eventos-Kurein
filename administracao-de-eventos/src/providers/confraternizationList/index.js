import { createContext, useState } from "react";

export const ConfraternizationListContext = createContext();

export function ConfraternizationListProvider({ children }) {
  const [confraternizationList, setConfraternizationList] = useState([]);

  function addToConfraternization(item) {
    setConfraternizationList([...confraternizationList, item]);
  }

  function removeFromConfraternization(id) {
    const filteredList = confraternizationList.filter((elt) => {
      return elt.id !== id;
    });

    setConfraternizationList(filteredList);
  }

  return (
    <ConfraternizationListContext.Provider
      value={{
        confraternizationList,
        addToConfraternization,
        removeFromConfraternization,
      }}
    >
      {children}
    </ConfraternizationListContext.Provider>
  );
}
