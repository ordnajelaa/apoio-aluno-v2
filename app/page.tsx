import Link from "next/link"
import { subjects } from "../data/subjects"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-8">Conteúdo de apoio ao estudante</h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
        Busque por listas de exercícios e provas anteriores ou faça sua contribuição com um conteúdo antigo e tenha ele na plataforma em até 24 horas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/subjects/${subject.id}`} className="block h-full">
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-12 hover:shadow-lg hover:scale-105 transition-all duration-300 h-full flex flex-col">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">{subject.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">{subject.description}</p>
              <div className="flex items-center justify-center flex-grow">
                
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-4">
        <img src="/foguinho3.gif" alt="ícone" className="w-6 h-6 sm:w-7 sm:h-7" />
        <Link href="/submit" className="bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded shadow-lg hover:bg-green-700 transition-colors">
          Novo Envio
        </Link>
      </div>
    </div>
  )
}
