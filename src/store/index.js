import {configureStore} from "@reduxjs/toolkit"
// Slices
import categoriesReducer from "./slices/categories.slice";
import collectionsReducer from "./slices/collections.slice";
import nftsReducer from "./slices/nfts.slice";


const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        collections: collectionsReducer,
        nfts: nftsReducer
    }
});

export default store;