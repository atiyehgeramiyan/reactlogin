import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"
import {  useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ProductViewService from "../../../ViewService/ProductViewService";
import { TextInput, NumberInput, DatePickerInput } from '../components/Form/Index'

const ProductInfo = () => {

    const {productModel}=useSelector(state=>{return { productModel:state.product.productModel}});

    const { RegisterProduct, FindProduct, NewProduct } = ProductViewService();

    const { productid } = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        if (productid) {
            FindProduct(productid);
        }
        else {
            NewProduct();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productid]);

    return (
        <Container fluid style={{ height: 600 }} className="fade alert alert-light show">
                <Row>
                    <Col xs={12} sm={4}>
                        <Row>
                            <Col>
                                <form >
                                    <TextInput model={productModel} id="productName" description="نام" />
                                    <TextInput model={productModel} id="sku" description="کد محصول در انبار" />
                                    <NumberInput model={productModel} id="price" description="قیمت" />
                                    <NumberInput model={productModel} id="stockQuantity" description="موجودی" />

                                    <DatePickerInput model={productModel} id="publishDate" description="تاریخ انتشار" />
                                </form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-4 btn-group" >
                                <Button variant="danger" style={{ float: "left" }} onClick={() => { navigate("/product") }} className="btn-block" >ثبت جدید</Button>
                                <Button variant="success" style={{ float: "left" }} onClick={async () => {
                                    await RegisterProduct();
                                    if (productModel.id && productModel.id !== 0) {
                                        navigate("/product/" + productModel.id)
                                    }
                                }} className="btn-block" >ثبت</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} sm={4}>

                    </Col>
                </Row>
          

        </Container>
    )
}

export default ProductInfo;
// const mapStateToProp = (state) => {

//     return {
//         productModel: state.product.productModel
//     }
// }


// export default connect(mapStateToProp, ProductViewService)(ProductInfo);