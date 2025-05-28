import React from "react";
import { Layout } from "antd";
import LeftSidebarContainer from "../../components/sidebar/home/SideBarHomeLeftContainer";
import RightSidebarContainer from "../../components/sidebar/home/SideBarHomeRightContainer";
import NewsFeedContainer from "../../containers/newfeeds/NewFeedContainer";
import { Route, Routes } from "react-router";
import GroupNewFeedContainer from "../../containers/group/GroupNewFeedContainer";
import { useWindowSize } from "react-use";

const { Content } = Layout;

const HomeLayout = () => {
    const { width } = useWindowSize();

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
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Routes>
                        <Route
                            index
                            element={
                                <div
                                    style={{
                                        width:
                                            width < 900
                                                ? "100%"
                                                : "calc(100% - 300px)",
                                    }}
                                >
                                    <NewsFeedContainer />
                                </div>
                            }
                        />
                        <Route
                            path="group/:id"
                            element={<GroupNewFeedContainer />}
                        />
                    </Routes>
                </Content>

                <RightSidebarContainer />
            </Layout>
        </Layout>
    );
};

export default HomeLayout;
