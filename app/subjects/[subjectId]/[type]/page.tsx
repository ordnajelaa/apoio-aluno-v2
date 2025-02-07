import Link from "next/link"
import { subjects } from "../../../../data/subjects"
import { exams, activities } from "../../../../data/materials"

export default function MaterialsPage({ params }: { params: { subjectId: string; type: "provas" | "atividades" } }) {
  const subject = subjects.find((s) => s.id === params.subjectId)
  const materials = params.type === "provas" ? exams : activities

  if (!subject) {
    return <div>Subject not found</div>
  }

  return (
    <div>
      <Link href={`/subjects/${params.subjectId}`} className="text-green-600 hover:underline mb-4 inline-block">
        &larr; Back to {subject.name}
      </Link>
      <h1 className="text-3xl font-bold mb-8">
        {subject.name} - {params.type.charAt(0).toUpperCase() + params.type.slice(1)}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials
          .filter((m) => m.subjectId === params.subjectId)
          .map((material) => (
            <div key={material.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{material.title}</h2>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <a
                href={material.fileUrl}
                className="text-green-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          ))}
      </div>
      <div className="fixed bottom-8 right-8 flex items-center gap-4">
  <img 
    src="/foguinho3.gif" 
    alt="ícone" 
    className="w-7 h-7"
  />
  <Link 
    href="/submit"
    className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors"
  >
    Novo Envio
  </Link>
</div>
    </div>
  )
}