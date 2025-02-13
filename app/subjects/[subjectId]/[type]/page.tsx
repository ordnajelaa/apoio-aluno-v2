"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { subjects } from "../../../../data/subjects"
import { storage } from "../../../../data/firebase"
import { ref, listAll, getDownloadURL } from "firebase/storage"

interface FileItem {
  name: string;
  url: string;
}

export default function TypePage({ params }: { params: { subjectId: string; type: string } }) {
  const subject = subjects.find((s) => s.id === params.subjectId)
  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)

  const typeTitle = params.type === 'exam' ? 'Provas' : 'Atividades'

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const filesRef = ref(storage, `${params.subjectId}/${params.type}`)
        const filesResult = await listAll(filesRef)
        const filesPromises = filesResult.items.map(async (item) => ({
          name: item.name,
          url: await getDownloadURL(item)
        }))

        const filesData = await Promise.all(filesPromises)
        setFiles(filesData)
      } catch (error) {
        console.error("Erro ao buscar arquivos:", error)
      } finally {
        setLoading(false)
      }
    }

    if (subject) {
      fetchFiles()
    }
  }, [params.subjectId, params.type, subject])

  if (!subject) {
    return <div>Matéria não encontrada</div>
  }

  return (
    <div className="p-6">
      <Link href={`/subjects/${subject.id}`} className="text-green-600 hover:underline mb-4 inline-block">
        &larr; Voltar para {subject.name}
      </Link>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{typeTitle} de {subject.name}</h1>
        <Link 
          href="/submit" 
          className="bg-green-600 text-white px-4 py-2 rounded shadow-lg hover:bg-green-700 transition-colors"
        >
          Novo Envio
        </Link>
      </div>

      {loading ? (
        <div>Carregando arquivos...</div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
          {files.length > 0 ? (
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li 
                  key={index} 
                  className="p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100"
                >
                  <a 
                    href={file.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    {file.name.substring(14)} {/* Remove o timestamp do nome */}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Nenhum arquivo enviado ainda</p>
              <Link 
                href="/submit" 
                className="text-green-600 hover:underline"
              >
                Fazer primeiro envio
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}