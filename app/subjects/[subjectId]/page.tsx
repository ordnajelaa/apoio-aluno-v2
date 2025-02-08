import Link from "next/link"
import { subjects } from "../../../data/subjects"

export default function SubjectPage({ params }: { params: { subjectId: string } }) {
  const subject = subjects.find((s) => s.id === params.subjectId)

  if (!subject) {
    return <div>Materia não encontrada</div>
  }

  return (
    <div>
      <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
        &larr; Voltar
      </Link>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">{subject.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <Link href={`/subjects/${subject.id}/provas`}>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Provas</h2>
            <p className="text-sm sm:text-base text-gray-600">Acesso a provas passadas</p>
          </div>
        </Link>
        <Link href={`/subjects/${subject.id}/listas`}>
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Listas</h2>
            <p className="text-sm sm:text-base text-gray-600">Acesso a listas passadas</p>
          </div>
        </Link>
      </div>
    </div>
  )
}