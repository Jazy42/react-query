import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import "../../src/App.css";

export const CatFacts = () => {
  const { data, isLoading, isError, refetch } = useQuery(["catFacts"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <p>Sorry,Something went wrong </p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>CatFact using React Query</h1>
      <div className="factContainer">
        <h1>{data.fact}</h1>
      </div>
      <div className="buttonContainer">
        <button className="button" onClick={handleClick}>
          Change fact
        </button>
      </div>
    </>
  );
};
