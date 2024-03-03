const express = require('express');
const tourController = require('../controller/tourController');

const router = express.Router();

router.param('id', tourController.checkId);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.postTour);
router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.patchTour)
  .delete(tourController.deleteTour);
module.exports = router;
