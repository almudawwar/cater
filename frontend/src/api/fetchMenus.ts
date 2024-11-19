import axios from "axios";
import { apiUrls } from "../constants";

interface fetchProps {
  page: number | null
  sortDirection: string | null
  searchTerm: string | null
}

export  function fetchMenus({ page, sortDirection, searchTerm }: fetchProps) {
  return axios.get(apiUrls.base + apiUrls.menus,
    {
      params: {
        page,
        sort_direction: sortDirection,
        search_term: searchTerm,
      }
    }
  )
}
