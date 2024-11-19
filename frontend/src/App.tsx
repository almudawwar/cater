import { useEffect, useState } from 'react'
import MenuList from './components/MenuList'
import SearchInput from './components/SearchInput'
import { Menu } from './api/Menu.type'
import { fetchMenus } from './api/fetchMenus'

function App() {
  const [menus, setMenus] = useState<Menu[]>([])

  useEffect(() => {
    const getMenus = async () => {
      const res = await fetchMenus({page: 0, sortDirection: '', searchTerm: ''})

      setMenus(res.data.menus)
    }

    getMenus()
  })

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-orange-200">
      <div className="container flex flex-col mx-auto h-max max-w-6xl p-5 gap-3">
        <div className="m-10">
          <h1 className="text-center text-5xl font-mono tracking-wide">Cater</h1>
        </div>
        <SearchInput />
        <MenuList menus={menus} />
      </div>
    </div>
  )
}

export default App
