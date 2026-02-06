//Redux Global Store

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//combine all the reducers
const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

//create the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    //devtools -> redux store (present in browser) -> only in development mode
    devTools: process.env.NODE_ENV !== 'production',
});


// export persistor
export const persistor = persistStore(store);