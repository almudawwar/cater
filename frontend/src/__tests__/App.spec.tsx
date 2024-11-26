import { render, screen } from '@testing-library/react'
import App from "../App"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})
test('demo', () => {
  render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>)
  const title = screen.queryByText('Cater')
  expect(title).toBeVisible()
})
