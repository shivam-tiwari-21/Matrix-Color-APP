import { useState } from "react";

export default function MatrixApp() {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white") {
      const newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);
      setClickOrder([...clickOrder, index]);

      if (clickOrder.length === 8) {
        setTimeout(() => changeToOrange(newGrid, [...clickOrder, index]), 500);
      }
    }
  };

  const changeToOrange = (newGrid, order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        newGrid[idx] = "orange";
        setGrid([...newGrid]);
      }, i * 500);
    });
  };

  const resetGrid = () => {
    setGrid(Array(9).fill("white"));
    setClickOrder([]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cyan-200">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-cyan-700"> <img src="nav.png" className="w-20 h-20 " alt="" /> Matrix Color Game</h1>
      <div className="grid grid-cols-3 gap-2 w-70">
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className=" h-22 w-22 border flex items-center shadow-2xl justify-center cursor-pointer rounded-2xl"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button 
        onClick={resetGrid} 
        className="mt-4 px-4 py-2 bg-blue-900 cursor-pointer shadow-2xl rounded-2xl text-white  hover:bg-blue-700">
        Reset
      </button>
    </div>
  );
}
