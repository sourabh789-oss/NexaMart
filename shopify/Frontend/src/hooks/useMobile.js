import { useState, useLayoutEffect } from "react";

 export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth < breakpoint);
    }

    updateSize(); // run before first paint
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, [breakpoint]);

  return isMobile;
}
