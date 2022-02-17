const { post } = require("../routes");
const { getPostsData, getCommentsData, generateCSV } = require("../services");

const postsController = async (req, res) => {
  try {
    const posts = await getPostsData();
    const comments = await getCommentsData();
    const mapedPosts = posts.map((post) => {
      const postComment = (
        comments.filter((comment) => comment.postId === post.id) || []
      ).map((comment) => comment.name);
      const commentedPost = {
        ...post,
        comment: postComment.length ? postComment.join(/|/) : postComment,
      };
      return commentedPost;
    });
    console.log(mapedPosts);
    const csvText = generateCSV(mapedPosts, ",");
    console.log(csvText);
    res.json(mapedPosts);
  } catch (err) {
    console.log(err);
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

module.exports = { postsController };
