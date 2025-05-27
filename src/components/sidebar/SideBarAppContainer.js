import React from "react";
import SidebarAppView from "./SideBarAppView";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../features/app/appSlice";

const SidebarAppContainer = () => {
    const { isSidebarOpen } = useSelector((state) => state.app);
    const location = useLocation();
    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(toggleSidebar()); // Dispatch action để toggle sidebar
    };
    return (
        <SidebarAppView
            isSidebarOpen={isSidebarOpen}
            selectedKey={location.pathname}
            handleToggleSidebar={handleToggleSidebar}
        />
    );
};

export default SidebarAppContainer;
