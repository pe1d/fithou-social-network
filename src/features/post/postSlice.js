import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    message: null,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getListPost: (state) => {
            state.loading = true;
        },
        getListPostFinal: (state, action) => {
            console.log("Check: actionpayload:", action.payload);

            const { data, message } = action.payload;
            state.loading = false;
            state.message = message;
            state.data = data;
        },
    },
});

export const { getListPost, getListPostFinal } = postSlice.actions;

export default postSlice.reducer;
