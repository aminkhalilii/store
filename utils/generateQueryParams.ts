import QueryParams from "@/types/QueryParams.type";

const generateQueryParams = (params: QueryParams) => {
  const queryParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value) queryParams.set(key, value as string)
  })

  return queryParams.toString()
}
export default generateQueryParams
