import { useState } from "react";
/**
 * @param initial `Object {}` initial state value
 */
export const useMap = (initial = {}) => {
  const [values, set] = useState<any>(initial);
  return {
    values,
    reset: () => set(initial),
    clear: () => set({}),
    get: (key: any) => values[key],
    has: (key: any) => Object.prototype.hasOwnProperty.call(values, key),
    del: (key: any) => set(({ [key]: deleted, ...rest }) => rest),
    set: (key: any, updater: any) =>
      set((prev: any) => ({
        ...prev,
        [key]: typeof updater === "function" ? updater(prev[key]) : updater,
      })),
  };
};
