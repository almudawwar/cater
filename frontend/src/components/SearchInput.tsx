import { useState } from "react"

interface SearchInputProps {
  onSubmit: (term: string) => void
}

export default function SearchInput({ onSubmit }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <input
        placeholder="Search menus..."
        className="rounded p-2 bg-orange-100"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}