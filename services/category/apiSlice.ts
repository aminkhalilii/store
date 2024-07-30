import baseApi from '@/services/baseApi'


import type {
  GetCategoriesResult,
} from './types'

export const categoryApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<GetCategoriesResult, void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}products/categories`,
        method: 'GET',
      }),
    }),

  }),
})

export const {
  useGetCategoriesQuery,
} = categoryApiSlice
