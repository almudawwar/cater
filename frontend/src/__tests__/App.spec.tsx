import { render, screen } from '@testing-library/react'
import App from "../App"
import * as fetchMenusHooks from '../hooks/useFetchMenus'
import { mockIsIntersecting } from 'react-intersection-observer/test-utils'
import {
  setupIntersectionMocking,
  resetIntersectionMocking,
} from "react-intersection-observer/test-utils"


const mockedMenus = [
  { id: 1, title: 'Test Menu', price: 45, currency: 'EUR' },
  { id: 2, title: 'Another Menu', price: 33, currency: 'EUR' },
  { id: 3, title: '333', price: 33, currency: 'EUR' },
  { id: 4, title: '4444', price: 33, currency: 'EUR' },
  { id: 5, title: 'Starting 5', price: 33, currency: 'EUR' },
  { id: 6, title: 'Starting 5', price: 33, currency: 'EUR' },
  { id: 7, title: 'Starting 5', price: 33, currency: 'EUR' },
  { id: 8, title: 'Starting 5', price: 33, currency: 'EUR' },
  { id: 9, title: 'Starting 5', price: 33, currency: 'EUR' },
  { id: 10, title: 'Starting 5', price: 33, currency: 'EUR' },
]

describe('App', () => {
  const menusSpy = vi.spyOn(fetchMenusHooks, 'useFetchMenus')
  
  // Mock IntersectionObserver for infinite scroll purposes
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('renders title and components', () => {
    menusSpy.mockReturnValue({
      data: { pages: [{menus: mockedMenus, next_page: null}] },
      isFetching: false,
      hasNextPage: true,
    })

    render(<App />)
    const title = screen.queryByText('Cater')
    expect(title).toBeVisible()
    expect(screen.queryByText('Price')).toBeVisible()
    expect(screen.queryByText('Test Menu')).toBeVisible()
    expect(screen.queryByText('Another Menu')).toBeVisible()
  })

  describe('While loading', () => {
    it('renders LoadingList', () => {
      menusSpy.mockReturnValue({
        data: { pages: [{menus: [], next_page: null}] },
        isFetching: true,
        hasNextPage: false,
      })

      render(<App />)
      expect(screen.queryByText('Loading...')).toBeInTheDocument()
    })
  })

  describe('when user scrolls to bottom', () => {
    beforeEach(() => {
      setupIntersectionMocking(vi.fn);
    });
    
    afterEach(() => {
      resetIntersectionMocking();
    });

    it('fetches more menus', async () => {
      const mockFetch = vi.fn()

      menusSpy.mockReturnValue({
        data: { pages: [{menus: mockedMenus, next_page: 2}] },
        isFetching: false,
        hasNextPage: true,
        fetchNextPage: mockFetch
      })

      const { getByTestId } = render(<App />)
      mockIsIntersecting(getByTestId('load-more-button'), true)      

      expect(mockFetch).toHaveBeenCalledOnce()
    })
  })
})
