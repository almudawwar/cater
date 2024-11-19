import { Menu } from "../api/Menu.type"
import MenuListItem from "./MenuListItem"

interface MenuListProps {
  menus: Menu[]
}

export default function MenuList({ menus }: MenuListProps) {
  return (
    <div className="flex flex-col gap-4 bg-orange-300 px-5 py-7 rounded-lg">
      {
        menus.map(menu =>{
          return <MenuListItem menu={menu} key={menu.id} />
        })
      }
    </div>
  )
}
