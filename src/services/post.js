const PostDatabase = require('../database/post');
const postDB = new PostDatabase();

class PostService {

    getPost({ id }) {
        return new Promise((resolve, reject) => {
            let postID = id || `5e232445ee72f53b3899336a`;
            postDB.getPost(postID)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    getAllPost() {
        return new Promise((resolve, reject) => {
            postDB.getAllPost()
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    createPost(body) {
        return new Promise((resolve, reject) => {
            const postObj = body.postObj || {
                title: "HTML",
                description: "Hyper Text Markup Language",
                auther: "Majid Ashraf",
                status: "public"
            }
            postDB.createPost(postObj)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }


}

module.exports = PostService;