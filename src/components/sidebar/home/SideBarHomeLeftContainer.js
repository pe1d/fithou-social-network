import React from "react";
import { Button, Divider } from "antd";
import {
    HomeOutlined,
    TeamOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import GroupContainer from "../../group/GroupContainer";
import AccountContainer from "../../account/AccountContainer";
import contactIcon from "../../../assets/images/contact.png";
import { defaultBackDropUrl } from "../../group/constant";
const ButtonStyled = styled(Button)`
    min-height: 45px;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: 600;
    gap: 16px;
`;
const LeftSidebarButtons = () => {
    const group = useSelector((state) => state.group);
    const { width } = useWindowSize();
    const listGroup = group.data;
    const renderListGroupPin = () => {
        return (
            <>
                <Divider style={{ margin: "12px 0px" }} />
                <div style={{ padding: "8px 16px" }}>
                    <span
                        style={{
                            fontSize: "1.0625rem",
                            fontWeight: 600,
                        }}
                    >
                        Lối tắt
                    </span>
                </div>
                {listGroup &&
                    listGroup.length > 0 &&
                    listGroup.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <Link to={`/home/group/${item.id}`}>
                                    <ButtonStyled type="text" block>
                                        <GroupContainer
                                            groupId={item.id}
                                            hasName
                                        />
                                    </ButtonStyled>
                                </Link>
                            </div>
                        );
                    })}
            </>
        );
    };
    return (
        <>
            {width > 900 && (
                <div
                    style={{
                        width: 300,
                        padding: 8,
                        position: "sticky",
                        top: 72,
                        maxHeight: "calc(100vh - 80px)",
                        overflow: "auto",
                        backgroundColor: "#fff",
                        borderRadius: 8,
                    }}
                >
                    <Scrollbars
                        autoHide
                        autoHideTimeout={1000}
                        // Duration for hide animation in ms.
                        autoHideDuration={200}
                    >
                        <Link to="home/profile">
                            <ButtonStyled type="text" block>
                                <AccountContainer account={2} hasName />
                            </ButtonStyled>
                        </Link>
                        <Link to="home/friends">
                            <ButtonStyled type="text" block>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            backgroundPosition: "center center",
                                            backgroundSize: "cover",
                                            backgroundImage: `url(${contactIcon})`,
                                        }}
                                    ></div>
                                    Liên hệ
                                </div>
                            </ButtonStyled>
                        </Link>
                        <Link type="text" to="home/groups">
                            <ButtonStyled type="text" block>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: 8,
                                            backgroundPosition: "center center",
                                            backgroundImage: `url(${defaultBackDropUrl})`,
                                        }}
                                    ></div>
                                    Nhóm
                                </div>
                            </ButtonStyled>
                        </Link>
                        {renderListGroupPin()}
                    </Scrollbars>
                </div>
            )}
        </>
    );
};

export default LeftSidebarButtons;
