

const initialConfigstate = {
    isShowLoading: false
}

const ConfigReducer = (state = initialConfigstate, action) => {

    switch (action.type) {

        case "showLoading":
            {
                return { ...state, isShowLoading: true }
            }
        case "hideLoading":
            {
                return { ...state, isShowLoading: false }
            }
        default:
            {
                return state;
            }
    }

}

export default ConfigReducer;