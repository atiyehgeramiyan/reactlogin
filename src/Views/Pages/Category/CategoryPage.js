import { useState } from 'react';
import { Nav } from 'react-bootstrap'
import CategoryInfo from './CategoryInfo';
import CategoryProducts from './CategoryProducts';


const CategoryPage = () => {

    const [activeTab, setActiveTab] = useState(1);

    return (<div className="page">
        <h4>دسته</h4>
        <hr />
        <Nav variant="tabs" defaultActiveKey={activeTab} style={{ direction: "rtl" }}>
            <Nav.Item>
                <Nav.Link eventKey="1" onClick={() => { setActiveTab(1) }}>اطلاعات </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" onClick={() => { setActiveTab(2) }}>محصولات </Nav.Link>
            </Nav.Item>
            
        </Nav>
        {
            activeTab === 1 ? <CategoryInfo /> :<CategoryProducts/>
               
        }

    </div>
    )
}

export default CategoryPage;