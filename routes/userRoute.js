import express from 'express';
import { create } from '../controller/UserController.js';

const route = express.Router();

// POST route to create a user
route.post('/create', create);

export default route;
