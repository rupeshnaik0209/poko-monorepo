import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <nav className="nav">
      <Image
        src="/pokemon.svg"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <p className="link">
        <Link href="/">Home</Link>
      </p>
    </nav>
  );
}
