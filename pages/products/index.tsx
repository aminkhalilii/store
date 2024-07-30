import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useRouter} from 'next/router'

import {useGetProductsQuery} from '@/services'

import type {NextPage} from 'next'
import ClientLayout from "@/components/Layouts/ClientLayout";
import DataStateDisplay from "@/components/common/DataStateDisplay";
import EmptyCustomList from "@/components/emptyList/EmptyCustomList";
import ProductCard from "@/components/product/ProductCard";
import Pagination from "@/components/Pagination";
import Sort from "@/components/Sort";
import BigLoading from "@/components/loading/BigLoading";
import {useState} from "react";
import ProductsAside from "@/components/product/ProductsAside";
import {IProductsType} from "@/types/IProducts.type";

const ProductsHome: NextPage = () => {
    const {query} = useRouter();
    const page = query?.page ? parseInt(query.page as string, 10) : '';

    const {data , ...productsQueryProps} = useGetProductsQuery({...query, page});

    const getPaginatedData = (data:any, page:number, limit:number) => {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        return {
            data: data?.slice(startIndex, endIndex),
            total: data?.length,
            currentPage: page,
            totalPages: Math.ceil(data?.length / limit),
        };
    };

    const pageData = getPaginatedData(data?.products, page ? page : 1, 10);

    const [sortedData, setSortedData] = useState<IProductsType[]>([]);

    const handleSortChange = (sortedData: any) => {
        setSortedData(sortedData);
    };

    return (
        <>
            <Head>
                <title> فروشگاه</title>
            </Head>

            <ClientLayout>
                <main className='lg:px-3 lg:container lg:max-w-[1700px] xl:mt-32'>

                    <div className='px-1 lg:flex lg:gap-x-0 xl:gap-x-3'>
                        {!productsQueryProps.isLoading && (
                            <ProductsAside/>
                        )}
                        <div id='_products' className='w-full p-4 mt-3 '>
                            <div className='divide-y-2 '>
                                <div className='flex py-2 gap-x-3'>
                                    <Sort data={pageData?.data} onSortChange={handleSortChange}/>
                                </div>

                                <div className='flex justify-between py-2'>
                                    <span>همه کالاها</span>
                                    <span className='farsi-digits'>
                    {pageData?.data?.length ?? 0} کالا
                  </span>
                                </div>
                            </div>

                            <DataStateDisplay
                                {...productsQueryProps}
                                dataLength={pageData?.data?.length ? pageData?.data?.length : 0}
                                loadingComponent={<BigLoading/>}
                                emptyComponent={<EmptyCustomList/>}
                            >
                                {sortedData?.length > 0 ? (
                                    <section
                                        className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                                        {sortedData?.map((item) => (
                                            <ProductCard product={item} key={item?.title}/>
                                        ))}
                                    </section>
                                ) : (
                                    <section
                                        className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
                                        {pageData?.data?.map((item: any) => (
                                            <ProductCard product={item} key={item.id}/>
                                        ))}
                                    </section>
                                )}
                            </DataStateDisplay>
                        </div>
                    </div>

                    {pageData && pageData?.total > 10 && (
                        <div className='py-4 mx-auto lg:max-w-5xl'>
                            <Pagination
                                setSortedData={setSortedData}
                                pagination={pageData}
                                section='_products'
                                client
                            />
                        </div>
                    )}
                </main>
            </ClientLayout>
        </>
    )
}

export default dynamic(() => Promise.resolve(ProductsHome), {ssr: false})
