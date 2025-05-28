export const fetchAppDataApi = () =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve({ appName: "React App", version: "1.0.0" }),
            1000
        )
    );
export const fetchMeInfoApi = () =>
    new Promise((resolve) =>
        setTimeout(
            () =>
                resolve({
                    ContactID: 999,
                    FullName: "Nguyễn Văn Điệp",
                    Email: "diep@student.edu.vn",
                    avatarUrl: "",
                    Status: "Active",
                    CreatedAt: "2025-05-08T08:00:00Z",
                }),
            500
        )
    );
