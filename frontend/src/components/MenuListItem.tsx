import { Menu } from "../api/Menu.type"
import { formatCurrency } from "../utils/currencyUtils"

interface MenuListItemProps {
  menu: Menu
}

export default function MenuListItem({ menu }: MenuListItemProps) {
  return (
    <div className="flex gap-4 bg-orange-300 p-5 rounded-lg items-center">
      <div className="flex flex-row justify-between border border-orange-700 p-3 rounded w-full">
        <span className="font-bold">{menu.title}</span>
        <span>{formatCurrency(menu)}</span>
      </div>
    </div>
  )
}
