import { useState } from "react";

interface I_UseActiveBundle {
  active: boolean
  bind: {
    onMouseDown: () => void
    onMouseUp: () => void
  }
}

export const useActive = (): I_UseActiveBundle => {
  const [active, set] = useState(false);
  return {
    active,
    bind: {
      onMouseDown: () => set(true),
      onMouseUp: () => set(false),
    },
  };
};
