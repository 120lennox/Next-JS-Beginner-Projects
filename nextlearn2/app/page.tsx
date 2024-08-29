import Link from "next/link";
import Books from "./components/books";


export default function Home() {
  return (
    <main className="">
      <div className="mt-5 flex justify-center items-center flex-col">
        <h1 className="text-gray-300 text-6xl">Nthano's Portifolio of Small Bets</h1>
        <div className="mt-10">
          <Books/>
        </div>
      </div>
    </main>
  );
}
