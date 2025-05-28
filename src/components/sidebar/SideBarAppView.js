import React from "react";
import { Menu, Layout, Drawer } from "antd";
import {
    HomeOutlined,
    MessageOutlined,
    BookOutlined,
    CalendarOutlined,
    GlobalOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";

const { Sider } = Layout;

const siderStyle = {
    overflow: "auto",
    position: "sticky",
    height: "calc(100vh - 64px)",
    insetInlineStart: 0,
    top: 64,
};
const SidebarAppView = (props) => {
    const { selectedKey, isSidebarOpen, handleToggleSidebar } = props;
    const { width } = useWindowSize();
    const renderMenuItem = () => {
        return (
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                style={{ height: "100%" }}
                onClick={() => {
                    width < 1024 && handleToggleSidebar();
                }}
            >
                <Menu.Item key="/home" icon={<HomeOutlined />}>
                    <Link to="/home">Trang chủ</Link>
                </Menu.Item>
                <Menu.Item key="/messages" icon={<MessageOutlined />}>
                    <Link to="/messages">Tin nhắn</Link>
                </Menu.Item>
                <Menu.Item key="/register" icon={<BookOutlined />}>
                    <Link to="/register">Đăng ký tín chỉ</Link>
                </Menu.Item>
                <Menu.Item key="/schedule" icon={<CalendarOutlined />}>
                    <Link to="/schedule">Quản lý lịch học</Link>
                </Menu.Item>
                <Menu.Item key="/external" icon={<GlobalOutlined />}>
                    <Link to="/external">Trang web ngoài</Link>
                </Menu.Item>
                {/* <Menu.Item key="/lms" icon={<GlobalOutlined />}>
                    <Link to="/lms">LMS</Link>
                </Menu.Item> */}
            </Menu>
        );
    };
    return (
        <>
            {width < 600 ? (
                <Drawer
                    placement="left"
                    closable={false}
                    visible={isSidebarOpen}
                    width={250}
                    onClose={handleToggleSidebar}
                    bodyStyle={{ padding: 0 }}
                >
                    <div>
                        {/* Custom Header */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "2px",
                                background: "#f0f2f5",
                                borderBottom: "1px solid #e8e8e8",
                                minHeight: 40,
                                position: "sticky",
                                top: 0,
                                zIndex: 1,
                            }}
                        >
                            <MenuFoldOutlined
                                onClick={handleToggleSidebar}
                                style={{
                                    fontSize: 18,
                                    cursor: "pointer",
                                    marginLeft: 24,
                                    color: "#08c",
                                }}
                            />
                            <span
                                style={{ fontWeight: "bold", marginLeft: 10 }}
                            >
                                Menu
                            </span>
                        </div>
                        {/* Menu items */}
                        {renderMenuItem()}
                    </div>
                </Drawer>
            ) : (
                <Sider
                    collapsed={isSidebarOpen}
                    breakpoint="lg"
                    trigger={null}
                    collapsedWidth={width < 600 ? "0" : "60"}
                    style={siderStyle}
                    //collapsedWidth="200"
                >
                    {renderMenuItem()}
                </Sider>
            )}
        </>
    );
};

export default SidebarAppView;
