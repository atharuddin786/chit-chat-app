import { useCallback, useState } from "react";

export function useModalState(defaultValue = false) {
  const [isShow, setIsShow] = useState(defaultValue);
  const show = useCallback(() => setIsShow(true), []);
  const hide = useCallback(() => setIsShow(false), []);

  return { isShow, show, hide };
}
