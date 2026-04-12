
import express from 'express'
import { notes, del, create } from './note.controller.js';

const noteRoute = express.Router();

// http://localhost:5000/api/v1/notes
noteRoute.get('/notes', notes)
noteRoute.post('/notes/create', create)
noteRoute.delete('/notes/delete/:id', del)

export default noteRoute