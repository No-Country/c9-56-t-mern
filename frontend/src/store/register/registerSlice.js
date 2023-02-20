import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        isRegisterSuccess: false
    },

    reducers: {
        setRegisterSuccess: (state) => {
            state.isRegisterSuccess = true;
        },
        resetRegisterSuccess: (state) => {
            state.isRegisterSuccess = false;
        }
    }
})

export const { setRegisterSuccess, resetRegisterSuccess } = registerSlice.actions;

export default registerSlice;