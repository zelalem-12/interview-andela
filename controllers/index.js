const { getPostsData, getCommentsData } = require("../services");

const postsController = async (req, res) => {
  try {
    const posts = await getPostsData();
    res.send(posts);
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

const commentController = async (req, res) => {
  try {
    const comments = await getCommentsData();
    res.send(comments);
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

module.exports = { postsController, commentController };
