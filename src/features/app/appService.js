export const fetchAppDataApi = () =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve({ appName: "React App", version: "1.0.0" }),
            1000
        )
    );
