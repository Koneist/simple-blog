import React, { useState } from "react";
import MyButton from "./button/MyButton";
import MyInput from "./input/MyInput";
import PostTextArea from "./textarea/PostTextArea";


const CreatePostForm =({create}) => {
    const [post, setPost] = useState({title: "", description: "", postTime: new Date()});
    
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            postTime: Date.now()
        }
        create(newPost);
        setPost({title:"", description:"", postTime: new Date()});
    }

    return (
        <form>
            <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Название поста" />
            <PostTextArea value={post.description} onChange={e => setPost({...post, description: e.target.value})} type="text" placeholder="Описание поста" />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default CreatePostForm;