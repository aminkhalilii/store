import DiscountProduct from "@/components/product/DiscountProduct";
import formatNumber from "@/utils/formatNumber";
import React from "react";

interface Props {
  singleProduct?: boolean
  inStock: number
  discount: number
  price: number
}

const ProductPrice: React.FC<Props> = (props) => {
  const { singleProduct, inStock, discount, price } = props

  return (
    <div className={`${singleProduct && 'flex flex-col-reverse'}`}>
      <div className='flex items-center'>
        <span className='text-sm text-gray-700 farsi-digits'>
          {formatNumber(price - (discount * price) / 100)}
        </span>
      </div>

      {discount > 0 && (
        <div>
          <span className='ml-2 text-sm text-gray-500 line-through farsi-digits'>
            {formatNumber(price)}
          </span>
          {singleProduct && discount > 0 && inStock !== 0 && (
            <DiscountProduct discount={discount} />
          )}
        </div>
      )}
    </div>
  )
}

export default ProductPrice
