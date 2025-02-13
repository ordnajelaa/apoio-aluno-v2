"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { subjects } from "../../data/subjects"
import { storage } from "../../data/firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import confetti from "canvas-confetti"

export default function SubmitPage() {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<string>("")
  const [formData, setFormData] = useState({
    subject: "",
    type: "exam",
    title: "",
    description: "",
    file: null as File | null,
    fileUrl: "",
  })

  const triggerConfetti = () => {
    // Cores personalizadas para o confete
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
    
    // Confete do lado esquerdo
    confetti({
      particleCount: 100,
      spread: 70,
      colors: colors,
      origin: { x: 0.1, y: 0.8 },
      gravity: 0.8,
      startVelocity: 45
    })
    
    // Confete do lado direito
    confetti({
      particleCount: 100,
      spread: 70,
      colors: colors,
      origin: { x: 0.9, y: 0.8 },
      gravity: 0.8,
      startVelocity: 45
    })

    // Confete no meio (com delay)
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        colors: colors,
        origin: { x: 0.5, y: 0.8 },
        gravity: 0.8,
        startVelocity: 45
      })
    }, 250)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.file) {
      alert("Por favor, selecione um arquivo")
      return
    }

    try {
      setUploading(true)
      setUploadProgress("Iniciando upload...")

      const timestamp = new Date().getTime()
      const fileName = `${timestamp}-${formData.file.name}`
      
      // Criar referência com estrutura de pastas organizada
      const storageRef = ref(storage, `${formData.subject}/${formData.type}/${fileName}`)
      
      setUploadProgress("Enviando arquivo...")
      
      const snapshot = await uploadBytes(storageRef, formData.file)
      const downloadUrl = await getDownloadURL(snapshot.ref)
      
      setUploadProgress("Arquivo enviado com sucesso!")
      
      setFormData(prev => ({
        ...prev,
        fileUrl: downloadUrl
      }))

      console.log("Dados do formulário:", {
        ...formData,
        fileUrl: downloadUrl
      })

      // Disparar confete e aguardar antes de redirecionar
      triggerConfetti()
      
      setTimeout(() => {
        router.push("/")
      }, 2500)

    } catch (error) {
      console.error("Erro no upload:", error)
      alert(error instanceof Error ? error.message : "Erro ao enviar arquivo")
    } finally {
      setUploading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      
      if (!allowedTypes.includes(file.type)) {
        alert('Por favor, envie apenas arquivos PDF, DOC, DOCX, JPG ou PNG')
        return
      }
      
      const maxSize = 5 * 1024 * 1024
      if (file.size > maxSize) {
        alert('O arquivo deve ter menos que 5MB')
        return
      }
      
      setFormData((prev) => ({ ...prev, file }))
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Novo Envio</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tipo */}
        <div>
          <label className="block mb-2">Tipo</label>
          <div className="space-x-4">
            <label>
              <input
                type="radio"
                name="type"
                value="exam"
                checked={formData.type === "exam"}
                onChange={handleChange}
              />{" "}
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
            disabled={uploading}
          />
          {uploadProgress && (
            <div className="mt-2 text-sm text-blue-600">
              {uploadProgress}
            </div>
          )}
        </div>

        {/* Botão de Envio */}
        <div className="fixed bottom-8 right-8 flex items-center gap-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors disabled:bg-gray-400"
            disabled={uploading}
          >
            {uploading ? "Enviando..." : "Envio"}
          </button>
        </div>
      </form>
    </div>
  )
}