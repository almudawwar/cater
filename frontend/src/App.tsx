import { useState } from 'react'
import MenuList from './components/MenuList'
import SearchInput from './components/SearchInput'
import { useFetchMenus } from './hooks/useFetchMenus'
import { Menu } from './api/Menu.type'



function App() {
  // const [sortDirection, setDortDirection] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading, fetchNextPage, hasNextPage } = useFetchMenus({ searchTerm })
  let menus: Menu[] = []

  if(data?.pages) {
    menus = data?.pages.map(page => page.menus).flat()
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-orange-200">
      <div className="container flex flex-col mx-auto h-max max-w-6xl p-5 gap-3">
        <div className="m-10">
          <h1 className="text-center text-5xl font-mono tracking-wide">Cater</h1>
        </div>
        <SearchInput onSubmit={(term) => setSearchTerm(term)} />
        {
          isLoading ?
          <div>Loading...</div> :
          <MenuList menus={menus} />
        }
        {
          hasNextPage &&
          <button onClick={() => fetchNextPage()}>Load more</button>
        }
      </div>
    </div>
  )
}

export default App
