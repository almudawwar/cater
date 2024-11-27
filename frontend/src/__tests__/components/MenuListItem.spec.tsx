import { render, screen } from "@testing-library/react";
import MenuListItem from "../../components/MenuListItem";
import { Menu } from "../../api/Menu.type";

describe('item details', () => {
  const menu: Menu = {
    id: 2,
    title: 'Test Menu',
    price: 45,
    currency: 'EUR'
  }
  
  it('renders title and price', () => {
    render(<MenuListItem menu={menu} />)
    expect(screen.queryByText(menu.title)).toBeInTheDocument()
    expect(screen.queryByText(menu.price + '€')).toBeInTheDocument()
  })
})
