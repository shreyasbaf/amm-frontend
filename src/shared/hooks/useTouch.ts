import { useState } from "react";

export const useTouch = () => {
  const [touched, set] = useState(false);
  return {
    touched,
    bind: {
      onTouchStart: () => set(true),
      onTouchEnd: () => set(false),
    },
  };
};
