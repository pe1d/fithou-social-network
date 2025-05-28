import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    groupMembers: [],
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
            const { data, message } = action.payload;
            state.loading = false;
            state.message = message;
            state.data = data;
        },
        getListGroupMembers: (state, action) => {
            state.loading = true;
            // state.message = message;
            // state.groupMembers = data;
        },
        getListGroupMembersFinal: (state, action) => {
            const { data, message } = action.payload;
            console.log("Check: getListGroupMembersFinal:", data, message);

            state.loading = false;
            state.message = message;
            state.groupMembers = data;
        },
    },
});

export const {
    getListGroup,
    getListGroupFinal,
    getListGroupMembers,
    getListGroupMembersFinal,
} = groupSlice.actions;

export default groupSlice.reducer;
