import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-custom-green shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo-unifesp.png" alt="Logo" width={70} height={70} />
          <span className="absolute left-1/2 -translate-x-1/2 text-3xl font-semi text-white">Apoio Aluno</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-green-600 text-white">
                Sobre nós
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}