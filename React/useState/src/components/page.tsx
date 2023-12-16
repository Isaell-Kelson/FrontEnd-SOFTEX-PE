import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1);
  };

  const diminuir = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold ">Contador</h2>
      <p className="text-xl font-bold text-green-500">Valor: {count}</p>
      <button
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={aumentar}
      >
        Aumentar
      </button>
      <button
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={diminuir}
      >
        Diminuir
      </button>
    </div>
  );
};

export default Counter;
