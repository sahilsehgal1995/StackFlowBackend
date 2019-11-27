import Tags from '../../models/tags';
import l from '../../../common/logger';

export class Controller {
  all(req, res) {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;
    if (!req.params.tag_name) {
      Tags.find()
      .limit(limit)
      .skip(offset)
      .then(tags => {
        return res.json(tags);
      })
      .catch(err => {
        l.error(err);
        res.status(422).json(err.errors);
      });
    } else {
      Tags.find({tag_name: {$regex: '^' + req.params.tag_name, $options: 'i'}})
      .limit(limit)
      .skip(offset)
      .then(tags => {
        return res.json(tags);
      })
      .catch(err => {
        l.error(err);
        res.status(422).json(err.errors);
      });
    }
  }
}
export default new Controller();