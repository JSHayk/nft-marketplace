import {createSlice} from '@reduxjs/toolkit'
import collection1 from "../../assets/collection1.svg"
import collection2 from "../../assets/collection2.svg"
import collection3 from "../../assets/collection3.svg"
import collection4 from "../../assets/collection4.svg"
import collection5 from "../../assets/collection5.svg"
import collection6 from "../../assets/collection6.svg"

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
            image_url: collection2,
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
            id: 3,
            image_url: collection3,
            name: "Bidether",
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
            id: 4,
            image_url: collection4,
            name: "Moonther",
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
            id: 5,
            image_url: collection5,
            name: "Etherpilots",
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
            id: 6,
            image_url: collection6,
            name: "Kive Core",
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