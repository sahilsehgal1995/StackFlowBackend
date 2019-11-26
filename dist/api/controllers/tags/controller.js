"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Controller = void 0;

var _tags = _interopRequireDefault(require("../../models/tags"));

var _logger = _interopRequireDefault(require("../../../common/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  all(req, res) {
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let offset = req.query.offset ? parseInt(req.query.offset) : 0;

    _tags.default.find().limit(limit).skip(offset).then(tags => {
      return res.json(tags);
    }).catch(err => {
      _logger.default.error(err);

      res.status(422).json(err.errors);
    });
  }

}

exports.Controller = Controller;

var _default = new Controller();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZlci9hcGkvY29udHJvbGxlcnMvdGFncy9jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJhbGwiLCJyZXEiLCJyZXMiLCJsaW1pdCIsInF1ZXJ5IiwicGFyc2VJbnQiLCJvZmZzZXQiLCJUYWdzIiwiZmluZCIsInNraXAiLCJ0aGVuIiwidGFncyIsImpzb24iLCJjYXRjaCIsImVyciIsImwiLCJlcnJvciIsInN0YXR1cyIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QkMsRUFBQUEsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBVztBQUNaLFFBQUlDLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVELEtBQVYsR0FBa0JFLFFBQVEsQ0FBQ0osR0FBRyxDQUFDRyxLQUFKLENBQVVELEtBQVgsQ0FBMUIsR0FBOEMsRUFBMUQ7QUFDQSxRQUFJRyxNQUFNLEdBQUdMLEdBQUcsQ0FBQ0csS0FBSixDQUFVRSxNQUFWLEdBQW1CRCxRQUFRLENBQUNKLEdBQUcsQ0FBQ0csS0FBSixDQUFVRSxNQUFYLENBQTNCLEdBQWdELENBQTdEOztBQUNBQyxrQkFBS0MsSUFBTCxHQUNDTCxLQURELENBQ09BLEtBRFAsRUFFQ00sSUFGRCxDQUVNSCxNQUZOLEVBR0NJLElBSEQsQ0FHTUMsSUFBSSxJQUFJO0FBQ1osYUFBT1QsR0FBRyxDQUFDVSxJQUFKLENBQVNELElBQVQsQ0FBUDtBQUNELEtBTEQsRUFNQ0UsS0FORCxDQU1PQyxHQUFHLElBQUk7QUFDWkMsc0JBQUVDLEtBQUYsQ0FBUUYsR0FBUjs7QUFDQVosTUFBQUEsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkwsSUFBaEIsQ0FBcUJFLEdBQUcsQ0FBQ0ksTUFBekI7QUFDRCxLQVREO0FBVUQ7O0FBZHFCOzs7O2VBZ0JULElBQUluQixVQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFncyBmcm9tICcuLi8uLi9tb2RlbHMvdGFncyc7XG5pbXBvcnQgbCBmcm9tICcuLi8uLi8uLi9jb21tb24vbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICBhbGwocmVxLCByZXMpIHtcbiAgICBsZXQgbGltaXQgPSByZXEucXVlcnkubGltaXQgPyBwYXJzZUludChyZXEucXVlcnkubGltaXQpIDogMTA7XG4gICAgbGV0IG9mZnNldCA9IHJlcS5xdWVyeS5vZmZzZXQgPyBwYXJzZUludChyZXEucXVlcnkub2Zmc2V0KSA6IDA7XG4gICAgVGFncy5maW5kKClcbiAgICAubGltaXQobGltaXQpXG4gICAgLnNraXAob2Zmc2V0KVxuICAgIC50aGVuKHRhZ3MgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHRhZ3MpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBsLmVycm9yKGVycik7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbihlcnIuZXJyb3JzKTtcbiAgICB9KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnRyb2xsZXIoKTsiXX0=