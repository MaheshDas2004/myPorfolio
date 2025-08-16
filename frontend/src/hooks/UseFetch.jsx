import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    // ✅ AbortController use ho raha hai taaki agar component unmount ho jaye 
    // ya URL change ho jaye to purana fetch request cancel ho jaye
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // ✅ controller.signal ko pass kiya taaki fetch ko pata rahe
        // ki agar cancel signal aaye to fetch turant band ho jaye
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);

      } catch (error) {
        // ✅ Agar fetch cancel kiya gaya hai (AbortError) to ignore karna hai
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // ✅ Cleanup function: jab bhi component unmount hoga ya url change hoga 
    // to controller.abort() call ho jaayega aur fetch cancel ho jaayega
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
