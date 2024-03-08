import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then (response => {
        if(!response.ok) {
          throw Error("Could not fetch the data for that resource.");
        }
        return response.json(); // executes post promise, which is itself a promise
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null); //in case of reload/rerender we need to clear error for potential reuse.
      }) 
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Fetch Aborted.");
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      })

    return () => abortController.abort()
  }, [url]);

  return {data, isLoading, error}
}

export default useFetch;