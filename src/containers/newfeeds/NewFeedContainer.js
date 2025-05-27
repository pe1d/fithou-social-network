import React, { useEffect, useState } from "react";
import { Card, Avatar, List, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import CreatePostContainer from "../post/createPost/CreatePostContainer";
import { useWindowSize } from "react-use";
const { Meta } = Card;
// Mô phỏng API: trả về 5 bài mỗi lần
const CardStyled = styled(Card)`
    .ant-card-meta-title {
        margin-bottom: 0px !important;
    }
`;
const fetchPostsApi = (page) =>
    new Promise((resolve) => {
        setTimeout(() => {
            if (page === 5) {
                resolve([]);
            }
            const posts = Array.from({ length: 5 }, (_, i) => {
                const id = page * 5 + i + 1;

                return {
                    id,
                    user: { name: `Người dùng ${id}`, avatar: null },
                    content: `Nội dung bài đăng số ${id}`,
                    createdAt: moment().subtract(id, "hours").toISOString(),
                    image:
                        id % 2 === 0
                            ? `https://picsum.photos/seed/${id}/400/200`
                            : null,
                };
            });
            resolve(posts);
        }, 2000);
    });

const NewsFeedContainer = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const { width } = useWindowSize();
    const fetchMorePosts = async () => {
        const newPosts = await fetchPostsApi(page);
        if (newPosts.length === 0) {
            setHasMore(false);
        } else {
            setPosts((prev) => [...prev, ...newPosts]);
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        fetchMorePosts(); // lần đầu
    }, []);

    return (
        <div
            style={{
                paddingLeft: 4,
                paddingRight: 4,
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{ marginBottom: 16, width: width < 900 ? "100%" : 800 }}
            >
                <CreatePostContainer />
            </div>
            <InfiniteScroll
                dataLength={posts.length}
                next={fetchMorePosts}
                hasMore={hasMore}
                loader={
                    <div
                        style={{
                            textAlign: "center",
                            padding: 16,
                        }}
                    >
                        <Spin />
                    </div>
                }
                endMessage={
                    <div style={{ textAlign: "center", padding: 16 }}>
                        <b>Đã hết bài đăng</b>
                    </div>
                }
            >
                <List
                    itemLayout="vertical"
                    dataSource={posts}
                    renderItem={(item) => (
                        <CardStyled key={item.id} style={{ marginBottom: 16 }}>
                            <Meta
                                avatar={
                                    <div
                                        style={{
                                            display: "flex",
                                            height: "100%",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Avatar
                                            src={item.user.avatar}
                                            icon={<UserOutlined />}
                                        />
                                    </div>
                                }
                                title={item.user.name}
                                description={moment(item.createdAt).fromNow()}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            />
                            <div style={{ marginTop: 12 }}>{item.content}</div>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt="post"
                                    style={{
                                        marginTop: 12,
                                        width: "100%",
                                        borderRadius: 8,
                                    }}
                                />
                            )}
                        </CardStyled>
                    )}
                    style={{ width: width < 900 ? "100%" : 800 }}
                    // locale={{ emptyText: null }}
                />
            </InfiniteScroll>
        </div>
    );
};

export default NewsFeedContainer;
