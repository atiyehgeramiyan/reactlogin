import mainStore from "../Stores/Redux/MainStore";








const ConfigViewService = () => {

    const dispatch=mainStore.dispatch;

    const showLoading=()=>{
        dispatch({type:"showLoading"});
    }
    const hideLoading=()=>{
        dispatch({type:"hideLoading"});
    }

    return {showLoading,hideLoading};
}

export default ConfigViewService;