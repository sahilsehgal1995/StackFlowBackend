import examplesRouter from './api/controllers/examples/router';
import moviesRouter from './api/controllers/movies/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/movies', moviesRouter);
}
