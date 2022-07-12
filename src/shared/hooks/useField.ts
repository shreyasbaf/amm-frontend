import { useState } from "react";

/**
 * @param initial `any` initial state value
 */
export const useField = (initial: any) => {
  const [value, set] = useState(initial);

  return {
    value,
    set,
    reset: () => set(initial),
    bind: {
      value,
      onChange: (e: any) => set(e.target.value),
    },
  };
};
