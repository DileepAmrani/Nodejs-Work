const errors = require('../helper/errors');
const postModel = require("../schema/post");

class PostDatabase {
    constructor() {
        this.posts = [
            //default post
            {
                id: 1579076693186,
                title: "JavaScript",
                description: "JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions",
                owner: "Majid Ashraf",
                link: "www.example.com"
            }
        ];
    }

    createPost(postobject) {
        return new Promise((resolve, reject) => {
            new postModel(postobject)
                .save(function (error, data) {
                    if (error) {
                        console.log("Got an error durring save post in db: ", error);
                        reject(error)
                    } else {
                        console.log("save success");
                        resolve({ status: 200, data: data });
                    }
                })
        })
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            postModel.findById(id, '-__v', function (error, data) {
                if (data) {
                    resolve(data);
                } else {
                    reject(errors["001"], error);
                }
            });
        })
    }

    getAllPost() {
        return new Promise((resolve, reject) => {
            postModel.find({}, '-__v', function (error, data) {
                if (data) {
                    resolve(data);
                } else {
                    reject(errors["002"], error);
                }
            });
        })
    }
}


module.exports = PostDatabase;