
import { errorMessage, successMessage } from '../utils/alert/alert';
import MainStore from '../Stores/Redux/MainStore'
import { useDispatch } from 'react-redux';
import CategoryService from '../Services/CategoryService';


const categoryService = new CategoryService();

const CategoryViewService = () => {

    const dispatch = useDispatch();


    const SearchCategoryTreeList = async () => {

        try {
            let list = await categoryService.searchCategoryTreeList();
            dispatch({ type: "setCategoryTreeListModel", payload: list });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const RegisterCategory = async () => {

        const { categoryModel } = MainStore.getState().category;

        try {
            if (categoryModel.id === 0) {
                const category = await categoryService.registerCategory(categoryModel);
                categoryModel.id = category.id;
            }
            else {
                await categoryService.updateCategory(categoryModel);
            }
            successMessage();
        }
        catch (err) {
            errorMessage(err.message);
        }
    }

    const FindCategory = async (id) => {
        try {
            let category = await categoryService.findCategory(id);

            dispatch({
                type: "setCategoryModel", payload:
                    { id: category.id, name: category.name, parentId:category.parentId}
            });
        }
        catch (err) {
            errorMessage(err.message);
        }
    }
    const NewCategory = async () => {
        dispatch({ type: "newCategoryModel" });
    }


    return { SearchCategoryTreeList,RegisterCategory,FindCategory,NewCategory };
}

export default CategoryViewService;