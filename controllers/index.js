const fs = require("fs");
const writeFile = require("util").promisify(fs.writeFile);

const { getPostsData, getCommentsData, generateCSV } = require("../services");

const postsController = async (req, res) => {
  try {
    const posts = await getPostsData();
    const comments = await getCommentsData();

    const mapedPosts = posts.map((post) => {
      const postComments = (
        comments.filter((comment) => comment.postId === post.id) || []
      )
        .map((comment) => comment.body)
        .join(/|/);

      return postComments ? { ...post, comments: postComments } : post;
    });
    console.log(mapedPosts);
    const csvText = generateCSV(mapedPosts, ",");
    await writeFile("posts.csv", csvText);
    console.log(csvText);
    res.send(mapedPosts);
  } catch (err) {
    console.log(err);
    res
      .status(err.status || 500)
      .send(err.message || "AN erro while getting posts data");
  }
};

module.exports = { postsController };
