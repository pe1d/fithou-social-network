import { data } from "react-router";

export const fetchGroupsApi = (limit) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: 1,
                        description: "Mô tả nhóm React Devs",
                        name: "React Devs",
                        icon: "",
                        backDrop: "",
                        memberIDs: [1, 2, 3],
                        adminIDs: [1, 2],
                        adminCount: 2,
                        isPublic: true,
                        canSearch: true,
                        memberCount: 3,
                        createdId: 1,
                    },
                    {
                        id: 2,
                        description: "Mô tả nhóm UI/UX Lovers",
                        name: "UI/UX Lovers",
                        icon: "",
                        backDrop: "",
                        memberIDs: [1, 2, 3],
                        adminIDs: [1, 2],
                        adminCount: 2,
                        isPublic: false,
                        canSearch: false,
                        memberCount: 3,
                        createdId: 1,
                    },
                    {
                        id: 3,
                        description: "Mô tả nhóm JavaScript Việt Nam",
                        name: "JavaScript Việt Nam",
                        icon: "",
                        backDrop: "",
                        memberIDs: [1, 2],
                        adminIDs: [1],
                        adminCount: 2,
                        isPublic: false,
                        canSearch: true,
                        memberCount: 2,
                        createdId: 1,
                    },
                ],
                message: "success",
            });
        }, 1000);
    });
};
export const fetchGroupMembersById = (groupId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        id: 1,
                        name: "Nguyễn Văn A",
                        avatarUrl: "https://i.pravatar.cc/150?img=11",
                    },
                    {
                        id: 2,
                        name: "Trần Thị B",
                        avatarUrl: "https://i.pravatar.cc/150?img=32",
                    },
                    {
                        id: 3,
                        name: "Lê Văn C",
                        avatarUrl: "https://i.pravatar.cc/150?img=45",
                    },
                    {
                        id: 4,
                        name: "Phạm Thị D",
                        avatarUrl: "https://i.pravatar.cc/150?img=67",
                    },
                    {
                        id: 5,
                        name: "Nguyễn Thị E",
                        avatarUrl: "https://i.pravatar.cc/150?img=89",
                    },
                    {
                        id: 6,
                        name: "Trần Văn F",
                        avatarUrl: "https://i.pravatar.cc/150?img=23",
                    },
                ],
                message: "success",
            });
        }, 1000);
    });
};
