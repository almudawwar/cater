export type Menu = {
  title: string
  price: number
  currency: string
}

interface MenuListItemProps {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  return (
    <div className="flex flex-row justify-between border border-orange-700 p-3 rounded">
      <span className="font-bold">{menu.title}</span>
      <span className="">{menu.price}</span>
    </div>
  )
}
