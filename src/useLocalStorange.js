import { useEffect, useState } from "react";

export function useLoacalStorgeState(initalState, key) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initalState
  );

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
