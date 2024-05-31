import { useState } from "react";

const useStore = () => {
  const [store, setStore] = useState<number>(0);
  return { store, setStore };
};

export default useStore;
