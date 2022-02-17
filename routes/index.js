const express = require("express");
const router = express.Router();
const { postsController, commentController } = require("../controllers");

/* Get posts  */
router.get("/posts", postsController);
/* Get Comments  */
router.get("/comments", commentController);

module.exports = router;
