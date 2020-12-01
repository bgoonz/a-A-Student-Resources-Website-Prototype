const express = require("express");
const morgan = require("morgan");
const cookie = require("cookie-parser");
const routes = require("./routes.js");
//every app.use() is gonna contain a callback for routing because it is defining behavior for what happens on a rout when a request is sent to the server... they run on every single request.
const port = 8080;

const app = express(); //instance of express server
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(cookie());
app.use(
  express.urlencoded({
    extended: false,
  })
); //parsing json //modern formatting which prevents nesting of json objects
app.use(routes);
//route is location on server that performs a paticular task
//--------------------------error catcher----------------------------------
//! Express is a collection of middleware which runs between the req/response cycle
app.use((req, res, next) => {
  const error = new Error("this page could not be found");
  error.status = 404;
  //next is like a .then() but for express
  next(error);
});
//--------------------------------------log-errors-------------------------------------------------
//bc of express error is available outside of the above curly braces
app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    //TODO : log this to database
  } else {
    console.error(error);
  }
  next(error);
});
//--------------------------------------404-error-handler-------------------------------------------------
app.use((error, req, res, next) => {
  if (error.status === 404) {
    res.status(404); //response 404
    res.render("page-not-found", {
      title: "PageNotFound",
    });
  } else {
    next(error); //passes it along to next piece of middlewhere.
  }
});
//------------------------------------------not 404 error......error--------------------------------
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  const isProduction = process.env.NODE_ENV === "production";
  resapp.render("error", {
    title: "server error",
    message: isProduction ? null : error.message,
    stack: isProduction
      ? null
      : error.stack /*render error html page using the error message and error stack (to be displayed) */,
  });
});
app.listen(port, () => {
  console.log("it's alive");
});
module.exports = app;
