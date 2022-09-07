import ProductService from '../Services/ProductService'
import { errorMessage, successMessage } from '../utils/alert/alert';
import MainStore from '../Stores/Redux/MainStore'
import { useDispatch } from 'react-redux';
import PictureService from '../Services/PictureService';

const productService = new ProductService();
const picureService = new PictureService();
const ProductViewService = () => {

    const dispatch = useDispatch();

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
        const { productFilterModel } = MainStore.getState().product;

        try {
            let list = await productService.searchProducts(productFilterModel);
            dispatch({ type: "setProductListModel", payload: list });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const RegisterProduct = async () => {

        const { productModel } = MainStore.getState().product;

        try {
            if (productModel.id === 0) {
                const product = await productService.registerProduct(productModel);
                productModel.id = product.id;

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

    const FindProduct = async (id) => {
        try {
            let product = await productService.find(id);

            dispatch({
                type: "setProductModel", payload:
                    { id: product.id, productName: product.productName, price: product.price, sku: product.sku, stockQuantity: product.stockQuantity, publishDate: product.localPublishDate }
            });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const NewProduct = async () => {
        dispatch({ type: "newProductModel" });
    }

    const selectImage = (file) => {
        dispatch({ type: "setPictureModel", payload: file });
    }

    const registerProductPicture = async () => {
        const { pictureModel,productPictureModel,productModel } = MainStore.getState().product;
        try {
           let pictureID= await picureService.registerPicture(pictureModel);
           productPictureModel.pictureID=pictureID;
           productPictureModel.productID=productModel.id;
           await productService.registerProductPicture(productPictureModel);
           await getProdcutPictures();
           successMessage();
           
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const getProdcutPictures=async()=>
    {
        const { productModel } = MainStore.getState().product;

        try {
           
         const list=  await productService.getPictures(productModel.id);
         dispatch({type:"setProductPicturesListModel",payload:list});
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const RegisterProductCategory=async ()=>{
        const { productModel ,productCategoryModel} = MainStore.getState().product;
        try {
            productCategoryModel.productID=productModel.id;
           await productService.registerProductCategory(productCategoryModel);
           await getProdcutCategories();
           successMessage();
           
        }
        catch (err) {
            errorMessage(err.message);
        }
    }


    const getProdcutCategories=async()=>
    {
        const { productModel } = MainStore.getState().product;

        try {
           
         const list=  await productService.getCategores(productModel.id);
         dispatch({type:"setProductCategoriesListModel",payload:list});
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    return { SearchAllProducts,getProdcutCategories,RegisterProductCategory, SearchProducts, registerProductPicture, RegisterProduct, FindProduct, NewProduct, selectImage,getProdcutPictures };
}

export default ProductViewService;