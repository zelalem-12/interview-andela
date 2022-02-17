const axios = require("axios");

const getPostsData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const getCommentsData = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return data;
};
const generateCSV = (data, delimiter) => {
  const heading_row = Object.keys(data[0]).join(delimiter) + "\n";

  const data_rows = data
    .map((item) => Object.values(item).join(delimiter))
    .join("\n");

  return heading_row + data_rows;
};

module.exports = { getPostsData, getCommentsData, generateCSV };
