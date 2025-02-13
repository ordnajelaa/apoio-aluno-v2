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
            <div className="bg-white rounded-lg p-4 sm:p-12 hover:scale-105 transition-all duration-300 h-full flex flex-col shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              <h2 className="text-lg sm:text-2xl font-semibold mb-2 text-center">{subject.name}</h2>
              <p></p>
              <div className="flex items-center justify-center flex-grow">
                
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-4 animate-bounce">
        <Link href="/submit" className="bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded shadow-lg hover:bg-green-700 transition-colors">
          Novo Envio
        </Link>
      </div>
    </div>
  )
}
