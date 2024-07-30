import type {
  GetProductsQuery,
  GetProductsResult,
} from './types'
import generateQueryParams from "@/utils/generateQueryParams";
import baseApi from "@/services/baseApi";

export const productApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResult, GetProductsQuery>({
      query: ({ ...params }) => {
        function modifyQueryParams(queryParams:string) {
          if (queryParams.includes('category')) {
            return `/${queryParams.replace(/=/g, '/')}`;
          } else {
            return `?${queryParams}`;
          }
        }
        const queryParams = generateQueryParams(params)
        const modifiedQueryParams = modifyQueryParams(queryParams);

        return {
          url: `${process.env.NEXT_PUBLIC_API_URL}products${modifiedQueryParams}`,
          method: 'GET',
        }
      },
    }),

  }),
})

export const {
  useGetProductsQuery,
} = productApiSlice
