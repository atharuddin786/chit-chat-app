import { useEffect } from "react";
import { useCallback, useState } from "react";

export function useModalState(defaultValue = false) {
  // useState is used to create a state variable called isShow with the initial value of defaultValue
  const [isShow, setIsShow] = useState(defaultValue);

  // useCallback is used to memoize the functions show and hide to prevent unnecessary re-renders
  const show = useCallback(() => setIsShow(true), []);
  const hide = useCallback(() => setIsShow(false), []);

  // Return an object containing the isShow state and the show and hide functions
  return { isShow, show, hide };
}

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const handleMediaQueryChange = (evt) => setMatches(evt.matches);

    const mediaQueryList = window.matchMedia(query);

    // Set the initial matches state
    setMatches(mediaQueryList.matches);

    // Attach the event listener for changes in the media query
    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};
