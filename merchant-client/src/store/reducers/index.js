import { combineReducers } from "redux";
import productReducer from "./productReducer";
import orderReducer from "./orderReducer";
import cartReducer from "./cartReducer";
// import userReducer from './userReducer'

export default combineReducers({
    productReducer,
    orderReducer,
    cartReducer,
    // userReducer
});
