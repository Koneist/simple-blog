import React from "react";
import MyButton from "./button/MyButton";


const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
                <p>
                    {props.post.postTime.toLocaleString("en-GB")}
                </p>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.update(props.post)}>Изменить</MyButton>
                </div>
            </div>
        </div>
    )
};

export default PostItem;