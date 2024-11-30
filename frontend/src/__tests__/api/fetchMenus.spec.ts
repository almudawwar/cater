import axios from "axios"
import AxiosMockAdapter from 'axios-mock-adapter'
import { apiUrls } from "../../constants"
import { fetchMenus } from "../../api/fetchMenus"

describe('#fetchMenus', () => {
  const mock = new AxiosMockAdapter(axios)

  it('returns menus and next_page', async () => {
    mock.onGet(apiUrls.base + apiUrls.menus).reply(
      200,
      {
        menus: [],
        next_page: null
      }
    )

    const res = await fetchMenus({})

    expect(res).toEqual({ menus: [], next_page: null })
  })

  describe('on error', () => {
    it('throws an error', async () => {
      mock.onGet(apiUrls.base + apiUrls.menus).networkError()

      try {
        await fetchMenus({});
      } catch (error) {
        // @ts-expect-error error has a message
        expect(error.message).toEqual('Network Error');
      }
    })
  })
})
