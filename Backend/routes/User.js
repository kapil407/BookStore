import express from 'express'
import UserAuth from "../Middleware/UserAuth.js";
import { getUserData, Login, SignUp, UpdateUserAddress } from '../controller/User.js';

const UserRouter=express.Router();

//Sign - up
UserRouter.post("/sign-up", SignUp);

//login
UserRouter.post("/login",Login);

//Get Users (individual) Profile Data
UserRouter.get("/getUserData", UserAuth, getUserData);

//Update address
UserRouter.put("/update-user-address", UserAuth, UpdateUserAddress);
export default UserRouter ;
