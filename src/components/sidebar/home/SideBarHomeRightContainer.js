import { Button } from "antd";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import AccountContainer from "../../account/AccountContainer";
import { openChatbox } from "../../../features/chatbox/chatboxSlice";
const ButtonStyled = styled(Button)`
    min-height: 45px;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: 600;
    gap: 16px;
`;
const ButtonSwitch = styled(Button)`
    border-radius: 16px;
`;
const RightSidebarContainer = () => {
    const { width } = useWindowSize();
    const listContact = useSelector((state) => state.contact.data);
    const [viewMode, setViewMode] = useState("all");
    const dispatch = useDispatch();
    const handleContactClick = (item) => {
        dispatch(openChatbox({ contactId: item.ContactID }));
    };
    const renderContact = () => {
        return (
            listContact &&
            listContact.length > 0 &&
            listContact.map((item, index) => {
                return (
                    <ButtonStyled
                        onClick={() => handleContactClick(item)}
                        key={item.ContactID}
                        type="text"
                        block
                    >
                        <AccountContainer account={item} hasName />
                    </ButtonStyled>
                );
            })
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
                        background: "#fff",
                        borderRadius: 8,
                    }}
                >
                    <Scrollbars
                        autoHide
                        autoHideTimeout={500}
                        // Duration for hide animation in ms.
                        autoHideDuration={200}
                    >
                        <div style={{ padding: "8px 16px" }}>
                            <span
                                style={{
                                    fontSize: "1.0625rem",
                                    fontWeight: 600,
                                }}
                            >
                                Liên hệ
                            </span>
                        </div>
                        <div
                            style={{
                                padding: "8px 16px",
                                display: "flex",
                                gap: 8,
                            }}
                        >
                            <ButtonSwitch
                                type={viewMode === "all" ? "primary" : ""}
                                onClick={() => setViewMode("all")}
                            >
                                Tất cả
                            </ButtonSwitch>
                            <ButtonSwitch
                                type={viewMode === "group" ? "primary" : ""}
                                onClick={() => setViewMode("group")}
                            >
                                Nhóm
                            </ButtonSwitch>
                        </div>
                        {viewMode === "all" ? renderContact() : null}
                    </Scrollbars>
                </div>
            )}
        </>
    );
};

export default RightSidebarContainer;
