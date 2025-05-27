import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SidebarAppContainer from "../../components/sidebar/SideBarAppContainer";
import HeaderAppContainer from "../../components/header/HeaderAppContainer";
import ChatBoxManager from "../../components/chatbox/ChatBoxManager";
import { useLocation } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

const { Content } = Layout;

const MainLayout = () => {
    console.log("MainLayout Rendered");

    const location = useLocation();
    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* <Scrollbars
                style={{ minHeight: "100vh" }}
                autoHide
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
