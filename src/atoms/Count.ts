import { atom, useAtom } from "jotai";

type Count = number;

export const count = atom<Count>(0);

const useCount = () => useAtom(count);

export default useCount;
