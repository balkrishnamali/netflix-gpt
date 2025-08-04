import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { backgroundIMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 opacity-70">
        <img src={backgroundIMG} alt="background"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
