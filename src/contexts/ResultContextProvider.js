import React, { children, createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search72.p.rapidapi.com/search";

export const ResultContextProvider = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d52df71c2cmsh0dfac6389ac545bp16de7bjsn2f4fc7394a6e",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    
    const data = await response.json();
    console.log(data);
    setResults(data);

    setIsLoading(false);

  }

  return (
    <ResultContext.Provider value={{getResults,results,searchItem,setSearchItem,isLoading}}>
        {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext); 
