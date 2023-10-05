import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app'
  }),
  endpoints: (builder) => ({
    getProds: builder.query<Produto[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdsQuery } = api
export default api
