import Movies from '../../models/movies';
import l from '../../../common/logger';

export class Controller {
  all(req, res) {
    Movies.find()
    .then(movies => {
      return res.json(movies);
    })
    .catch(err => {
      l.error(err);
      res.status(422).json(err.errors);
    });
  }

  byId(req, res) {
    return res.json({})
    // ExamplesService
    //   .byId(req.params.id)
    //   .then(r => {
    //     if (r) res.json(r);
    //     else res.status(404).end();
    //   });
  }

  create(req, res) {
    return Movies.create(req.body)
    .then(result => {
      console.log("aaresulta", result);
      return res.json(result);
    })
    .catch(err => {
      l.error(err);
      res.status(422).json(err.errors);
    });
  }
}
export default new Controller();
