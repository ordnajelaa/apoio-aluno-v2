import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-custom-green shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo-unifesp.png" alt="Logo" width={80} height={80}/>
          </Link>
          <Link href="/" className="flex items-center">
          <span className="text-xl sm:text-3xl font-semi text-white">Apoio Aluno</span>
          </Link>

          <nav>
            <ul>
              <li>
                <Link href="/about" className="hover:text-green-600 text-white text-sm sm:text-base">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}