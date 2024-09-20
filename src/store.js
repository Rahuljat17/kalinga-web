import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import Reducer from './src/screens/redux/Reducers';
import login from "./auth/reducer";
import snackbar from "./common/snackbar/reducer";
import loader from "./common/loader/reducer";
import campaign from "./pages/Campaign Details/reducer";
import ncampaign from "./pages/WhatsappClient/reducer";
import dashboard from "./pages/Dashboard/reducer";
import signup from '../src/auth/reducer';
// import dashboard from '../src/pages/Dashboard/reducer'
const persistConfig = {
  key: "root",
  storage,
};

//import banner from "./src/screens/Home/Reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  snackbar,
  loader,
  login,
  dashboard,
  campaign,
  ncampaign,
  signup,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const configureStore = (initialState) =>
  createStoreWithMiddleware(persistedReducer, initialState);
const store = configureStore();
// const persistor = persistStore(store)
// let store = createStore(persistedReducer)
let persistor = persistStore(store);
export default { store, persistor };
