import { useState } from "react";

/**
 * @param initial `boolean` initial state value
 */
export const useToggle = (initial = false) => {
  const [on, setToggle] = useState(initial);
  return {
    on,
    set: setToggle,
    reset: () => setToggle(initial),
    toggle: () => setToggle((prev) => !prev),
  };
};
