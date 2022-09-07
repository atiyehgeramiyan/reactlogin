import { Get, Post, Put } from "../Adapters/Api";

export const getAllProductListAction={url:"Product",type:"get"};
export const getSearchProductListAction={url:"Product/Search",type:"get"};
export const registerProductAction={url:"Product",type:"post"};
export const updateProductAction={url:"Product",type:"put"};
export const findProductAction={url:"Product/find",type:"get"};

export const registerProductPictureAction={url:"Product/AddProductToPicture",type:"post"};
export const getProductPicturesListAction={url:"Product/picture",type:"get"};

export const registerProductCategoryAction={url:"Product/AddProductToCategory",type:"post"};
export const getProductCategoriesListAction={url:"Product/categories",type:"get"};



export default class ProductService
{
    searchAllProducts()
    {
       return Get(getAllProductListAction);
    }
    searchProducts(productFilter)
    {
        return Get(getSearchProductListAction,productFilter);
    }

    registerProduct(product)
    {
        return Post(registerProductAction,product);
    }
    updateProduct(product)
    {
       return Put(updateProductAction,product);
    }
    find(id)
    {
        return Get({url:findProductAction.url+"/"+id});
    }

    registerProductPicture(productPictrue){
        return Post(registerProductPictureAction,productPictrue);
    }

    getPictures(id)
    {
        return Get({url:getProductPicturesListAction.url+"/"+id});
    }


    registerProductCategory(productCategory){

        return Post(registerProductCategoryAction,productCategory);
    }
    getCategores(id)
    {
        return Get({url:getProductCategoriesListAction.url+"/"+id});
    }
}