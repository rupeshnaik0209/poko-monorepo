import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="bg-gray-600 flex justify-between items-center h-20 p-4">
      <Image
        src="/pokemon.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <p className="text-yellow-50 flex justify-center items-center underline">
        <Link href="/">Home</Link>
      </p>
      <link rel="apple-touch-icon" href="/pokemon.svg" sizes="any" />
      {/* <img src="../public/pokemon.svg" className="w-40 h-20" /> */}
    </nav>
  );
}
