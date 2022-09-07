import { createContext, useReducer } from "react";
import ProductService from "../../Services/ProductService";
import ProductReducer from "../Reducers/ProductReducer";
import { errorMessage, successMessage } from '../../utils/alert/alert'
import { getNowPersianDate } from "../../utils/PersianDate";

const initialProductstate = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "",isAvailable:true, FromPrice: 0, ToPrice: 0, FromPublishDate: getNowPersianDate(), ToPublishDate: getNowPersianDate() },
    productModel: { id: 0, productName: "", price: 0, sku: "", stockQuantity: 0, publishDate: getNowPersianDate() },
} 

export const ProductContext = createContext(null);

const productService = new ProductService();

const ProductProvider = ({ children }) => {

    const [productState, dispatch] = useReducer(ProductReducer, initialProductstate);

    const { productListModel, productFilterModel, productModel } = productState;


    const SearchAllProducts = async () => {
        try {
            let list = await productService.searchAllProducts();
            dispatch({ type: "setProductListModel", payload: list });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const SearchProducts = async () => {
       
        try {
            let list = await productService.searchProducts(productFilterModel);
            dispatch({ type: "setProductListModel", payload: list });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const RegisterProduct = async () => {
        try {
            if (productModel.id === 0) {
                let id = await productService.registerProduct(productModel);
                productModel.id = id;
            }
            else {
                await productService.updateProduct(productModel);
            }
            successMessage();
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const FindProduct=async (id)=>
    {
        try {
         let product= await productService.find(id);
         
         dispatch({ type: "setProductModel", payload: 
         { id: product.id, productName:product.productName, price: product.price, sku: product.sku, stockQuantity:product.stockQuantity, publishDate: product.localPublishDate } });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const NewProduct=async()=>{
        dispatch({type:"newProductModel"});
    }

    return <ProductContext.Provider value={{
        productListModel, productFilterModel,productModel
        , SearchAllProducts, SearchProducts, RegisterProduct,FindProduct,NewProduct
    }}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider;