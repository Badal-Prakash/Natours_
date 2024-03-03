const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.postUser);
router
  .route('/:id')
  .get(userController.getuserbyid)
  .patch(userController.patchUserbyid)
  .delete(userController.deleteUser);

module.exports = router;
