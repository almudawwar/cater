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
    <div className="flex flex-col gap-4 items-stretch">
      {
        menus.length ? renderedMenus : <div className="text-center p-5">No results</div>
      }
    </div>
  )
}
