import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import CategoryViewService from "../../../ViewService/CategoryViewService";
import { TextInput, SelectInput } from '../components/Form/Index'

const CategoryInfo = () => {


    const categoryModel = useSelector(state => state.category.categoryModel);
    const categoryTreeListModel = useSelector(state => state.category.categoryTreeListModel);

    const { SearchCategoryTreeList, RegisterCategory, FindCategory, NewCategory } = CategoryViewService();

    const navigate = useNavigate();


    const {categoryid}=useParams();


    useEffect(() => {

        SearchCategoryTreeList();
        if(categoryid)
        {
            FindCategory(categoryid);
        }
        else{
            NewCategory();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryid])

    return (<Container fluid style={{ height: 600 }} className="fade alert alert-light show">
        <Row>
            <Col xs={12} sm={4}>
                <Row>
                    <Col>
                        <form >
                            <TextInput id="name" model={categoryModel} description="نام دسته" />
                            <SelectInput id="parentId" model={categoryModel} description="والد" list={categoryTreeListModel.filter(p=>p.id!==categoryModel.id)} text="hierarchicalName" />
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-4 btn-group" >
                        <Button variant="danger" style={{ float: "left" }} className="btn-block" 
                        onClick={()=>{ navigate("/category")}}>ثبت جدید</Button>
                        <Button variant="success" style={{ float: "left" }} className="btn-block"
                            onClick={async () => {
                                await RegisterCategory();

                                if (categoryModel.id !== 0) {
                                    navigate("/category/" + categoryModel.id);
                                }

                            }}
                        >ثبت</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} sm={4}>

            </Col>
        </Row>


    </Container>)
}

export default CategoryInfo;