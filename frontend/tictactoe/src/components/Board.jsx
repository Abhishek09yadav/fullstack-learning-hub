"use client";
import React, { useState } from "react";

const Board = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const status = winner
    ? `Winner is ${winner}`
    : board.every((cell) => cell != null)
    ? "its draw"
    : `Next player is ${isXNext ? "X" : "O"}`;
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setBoard(newBoard)
  };
  const handleReset = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col  items-center justify-center bg-blue-900 p-3 min-h-screen text-white">
     { <h1>Status {status}</h1>}
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => {
          return (
            <div
              className="w-24 h-24 items-center justify-center  border hover:bg-blue-700 border-blue-500 text-3xl cursor-pointer "
              onClick={() => handleClick(index)}
              key={index}
            >
              {value}
            </div>
          );
        })}
      </div>
      <div
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 cursor-pointer"
      >
        Reset
      </div>
    </div>
  );
};

export default Board;

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const calculateWinner = (squares) => {
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[c] && squares[a] === squares[b]) {
      return squares[a];
    }
  }
  return null
};
