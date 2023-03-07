import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    register: {},
}

export const registerSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.register = action.payload
        }
    },
})

export const { submitForm } = registerSlice.actions

export default registerSlice.reducer