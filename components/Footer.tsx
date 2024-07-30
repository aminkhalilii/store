import {
  ArrowUp,
} from '@/icons'

export default function Footer() {
  return (
    <footer className='pt-4 mt-8 border-t border-gray-200 bg-gray-50'>
      <div className='px-3 lg:max-w-[1700px] space-y-8 mx-auto '>
        <div className='flex justify-between'>
          <div>
            <div className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-5'>
              <span>تلفن پشتیبانی ۲۱۱۲۱۲۱ - ۰۲۱</span>
              <span className='hidden lg:block bg-gray-300 w-[2px]' />
              <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
            </div>
          </div>
          <div className='min-w-max'>
            <button
              type='button'
              onClick={() => window.scrollTo(0, 0)}
              className='flex items-center px-3 py-1 border border-gray-300 rounded-md'
            >
              <span className='text-sm '>بازگشت به بالا</span>
              <ArrowUp className='text-gray-400 h-7 w-7' />
            </button>
          </div>
        </div>
        <div className='space-y-6 lg:flex lg:justify-between'>
          <div className='space-y-3 lg:max-w-2xl'>
            <h5 className='font-semibold text-black'>
              فروشگاه اینترنتی ، بررسی، انتخاب و خرید آنلاین
            </h5>
            <p className='text-justify text-gray-700'>
              یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
              متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
              مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی
              که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و
              توانسته از این طریق مشتریان ثابت خود را داشته باشد.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
