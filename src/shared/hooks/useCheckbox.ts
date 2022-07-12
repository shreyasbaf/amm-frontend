import { useState } from "react";

/**
 * @param initial `boolean` initial state value
 */
export const useCheckbox = (initial: boolean) => {
  const [checked, set] = useState(initial);

  return {
    checked,
    set,
    reset: () => set(initial),
    bind: {
      checked,
      onChange: (e: any) => set(e.target.checked),
    },
  };
};
