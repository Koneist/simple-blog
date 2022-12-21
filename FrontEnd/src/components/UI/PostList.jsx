import React from "react";
import { useState } from "react";
import MyModal from "./modal/MyModal";
import PostItem from "./PostItem";
import UpdatePostForm from "./UpdatePostForm";

const PostList = ({posts, remove, update}) => {
    const [modal, setModal] = useState(false);
    const [selectedPost, selectPost] = useState({id: 1, title: "", description: "", postTime: new Date()});
    const showUpdateModal = post => {
        selectPost(post);
        setModal(true);
        
    }

    const updatePost = post => {
        update(post);
        setModal(false);
    }
    
    return (
        <div>
            <MyModal visible={modal} setVisible={setModal}>
                <UpdatePostForm update={updatePost} post={selectedPost} />
            </MyModal>
            <h1 style={{textAlign: 'center'}}>
                Список постов
            </h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} update={showUpdateModal} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;