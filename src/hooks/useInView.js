import { useEffect, useRef, useState } from "react";

const supportsObserver = () => typeof window !== "undefined" && "IntersectionObserver" in window;

/** Reveal-on-scroll helper: returns a ref and whether the element has entered the viewport. */
export const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(() => !supportsObserver());

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsObserver()) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
