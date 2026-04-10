
import express from 'express'
import { notes } from './note.controller.js';

const noteRoute = express.Router();

// http://localhost:5000/api/v1/notes
noteRoute.get('/notes', notes)

export default noteRoute