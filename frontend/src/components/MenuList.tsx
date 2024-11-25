import { Menu } from "../api/Menu.type"
import MenuListItem from "./MenuListItem"

interface MenuListProps {
  menus: Menu[]
}

export default function MenuList({ menus }: MenuListProps) {
  const renderedMenus = menus.map(menu =>{
    return <MenuListItem menu={menu} key={menu.id} />
  })

  return (
    <div className="flex flex-col gap-4">
      {
        menus.length ? renderedMenus : <div>No results</div>
      }
    </div>
  )
}
