import { Col, Container, Row } from 'react-bootstrap'
import GridView from '../components/GridView/GridView';
import { AgGridColumn } from 'ag-grid-react';
import { useSelector } from 'react-redux';
import CategoryViewService from '../../../ViewService/CategoryViewService';
import { Link } from 'react-router-dom';


const CategoryListPage = () => {

    const categoryTreeListModel = useSelector(state => state.category.categoryTreeListModel);

    const { SearchCategoryTreeList } = CategoryViewService();

    const renderHierarchicalName = (params) => {
        return <Link to={"/category/" + params.data.id}>{params.data.hierarchicalName}</Link>
    }

    return <Container fluid className="page">
        <Row>
            <Col>
                <h4  >لیست دسته ها</h4>
                <hr />
            </Col>
        </Row>
        <Row className="mt-4">
            <div className="ag-theme-alpine" style={{ height: 550, width: "100%" }}>
                <GridView listModel={categoryTreeListModel.filter(p => p.id !== 1)} getData={SearchCategoryTreeList}
                    frameworkComponents={{ renderhierarchicalName: renderHierarchicalName }} >
                    <AgGridColumn field="hierarchicalName" headerName="نام" width={400} cellRenderer="renderhierarchicalName" />

                </GridView>
            </div>
        </Row>
    </Container>
}

export default CategoryListPage;