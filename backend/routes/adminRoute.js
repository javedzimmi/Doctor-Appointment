import express from "express";
import upload from "../middelwares/multer.js";
import { addDoctor, allDoctors, LoginAdmin } from "../controllers/adminController.js";
import authAdmin from "../middelwares/authAdmin.js";




const adminRouter = express.Router();

adminRouter.post("/add-doctor",authAdmin,upload.single(`image`) ,addDoctor);
adminRouter.post("/login",LoginAdmin);
adminRouter.post("/all-doctors",authAdmin,allDoctors);
export default adminRouter;
