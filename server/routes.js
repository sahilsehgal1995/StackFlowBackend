import postsRouter from './api/controllers/posts/router';
import tagsRouter from './api/controllers/tags/router';

export default function routes(app) {
	console.log("Debugg");
  app.use('/api/v1/posts', postsRouter);
  app.use('/api/v1/tags', tagsRouter);
}
