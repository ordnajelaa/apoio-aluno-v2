"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { subjects } from "../../data/subjects"

export default function SubmitPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    subject: "",
    type: "exam",
    title: "",
    description: "",
    file: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Submitted:", formData)
    // Mock successful submission
    alert("Submission successful!")
    router.push("/")
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
        <div>
          <label className="block mb-2">Tipo</label>
          <div className="space-x-4">
            <label>
              <input type="radio" name="type" value="exam" checked={formData.type === "exam"} onChange={handleChange} />{" "}
              Prova
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="activity"
                checked={formData.type === "activity"}
                onChange={handleChange}
              />{" "}
              Atividade
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="title" className="block mb-2">
            Titulo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Ex: Prova 1, Lista 2, etc."
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">
            Descrição
          </label>
          <textarea
  id="description"
  name="description"
  value={formData.description}
  onChange={handleChange}
  className="w-full p-2 border rounded"
  rows={4}
  required
  placeholder="Inclua: Ano em que o conteúdo foi ministrado, Nome do professor e outras informações relevantes."
></textarea>
        </div>
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
        <div className="fixed bottom-8 right-8 flex items-center gap-4">
  <img 
    src="/festin.png" 
    alt="ícone" 
    className="w-7 h-7"
  />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
          Envio
        </button>
      </div>
      </form>
    </div>
  )
}