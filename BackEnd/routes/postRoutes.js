const db = require("../db/indexDB");
const Post = db.post;

module.exports = app => {
    app.get("/post/list", async (req, res) => {
        await Post.findAll({
            attributes: [["id_post", "id"], "title", "description", ["post_time", "postTime"]]
        }).then((posts) =>{
            posts.sort((a, b) => {
                if( a.postTime > b.postTime) {
                    return 1;
                }

                if(a.postTime < b.postTime) {
                    return -1;
                }

                return 0;
            })
            res.send(posts);
        }).catch(() =>{
            res.status(400);
            res.send();
        })
        return;
    })

    app.post("/post/create", async (req, res) => {
        const {title, description, postTime} = req.body;
        if(title == null || description == null || postTime == null)
        {
            res.status(400)
            res.send();
            return;
        }

        await Post.create({
            title: title,
            description: description,
            post_time: postTime
        }).then((post) => {
            res.send({ id: post.dataValues.id_post });
        })
        .catch(() =>{
            res.status(400);
            res.send();
        })

        return;
    });

    app.post("/post/delete", async (req, res) => {
        const {id} = req.body;
        
        if(id == null)
        {
            res.status(400)
            res.send();
            return;
        }
        Post.destroy({
            where: {
                id_post: id
            }
        }).then(() =>{
            res.send();
        }).catch(() =>{
            res.status(400);
            res.send();
        })

        return;
    })

    app.post("/post/update", async (req, res) => {
        const {id, title, description} = req.body;
        console.log(res.body);
        if(id == null || title == null || description == null)
        {
            res.status(400)
            res.send();
            return;
        }

        Post.update({
            title: title,
            description: description
        }, {
            where : {
                id_post: id
            }
        }).then(() =>{
            res.send();
            return;
        }).catch(() =>{
            res.status(400);
            res.send();
            return;
        })

        return;
    })
}