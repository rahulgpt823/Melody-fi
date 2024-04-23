/**
 * Route for CRUD operation on the song model
 * 
 */


import  { Router } from 'express';
import {SongModel,SongSchema} from '../model/song_model.js';

import { songController } from '../controller/song_controller.js';


const songRouter = new Router();

songRouter.post('/',songController)
songRouter.get('/:songId',songController)
songRouter.put('/:songId',songController)
songRouter.delete('/global',songController)
songRouter.delete('/:songId',songController)


export default platformRouter;