"use client";
import React, { useState } from "react";

const BoardGame = () => {
  const initial = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initial);
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const status = winner
    ? `winner is ${winner}`
    : board.every((cell) => cell)
    ? "draw"
    : `Next move ${isXNext ? "X" : "O"}`;

  const handleClick = (index) => {
    const newBoard = [...board];
    if (winner || board[index]) return null;
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard)
    setIsXNext(!isXNext);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-800 min-h-screen ">
      <div className="text-2xl font-semibold">Status: {status}</div>
      <div className="grid grid-cols-3 ">
        {" "}
        {board.map((value, index) => {
        return  <div
            key={index}
            className="w-24 h-24 p-3 hover:bg-blue-700 border "
            onClick={() =>handleClick(index)}
          >
            {value}
          </div>;
        })}
      </div>
    </div>
  );

  function calculateWinner(squares) {
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
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
};

export default BoardGame;
