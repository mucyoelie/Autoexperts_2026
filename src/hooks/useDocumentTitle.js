import { useEffect } from "react";
import { site } from "../data/site";

/** Keeps the browser tab title in sync with the current page. */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  }, [title]);
};

export default useDocumentTitle;
