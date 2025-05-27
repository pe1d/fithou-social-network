import React from "react";

const LmsScreen = () => {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <iframe
                src="http://www.fithou.edu.vn/"
                title="LMS HOU"
                style={{ width: "100%", height: "100%", border: "none" }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default LmsScreen;
