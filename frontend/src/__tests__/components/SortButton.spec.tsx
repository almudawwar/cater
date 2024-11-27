import { fireEvent, render, screen } from "@testing-library/react"
import SortButton from "../../components/SortButton"

describe('SortButton', () => {
  const mockOnClick = vi.fn()

  it('renders text and icon', () => {
    render(<SortButton sortDirection="" onClick={mockOnClick} />)
    expect(screen.queryByText('Price')).toBeInTheDocument()
  })
  
  it('fires onClick callback', () => {
    const { rerender } = render(<SortButton sortDirection="" onClick={mockOnClick} />)
    
    fireEvent.click(screen.getByText('Price'))
    rerender(<SortButton sortDirection="asc" onClick={mockOnClick} />)
    fireEvent.click(screen.getByText('Price'))
    rerender(<SortButton sortDirection="desc" onClick={mockOnClick} />)
    fireEvent.click(screen.getByText('Price'))

    expect(mockOnClick).toHaveBeenCalledTimes(3)
    expect(mockOnClick).toHaveBeenNthCalledWith(1, 'asc')
    expect(mockOnClick).toHaveBeenNthCalledWith(2, 'desc')
    expect(mockOnClick).toHaveBeenNthCalledWith(3, '')
  })
})
