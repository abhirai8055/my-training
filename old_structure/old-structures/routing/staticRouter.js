const express  = require("express");
const staticRouter = express.Router();
staticRouter.use(express.json());
const staticController = require("../controller/staticController")
const common = require("../commonFunction/common")


  staticRouter.get("/staticList",staticController.staticList);
  staticRouter.get("/viewStatic/:type",staticController.viewStatic);
  staticRouter.put("/editStatic",common.auth,staticController.editStatic);












module.exports= staticRouter;