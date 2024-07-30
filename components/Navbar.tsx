import Link from "next/link";
import BigLoading from "@/components/loading/BigLoading";
import {Bars} from "@/icons";
import {useGetCategoriesQuery} from "@/services/category/apiSlice";

export default function Navbar() {
    const { categories, isLoading } = useGetCategoriesQuery(undefined, {
        selectFromResult: ({ data, isLoading }) => ({
            categories: data,
            isLoading,
        }),
    });

    return (
        <div className="hidden lg:block group">
            <button className="flex-center flex text-sm px-2 gap-x-1">
                <Bars className="icon" />
                دسته‌بندی کالاها
            </button>

            <div>
                <div className="flex">
                    <ul className="border-l-2 border-gray-100 w-72">
                        {isLoading ? (
                            <BigLoading />
                        ) : categories && categories.length > 0 ? (
                            categories.map((category) => {
                                return(
                                    <li
                                        key={category}
                                        className="w-full px-2 py-0.5 text-sm hover:bg-gray-100 group text-gray-700"
                                    >
                                        <Link
                                            href={`/products?category=${category}`}
                                            className="px-3 py-3 flex gap-x-1.5 items-center"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                )
                            })
                        ) : (
                            <li className="w-full px-2 py-0.5 text-sm text-gray-700">
                                No categories found.
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}