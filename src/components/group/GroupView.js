import React from "react";
import PropTypes from "prop-types";
import { defaultBackDropUrl } from "./constant";

const GroupView = (props) => {
    const { backdropSize = 32, hasName, group, style } = props;
    const { name, backDrop } = group;

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                ...style,
            }}
        >
            <div
                style={{
                    width: backdropSize,
                    height: backdropSize,
                    borderRadius: 8,
                    backgroundPosition: "center center",
                    backgroundImage: `url(${
                        backDrop ? backDrop : defaultBackDropUrl
                    })`,
                }}
            ></div>
            {hasName && <div>{name}</div>}
        </div>
    );
};
GroupView.defaultProps = {
    backdropSize: 40,
};
GroupView.propTypes = {
    backdropSize: PropTypes.number,
};
export default GroupView;
