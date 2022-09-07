import { useEffect } from "react";
import { Container, Row, Col, Alert, Stack, Button } from "react-bootstrap"
import { useSelector } from "react-redux";
import CategoryViewService from "../../../ViewService/CategoryViewService";
import ProductViewService from "../../../ViewService/ProductViewService";
import { SelectInput } from '../components/Form/Index'
import GridView from '../components/GridView/GridView';
import { AgGridColumn } from 'ag-grid-react';
import { Link } from 'react-router-dom';


const ProductCategories = () => {

    const productModel = useSelector(state => state.product.productModel);
    const productCategoryModel = useSelector(state => state.product.productCategoryModel);
    const categoryTreeListModel = useSelector(state => state.category.categoryTreeListModel);
    const productCategoriesListModel=useSelector(state=>state.product.productCategoriesListModel);

    const { SearchCategoryTreeList } = CategoryViewService();
    const { RegisterProductCategory, getProdcutCategories } = ProductViewService();

    useEffect(() => {
        SearchCategoryTreeList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderHierarchicalName = (params) => {
        return <Link to={"/category/" + params.data.id}>{params.data.hierarchicalName}</Link>
    }


    return (
        <Container fluid className="fade alert alert-light show">
            {
                productModel.id !== 0 ?
                    <>
                        <Row>
                            <div className="ag-theme-alpine" style={{ height: 550, width: "100%" }}>
                                <GridView listModel={productCategoriesListModel.filter(p => p.id !== 1)} getData={getProdcutCategories}
                                    frameworkComponents={{ renderhierarchicalName: renderHierarchicalName }} >
                                    <AgGridColumn field="hierarchicalName" headerName="نام" width={400} cellRenderer="renderhierarchicalName" />

                                </GridView>
                            </div>
                        </Row>
                        <Row className="mt-4">
                            <Col >
                                <Stack gap={3}>

                                    <div className="text-center">
                                        <Col sm={{ span: 2, offset: 5 }}>
                                            <SelectInput id="categoryID" model={productCategoryModel}
                                                description="دسته" list={categoryTreeListModel} text="hierarchicalName" />

                                        </Col>
                                    </div>

                                    <div className="text-center">
                                        <Button variant="success" onClick={RegisterProductCategory}>ثبت</Button>
                                    </div>

                                </Stack>
                            </Col>
                        </Row>
                    </>
                    :
                    <Row>
                        <Col>
                            <Alert variant="danger">
                                ابتدا باید اطلاعات محصول ثبت شود
                            </Alert>
                        </Col>
                    </Row>

            }

        </Container>
    )
}


export default ProductCategories;