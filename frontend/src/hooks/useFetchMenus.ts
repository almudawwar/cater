import { useQuery } from "@tanstack/react-query"
import { fetchMenus, FetchMenusParams } from "../api/fetchMenus"

export const useFetchMenus = ({ page, searchTerm, sortDirection }: FetchMenusParams) => {
  return useQuery({
    queryKey: ['menus', { page, sortDirection, searchTerm }],
    queryFn: () => fetchMenus({ page, sortDirection, searchTerm })
  })
}
