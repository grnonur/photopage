import express, { application } from "express";
import * as photoController from "../controllers/photoController.js";

const router = express.Router();

router.route('/').post(photoController.createPhoto).get(photoController.getAllPhotos);
router.route('/:id').get(photoController.getAPhoto);
router.route('/:id').delete(photoController.deleteAPhoto);
router.route('/:id').put(photoController.updatePhoto);



export default router;