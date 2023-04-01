import {createSlice} from '@reduxjs/toolkit'
import nft1 from "../../assets/nft-1.svg"
import nft2 from "../../assets/nft-2.svg"
import nft3 from "../../assets/nft-3.svg"
import nft4 from "../../assets/nft-4.svg"

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
            id: 2,
            image_url: nft2,
            name: "Kive Boy",
            code: '#QA5200 The Kive',
            price: 0.3,
            currency: 'ETH',
            highest_bid: 0.7
        },
        {
            id: 3,
            image_url: nft3,
            name: "Rare Crypto",
            code: '#QA5200 The Kive',
            price: 0.3,
            currency: 'ETH',
            highest_bid: 0.7
        },
        {
            id: 4,
            image_url: nft4,
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