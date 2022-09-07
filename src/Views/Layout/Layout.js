import { useState } from "react";
import {   Stack } from "react-bootstrap";
import AppContent from "../Components/AppContent/AppContent";
import AppFooter from "../Components/AppFooter/AppFooter";

import AppHeader from "../Components/AppHeader/AppHeader";
import SideBar from "../Components/SideBar/SideBar";


const Layout = () => {
    const [showSideBar, setshowSideBar] = useState(true);

    const handleSidebar = () => {
        setshowSideBar(!showSideBar);
    }

    return (
        <>
            <Stack gap={1} className="main" style={{ direction: "ltr", marginRight: showSideBar ? 230 : 0 }}>
               <AppHeader toggleButton={handleSidebar}/>
               <AppContent/>
               <AppFooter/>
            </Stack >

          <SideBar show={showSideBar}/>
        </>


    )
}

export default Layout;