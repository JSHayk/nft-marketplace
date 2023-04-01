import {createSlice} from '@reduxjs/toolkit'
import gamesPicture from "../../assets/games.svg"
import sportPicture from "../../assets/sport.svg"
import metaversePicture from "../../assets/metaverse.svg"
import artPicture from "../../assets/art.svg"
import musicPicture from "../../assets/music.svg"
import photograpyPicture from "../../assets/photography.svg"


const initialState = {
    data: [
        {
            id: 1,
            image_url: gamesPicture,
            name: "Games"
        },
        {
            id: 2,
            image_url: sportPicture,
            name: "Sport"
        },
        {
            id: 3,
            image_url: metaversePicture,
            name: "Metaverse"
        },
        {
            id: 4,
            image_url: artPicture,
            name: "Art"
        },
        {
            id: 5,
            image_url: musicPicture,
            name: "Music"
        },
        {
            id: 6,
            image_url: photograpyPicture,
            name: "Photograpy"
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