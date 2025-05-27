import React from "react";
import CreatePostModalView from "./CreatePostModalView";

const CreatePostModalContainer = (props) => {
    const { open, setOpen } = props;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (formData) => {
        console.log("Bài viết:", formData);
        handleClose();
    };

    return (
        <CreatePostModalView
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            onSubmit={handleSubmit}
            {...props}
        />
    );
};

export default CreatePostModalContainer;
