import {combineReducers} from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer} from 'redux-persist'

import {NetworkReducers, PersistedReducers, ContainerReducers} from '../redux'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['network', 'container']
}

const rootReducer = combineReducers({
    network: NetworkReducers,
    container: ContainerReducers,
    persisted: PersistedReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
