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
      <h1 className="text-3xl font-bold mb-8">Submit New Material</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="subject" className="block mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a subject</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-2">Type</label>
          <div className="space-x-4">
            <label>
              <input type="radio" name="type" value="exam" checked={formData.type === "exam"} onChange={handleChange} />{" "}
              Exam
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="activity"
                checked={formData.type === "activity"}
                onChange={handleChange}
              />{" "}
              Activity
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="title" className="block mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="file" className="block mb-2">
            File Upload (PDF/DOC)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Submit
        </button>
      </form>
    </div>
  )
}