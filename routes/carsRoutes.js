import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  carCategoryController,
  carCountController,
  carFilterController,
  carPhotoController,
  carsListController,
  createCarController,
  deleteCarController,
  getCarsController,
  getSingleCarController,
  relatedCarController,
  searchCarController,
  updateCarController,
} from "../controllers/carsController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-cars",
  requireSignIn,
  isAdmin,
  formidable(),
  createCarController
);

// get Cars
router.get("/get-cars", getCarsController);

//single Car
router.get("/get-cars/:slug", getSingleCarController);
//get photo
router.get("/car-photo/:pid", carPhotoController);

//delete Car
router.delete("/delete-car/:pid", deleteCarController);

///update car
router.put(
  "/update-cars/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateCarController
);

//filter Cars
router.post("/car-filters", carFilterController);

//cars count
router.get("/car-count", carCountController);

//car per page
router.get("/car-list/:page", carsListController);

//search car
router.get("/search", searchCarController);

//similar Car
router.get('/related-car/:pid/:cid',relatedCarController)

//category wise car
router.get('/car-category/:slug', carCategoryController)


//payments route
//token
router.get('/braintree/token', braintreeTokenController)

//payments
router.post('/braintree/payment',requireSignIn, brainTreePaymentController)


export default router;
