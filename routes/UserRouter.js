const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/", controller.showAllUsers); //tested, works
Router.get("/:user_id", controller.showUserById); //tested, works

Router.post("/search", controller.showUserByName); //tested, works

Router.put("/:user_id/edit", controller.updateUser); //tested, works

Router.delete("/:user_id/delete", controller.deleteUser); //tested, works

module.exports = Router;
