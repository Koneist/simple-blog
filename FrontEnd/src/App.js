import React, { useEffect, useState } from "react";
import PostList from "./components/UI/PostList";
import "./styles/App.css";
import CreatePostForm from "./components/UI/CreatePostForm";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostApi from "./Api/PostApi";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts();
    }, [])

    const [modal, setModal] = useState(false);
    
    const createPost = (newPost) => {
        PostApi.createPost(newPost).then((post) => {
            var createdPost = {...newPost, id: post.id, postTime: new Date(newPost.postTime)}
            setPosts([...posts, createdPost]);
        }).catch()
        setModal(false);
    }

    async function fetchPosts() {
        PostApi.getPosts()
        .then(posts =>{
            posts.forEach(element => {
                element.postTime = new Date(element.postTime);
            });
            setPosts(posts);
        }).catch(error => {
            console.log(error);
        })
    }

    const removePost = (post) => {
        PostApi.deletePost(post.id)
        .then(() => {
            setPosts(posts.filter(p => p.id !== post.id))
        })
        .catch();
    }

    const updatePost = updatedPost => {
        PostApi.updatePost(updatedPost)
        .then(() => {
            var index = posts.findIndex(post => { return post.id === updatedPost.id;});
            var newPosts = [...posts];
            newPosts[index] = updatedPost;
            setPosts(newPosts);
        }).catch();
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <CreatePostForm create={createPost}/>
            </MyModal>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} update={updatePost} />
                : <h1 style={{textAlign: "center"}}>Постов нет</h1>
            }
            
        </div>
    );
}

export default App;
