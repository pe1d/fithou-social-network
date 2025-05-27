import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    loading: false,
    message: null,
};

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        getListGroup: (state) => {
            state.loading = true;
        },
        getListGroupFinal: (state, action) => {
            console.log("Check: actionpayload:", action.payload);

            const { data, message } = action.payload;
            state.loading = false;
            state.message = message;
            state.data = data;
        },
    },
});

export const { getListGroup, getListGroupFinal } = groupSlice.actions;

export default groupSlice.reducer;
