import { useState } from "react"

interface SearchInputProps {
  onSubmit: (term: string) => void
}

const iconEnter = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 absolute right-1 top-3">
  <path fillRule="evenodd" d="M13.25 2a.75.75 0 0 0-.75.75v6.5H4.56l.97-.97a.75.75 0 0 0-1.06-1.06L2.22 9.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 0 0 1.06-1.06l-.97-.97h8.69A.75.75 0 0 0 14 10V2.75a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
</svg>


export default function SearchInput({ onSubmit }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        placeholder="Search menus..."
        className="rounded p-2 bg-orange-100"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        data-testid="search-input"
      />
      {iconEnter}
    </form>
  )
}