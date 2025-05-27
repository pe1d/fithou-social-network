import React, { useState, useRef } from "react";
import { Button, Tooltip, Upload, Image, Space } from "antd";
import {
    PaperClipOutlined,
    SendOutlined,
    CloseCircleFilled,
} from "@ant-design/icons";

const ChatInputBox = ({ onSend }) => {
    const [value, setValue] = useState("");
    const [fileList, setFileList] = useState([]);
    const inputRef = useRef();

    const handleSend = () => {
        if (!value.trim() && fileList.length === 0) return;
        onSend({ text: value, files: fileList });
        setValue("");
        setFileList([]);
    };

    const handleUploadChange = ({ fileList: newFileList }) => {
        setFileList(newFileList.slice(-3)); // tối đa 3 file
    };

    const handleRemoveFile = (uid) => {
        setFileList(fileList.filter((file) => file.uid !== uid));
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                padding: 8,
                borderTop: "1px solid #eee",
            }}
        >
            {/* Hiển thị preview ảnh hoặc file đã chọn */}
            {fileList.length > 0 && (
                <Space size={16} style={{ marginBottom: 4 }}>
                    {fileList.map((file) =>
                        file.type && file.type.startsWith("image/") ? (
                            <div
                                key={file.uid}
                                style={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <Image
                                    src={URL.createObjectURL(
                                        file.originFileObj
                                    )}
                                    alt="preview"
                                    width={48}
                                    height={48}
                                    style={{
                                        borderRadius: 4,
                                        objectFit: "cover",
                                    }}
                                    preview={true}
                                />
                                <CloseCircleFilled
                                    style={{
                                        position: "absolute",
                                        top: -8,
                                        right: -8,
                                        color: "#ff4d4f",
                                        fontSize: 18,
                                        cursor: "pointer",
                                        background: "#fff",
                                        borderRadius: "50%",
                                    }}
                                    onClick={() => handleRemoveFile(file.uid)}
                                />
                            </div>
                        ) : (
                            <div
                                key={file.uid}
                                style={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <a
                                    href={URL.createObjectURL(
                                        file.originFileObj
                                    )}
                                    download={file.name}
                                    style={{
                                        display: "inline-block",
                                        maxWidth: 120,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        verticalAlign: "middle",
                                    }}
                                >
                                    {file.name}
                                </a>
                                <CloseCircleFilled
                                    style={{
                                        position: "absolute",
                                        top: -8,
                                        right: -8,
                                        color: "#ff4d4f",
                                        fontSize: 18,
                                        cursor: "pointer",
                                        background: "#fff",
                                        borderRadius: "50%",
                                    }}
                                    onClick={() => handleRemoveFile(file.uid)}
                                />
                            </div>
                        )
                    )}
                </Space>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Upload
                    multiple
                    showUploadList={false}
                    beforeUpload={() => false}
                    fileList={fileList}
                    onChange={handleUploadChange}
                    accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt"
                >
                    <Tooltip title="Đính kèm tệp hoặc ảnh">
                        <Button icon={<PaperClipOutlined />} type="text" />
                    </Tooltip>
                </Upload>
                <input
                    ref={inputRef}
                    style={{
                        flex: 1,
                        borderRadius: 16,
                        border: "1px solid #ccc",
                        padding: 8,
                        outline: "none",
                    }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSend();
                    }}
                    placeholder="Nhập tin nhắn..."
                />
                <Tooltip title="Gửi">
                    <Button
                        type="primary"
                        shape="circle"
                        icon={<SendOutlined />}
                        onClick={handleSend}
                        disabled={!value.trim() && fileList.length === 0}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default ChatInputBox;
