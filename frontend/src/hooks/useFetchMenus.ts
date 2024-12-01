import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchMenus, FetchMenusParams } from "../api/fetchMenus"

export const useFetchMenus = ({ searchTerm, sortDirection }: FetchMenusParams) => {
  return useInfiniteQuery({
    queryKey: ['menus', { sortDirection, searchTerm }],
    queryFn: ({ pageParam }) => fetchMenus({ page: pageParam, searchTerm, sortDirection }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.next_page) {
        return lastPage.next_page
      }
      return undefined
    },
  })
}
