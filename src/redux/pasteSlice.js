import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paste:localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")): []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addTOPastes: (state,action) => {

    },

    updateToPastes: (state, action) => {

    },

    resetAllPastes: (state, action) => {
        
    },

    removeFromPastes:(state, action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addTOPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer