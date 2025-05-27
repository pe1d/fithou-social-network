import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    message: null,
};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        getListContact: (state) => {
            state.loading = true;
        },
        getListContactFinal: (state, action) => {
            const { data, message } = action.payload;
            state.loading = false;
            state.message = message;
            state.data = data;
        },
    },
});

export const { getListContact, getListContactFinal } = contactSlice.actions;

export default contactSlice.reducer;
