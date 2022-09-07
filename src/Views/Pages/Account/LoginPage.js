import { Container,Row,Col ,Button} from "react-bootstrap"
import { useSelector } from "react-redux";
import AccountViewService from "../../../ViewService/AccountViewService";
import {TextInput,PasswordInput} from '../components/Form/Index'


const LoginPage = () => {

    const loginModel=useSelector(state=>state.account.loginModel);

    const {login,autologin}=AccountViewService();

    autologin();
    
    return (<Container style={{ marginTop: 280 }}>
        <Row className="mt-5" >
            <Col xs={0} sm={4}></Col>
            <Col className="bg-white p-5 text-dark" style={{ borderRadius: 20 }}>
                <form>
                    <TextInput model={loginModel} id="username" description="کلمه کاربری" />
                    <PasswordInput model={loginModel} id="password" description="رمز عبور" />
                    <div >
                        <Button style={{ float: "left" }} onClick={login} variant="success" className="mt-4" >ورود</Button>
                    </div>
                </form>
            </Col>
            <Col xs={0} sm={4}></Col>
        </Row>
    </Container>
    )
}

export default LoginPage;