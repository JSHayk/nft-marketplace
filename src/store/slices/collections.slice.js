import {createSlice} from '@reduxjs/toolkit'
import collection1 from "../../assets/collection1.svg"

const initialState = {
    data: [
        {
            id: 1,
            image_url: collection1,
            name: "NFT Worlds",
            floor: 0.80,
            currency: "ETH",
            count: 1,
            price: {
                ETH: 5.8,
                USD: 8.4,
                top: 294.7
            }
        },
        {
            id: 2,
            image_url: collection1,
            name: "Super Worlds",
            floor: 0.70,
            currency: "ETH",
            count: 2,
            price: {
                ETH: 5.8,
                USD: 8.4,
                top: 294.7
            }
        },
        {
            id: 2,
            image_url: collection1,
            name: "Super Worlds",
            floor: 0.70,
            currency: "ETH",
            count: 2,
            price: {
                ETH: 5.8,
                USD: 8.4,
                top: 294.7
            }
        },
        {
            id: 2,
            image_url: collection1,
            name: "Super Worlds",
            floor: 0.70,
            currency: "ETH",
            count: 2,
            price: {
                ETH: 5.8,
                USD: 8.4,
                top: 294.7
            }
        },
    ]
}

const slice = createSlice({
    name: "collections",
    initialState,
    reducers: {}
});

export const {} = slice.actions;
export default slice.reducer 