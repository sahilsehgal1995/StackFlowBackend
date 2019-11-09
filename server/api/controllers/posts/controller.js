import Posts from '../../models/posts';
import l from '../../../common/logger';

export class Controller {
  all(req, res) {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;
    Posts.find()
    .limit(limit)
    .skip(offset)
    .then(posts => {
      return res.json(posts);
    })
    .catch(err => {
      l.error(err);
      res.status(422).json(err.errors);
    });
  }

  byId(req, res) {
    if(!req.params.id)
      return res.json({})
    Posts.find({id: parseInt(req.params.id)})
    .limit(1)
    .then(posts => {
      if(posts.length)
        return res.json(posts[0]);
      return res.json({});
    })
    .catch(err => {
      l.error(err);
      res.status(422).json(err.errors);
    });
  }

  create(req, res) {
    if(!req.body)
      return new Error("Body not found");
    return Posts.create(req.body)
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      l.error(err);
      res.status(422).json(err.errors);
    });
  }
}
export default new Controller();
