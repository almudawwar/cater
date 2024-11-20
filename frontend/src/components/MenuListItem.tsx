import { Menu } from "../api/Menu.type"
import { formatCurrency } from "../utils/currencyUtils"

interface MenuListItemProps {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  return (
    <div className="flex flex-row justify-between border border-orange-700 p-3 rounded w-full">
      <span className="font-bold">{menu.title}</span>
      <span className="">{formatCurrency(menu)}</span>
    </div>
  )
}
