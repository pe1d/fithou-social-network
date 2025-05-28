import React from "react";
import { Card, Typography, Button, Space, Tag, Row, Col } from "antd";
import {
    UsergroupAddOutlined,
    ShareAltOutlined,
    DownOutlined,
} from "@ant-design/icons";
import NewsFeedContainer from "../newfeeds/NewFeedContainer";
import AccountContainer from "../../components/account/AccountContainer";

const { Title, Text, Paragraph } = Typography;

const GroupNewFeedView = (props) => {
    const { group, groupMembers } = props;
    return (
        <div
            style={{
                background: "#f0f2f5",
                minHeight: "100vh",
                padding: 16,
                paddingTop: 0,
                width: "100%",
            }}
        >
            {/* Cover Photo */}
            <div
                style={{
                    height: 300,
                    backgroundImage: `url(${
                        group?.coverUrl ||
                        "https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px 8px 0px 0px",
                }}
            />

            {/* Group Info */}
            <div
                style={{
                    background: "#fff",
                    padding: "16px 32px",
                    borderRadius: "0 0 8px 8px",
                }}
            >
                <Row justify="space-between" align="middle" wrap={false}>
                    <Col>
                        <Space size={16} align="start">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 8,
                                }}
                            >
                                <Title
                                    level={3}
                                    style={{
                                        marginBottom: 0,
                                        marginTop: 4,
                                    }}
                                >
                                    {group?.name || "Tên Nhóm"}
                                </Title>
                                <Space size={4}>
                                    <Tag color="red">
                                        {group?.isPublic
                                            ? "Nhóm Công khai"
                                            : "Nhóm Riêng tư"}
                                    </Tag>
                                    <Text type="secondary">
                                        {group?.memberCount || "0"} thành viên
                                    </Text>
                                </Space>
                                <Space size={4} style={{ marginTop: 8 }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {groupMembers?.map((member, index) => (
                                            <div
                                                key={member.id}
                                                style={{
                                                    marginLeft:
                                                        index === 0 ? 0 : -10, // chồng lên
                                                    zIndex:
                                                        groupMembers.length +
                                                        1 -
                                                        index, // để cái sau không che cái trước
                                                }}
                                            >
                                                <AccountContainer
                                                    account={member}
                                                    avatarSize={36}
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                    canHover
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Space>
                            </div>
                        </Space>
                    </Col>
                    <Col>
                        <Space wrap>
                            <Button
                                type="primary"
                                icon={<UsergroupAddOutlined />}
                            >
                                + Mời
                            </Button>
                            <Button icon={<ShareAltOutlined />}>Chia sẻ</Button>
                            <Button>
                                Đã tham gia <DownOutlined />
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </div>

            {/* Tabs & Content */}
            <div
                style={{
                    paddingTop: 16,
                }}
            >
                <Row gutter={[16, 16]} justify="start" align="top" wrap>
                    {/* Left column - Feed */}
                    <Col
                        xs={24}
                        md={16}
                        lg={18}
                        style={{
                            minHeight: "400px",
                        }}
                    >
                        <NewsFeedContainer groupId={group?.id} />
                    </Col>

                    {/* Right column - Info box */}
                    <Col
                        xs={24}
                        md={8}
                        lg={6}
                        style={{ position: "sticky", top: 80 }}
                    >
                        <Card
                            title="Giới thiệu"
                            style={{ background: "#fff" }}
                            headStyle={{ borderBottom: "1px solid #f0f0f0" }}
                        >
                            <Paragraph>
                                {group?.description ||
                                    "Mô tả nhóm sẽ hiển thị ở đây."}
                            </Paragraph>
                            <Text type="secondary">
                                Nhóm được tạo bởi{" "}
                                <b>{group?.ownerName || "Admin"}</b>
                            </Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default GroupNewFeedView;
