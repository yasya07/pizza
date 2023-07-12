import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import {createStore, applyMiddleware, combineReducers} from 'redux'
// import logger from 'redux-logger'
// import {Provider} from 'react-redux'
//
//
// const reducer = (state = {
//     count: 0,
//     name: 'IT PARK'
// }, action) => {
//     switch (action.type) {
//         case "ADD" :
//             return {...state, count: action.payload}
//         case "CHANGE_NAME" :
//             return {...state, name: action.payload}
//     }
//
//     return state
// }
//
// const myReducer = (state = {
//     title: '',
//     completed: false
// }, action) => {
//
//     switch (action.type) {
//         case 'CHANGE_TITLE' :
//             return {...state, title: action.payload}
//     }
//
//     return state
// }
//
// const store = createStore(combineReducers({
//     reducer,
//     myReducer
// }), applyMiddleware(logger))
//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Provider store={store}>
        <App/>
    // </Provider>
)


// store.dispatch({type: 'ADD', payload: 10})
// store.dispatch({type: 'ADD', payload: 100})
// store.dispatch({type: 'ADD', payload: 1000})
// store.dispatch({type: 'CHANGE_NAME', payload: 'IT-1'})
// store.dispatch({type: 'CHANGE_NAME', payload: 'IT-2'})
// store.dispatch({type: 'CHANGE_NAME', payload: 'IT-3'})
// store.dispatch({type: 'CHANGE_TITLE', payload: 'lorem'})
