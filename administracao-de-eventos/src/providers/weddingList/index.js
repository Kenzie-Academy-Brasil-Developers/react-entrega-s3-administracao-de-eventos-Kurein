import { createContext, useState } from "react";

export const WeddingListContext = createContext();

export function WeddingListProvider({ children }) {
  const [weddingList, setWeddingList] = useState([]);

  function addToWedding(item) {
    setWeddingList([...weddingList, item]);
  }

  function removeFromWedding(id) {
    const filteredList = weddingList.filter((elt) => {
      return elt.id !== id;
    });

    setWeddingList(filteredList);
  }

  return (
    <WeddingListContext.Provider
      value={{ weddingList, addToWedding, removeFromWedding }}
    >
      {children}
    </WeddingListContext.Provider>
  );
}
