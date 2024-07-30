import QueryParams from "@/types/QueryParams.type";
import {IProductsType} from "@/types/IProducts.type";

export type GetProductsResult = {
  limit: number;
  skip: number;
  total: number;
  products:IProductsType
}
export type GetProductsQuery = QueryParams
