"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _posts = _interopRequireDefault(require("../../models/posts"));

var _logger = _interopRequireDefault(require("../../../common/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  all(req, res) {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;

    _posts.default.find().limit(limit).skip(offset).then(posts => {
      return res.json(posts);
    }).catch(err => {
      _logger.default.error(err);

      res.status(422).json(err.errors);
    });
  }

  byId(req, res) {
    if (!req.params.id) return res.json({});

    _posts.default.find({
      id: parseInt(req.params.id)
    }).limit(1).then(posts => {
      if (posts.length) return res.json(posts[0]);
      return res.json({});
    }).catch(err => {
      _logger.default.error(err);

      res.status(422).json(err.errors);
    });
  }

  create(req, res) {
    if (!req.body) return new Error("Body not found");
    return _posts.default.create(req.body).then(result => {
      return res.json(result);
    }).catch(err => {
      _logger.default.error(err);

      res.status(422).json(err.errors);
    });
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvcG9zdHMvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiYWxsIiwicmVxIiwicmVzIiwibGltaXQiLCJxdWVyeSIsInBhcnNlSW50Iiwib2Zmc2V0IiwiUG9zdHMiLCJmaW5kIiwic2tpcCIsInRoZW4iLCJwb3N0cyIsImpzb24iLCJjYXRjaCIsImVyciIsImwiLCJlcnJvciIsInN0YXR1cyIsImVycm9ycyIsImJ5SWQiLCJwYXJhbXMiLCJpZCIsImxlbmd0aCIsImNyZWF0ZSIsImJvZHkiLCJFcnJvciIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QkMsRUFBQUEsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNaLFFBQUlDLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELEtBQVYsR0FBa0JFLFFBQVEsQ0FBQ0osR0FBRyxDQUFDRyxLQUFKLENBQVVELEtBQVgsQ0FBMUIsR0FBOEMsRUFBMUQ7QUFDQSxRQUFJRyxNQUFNLEdBQUdMLEdBQUcsQ0FBQ0csS0FBSixDQUFVRSxNQUFWLEdBQW1CRCxRQUFRLENBQUNKLEdBQUcsQ0FBQ0csS0FBSixDQUFVRSxNQUFYLENBQTNCLEdBQWdELENBQTdEOztBQUNBQyxtQkFBTUMsSUFBTixHQUNDTCxLQURELENBQ09BLEtBRFAsRUFFQ00sSUFGRCxDQUVNSCxNQUZOLEVBR0NJLElBSEQsQ0FHTUMsS0FBSyxJQUFJO0FBQ2IsYUFBT1QsR0FBRyxDQUFDVSxJQUFKLENBQVNELEtBQVQsQ0FBUDtBQUNELEtBTEQsRUFNQ0UsS0FORCxDQU1PQyxHQUFHLElBQUk7QUFDWkMsc0JBQUVDLEtBQUYsQ0FBUUYsR0FBUjs7QUFDQVosTUFBQUEsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkwsSUFBaEIsQ0FBcUJFLEdBQUcsQ0FBQ0ksTUFBekI7QUFDRCxLQVREO0FBVUQ7O0FBRURDLEVBQUFBLElBQUksQ0FBQ2xCLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2IsUUFBRyxDQUFDRCxHQUFHLENBQUNtQixNQUFKLENBQVdDLEVBQWYsRUFDRSxPQUFPbkIsR0FBRyxDQUFDVSxJQUFKLENBQVMsRUFBVCxDQUFQOztBQUNGTCxtQkFBTUMsSUFBTixDQUFXO0FBQUNhLE1BQUFBLEVBQUUsRUFBRWhCLFFBQVEsQ0FBQ0osR0FBRyxDQUFDbUIsTUFBSixDQUFXQyxFQUFaO0FBQWIsS0FBWCxFQUNDbEIsS0FERCxDQUNPLENBRFAsRUFFQ08sSUFGRCxDQUVNQyxLQUFLLElBQUk7QUFDYixVQUFHQSxLQUFLLENBQUNXLE1BQVQsRUFDRSxPQUFPcEIsR0FBRyxDQUFDVSxJQUFKLENBQVNELEtBQUssQ0FBQyxDQUFELENBQWQsQ0FBUDtBQUNGLGFBQU9ULEdBQUcsQ0FBQ1UsSUFBSixDQUFTLEVBQVQsQ0FBUDtBQUNELEtBTkQsRUFPQ0MsS0FQRCxDQU9PQyxHQUFHLElBQUk7QUFDWkMsc0JBQUVDLEtBQUYsQ0FBUUYsR0FBUjs7QUFDQVosTUFBQUEsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkwsSUFBaEIsQ0FBcUJFLEdBQUcsQ0FBQ0ksTUFBekI7QUFDRCxLQVZEO0FBV0Q7O0FBRURLLEVBQUFBLE1BQU0sQ0FBQ3RCLEdBQUQsRUFBTUMsR0FBTixFQUFXO0FBQ2YsUUFBRyxDQUFDRCxHQUFHLENBQUN1QixJQUFSLEVBQ0UsT0FBTyxJQUFJQyxLQUFKLENBQVUsZ0JBQVYsQ0FBUDtBQUNGLFdBQU9sQixlQUFNZ0IsTUFBTixDQUFhdEIsR0FBRyxDQUFDdUIsSUFBakIsRUFDTmQsSUFETSxDQUNEZ0IsTUFBTSxJQUFJO0FBQ2QsYUFBT3hCLEdBQUcsQ0FBQ1UsSUFBSixDQUFTYyxNQUFULENBQVA7QUFDRCxLQUhNLEVBSU5iLEtBSk0sQ0FJQUMsR0FBRyxJQUFJO0FBQ1pDLHNCQUFFQyxLQUFGLENBQVFGLEdBQVI7O0FBQ0FaLE1BQUFBLEdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JMLElBQWhCLENBQXFCRSxHQUFHLENBQUNJLE1BQXpCO0FBQ0QsS0FQTSxDQUFQO0FBUUQ7O0FBM0NxQjs7OztlQTZDVCxJQUFJbkIsVUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RzIGZyb20gJy4uLy4uL21vZGVscy9wb3N0cyc7XG5pbXBvcnQgbCBmcm9tICcuLi8uLi8uLi9jb21tb24vbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICBhbGwocmVxLCByZXMpIHtcbiAgICBsZXQgbGltaXQgPSByZXEucXVlcnkubGltaXQgPyBwYXJzZUludChyZXEucXVlcnkubGltaXQpIDogMTA7XG4gICAgbGV0IG9mZnNldCA9IHJlcS5xdWVyeS5vZmZzZXQgPyBwYXJzZUludChyZXEucXVlcnkub2Zmc2V0KSA6IDA7XG4gICAgUG9zdHMuZmluZCgpXG4gICAgLmxpbWl0KGxpbWl0KVxuICAgIC5za2lwKG9mZnNldClcbiAgICAudGhlbihwb3N0cyA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24ocG9zdHMpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBsLmVycm9yKGVycik7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbihlcnIuZXJyb3JzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGJ5SWQocmVxLCByZXMpIHtcbiAgICBpZighcmVxLnBhcmFtcy5pZClcbiAgICAgIHJldHVybiByZXMuanNvbih7fSlcbiAgICBQb3N0cy5maW5kKHtpZDogcGFyc2VJbnQocmVxLnBhcmFtcy5pZCl9KVxuICAgIC5saW1pdCgxKVxuICAgIC50aGVuKHBvc3RzID0+IHtcbiAgICAgIGlmKHBvc3RzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHBvc3RzWzBdKTtcbiAgICAgIHJldHVybiByZXMuanNvbih7fSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGwuZXJyb3IoZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKGVyci5lcnJvcnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlKHJlcSwgcmVzKSB7XG4gICAgaWYoIXJlcS5ib2R5KVxuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkJvZHkgbm90IGZvdW5kXCIpO1xuICAgIHJldHVybiBQb3N0cy5jcmVhdGUocmVxLmJvZHkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbihyZXN1bHQpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBsLmVycm9yKGVycik7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbihlcnIuZXJyb3JzKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTtcbiJdfQ==