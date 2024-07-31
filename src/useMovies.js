import { useState, useEffect } from "react";
const KEY = "5b01cf17";
export function useMoives(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //   callback?.();

      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}
                
            `,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error(`
            We lost connection with you, please check internet conactivity
            `);

          const data = await res.json();

          if (data.Response === "False")
            throw new Error(`
            There is no movie with that name  " ${query} "
            `);

          setMovies(data.Search);
          setError("");
          // console.log(movies, "here !"); stale old value
          // setIsLoading(false);
        } catch (err) {
          // console.error(err.message, " here!!!!");
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      //   handleCloseMoive();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
