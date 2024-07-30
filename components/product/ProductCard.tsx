import { Star } from '@/icons'
import ResponsiveImage from "@/components/common/ResponsiveImage";
import truncate from "@/utils/truncate";
import DiscountProduct from "@/components/product/DiscountProduct";
import ProductPrice from "@/components/product/ProductPrice";
import React from "react";


const ProductCard: React.FC<any> = (props) => {
  const { product, slide } = props
  return (
    <div className='cursor-pointer'>
      <article
        className={`pt-2 pb-3 border-b border-gray-100 sm:h-[540px] xl:h-[470px] sm:px-3 ${
          !slide && 'sm:border sm:hover:shadow-3xl'
        }`}
      >
        <div className='flex items-center gap-4 sm:flex-col'>
          <div className='sm:flex sm:p-1 '>
            <ResponsiveImage
              dimensions='h-[28vw] w-[26vw] sm:w-56 sm:h-60 sm:mb-8 xl:w-44 xl:h-48'
              src={product.images[0]}
              alt={product.title}
            />
          </div>
          <div className='flex-1 space-y-5 sm:w-full'>
            <h2 className='hidden text-xs leading-6 text-gray-800 break-all h-14 xl:block'>
              {truncate(product.title, 70)}
            </h2>
            <h2 className='text-xs leading-6 text-gray-800 h-14 xl:hidden'>
              {truncate(product.title, 90)}
            </h2>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-1'>
                <span className='farsi-digits'>
                  {product.rating.toFixed(1)}
                </span>
                <Star className='icon text-amber-400' />
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                {product.discountPercentage > 0 && product.stock !== 0 && (
                  <DiscountProduct discount={product.discountPercentage} />
                )}
              </div>
              {product.stock !== 0 ? (
                <ProductPrice
                  inStock={product.stock}
                  discount={product.discountPercentage}
                  price={product.price}
                />
              ) : (
                <span className='h-12 my-0.5'>ناموجود</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProductCard
