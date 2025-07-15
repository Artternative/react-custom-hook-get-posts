import { useState, useEffect } from "react";
import axios from "axios";

export  function useFetchingData(url) {


  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const fetchData = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios(url);
      setPosts(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

     return { data:posts , isLoading , isError}; 

  
}
