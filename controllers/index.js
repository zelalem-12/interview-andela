const { getPostsData, getCommentsData, generateCSV } = require("../services");

const postsController = async (req, res) => {
  try {
    const posts = await getPostsData();
    const csvText = generateCSV(posts, ",");
    console.log(csvText);
    res.json(posts);
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

const commentController = async (req, res) => {
  try {
    const comments = await getCommentsData();
    const csvText = generateCSV(comments, ",");
    console.log(csvText);
    res.json(comments);
  } catch (err) {
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

module.exports = { postsController, commentController };
