import React from "react";
import classes from "./PostTextArea.module.css";

const PostTextArea = (props) => {
    return (
        <textarea className={classes.postTextArea} {...props} />
    );
};

export default PostTextArea;