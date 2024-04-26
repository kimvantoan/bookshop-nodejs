import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const Search = ({setResult}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:2003/book/allBook`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // setResult(filtered);
  }, [searchQuery]);
  return (
    <div className="border rounded-lg border-gray-300 flex overflow-hidden p-1 w-2/3">
      <input
        className="outline-none w-full"
        type="text"
        onChange={handleSearch}
        value={searchQuery}
      />
      <button className="bg-red-500 rounded-xl py-1 px-5">
        <MagnifyingGlassIcon class="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default Search;
