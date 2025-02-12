"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { subjects } from "../../data/subjects"
import { storage } from "../../data/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    subject: "",
    type: "exam",
    title: "",
    description: "",
    file: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (formData.file) {
        const fileName = `${Date.now()}-${formData.file.name}`
        const fileRef = ref(storage, `uploads/${fileName}`)
        await uploadBytes(fileRef, formData.file)
        const downloadUrl = await getDownloadURL(fileRef)
        console.log("Arquivo enviado:", downloadUrl)
      }
      
      alert("Envio realizado com sucesso!")
      router.push("/")
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error)
      alert("Erro ao enviar arquivo. Tente novamente.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Novo Envio</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Tipo */}
        <div>
          <label className="block mb-2">Tipo</label>
          <div className="space-x-4">
            <label>
              <input type="radio" name="type" value="exam" checked={formData.type === "exam"} onChange={handleChange} />{" "}
              Prova
            </label>
            <label>
              <input type="radio" name="type" value="activity" checked={formData.type === "activity"} onChange={handleChange} />{" "}
              Atividade
            </label>
          </div>
        </div>

        {/* Matéria */}
        <div>
          <label htmlFor="subject" className="block mb-2">
            Matéria
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Selecione uma matéria</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        {/* Upload do Arquivo */}
          <div>
          <label htmlFor="file" className="block mb-2">
            Arquivo (PDF/IMG)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Botão de Envio */}
        <div className="fixed bottom-8 right-8 flex items-center gap-4">
          <img src="/festin.png" alt="ícone" className="w-7 h-7" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            Envio
          </button>
        </div>

      </form>
    </div>
  )
}
  