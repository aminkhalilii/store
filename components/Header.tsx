import {Login} from '@/icons'
import SearchModal from "@/components/SearchModal";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import {CiApple} from "react-icons/ci";
import {BiBasket} from "react-icons/bi";

const Header = () => {
  return (
      <header className='px-4 bg-white lg:shadow xl:fixed xl:z-20 xl:top-0 xl:left-0 xl:right-0'>
        <div className='container max-w-[1700px] lg:flex lg:py-2'>
          <div className='inline-flex items-center justify-between w-full border-b lg:border-b-0 lg:max-w-min lg:ml-8'>
            <Sidebar />
            <Link passHref href='/'>
              <CiApple className='w-24 h-14' data-testid='apple-icon' />
            </Link>
          </div>
          <div className='inline-flex items-center justify-between w-full py-2 border-b gap-x-10 lg:border-b-0'>
            <div className='flex flex-grow gap-x-7' data-testid='search-modal'>
              <SearchModal  />
            </div>
            <div className='inline-flex items-center gap-x-4'>
              <BiBasket data-testid='basket-icon' />
              <span className='hidden lg:block bg-gray-300 w-0.5 h-8' />
              <Login  data-testid='login-component' />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
