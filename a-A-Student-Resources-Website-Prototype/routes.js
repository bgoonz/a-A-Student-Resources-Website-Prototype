const express = require("express");
const csurf = require("csurf"); //authentication library
const db = require("./models");
const router = express.Router();
const csurfProtection = csurf({ cookie: true }); // tells csurf it is using cookies to do it's validation
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);
router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.render("week-9", { title: "week-9-test" });
  })
);
module.exports = router;
