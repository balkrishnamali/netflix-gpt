import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const getLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid-cols-12">
        <input
          type="text"
          className="p-4 w-3/4 m-4 col-span-9"
          placeholder={lang[getLanguage].gptPlaceholdarText}
        ></input>
        <button className="py-4 m-2 px-16 bg-red-700 text-white rounded-lg col-span-3">
          {lang[getLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
