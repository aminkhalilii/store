import { useRouter } from 'next/router'
import QueryParams from "@/types/QueryParams.type";
import generateQueryParams from "@/utils/generateQueryParams";


interface Options {
  shallow?: boolean
}

export default function useChangeRoute(options: Options = { shallow: true }) {
  const { pathname, replace, query } = useRouter()

  const changeRoute = (newQueries: QueryParams): void => {
    const params = generateQueryParams({ ...query, ...newQueries })

    replace(`${pathname}?${params}`, undefined, { ...options })
  }

  return changeRoute
}
