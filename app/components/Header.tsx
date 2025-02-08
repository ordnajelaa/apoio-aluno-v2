import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-custom-green shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Image src="/logo-unifesp.png" alt="Logo" width={70} height={70} />
          <span className="text-2xl sm:text-3xl font-semi text-white sm:absolute sm:left-1/2 sm:-translate-x-1/2">Apoio Aluno</span>
        </Link>
        <nav className="w-full sm:w-auto">
          <ul className="flex justify-center sm:justify-end space-x-4">
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