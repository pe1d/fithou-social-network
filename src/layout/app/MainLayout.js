import React, { useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SidebarAppContainer from "../../components/sidebar/SideBarAppContainer";
import HeaderAppContainer from "../../components/header/HeaderAppContainer";
import ChatBoxManager from "../../components/chatbox/ChatBoxManager";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMeInfo } from "../../features/app/appSlice";
const { Content } = Layout;

const MainLayout = () => {
    console.log("MainLayout Rendered");
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMeInfo());
    });
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* <Scrollbars
                style={{ minHeight: "100vh" }}
                autoH1ide
                autoHideTimeout={500}
                autoHideDuration={200}
            > */}
            <HeaderAppContainer />
            <Layout>
                <SidebarAppContainer />
                <Content
                    style={{
                        margin: "8px",
                        padding: 0,
                    }}
                >
                    <div className="BodyWrapperContainer">
                        <Outlet />
                    </div>
                    {location.pathname !== "/messages" && <ChatBoxManager />}
                </Content>
            </Layout>
            {/* </Scrollbars> */}
        </Layout>
    );
};

export default MainLayout;
