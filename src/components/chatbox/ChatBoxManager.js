import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeChatbox } from "../../features/chatbox/chatboxSlice";
import AccountContainer from "../account/AccountContainer";
import { Button, Image, Typography, Spin } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import ChatInputBox from "./ChatInputBox";
// import Scrollbars from "react-custom-scrollbars-2";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchMessagesApi = (page) =>
    new Promise((resolve) => {
        setTimeout(() => {
            if (page === 5) {
                resolve([]); // Trả về rỗng nếu đến trang 5 (hết tin nhắn)
                return;
            }

            const messages = Array.from({ length: 10 }, (_, i) => {
                const id = (page - 1) * 10 + i + 1;
                const isSelf = id % 2 === 0;

                return {
                    id,
                    text: `Tin nhắn số ${id}`,
                    files:
                        id % 3 === 0
                            ? [
                                  {
                                      name: `file${id}.jpg`,
                                      type: "image/jpeg",
                                      originFileObj: new Blob(),
                                  },
                              ]
                            : [],
                    self: isSelf,
                    createdAt: moment().subtract(id, "minutes").toISOString(),
                };
            });

            resolve(messages);
        }, 1000); // Giả lập delay 0.5 giây
    });

const ChatBox = (props) => {
    const { contact, onClose } = props;
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const scrollableDivRef = useRef();

    // Lần đầu load tin nhắn
    useEffect(() => {
        fetchMessagesApi(1).then((msgs) => {
            setMessages(msgs);
            setPage(1);
            setHasMore(msgs.length > 0);
            setTimeout(() => {
                if (scrollableDivRef.current) {
                    scrollableDivRef.current.scrollTop =
                        scrollableDivRef.current.scrollHeight;
                }
            }, 0);
        });
    }, []);

    // Hàm load thêm tin nhắn cũ
    const fetchMoreData = () => {
        fetchMessagesApi(page + 1).then((msgs) => {
            if (msgs.length === 0) setHasMore(false);
            setMessages((prev) => [...prev, ...msgs]);
            setPage((p) => p + 1);
        });
    };

    const handleSend = (msg) => {
        setMessages((prev) => [{ ...msg, self: true }, ...prev]);
        setTimeout(() => {
            if (scrollableDivRef.current) {
                scrollableDivRef.current.scrollTop =
                    scrollableDivRef.current.scrollHeight;
            }
        }, 0);
    };

    return (
        <div
            style={{
                width: 320,
                height: 400,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: 8,
                position: "fixed",
                bottom: 0,
                right: contact.right,
                zIndex: 1000,
                margin: 8,
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    padding: 8,
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <AccountContainer
                    style={{ fontWeight: 600 }}
                    accountId={contact.contactId}
                    hasName
                />
                <Button
                    type="text"
                    shape="circle"
                    icon={<CloseCircleOutlined />}
                    onClick={onClose}
                ></Button>
            </div>
            <div
                id={`scrollableDiv-${contact.contactId}`}
                ref={scrollableDivRef}
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "8px 24px",
                    display: "flex",
                    flexDirection: "column-reverse",
                    height: 320,
                }}
            >
                <InfiniteScroll
                    dataLength={messages.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    inverse={true}
                    loader={
                        <div style={{ textAlign: "center", margin: 8 }}>
                            <Spin />
                        </div>
                    }
                    scrollableTarget={`scrollableDiv-${contact.contactId}`}
                    style={{
                        display: "flex",
                        flexDirection: "column-reverse",
                    }}
                >
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            style={{
                                textAlign: msg.self ? "right" : "left",
                                margin: "4px 0",
                            }}
                        >
                            <abbr
                                key={msg.id}
                                title={moment(msg.createdAt).format(
                                    "DD/MM/YYYY HH:mm"
                                )}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        background: msg.self
                                            ? "#e6f7ff"
                                            : "#f5f5f5",
                                        padding: "6px 12px",
                                        borderRadius: 16,
                                        maxWidth: "80%",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    <Typography.Text>
                                        {msg.text}
                                    </Typography.Text>
                                    {msg.files &&
                                        msg.files.map((file, i) =>
                                            file.type &&
                                            file.type.startsWith("image/") ? (
                                                <div
                                                    key={i}
                                                    style={{ marginTop: 4 }}
                                                >
                                                    <Image
                                                        src={URL.createObjectURL(
                                                            file.originFileObj
                                                        )}
                                                        alt="img"
                                                        width={120}
                                                        style={{
                                                            borderRadius: 8,
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                    key={i}
                                                    style={{ marginTop: 4 }}
                                                >
                                                    <Button
                                                        type="link"
                                                        href={URL.createObjectURL(
                                                            file.originFileObj
                                                        )}
                                                        download={file.name}
                                                        size="small"
                                                    >
                                                        {file.name}
                                                    </Button>
                                                </div>
                                            )
                                        )}
                                </span>
                            </abbr>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
            <ChatInputBox onSend={handleSend} />
        </div>
    );
};
const ChatBoxManager = () => {
    const opened = useSelector((state) => state.chatbox.opened);
    const dispatch = useDispatch();
    return (
        <div
            style={{
                zIndex: 1000,
                marginRight: 80,
            }}
        >
            {opened.map((contact, idx) => (
                <ChatBox
                    key={contact.contactId}
                    contact={{ ...contact, right: idx * 340 + 180 }}
                    onClose={() => dispatch(closeChatbox(contact.contactId))}
                />
            ))}
        </div>
    );
};

export default ChatBoxManager;
