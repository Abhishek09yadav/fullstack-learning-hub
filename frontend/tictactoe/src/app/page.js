import Image from "next/image";
import Board from '../components/Board'

export default function Home() {
  return (
    <div className="flex flex-col">
     <div className="text-center mt-3 font-bold text-2xl">TIc Tac Toe</div>
    <Board/>
    </div>
  );
}
