import getErrorMessage  from '@/utils/getErrorMessage'
import type { SerializedError } from '@reduxjs/toolkit'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import {Button} from "@/components/common/Buttons";
import EmptyCustomList from "@/components/emptyList/EmptyCustomList";
import BigLoading from "@/components/loading/BigLoading";
import React from "react";

interface Props {
  isError: boolean
  error?: FetchBaseQueryError | SerializedError
  refetch: () => void
  isFetching: boolean
  dataLength: number
  isSuccess: boolean
  emptyComponent?: React.ReactNode
  loadingComponent?: React.ReactNode
  children: React.ReactNode
}

const DataStateDisplay: React.FC<Props> = (props) => {
  const {
    isError,
    error,
    refetch,
    isFetching,
    dataLength,
    isSuccess,
    emptyComponent = <EmptyCustomList />,
    loadingComponent = <BigLoading />,
    children,
  } = props

  return (
    <section>
      {isError && error ? (
        <div className='py-20 mx-auto space-y-3 text-center w-fit'>
          <h5 className='text-xl'>خطایی رخ داده</h5>
          <p className='text-lg text-red-500'>{getErrorMessage(error)}</p>
          <Button className='mx-auto' onClick={refetch}>
            تلاش مجدد
          </Button>
        </div>
      ) : isFetching ? (
        <div className='px-3'>{loadingComponent}</div>
      ) : isSuccess && dataLength > 0 ? (
        <>{children}</>
      ) : isSuccess && dataLength === 0 ? (
        <>{emptyComponent}</>
      ) : null}
    </section>
  )
}

export default DataStateDisplay
