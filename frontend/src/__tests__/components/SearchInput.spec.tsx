import { render } from "@testing-library/react"
import SearchInput from "../../components/SearchInput"
import userEvent from '@testing-library/user-event'
import { keyboard } from "@testing-library/user-event/dist/cjs/setup/directApi.js"


describe('SearchInput', () => {
  const mockOnSubmit = vi.fn()
  const user = userEvent.setup()

  it('calls onSubmit when user presses Enter', async () => {
    const { getByTestId } = render(<SearchInput onSubmit={mockOnSubmit} />)
    const input = getByTestId('search-input')

    await user.click(input)
    await keyboard('{Enter}')
    expect(mockOnSubmit).toHaveBeenCalledOnce()

    await user.type(input, 'Al-Mudawwar')
    await keyboard('{Enter}')
    expect(mockOnSubmit).toHaveBeenCalledWith('Al-Mudawwar')
  })
})
