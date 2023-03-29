import {createSlice} from '@reduxjs/toolkit'
import gamesPicture from "../../assets/games.svg"

const initialState = {
    data: [
        {
            id: 1,
            image_url: gamesPicture,
            name: "Games"
        },
        {
            id: 2,
            image_url: gamesPicture,
            name: "Sports"
        },

    ]
}

const slice = createSlice({
    name: "categories",
    initialState,
    reducers: {}
});

export const {} = slice.actions;
export default slice.reducer 