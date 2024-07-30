export interface IProductsType {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    length: number;
    map(callbackfn: (value: any, index: number, array: any[]) => any, thisArg?: any): any[];
}
