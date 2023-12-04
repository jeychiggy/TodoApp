import {combineReducers} from "redux";

import addTodo from './addTodo/Reducers'
import getTodos from './getTodos/Reducers'
import deleteTodo from './deleteTodo/Reducers'
import updateTodo from './updateTodo/Reducers'
import patchTodo from './patchTodo/Reducers'

export default combineReducers({
    addTodo,
    deleteTodo,
    getTodos,
    patchTodo,
    updateTodo
})
