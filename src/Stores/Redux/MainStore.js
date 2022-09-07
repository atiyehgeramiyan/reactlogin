import { createStore, combineReducers } from 'redux'
import AccountReducer from '../Reducers/AccountReducer';
import CategoryReducer from '../Reducers/CategoryReducer';
import ConfigReducer from '../Reducers/ConfigReducer';
import ProductReducer from '../Reducers/ProductReducer'

const reducers = combineReducers({
    product: ProductReducer,
    category: CategoryReducer,
    account: AccountReducer,
    config:ConfigReducer
});


const rootReducer=(state,action)=>{

    if(action.type==="reset")
    {
        state=undefined;
    }
    
    return reducers(state,action)
}

const mainStore = createStore(rootReducer);

export default mainStore;