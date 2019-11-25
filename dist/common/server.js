"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var path = _interopRequireWildcard(require("path"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var http = _interopRequireWildcard(require("http"));

var os = _interopRequireWildcard(require("os"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _mongoose = _interopRequireDefault(require("./mongoose"));

var _swagger = _interopRequireDefault(require("./swagger"));

var _logger = _interopRequireDefault(require("./logger"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use(bodyParser.urlencoded({
      extended: true,
      limit: process.env.REQUEST_LIMIT || '100kb'
    }));
    app.use((0, _cookieParser.default)(process.env.SESSION_SECRET));
    app.use(_express.default.static(`${root}/public`));
  }

  router(routes) {
    (0, _swagger.default)(app, routes);
    return this;
  }

  connectDatabase() {
    const database = new _mongoose.default();
    return database.createConnection();
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => {
      _logger.default.info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${p}}`);

      this.connectDatabase();
    };

    http.createServer(app).listen(port, welcome(port));
    return app;
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc2VydmVyLmpzIl0sIm5hbWVzIjpbImFwcCIsIkV4cHJlc3MiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJyb290IiwicGF0aCIsIm5vcm1hbGl6ZSIsIl9fZGlybmFtZSIsInNldCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwibGltaXQiLCJwcm9jZXNzIiwiZW52IiwiUkVRVUVTVF9MSU1JVCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIlNFU1NJT05fU0VDUkVUIiwic3RhdGljIiwicm91dGVyIiwicm91dGVzIiwiY29ubmVjdERhdGFiYXNlIiwiZGF0YWJhc2UiLCJEYXRhYmFzZSIsImNyZWF0ZUNvbm5lY3Rpb24iLCJsaXN0ZW4iLCJwb3J0IiwiUE9SVCIsIndlbGNvbWUiLCJwIiwibCIsImluZm8iLCJOT0RFX0VOViIsIm9zIiwiaG9zdG5hbWUiLCJodHRwIiwiY3JlYXRlU2VydmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLGdCQUFKLEVBQVo7O0FBRWUsTUFBTUMsYUFBTixDQUFvQjtBQUNqQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1osVUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZ0IsR0FBRUMsU0FBVSxRQUE1QixDQUFiO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRLFNBQVIsRUFBb0IsR0FBRUosSUFBSyxRQUEzQjtBQUNBSixJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUUMsVUFBVSxDQUFDQyxJQUFYLENBQWdCO0FBQUVDLE1BQUFBLEtBQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQVosSUFBNkI7QUFBdEMsS0FBaEIsQ0FBUjtBQUNBZixJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUUMsVUFBVSxDQUFDTSxVQUFYLENBQXNCO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCTCxNQUFBQSxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaLElBQTZCO0FBQXRELEtBQXRCLENBQVI7QUFDQWYsSUFBQUEsR0FBRyxDQUFDUyxHQUFKLENBQVEsMkJBQWFJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxjQUF6QixDQUFSO0FBQ0FsQixJQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUVIsaUJBQVFrQixNQUFSLENBQWdCLEdBQUVmLElBQUssU0FBdkIsQ0FBUjtBQUNEOztBQUVEZ0IsRUFBQUEsTUFBTSxDQUFDQyxNQUFELEVBQVM7QUFDYiwwQkFBV3JCLEdBQVgsRUFBZ0JxQixNQUFoQjtBQUVBLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxlQUFlLEdBQUU7QUFDZixVQUFNQyxRQUFRLEdBQUcsSUFBSUMsaUJBQUosRUFBakI7QUFDQSxXQUFPRCxRQUFRLENBQUNFLGdCQUFULEVBQVA7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxDQUFDQyxJQUFJLEdBQUdkLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxJQUFwQixFQUEwQjtBQUM5QixVQUFNQyxPQUFPLEdBQUdDLENBQUMsSUFBSSxNQUFNO0FBQ3pCQyxzQkFBRUMsSUFBRixDQUFRLHFCQUFvQm5CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUIsUUFBWixJQUF3QixhQUFjLE9BQU1DLEVBQUUsQ0FBQ0MsUUFBSCxFQUFjLGFBQVlMLENBQUUsR0FBcEc7O0FBQ0EsV0FBS1IsZUFBTDtBQUNELEtBSEQ7O0FBSUFjLElBQUFBLElBQUksQ0FBQ0MsWUFBTCxDQUFrQnJDLEdBQWxCLEVBQXVCMEIsTUFBdkIsQ0FBOEJDLElBQTlCLEVBQW9DRSxPQUFPLENBQUNGLElBQUQsQ0FBM0M7QUFDQSxXQUFPM0IsR0FBUDtBQUNEOztBQTVCZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuXG5pbXBvcnQgRGF0YWJhc2UgZnJvbSAnLi9tb25nb29zZSc7XG5pbXBvcnQgc3dhZ2dlcmlmeSBmcm9tICcuL3N3YWdnZXInO1xuXG5pbXBvcnQgbCBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IGFwcCA9IG5ldyBFeHByZXNzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3NTZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCByb290ID0gcGF0aC5ub3JtYWxpemUoYCR7X19kaXJuYW1lfS8uLi8uLmApO1xuICAgIGFwcC5zZXQoJ2FwcFBhdGgnLCBgJHtyb290fWNsaWVudGApO1xuICAgIGFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSwgbGltaXQ6IHByb2Nlc3MuZW52LlJFUVVFU1RfTElNSVQgfHwgJzEwMGtiJyB9KSk7XG4gICAgYXBwLnVzZShjb29raWVQYXJzZXIocHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQpKTtcbiAgICBhcHAudXNlKEV4cHJlc3Muc3RhdGljKGAke3Jvb3R9L3B1YmxpY2ApKTtcbiAgfVxuXG4gIHJvdXRlcihyb3V0ZXMpIHtcbiAgICBzd2FnZ2VyaWZ5KGFwcCwgcm91dGVzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29ubmVjdERhdGFiYXNlKCl7XG4gICAgY29uc3QgZGF0YWJhc2UgPSBuZXcgRGF0YWJhc2UoKTtcbiAgICByZXR1cm4gZGF0YWJhc2UuY3JlYXRlQ29ubmVjdGlvbigpO1xuICB9XG5cbiAgbGlzdGVuKHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUKSB7XG4gICAgY29uc3Qgd2VsY29tZSA9IHAgPT4gKCkgPT4ge1xuICAgICAgbC5pbmZvKGB1cCBhbmQgcnVubmluZyBpbiAke3Byb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCd9IEA6ICR7b3MuaG9zdG5hbWUoKX0gb24gcG9ydDogJHtwfX1gKTtcbiAgICAgIHRoaXMuY29ubmVjdERhdGFiYXNlKCk7XG4gICAgfTtcbiAgICBodHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwb3J0LCB3ZWxjb21lKHBvcnQpKTtcbiAgICByZXR1cm4gYXBwO1xuICB9XG59XG4iXX0=