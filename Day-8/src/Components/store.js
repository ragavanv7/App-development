import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserSlice from "./UserSlice";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, UserSlice.reducer);

const store = configureStore({
    reducer: {
        user: persistedReducer
    }
})

const persistor = persistStore(store, null, (error) => {
    console.log(error);
});

export { store, persistor };