import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {usersReducers} from "./usersReducer";
import {albumsReducers} from "./albumsReducers";



const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    users: usersReducers,
    albums: albumsReducers
})

export const store = createStore(rootState, applyMiddleware(thunk, logger))