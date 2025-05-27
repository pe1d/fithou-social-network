import { Button, Flex, Input } from "antd";
import {
    BellFilled,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
const ButtonStyle = styled(Button)`
    min-width: 40px !important;
    height: 40px;
`;
const HeaderAppView = (props) => {
    const { onSearch, handleToggleSidebar, isSidebarOpen } = props; // Destructure props to get handleToggleSidebar
    return (
        <Header
            style={{
                background: "#fff",
                padding: 0,
                position: "sticky",
                top: 0,
                zIndex: 1,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                {/* Left - Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                        onClick={handleToggleSidebar} // Add onClick event to toggle sidebar
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 60,
                            height: 40,
                        }}
                    >
                        {isSidebarOpen ? (
                            <MenuFoldOutlined
                                style={{ fontSize: "20px", color: "#08c" }}
                            />
                        ) : (
                            <MenuUnfoldOutlined
                                style={{ fontSize: "20px", color: "#08c" }}
                            />
                        )}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: 20 }}>
                        <div
                            style={{
                                backgroundImage: `url(${logo})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: 60,
                                height: 60,
                            }}
                        ></div>
                        {/* FITHOU SOCIAL */}
                    </div>
                </div>

                {/* Middle - Search */}

                {/* Right - Actions */}
                <Flex
                    style={{ alignItems: "center", gap: 16, marginRight: 16 }}
                >
                    <Input.Search
                        placeholder="Tìm kiếm..."
                        prefix={<SearchOutlined />}
                        onSearch={onSearch}
                        style={{ maxWidth: 400 }}
                    />
                    <ButtonStyle shape="circle">
                        <BellFilled style={{ fontSize: 20 }} />
                    </ButtonStyle>
                    <ButtonStyle shape="circle">
                        <UserOutlined style={{ fontSize: 20 }} />
                    </ButtonStyle>
                </Flex>
            </div>
        </Header>
    );
};

export default HeaderAppView;
