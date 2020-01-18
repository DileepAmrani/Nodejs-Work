const { responseJsonHandler } = require('../helper');
const PostService = require('../services/post');
const postService = new PostService();

class PostController {

    get(request, response) {
        postService.getPost(request.headers)
            .then((data) => {
                responseJsonHandler(null, data, response)
            }).catch((error) => {
                responseJsonHandler(error, null, response)
            })

    }

    post(request, response) {
        postService.createPost(request.body).then((data) => {
            responseJsonHandler(null, data, response)
        }).catch((error) => {
            responseJsonHandler(error, null, response)
        })

    }

    getAll(request, response) {
        postService.getAllPost()
            .then((data) => {
                responseJsonHandler(null, data, response)
            }).catch((error) => {
                responseJsonHandler(error, null, response)
            })

    }
}


module.exports = PostController;