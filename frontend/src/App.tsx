import MenuList from './components/MenuList'

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
      <div className="container mx-auto h-max max-w-6xl p-5">
        <div className="mt-10 mb-20">
          <h1 className="text-center text-5xl font-mono tracking-wide">Cater</h1>
        </div>
        <MenuList menus={menus} />
      </div>
    </div>
  )
}

export default App
