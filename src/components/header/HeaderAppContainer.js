import React from "react";
import HeaderAppView from "./HeaderAppView";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/app/appSlice";

const HeaderAppContainer = () => {
    // Logic, state, Redux, handleSearch, etc.
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector((state) => state.app);

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar()); // Dispatch action để toggle sidebar
    };
    const onSearch = (value) => {
        console.log("Search:", value);
    };

    return (
        <HeaderAppView
            handleToggleSidebar={handleToggleSidebar}
            onSearch={onSearch}
            isSidebarOpen={isSidebarOpen} // Truyền trạng thái sidebar vào HeaderAppView
        />
    );
};

export default HeaderAppContainer;
