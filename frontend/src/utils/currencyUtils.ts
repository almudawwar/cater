import { Menu } from "../api/Menu.type";

const currencies = [
  {
    code: 'EUR',
    symbol: '€',
    name: 'Euro'
  }
]
export function formatCurrency({ price, currency }: Menu) {
  return price + (currencies.find(curr => curr.code === currency)?.symbol || '')
}
