import BoardGame from "@/components/BoardGame";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col">
     <div className="text-center mt-3 font-bold text-2xl">TIc Tac Toe</div>
    <BoardGame/>
    </div>
  );
}
