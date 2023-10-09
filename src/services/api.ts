import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getProds: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdsQuery } = api
export default api
