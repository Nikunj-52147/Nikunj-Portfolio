import { useEffect, useState } from "react";

export const useBreakpoint = () => {
  const [isLaptop, setIsLaptop] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");
    const handler = (e) => setIsLaptop(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isLaptop;
};
