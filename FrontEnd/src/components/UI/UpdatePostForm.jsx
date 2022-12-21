import React, { useState, useEffect } from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import PostTextArea from "./textarea/PostTextArea";


const UpdatePostForm =({post, update}) => {
    const [postDiv, setPost] = useState({id: 1, title: "", description: "", postTime: new Date()});
    
    useEffect(() => {
            setPost(post);
    }, [post])
    
    const updatePost = (e) => {
        e.preventDefault();
        update(postDiv);
        setPost({id: 1, title: "", description: "", postTime: new Date()});
    }

    return (
        <form>
            <MyInput value={postDiv.title} onChange={e => setPost({...postDiv, title: e.target.value})} type="text" placeholder="Название поста" />
            <PostTextArea value={postDiv.description} onChange={e => setPost({...postDiv, description: e.target.value})} type="text" placeholder="Описание поста" />
            <MyButton onClick={updatePost}>Изменить пост</MyButton>
        </form>
    );
};

export default UpdatePostForm;