import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    opened: [], // [{contactId, ...}]
    queue: [], // [{contactId, ...}]
    maxVisible: 3,
};

const chatboxSlice = createSlice({
    name: "chatbox",
    initialState,
    reducers: {
        openChatbox: (state, action) => {
            const contact = action.payload;
            // Nếu đã có thì không thêm lại
            if (
                state.opened.find((c) => c.contactId === contact.contactId) ||
                state.queue.find((c) => c.contactId === contact.contactId)
            )
                return;
            if (state.opened.length < state.maxVisible) {
                state.opened.push(contact);
            } else {
                state.queue.push(contact);
            }
        },
        closeChatbox: (state, action) => {
            const contactId = action.payload;
            state.opened = state.opened.filter(
                (c) => c.contactId !== contactId
            );
            // Nếu còn trong queue thì đẩy lên
            if (state.queue.length > 0) {
                const next = state.queue.shift();
                state.opened.push(next);
            }
        },
    },
});

export const { openChatbox, closeChatbox } = chatboxSlice.actions;
export default chatboxSlice.reducer;
