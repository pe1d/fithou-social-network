export const fetchGroupsApi = (limit) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    { id: 1, name: "React Devs", icon: "", backDrop: "" },
                    { id: 2, name: "UI/UX Lovers", icon: "", backDrop: "" },
                    {
                        id: 3,
                        name: "JavaScript Việt Nam",
                        icon: "",
                        backDrop: "",
                    },
                ],
                message: "success",
            });
        }, 1000);
    });
};
