import express = require("express");
import { Request, Response } from "express";
import MathController from "../controllers/MathController";
import TodoListController from "../controllers/TodoListController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("you're in API Route");
});

//====================================================================
router.get("/todolist", TodoListController.find);
router.get("/todolist/:id", TodoListController.findOne);
router.post("/todolist/post", TodoListController.create);
router.patch("/todolist/update/:id", TodoListController.update);
router.delete("/todolist/delete/:id", TodoListController.delete);

//=====================================================================
router.get("/data", MathController.find);
router.delete("/delete/:id", MathController.delete);
router.post("/submit", MathController.create);
router.patch("/data/update/:id", MathController.update);

export default router;


// router.delete("/data/delete/:id", MathController.deleteMathData);
// router.patch("/thread/update/:id", upload("image"), ThreadsController.update);

// router.get("/auth/", AuthController.find);
// router.post("/auth/register", AuthController.register);
// router.post("/auth/login", AuthController.login);
// router.post("/auth/update", authenticate, AuthController.updateUser);
// router.post(
//   "/auth/update/image",
//   authenticate,
//   upload("image"),
//   AuthController.updateProfile
// );
// router.post(
//   "/auth/update/background",
//   authenticate,
//   upload("image"),
//   AuthController.updateBackground
// );
// router.get("/auth/check", authenticate, AuthController.check);

// router.get("/replies", RepliesController.find);
// router.post("/replies/create", authenticate, RepliesController.create);

// router.get("/notfollowed", authenticate, FollowsController.notFollowed);
// router.get("/follower", authenticate, FollowsController.findFollower);
// router.get("/followed", authenticate, FollowsController.findFollowed);
// router.get("/follower/:user", authenticate, FollowsController.findFollowerUser);
// router.get("/followed/:user", authenticate, FollowsController.findFollowedUser);
// router.post("/follow", authenticate, FollowsController.create);
// router.delete(
//   "/follow/:followed_user_id",
//   authenticate,
//   FollowsController.delete
// );

// router.get("/likeget", LikesController.find);
// router.get("/like/:user", LikesController.findByUser);
// router.post("/like", authenticate, LikesController.create);
// router.delete("/like/:thread_id", authenticate, LikesController.delete);

// export default router;
