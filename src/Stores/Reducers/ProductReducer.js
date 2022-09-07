import { getNowPersianDate } from "../../utils/PersianDate";

const initialProductstate = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "", isAvailable: true, FromPrice: 0, ToPrice: 0, FromPublishDate: getNowPersianDate(), ToPublishDate: getNowPersianDate() },
    productModel: { id: 0, productName: "", price: 0, sku: "", stockQuantity: 0, publishDate: getNowPersianDate() },
    pictureModel: { file: null },
    productPictureModel: { pictureID: 0, productID: 0, displayOrder: 0 },
    productPicturesListModel: [],
    productCategoryModel: { productID: 0, categoryID: 0 },
    productCategoriesListModel: []
}

const ProductReducer = (state = initialProductstate, action) => {
    switch (action.type) {
        case "setProductListModel":
            {
                return { ...state, productListModel: action.payload }
            }
        case "setProductModel":
            {
                return { ...state, productModel: action.payload }
            }
        case "newProductModel":
            {
                return { ...state, productModel: { id: 0, productName: "", price: 0, sku: "", stockQuantity: 0, publishDate: getNowPersianDate() } }
            }
        case "setPictureModel":
            {
                return { ...state, pictureModel: { file: action.payload } }
            }
        case "setProductPictureModel":
            {
                return { ...state, productPictureModel: { pictureID: 0, ProductID: 0, displayOrder: 0 } }
            }
        case "setProductPicturesListModel":
            {
                return {
                    ...state, productPicturesListModel: action.payload.map((value) => {
                        return { ...value, url: "https://shop.devsharp.ir/api/Picture/" + value.pictureID }
                    })


                }
            }
        case "setProductCategoriesListModel":
            {
                return { ...state, productCategoriesListModel: action.payload }
            }
        default:
            {
                return state;
            }
    }

}

export default ProductReducer;