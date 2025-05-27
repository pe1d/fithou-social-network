import React from "react";
import { Layout } from "antd";
import LeftSidebarContainer from "../../components/sidebar/home/SideBarHomeLeftContainer";
import RightSidebarContainer from "../../components/sidebar/home/SideBarHomeRightContainer";
import NewsFeedContainer from "../../containers/newfeeds/NewFeedContainer";

const { Content } = Layout;

const HomeLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <LeftSidebarContainer />

                <Content
                    style={{
                        flex: 1,
                        padding: "0 4px",
                    }}
                >
                    <NewsFeedContainer />
                </Content>

                <RightSidebarContainer />
            </Layout>
        </Layout>
    );
};

export default HomeLayout;
