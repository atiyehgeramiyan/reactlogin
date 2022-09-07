import { useContext } from "react";
import { MenuContext } from "../../../Stores/Contexts/MenuContext";
import MenuItem from "./MenuItem";

const Menu = () => {

    const { menuList } = useContext(MenuContext);

  
    return <div className="menu_section">
        <ul className="nav side-menu page-sidebar-menu side-show">
            {
                menuList && menuList.map((value, index) => {

                    return (<MenuItem index={index} title={value.title} icon={value.icon} key={index} subMenus={value.subMenus} />)
                })
            }
        </ul>
    </div>

}

export default Menu;