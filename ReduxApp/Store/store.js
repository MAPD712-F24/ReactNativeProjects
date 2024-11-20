import { legacy_createStore as createStore} from "redux"
import counterReducer from "../Reducer/counterReducer"


const store = createStore(counterReducer)
export default store