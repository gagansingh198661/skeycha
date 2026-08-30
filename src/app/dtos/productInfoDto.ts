import { imageDto } from "./imageDto";

export interface ProductInfoDto {
    productId: Number ;
    name: string; 
    category:string;
    imageList:imageDto[];
}
