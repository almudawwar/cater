import axios from "axios";
import { apiUrls } from "../constants";

export interface FetchMenusParams {
  page?: number
  sortDirection?: string
  searchTerm?: string
}

export async function fetchMenus({ page, sortDirection, searchTerm }: FetchMenusParams) {
  const { data } =  await axios.get(apiUrls.base + apiUrls.menus,
    {
      params: {
        page,
        sort_direction: sortDirection,
        search_term: searchTerm,
      }
    }
  )

  return data
}
