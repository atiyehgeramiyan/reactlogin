import { AgGridColumn } from 'ag-grid-react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductViewService from '../../../ViewService/ProductViewService';
import GridView from '../components/GridView/GridView';

const ProductGrid=()=>{


    const productListModel=useSelector(state=>state.product.productListModel);
    const {SearchAllProducts}=ProductViewService();

    const renderProdcutName=(params)=>{
        return <Link to={"/product/"+params.data.id}>{params.data.productName}</Link>
    }


    return  <div className="ag-theme-alpine" style={{ height: 550, width: "100%" }}>
    <GridView listModel={productListModel} getData={SearchAllProducts}
        frameworkComponents={{renderprodcutName:renderProdcutName}} >
        <AgGridColumn field="productName" headerName="نام محصول" cellRenderer="renderprodcutName"/>
        <AgGridColumn field="sku" headerName="کد کالا در انبار" />
        <AgGridColumn field="price" headerName="قیمت" />
        <AgGridColumn field="stockQuantity" headerName="موجودی" />
        <AgGridColumn field="localPublishDate" headerName="تاریخ انتشار" />
        <AgGridColumn field="localCreateOn" headerName="تاریخ ایجاد" />
    </GridView>
</div>
}

export default ProductGrid;

// const mapStateToProp=(state)=>{

//     return {
//         productListModel:state.product.productListModel,
//     }
// }


// export default connect(mapStateToProp,ProductViewService)(ProductGrid);