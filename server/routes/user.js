import express from "express";

//Controllers
import user from '../controllers/user.js';

const router = express.Router();

router.get('/',user.onGetAllUsers)
      .post('/',user.onCreateUser)
      .get('/:id',user.onGetUserById)
      .delete('/:id',user.onDeleteUserById);

export default router;