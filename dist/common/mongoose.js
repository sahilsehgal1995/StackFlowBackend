"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config.json"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.Promise = global.Promise;

class Database {
  constructor() {
    this.connection = _mongoose.default.connect(_config.default.database.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  createConnection() {
    this.connection.then(db => {
      _logger.default.info(`Successfully connected to ${_config.default.database.uri} MongoDB cluster mode.`);

      return db;
    }).catch(err => {
      if (err.message.code === 'ETIMEDOUT') {
        _logger.default.info('Attempting to re-establish database connection.');

        _mongoose.default.connect(_config.default.database.uri);
      } else {
        _logger.default.error('Error while attempting to connect to database:');

        _logger.default.error(err);
      }
    });
    return this.connection;
  }

}

exports.default = Database;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vbW9uZ29vc2UuanMiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiRGF0YWJhc2UiLCJjb25zdHJ1Y3RvciIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiY29uZmlnIiwiZGF0YWJhc2UiLCJ1cmkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjcmVhdGVDb25uZWN0aW9uIiwidGhlbiIsImRiIiwibCIsImluZm8iLCJjYXRjaCIsImVyciIsIm1lc3NhZ2UiLCJjb2RlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7OztBQUVBQSxrQkFBU0MsT0FBVCxHQUFtQkMsTUFBTSxDQUFDRCxPQUExQjs7QUFFZSxNQUFNRSxRQUFOLENBQWM7QUFFNUJDLEVBQUFBLFdBQVcsR0FBRTtBQUNaLFNBQUtDLFVBQUwsR0FBa0JMLGtCQUFTTSxPQUFULENBQWlCQyxnQkFBT0MsUUFBUCxDQUFnQkMsR0FBakMsRUFBc0M7QUFDdkRDLE1BQUFBLGVBQWUsRUFBRSxJQURzQztBQUV2REMsTUFBQUEsa0JBQWtCLEVBQUU7QUFGbUMsS0FBdEMsQ0FBbEI7QUFJQTs7QUFDREMsRUFBQUEsZ0JBQWdCLEdBQUU7QUFDakIsU0FBS1AsVUFBTCxDQUNDUSxJQURELENBQ01DLEVBQUUsSUFBSTtBQUNYQyxzQkFBRUMsSUFBRixDQUNFLDZCQUE0QlQsZ0JBQU9DLFFBQVAsQ0FBZ0JDLEdBQUksd0JBRGxEOztBQUdBLGFBQU9LLEVBQVA7QUFDQSxLQU5ELEVBT0NHLEtBUEQsQ0FPT0MsR0FBRyxJQUFJO0FBQ2IsVUFBSUEsR0FBRyxDQUFDQyxPQUFKLENBQVlDLElBQVosS0FBcUIsV0FBekIsRUFBc0M7QUFDckNMLHdCQUFFQyxJQUFGLENBQU8saURBQVA7O0FBQ0FoQiwwQkFBU00sT0FBVCxDQUFpQkMsZ0JBQU9DLFFBQVAsQ0FBZ0JDLEdBQWpDO0FBQ0EsT0FIRCxNQUdPO0FBQ05NLHdCQUFFTSxLQUFGLENBQVEsZ0RBQVI7O0FBQ0FOLHdCQUFFTSxLQUFGLENBQVFILEdBQVI7QUFDQTtBQUNELEtBZkQ7QUFnQkEsV0FBTyxLQUFLYixVQUFaO0FBQ0E7O0FBMUIyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcuanNvbic7XG5pbXBvcnQgbCBmcm9tICcuL2xvZ2dlcic7XG5cbm1vbmdvb3NlLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YWJhc2V7XG5cblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLmNvbm5lY3Rpb24gPSBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5kYXRhYmFzZS51cmksIHtcblx0XHRcdHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcblx0XHRcdHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cdGNyZWF0ZUNvbm5lY3Rpb24oKXtcblx0XHR0aGlzLmNvbm5lY3Rpb25cblx0XHQudGhlbihkYiA9PiB7XG5cdFx0XHRsLmluZm8oXG5cdFx0XHRcdGBTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvICR7Y29uZmlnLmRhdGFiYXNlLnVyaX0gTW9uZ29EQiBjbHVzdGVyIG1vZGUuYCxcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gZGI7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGlmIChlcnIubWVzc2FnZS5jb2RlID09PSAnRVRJTUVET1VUJykge1xuXHRcdFx0XHRsLmluZm8oJ0F0dGVtcHRpbmcgdG8gcmUtZXN0YWJsaXNoIGRhdGFiYXNlIGNvbm5lY3Rpb24uJyk7XG5cdFx0XHRcdG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLmRhdGFiYXNlLnVyaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsLmVycm9yKCdFcnJvciB3aGlsZSBhdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gZGF0YWJhc2U6Jyk7XG5cdFx0XHRcdGwuZXJyb3IoZXJyKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcy5jb25uZWN0aW9uO1xuXHR9XG59Il19