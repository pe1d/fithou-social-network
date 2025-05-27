import { createSelector } from "reselect";

const selectContactState = (state) => state.contact;

// Selector lấy toàn bộ danh sách nhóm
export const selectContactList = createSelector(
    [selectContactState],
    (contact) => contact.data
);

// Selector lấy contact theo contactId được truyền động
export const makeSelectContactById = (contactId) =>
    createSelector([selectContactList], (contacts) => {
        console.log("Check: contacts:", contacts);

        return contacts.find((contact) => contact.ContactID === contactId);
    });
