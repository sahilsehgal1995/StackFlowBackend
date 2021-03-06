import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/:tag_name', controller.all)
  .get('/', controller.all)