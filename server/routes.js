import postsRouter from './api/controllers/posts/router';

export default function routes(app) {
  app.use('/api/v1/posts', postsRouter);
}
