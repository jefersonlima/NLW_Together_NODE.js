import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController"
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUsersController } from "./controllers/ListUsersController"


const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

const complimentController = new CreateComplimentController();
router.post("/compliments", ensureAuthenticated, complimentController.handle);

const listUserSendComplimentsController = new ListUserSendComplimentsController();
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);

const listTagsController = new ListTagsController();
router.get("/tags", ensureAuthenticated, listTagsController.handle);

const listUsersController = new ListUsersController();
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };