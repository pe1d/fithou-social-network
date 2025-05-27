import React, { useState } from "react";
import { Modal, Input, Button, Upload, Image, message } from "antd";
import {
    InboxOutlined,
    PictureOutlined,
    SmileOutlined,
} from "@ant-design/icons";

import Dragger from "antd/es/upload/Dragger";
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
const { TextArea } = Input;
const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
const CreatePostModalView = (props) => {
    const { open, onOpen, onClose, onSubmit } = props;
    const [content, setContent] = React.useState("");
    const [fileList, setFileList] = React.useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadChange = ({ fileList }) => setFileList(fileList);

    const handlePost = () => {
        onSubmit({ content, fileList });
        setContent("");
        setFileList([]);
    };
    const handlePreview = (file) =>
        __awaiter(void 0, void 0, void 0, function* () {
            if (!file.url && !file.preview) {
                file.preview = yield getBase64(file.originFileObj);
            }
            setPreviewImage(file.url || file.preview);
            setPreviewOpen(true);
        });
    return (
        <>
            <Modal
                title="Tạo bài viết"
                open={open}
                onCancel={onClose}
                onPreview={handlePreview}
                footer={[
                    <Button key="cancel" onClick={onClose}>
                        Hủy
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        disabled={!content && fileList.length === 0}
                        onClick={handlePost}
                    >
                        Đăng
                    </Button>,
                ]}
            >
                <TextArea
                    placeholder="Điệp ơi, bạn đang nghĩ gì thế?"
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    bordered={false}
                    style={{
                        fontSize: 16,
                        marginTop: 16,
                        marginBottom: 16,
                        maxHeight: 500,
                    }}
                />
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleUploadChange}
                    beforeUpload={() => false}
                >
                    {fileList.length < 4 && "+ Thêm ảnh/video"}
                </Upload>
            </Modal>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: "none" }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) =>
                            !visible && setPreviewImage(""),
                    }}
                    src={previewImage}
                />
            )}
        </>
    );
};

export default CreatePostModalView;
