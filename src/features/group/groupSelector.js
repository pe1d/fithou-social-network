import { createSelector } from "reselect";

const selectGroupState = (state) => state.group;

// Selector lấy toàn bộ danh sách nhóm
export const selectGroupList = createSelector(
    [selectGroupState],
    (group) => group.data
);

// Selector lấy group theo groupId được truyền động
export const makeSelectGroupById = (groupId) =>
    createSelector([selectGroupList], (groups) =>
        groups.find((group) => group.id === groupId)
    );
