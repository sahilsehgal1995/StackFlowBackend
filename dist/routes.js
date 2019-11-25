"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/posts/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use('/api/v1/posts', _router.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwidXNlIiwicG9zdHNSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0FBQ2xDQSxFQUFBQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxlQUFSLEVBQXlCQyxlQUF6QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvc3RzUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL3Bvc3RzL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJvdXRlcyhhcHApIHtcbiAgYXBwLnVzZSgnL2FwaS92MS9wb3N0cycsIHBvc3RzUm91dGVyKTtcbn1cbiJdfQ==