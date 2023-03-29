import {createSlice} from '@reduxjs/toolkit'
import nft1 from "../../assets/nft-1.svg"

const initialState = {
    data: [
        {
            id: 1,
            image_url: nft1,
            name: "Rare Crypto",
            code: '#QA5200 The Kive',
            price: 0.3,
            currency: 'ETH',
            highest_bid: 0.7
        },
        {
            id: 1,
            image_url: nft1,
            name: "Rare Crypto",
            code: '#QA5200 The Kive',
            price: 0.3,
            currency: 'ETH',
            highest_bid: 0.7
        },
        {
            id: 1,
            image_url: nft1,
            name: "Rare Crypto",
            code: '#QA5200 The Kive',
            price: 0.3,
            currency: 'ETH',
            highest_bid: 0.7
        },
    ]
}

const slice = createSlice({
    name: "nfts",
    initialState,
    reducers: {}
});

export const {} = slice.actions;
export default slice.reducer;