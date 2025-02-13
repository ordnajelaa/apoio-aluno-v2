"use client"

import Link from "next/link"
import { subjects } from "../../../data/subjects"

export default function SubjectPage({ params }: { params: { subjectId: string } }) {
  const subject = subjects.find((s) => s.id === params.subjectId)

  if (!subject) {
    return <div>Matéria não encontrada</div>
  }

  return (
    <div className="p-6">
      <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
        &larr; Voltar para Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">{subject.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href={`/subjects/${subject.id}/exam`}>
          <div className="bg-white rounded-lg p-6 hover:scale-105 transition-all duration-300 h-full flex flex-col shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
            <h2 className="text-xl font-semibold mb-2">Provas</h2>
            <p className="text-gray-600">Acesso a provas passadas</p>
          </div>
        </Link>
        <Link href={`/subjects/${subject.id}/activity`}>
          <div className="bg-white rounded-lg p-6 hover:scale-105 transition-all duration-300 h-full flex flex-col shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]">
            <h2 className="text-xl font-semibold mb-2">Atividades</h2>
            <p className="text-gray-600">Acesso a atividades passadas</p>
          </div>
        </Link>
      </div>

      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex items-center gap-2 sm:gap-4 animate-bounce">
        <Link href="/submit" className="bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded shadow-lg hover:bg-green-700 transition-colors">
          Novo Envio
        </Link>
      </div>
    </div>
  )
}