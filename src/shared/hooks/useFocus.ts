import { useState } from "react";

export const useFocus = () => {
  const [focused, set] = useState(false);
  return {
    focused,
    bind: {
      onFocus: () => set(true),
      onBlur: () => set(false),
    },
  };
};
