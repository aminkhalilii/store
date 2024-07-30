import { useRouter } from 'next/router'
import { Check, Sort as SortIcon } from '@/icons'
import useDisclosure from "@/hooks/useDisclosure";
import useChangeRoute from "@/hooks/useChangeRoute";
import Modal from "@/components/common/Modal";
import {sorts} from "@/utils/constatns";
import {IProductsType} from "@/types/IProducts.type";
import React from "react";

interface Props {
  data: IProductsType[],
  onSortChange:(sortedData: any)=>void
}

const Sort: React.FC<Props> = ({data,onSortChange}) => {
  const { query } = useRouter()
  const sortQuery = Number(query?.sort)
  const pageQuery = Number(query?.page)

  const [isSort, sortHandlers] = useDisclosure()
  const changeRoute = useChangeRoute()

  const handleSortChange = (item:any) => {
    const sorted = [...data];
    if (item.value === 1) {
      sorted.sort((a, b) => a.price - b.price);
      changeRoute({
        page: pageQuery && pageQuery > 1 ? 1 : '',
        sort: item.value,
      })
    } else if (item.value === 2) {
      sorted.sort((a, b) => b.price - a.price);
      changeRoute({
        page: pageQuery && pageQuery > 1 ? 1 : '',
        sort: item.value,
      })
    }
    onSortChange(sorted);
  };


  return (
    <>
      <div className='xl:hidden'>
        <button
          type='button'
          className='flex items-center gap-x-1'
          onClick={sortHandlers.open}
        >
          <SortIcon className='w-6 h-6 icon' />
          <span>{sorts[sortQuery - 1]?.name}</span>
        </button>

        <Modal
          isShow={isSort}
          onClose={sortHandlers.close}
          effect='buttom-to-fit'
        >
          <Modal.Content
            onClose={sortHandlers.close}
            className='flex flex-col px-5 py-3 bg-white md:rounded-lg gap-y-5 '
          >
            <Modal.Header onClose={sortHandlers.close}>مرتب سازی</Modal.Header>
            <Modal.Body>
              <div className='divide-y'>
                {sorts.map((item, i) => (
                  <div key={i} className='flex items-center'>
                    <button
                      className='block w-full py-3 text-right text-gray-700'
                      type='button'
                      name='sort'
                      onClick={() => handleSortChange(item)}
                    >
                      {item.name}
                    </button>
                    {sortQuery === item.value && <Check className='icon' />}
                  </div>
                ))}
              </div>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </div>
      <div className='hidden xl:flex xl:gap-x-4 xl:items-center '>
        <div className='flex items-center gap-x-1'>
          <SortIcon className='icon ' />
          <span>مرتب سازی:</span>
        </div>
        {sorts.map((item, i) => (
          <button
            key={i}
            className={`py-0.5  text-sm ${
                sortQuery === item.value ? 'text-red-500' : 'text-gray-600'
            }`}
            type='button'
            name='sort'
            onClick={() => handleSortChange(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  )
}

export default Sort
