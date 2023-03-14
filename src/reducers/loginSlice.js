import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: {},
}

export const loginSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.login = action.payload
        }
    },
})

export const { submitForm } = loginSlice.actions

export default loginSlice.reducer