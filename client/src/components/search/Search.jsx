import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({role}) => {
  return (
    <div className={`border rounded-lg border-gray-300 flex overflow-hidden p-1 ${role ? "w-1/2" : 'w-2/3'}`}>
      <input className="outline-none w-full" type="text" />
      <button className="bg-red-500 rounded-xl py-1 px-5 hover:bg-red-700">
        <MagnifyingGlassIcon class="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Search;
