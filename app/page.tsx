import Link from "next/link"
import { subjects } from "../data/subjects"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Conteúdo de apoio
      ao estudante</h1>
      <p className="text-lg text-gray-600 mb-8">
      Busque por listas de exercícios e provas anteriores ou faça sua contribuição com um conteúdo antigo e tenha ele na plataforma em até 24 horas.</p>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link key={subject.id} href={`/subjects/${subject.id}`} className="block h-full">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
              <p className="text-gray-600 mb-4">{subject.description}</p>
              <div className="flex items-center mb-4">
                <Image src={subject.icon || "/placeholder.svg"} alt={subject.name} width={100} height={100} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
