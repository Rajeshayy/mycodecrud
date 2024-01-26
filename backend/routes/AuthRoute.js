const router = express.Router();
import express from "express";
import {Login, logOut, Me} from "../controller/Auth.js"

router.get('/me',Me);
router.post('/login',Login);
router.delete('/logout',logOut);

export default router;
