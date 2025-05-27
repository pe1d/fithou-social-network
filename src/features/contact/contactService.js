export const fetchContactsApi = (limit, type) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: [
                    {
                        ContactID: 1,
                        FullName: "Nguyễn Văn A",
                        Email: "a@student.edu.vn",
                        PasswordHash: "hashed_pw_1",
                        RoleID: 3,
                        DepartmentID: 1,
                        Status: "Active",
                        avatarUrl: "",
                        CreatedAt: "2025-05-08T08:00:00Z",
                    },
                    {
                        ContactID: 2,
                        FullName: "Trần Thị B",
                        Email: "b@teacher.edu.vn",
                        PasswordHash: "hashed_pw_2",
                        RoleID: 2,
                        DepartmentID: 1,
                        Status: "Active",
                        avatarUrl: "",
                        CreatedAt: "2025-05-08T08:00:00Z",
                    },
                    {
                        ContactID: 3,
                        FullName: "Lê Văn C",
                        Email: "c@admin.edu.vn",
                        PasswordHash: "hashed_pw_3",
                        RoleID: 1,
                        DepartmentID: 0,
                        Status: "Active",
                        avatarUrl: "",
                        CreatedAt: "2025-05-08T08:00:00Z",
                    },
                ],
                message: "success",
            });
        }, 1000);
    });
};
