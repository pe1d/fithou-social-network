import { Avatar } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const defaultAvatarUrl =
    "https://scontent.fhan3-5.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=m-rQJTKZA4YQ7kNvwFKBsJs&_nc_oc=AdkzMWq-Fk0lWI-khC59qJ5J5k72lE-J87sH55dqVqBQ6z4fvtA1AUYDtZTR_UXY6-C_imgVcfTcvkV8_VLLM9Z-&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&oh=00_AfIbSiwtflgkbtAcWJedlj6JX5dkV0AGtrSYnMV2yR15VQ&oe=6842E4FA";
const AccountView = (props) => {
    const { avatarSize = 32, hasName, account, style } = props;
    const { avatarUrl, FullName } = account;
    return (
        <div
            style={{ display: "flex", alignItems: "center", gap: 8, ...style }}
        >
            {/* <div
                style={{
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: "50%",
                    backgroundPosition: "center center",
                    backgroundImage: `url(${
                        avatarUrl ? avatarUrl : defaultAvatarUrl
                    })`,
                }}
            ></div> */}
            <Avatar
                size={avatarSize}
                src={avatarUrl ? avatarUrl : null}
                icon={<UserOutlined />}
            />
            {hasName && <div>{FullName}</div>}
        </div>
    );
};

export default AccountView;
