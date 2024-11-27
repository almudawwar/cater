import { render, screen } from "@testing-library/react";
import MenuList from "../../components/MenuList";
import { Menu } from "../../api/Menu.type";

describe('MenuList', () => {
  describe('without menus', () => {
    it('renders No Results', () => {
      render(<MenuList menus={[]} />)
      expect(screen.queryByText('No results')).toBeInTheDocument()

    })
  })
  
  describe('with menus', () => {
    const menus: Menu[] = [
      { id: 1, title: 'Test Menu', price: 45, currency: 'EUR' },
      { id: 2, title: 'Another Menu', price: 33, currency: 'EUR' },
    ]

    it('renders menus', () => {
      render(<MenuList menus={menus} />)
      
      menus.map(menu => {
        expect(screen.queryByText(menu.title)).toBeInTheDocument()
        expect(screen.queryByText(menu.price + '€')).toBeInTheDocument()
      })
    })
  })
})
