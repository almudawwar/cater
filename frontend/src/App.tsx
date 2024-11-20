import { useState } from 'react'
import MenuList from './components/MenuList'
import SearchInput from './components/SearchInput'
import { useFetchMenus } from './hooks/useFetchMenus'
import { Menu } from './api/Menu.type'
import SortButton from './components/SortButton'
import LoadingList from './components/LoadingList'



function App() {
  const [sortDirection, setSortDirection] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isFetching, fetchNextPage, hasNextPage } = useFetchMenus({ searchTerm, sortDirection })
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
        <div className='flex gap-2 mx-auto'>
          <SearchInput onSubmit={(term) => setSearchTerm(term)} />
          <SortButton sortDirection={sortDirection} onClick={(dir) => setSortDirection(dir)} />
        </div>
        {
          isFetching && !menus.length ?
          <LoadingList /> :
          <MenuList menus={menus} />
        }
        {
          hasNextPage && !isFetching &&
          <button className="bg-orange-400 hover:bg-orange-300 active:bg-orange-300 rounded-md p-2 w-fit mx-auto" onClick={() => fetchNextPage()}>Load more</button>
        }
      </div>
    </div>
  )
}

export default App
