import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    playingTrack:''
}

const playerSlice =createSlice({
    name:'player',
    initialState,
    reducers:{
        setTrack: (state, action)=>{
        state.playingTrack = action.payload.track
        }
    }
})  

export const {setTrack} = playerSlice.actions


export default playerSlice.reducer