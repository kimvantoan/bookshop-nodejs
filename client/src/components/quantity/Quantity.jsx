import React, { useState } from "react";

const Quantity = ({Book}) => {
  const [count, setCount] = useState(Book.count);
  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex items-center px-3 border-gray-400 gap-5 border rounded-md ">
      <button
        onClick={handleMinus}
        className="font-bold text-gray-400 text-2xl"
      >
        -
      </button>
      <div>{count}</div>
      <button onClick={handlePlus} className="font-bold text-gray-400 text-2xl">
        +
      </button>
    </div>
  );
};

export default Quantity;
