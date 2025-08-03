import React from "react";
import { IMG_CND } from "../utils/constants";

export const MoviesCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie card" src={IMG_CND + posterPath}></img>
    </div>
  );
};
