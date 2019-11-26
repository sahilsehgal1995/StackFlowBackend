"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/posts/router"));

var _router2 = _interopRequireDefault(require("./api/controllers/tags/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  console.log("Debugg");
  app.use('/api/v1/posts', _router.default);
  app.use('/api/v1/tags', _router2.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwiY29uc29sZSIsImxvZyIsInVzZSIsInBvc3RzUm91dGVyIiwidGFnc1JvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQ0YsRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsZUFBUixFQUF5QkMsZUFBekI7QUFDQUosRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVEsY0FBUixFQUF3QkUsZ0JBQXhCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcG9zdHNSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvcG9zdHMvcm91dGVyJztcbmltcG9ydCB0YWdzUm91dGVyIGZyb20gJy4vYXBpL2NvbnRyb2xsZXJzL3RhZ3Mvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKGFwcCkge1xuXHRjb25zb2xlLmxvZyhcIkRlYnVnZ1wiKTtcbiAgYXBwLnVzZSgnL2FwaS92MS9wb3N0cycsIHBvc3RzUm91dGVyKTtcbiAgYXBwLnVzZSgnL2FwaS92MS90YWdzJywgdGFnc1JvdXRlcik7XG59XG4iXX0=