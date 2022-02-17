const express = require("express");
const router = express.Router();
const { postsController } = require("../controllers");

/* Get posts  */
router.get("/posts", postsController);

module.exports = router;
