import { HttpStatus } from "./HttpStatus"
export default class PostApi {

    static async getPosts() {
        return fetch('/api/post/list')
            .then(response => {
                switch (response.status) {
                    case HttpStatus.OK:
                        return Promise.resolve(response.json())
                    default:
                        return Promise.reject(response)
                }
            })
    }
    
    static createPost(post) {
        return fetch('/api/post/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: post.title,
                description: post.description,
                postTime: post.postTime
            }),
        })
            .then(response => {
                switch (response.status) {
                    case HttpStatus.OK:
                        return Promise.resolve(response.json())
                    default:
                        return Promise.reject(response)
                }
            })
    }
    
    static deletePost(id) {
        return fetch('/api/post/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            }),
        })
            .then(response => {
                switch (response.status) {
                    case HttpStatus.OK:
                        return Promise.resolve()
                    default:
                        return Promise.reject(response)
                }
            })
    }
    
    static updatePost(post) {
        return fetch('api/post/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: post.id,
                title: post.title,
                description: post.description
            }),
        })
            .then(response => {
                switch (response.status) {
                    case HttpStatus.OK:
                        return Promise.resolve()
                    default:
                        return Promise.reject(response)
                }
            })
    }
}