import React, { useState } from "react";
import { Card, Input, Row, Col, Avatar, Divider, Tooltip } from "antd";
import {
    VideoCameraOutlined,
    PictureOutlined,
    SmileOutlined,
    LinkOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import CreatePostModalContainer from "./modal/CreatePostModalContainer";

const ActionButton = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    color: #65676b;
    transition: background 0.2s;

    &:hover {
        background-color: #f0f2f5;
    }
`;

const CreatePostView = (props) => {
    const [open, setOpen] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const onInputClick = () => {
        setOpen(true);
    };
    return (
        <>
            <CreatePostModalContainer
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                open={open}
                setOpen={setOpen}
            />
            <Card bodyStyle={{ padding: 16 }} style={{ borderRadius: 12 }}>
                <Row gutter={12} align="middle">
                    <Col>
                        <Avatar
                            size={40}
                            src="/path/to/avatar.jpg"
                            icon={<UserOutlined />}
                        />
                    </Col>
                    <Col flex="auto">
                        <Input
                            placeholder="Điệp ơi, bạn đang nghĩ gì thế?"
                            readOnly
                            onClick={onInputClick}
                            style={{
                                backgroundColor: "#f0f2f5",
                                borderRadius: 24,
                                border: "none",
                                height: 40,
                                paddingLeft: 16,
                            }}
                        />
                    </Col>
                    <Col>
                        <Tooltip title={"Ảnh/video"}>
                            <ActionButton>
                                <PictureOutlined
                                    style={{ color: "#45bd62", fontSize: 18 }}
                                />
                            </ActionButton>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={"Đính kèm tệp"}>
                            <ActionButton>
                                <LinkOutlined
                                    style={{ color: "#f7b928", fontSize: 18 }}
                                />
                            </ActionButton>
                        </Tooltip>
                    </Col>
                    <Col>
                        <Tooltip title={"Cảm xúc/hoạt động"}>
                            <ActionButton>
                                <SmileOutlined
                                    style={{ color: "#f23928", fontSize: 18 }}
                                />
                            </ActionButton>
                        </Tooltip>
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default CreatePostView;
