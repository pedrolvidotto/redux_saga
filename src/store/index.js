import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga';
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
})

sagaMiddleware.run(rootSaga)
export default store;

