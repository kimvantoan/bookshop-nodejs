import React, { useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BookContext } from "../../context/BookContext";

const Search = () => {
  const {searchQuery,handleSearch,setSearchQuery}=useContext(BookContext)

  
  return (
    <div className="border rounded-lg border-gray-300 flex overflow-hidden p-1 w-1/2">
      <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="outline-none w-full" type="text" />
      <button onClick={handleSearch} className="bg-red-500 rounded-xl py-1 px-5 hover:bg-red-700">
        <MagnifyingGlassIcon class="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Search;
