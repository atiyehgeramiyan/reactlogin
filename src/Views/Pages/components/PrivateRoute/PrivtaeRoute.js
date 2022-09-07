import { useSelector } from "react-redux";
import AccessDenied from "../../Shared/AccessDenied";



const PrivtaeRoute = ({ compoenent: ComponentRoute, roles=[] }) => {

    const { role } = useSelector(state => state.account.user);

    const userRoles = role.split(",");

    let isUserInRole = false;

    userRoles.forEach(value => {
        if(!isUserInRole)
        {
            if(roles.filter(val=>val===value.trim()).length>0)
            {
                isUserInRole=true;
            }

        }
    });

 
    if (isUserInRole) {
        return <ComponentRoute />
    }


    return <AccessDenied />
}

export default PrivtaeRoute;