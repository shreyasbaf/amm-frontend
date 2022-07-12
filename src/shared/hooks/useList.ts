import { useState } from "react";
/**
 * @param initial `Array` initial state value
 */
export const useList = (initial = []) => {
  const [list, set] = useState(initial);
  return {
    list,
    set,
    reset: () => set(initial),
    push: (values: []) => set((prev) => [...prev, ...values]),
    sort: (fn: any) => set((prev) => [...prev].sort(fn)),
    filter: (fn: any) => set((prev) => prev.filter(fn)),
  };
};
