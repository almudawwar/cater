import MenuList from './components/MenuList'
import SearchInput from './components/SearchInput'

const menus = [
  {
    title: 'Menu 2',
    price: 34.5,
    currency: 'EUR',
  },
  {
    title: 'Menu 3',
    price: 34.5,
    currency: 'EUR',
  },
  {
    title: 'Menu With even bigger name',
    price: 34.5,
    currency: 'EUR',
  },
  {
    title: 'Menu Middle',
    price: 34.5,
    currency: 'EUR',
  },
]

function App() {
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
