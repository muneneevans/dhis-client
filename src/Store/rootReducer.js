import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
//import reducers from domains


const rootReducer = combineReducers({
     router: routerReducer
})

export default rootReducer