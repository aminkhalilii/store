import { useRouter } from 'next/router';
import useChangeRoute from "@/hooks/useChangeRoute";
import useMediaQuery from "@/hooks/useMediaQuery";
import IPagination from "@/types/IPagination.type";
import React, {Dispatch, SetStateAction} from "react";
import {IProductsType} from "@/types/IProducts.type";

interface Props {
  pagination: IPagination;
  section: string;
  client?: boolean;
  setSortedData: Dispatch<SetStateAction<IProductsType[]>>
}

const Pagination: React.FC<Props> = ({ pagination, section, client,setSortedData }) => {
  const {
    currentPage,
    totalPages,
  } = pagination;

  const isDesktop = useMediaQuery('(min-width:1024px)');
  const changeRoute = useChangeRoute();
  const { query } = useRouter();

  const scrollToTop = () => {
    const element = document.getElementById(section);
    if (element) {
      const scrollY = client && isDesktop ? element.offsetTop - 115 : element.offsetTop;
      window.scrollTo(0, scrollY);
    }
  };

  const handleChangePage = (page: number) => {
    changeRoute({
      ...query,
      page: page.toString(),
    });
    scrollToTop();
  };

  return (
      <nav>
        <ul className='inline-flex justify-center items-center w-full px-10 gap-x-2 farsi-digits'>
          {[...Array(totalPages)].map((_, index) => (
              <li
                  key={index}
                  className={`w-8 h-8 p-1 text-center transition-colors border-2 border-transparent cursor-pointer hover:text-red-500 hover:border-red-500 rounded-2xl ${
                      currentPage === index + 1 ? 'bg-red-500 text-white' : ''
                  }`}
                  onClick={() => {
                    handleChangePage(index + 1);
                    setSortedData([])
                  }}
              >
                {index + 1}
              </li>
          ))}
        </ul>
      </nav>
  );
};

export default Pagination;
