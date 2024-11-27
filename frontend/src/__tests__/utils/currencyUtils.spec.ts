import { Menu } from "../../api/Menu.type"
import { formatCurrency } from "../../utils/currencyUtils"

describe('#formatCurrency', () => {
  describe('with valid currency', () => {
    const menu: Menu = {
      id: 2,
      title: 'Test Menu',
      price: 45,
      currency: 'EUR'
    }

    it('returns price + symbol', () => {
      expect(formatCurrency(menu)).toBe('45€')
    })
  })
  
  describe('with invalid currency', () => {
    const menu: Menu = {
      id: 2,
      title: 'Test Menu',
      price: 45,
      currency: 'RPG'
    }

    it('returns just price', () => {
      expect(formatCurrency(menu)).toBe('45')
    })
  })
})
