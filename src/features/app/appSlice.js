import { createSlice } from "@reduxjs/toolkit";
import { APP_TYPE } from "./appType";

const initialState = {
    isSidebarOpen: true, // Trạng thái sidebar
    data: null,
    loading: false,
    error: null,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen; // Toggle trạng thái sidebar
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(APP_TYPE.FETCH_APP_REQUEST, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(APP_TYPE.FETCH_APP_SUCCESS, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(APP_TYPE.FETCH_APP_FAILURE, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export const { toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
