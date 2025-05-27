import React, { useState } from "react";
import CreatePostView from "./CreatePostView";

const CreatePostContainer = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handlePost = () => {
        if (!content.trim()) return;

        const newPost = {
            id: Date.now(),
            content,
            image,
            createdAt: new Date().toISOString(),
            user: { name: "Người dùng ẩn danh" },
        };

        onCreate?.(newPost);

        setContent("");
        setImage(null);
    };

    return (
        <CreatePostView
            content={content}
            setContent={setContent}
            image={image}
            setImage={setImage}
            onSubmit={handlePost}
        />
    );
};

export default CreatePostContainer;
