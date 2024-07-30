import { useEffect } from 'react'
import Link from 'next/link'

import { Disclosure } from '@headlessui/react'

import  useDisclosure  from '@/hooks/useDisclosure'

import { ArrowDown, ArrowLeft, Bars } from '@/icons'
import {useGetCategoriesQuery} from "@/services/category/apiSlice";
import BigLoading from "@/components/loading/BigLoading";

export default function Sidebar() {
  const [isSidebar, sidebarHandlers] = useDisclosure()

  const { categoriesList, isLoading } = useGetCategoriesQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      categoriesList: data,
      isLoading,
    }),
  })

  const handleClose = () => sidebarHandlers.close()

  useEffect(() => {
    if (isSidebar) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isSidebar])

  return (
    <>
      <button
        className='p-1 lg:hidden'
        type='button'
        onClick={sidebarHandlers.open}
      >
        <Bars className='icon' />
      </button>
      <div
        className={`w-full h-screen fixed duration-200 z-10 top-0 lg:hidden ${
          isSidebar ? 'right-0' : '-right-full'
        } `}
      >
        <div
          className={`${
            isSidebar
              ? 'opacity-100 visible duration-300 delay-200'
              : 'opacity-0 invisible '
          }  bg-gray-100/50  z-10 w-full h-full`}
          onClick={sidebarHandlers.close}
        />

        <div className='overflow-y-auto absolute py-4 top-0 right-0 z-20 w-3/4 h-screen max-w-sm space-y-4 bg-white'>
          <h5 className='p-3 border-t-2  border-gray-200'>دسته‌بندی کالاها</h5>
          {isLoading ? (<BigLoading/>) : categoriesList ? (
            <div>
              {categoriesList &&
                categoriesList.map((category:string) => (
                  <Disclosure key={category}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex items-center justify-between px-4 py-2 w-full !mt-0'>
                          <span
                            className={`pl-3 font-semibold tracking-wide ${
                              open ? 'text-red-400' : 'text-gray-600'
                            }`}
                          >
                            {category}
                          </span>

                          <ArrowDown
                            className={` ${
                              open
                                ? 'rotate-180 transform text-red-400 '
                                : 'text-gray-700'
                            } w-7 h-7 bg-gray-50 rounded-2xl`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className=' text-sm bg-gray-100 text-gray-500 !mt-0'>
                          <Link
                            href={`/products?category=${category}`}
                            className='py-2 text-gray-500 inline-flex items-center text-sm max-w-max pr-7'
                            onClick={handleClose}
                          >
                            تمام موارد این دسته
                            <ArrowLeft className='text-gray-500 icon' />
                          </Link>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
