"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _swaggerExpressMiddleware = _interopRequireDefault(require("swagger-express-middleware"));

var path = _interopRequireWildcard(require("path"));

var _error = _interopRequireDefault(require("../api/middlewares/error.handler"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(app, routes) {
  (0, _swaggerExpressMiddleware.default)(path.join(__dirname, 'api.yml'), app, (err, mw) => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');
    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: false,
      apiPath: process.env.SWAGGER_API_SPEC // Disable serving the "api.yml" file
      // rawFilesPath: false

    }));
    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    })); // These two middleware don't have any options (yet)

    app.use(mw.CORS(), mw.validateRequest());
    routes(app); // eslint-disable-next-line no-unused-vars, no-shadow

    app.use(_error.default);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9jb21tb24vc3dhZ2dlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCJyb3V0ZXMiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImVyciIsIm13IiwiZW5hYmxlIiwidXNlIiwibWV0YWRhdGEiLCJmaWxlcyIsImNhc2VTZW5zaXRpdmUiLCJzdHJpY3QiLCJ1c2VCYXNlUGF0aCIsImFwaVBhdGgiLCJwcm9jZXNzIiwiZW52IiwiU1dBR0dFUl9BUElfU1BFQyIsInBhcnNlUmVxdWVzdCIsImNvb2tpZSIsInNlY3JldCIsIlNFU1NJT05fU0VDUkVUIiwianNvbiIsImxpbWl0IiwiUkVRVUVTVF9MSU1JVCIsIkNPUlMiLCJ2YWxpZGF0ZVJlcXVlc3QiLCJlcnJvckhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFZSxrQkFBVUEsR0FBVixFQUFlQyxNQUFmLEVBQXVCO0FBQ3BDLHlDQUFXQyxJQUFJLENBQUNDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixTQUFyQixDQUFYLEVBQTRDSixHQUE1QyxFQUFpRCxDQUFDSyxHQUFELEVBQU1DLEVBQU4sS0FBYTtBQUM1RDtBQUNBO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLHdCQUFYO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLGdCQUFYO0FBRUFQLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUFRRixFQUFFLENBQUNHLFFBQUgsRUFBUjtBQUNBVCxJQUFBQSxHQUFHLENBQUNRLEdBQUosQ0FBUUYsRUFBRSxDQUFDSSxLQUFILENBQVM7QUFDZjtBQUNBO0FBQ0FDLE1BQUFBLGFBQWEsRUFBRSxLQUhBO0FBSWZDLE1BQUFBLE1BQU0sRUFBRTtBQUpPLEtBQVQsRUFLTDtBQUNEQyxNQUFBQSxXQUFXLEVBQUUsS0FEWjtBQUVEQyxNQUFBQSxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFGcEIsQ0FHRDtBQUNBOztBQUpDLEtBTEssQ0FBUjtBQVlBakIsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVFGLEVBQUUsQ0FBQ1ksWUFBSCxDQUFnQjtBQUN0QjtBQUNBQyxNQUFBQSxNQUFNLEVBQUU7QUFDTkMsUUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUs7QUFEZCxPQUZjO0FBS3RCO0FBQ0FDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxLQUFLLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUTtBQURmO0FBTmdCLEtBQWhCLENBQVIsRUFuQjRELENBOEI1RDs7QUFDQXhCLElBQUFBLEdBQUcsQ0FBQ1EsR0FBSixDQUNFRixFQUFFLENBQUNtQixJQUFILEVBREYsRUFFRW5CLEVBQUUsQ0FBQ29CLGVBQUgsRUFGRjtBQUtBekIsSUFBQUEsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FwQzRELENBc0M1RDs7QUFDQUEsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVFtQixjQUFSO0FBQ0QsR0F4Q0Q7QUF5Q0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZGxld2FyZSBmcm9tICdzd2FnZ2VyLWV4cHJlc3MtbWlkZGxld2FyZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGVycm9ySGFuZGxlciBmcm9tICcuLi9hcGkvbWlkZGxld2FyZXMvZXJyb3IuaGFuZGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcHAsIHJvdXRlcykge1xuICBtaWRkbGV3YXJlKHBhdGguam9pbihfX2Rpcm5hbWUsICdhcGkueW1sJyksIGFwcCwgKGVyciwgbXcpID0+IHtcbiAgICAvLyBFbmFibGUgRXhwcmVzcycgY2FzZS1zZW5zaXRpdmUgYW5kIHN0cmljdCBvcHRpb25zXG4gICAgLy8gKHNvIFwiL2VudGl0aWVzXCIsIFwiL0VudGl0aWVzXCIsIGFuZCBcIi9FbnRpdGllcy9cIiBhcmUgYWxsIGRpZmZlcmVudClcbiAgICBhcHAuZW5hYmxlKCdjYXNlIHNlbnNpdGl2ZSByb3V0aW5nJyk7XG4gICAgYXBwLmVuYWJsZSgnc3RyaWN0IHJvdXRpbmcnKTtcblxuICAgIGFwcC51c2UobXcubWV0YWRhdGEoKSk7XG4gICAgYXBwLnVzZShtdy5maWxlcyh7XG4gICAgICAvLyBPdmVycmlkZSB0aGUgRXhwcmVzcyBBcHAncyBjYXNlLXNlbnNpdGl2ZVxuICAgICAgLy8gYW5kIHN0cmljdC1yb3V0aW5nIHNldHRpbmdzIGZvciB0aGUgRmlsZXMgbWlkZGxld2FyZS5cbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICB9LCB7XG4gICAgICB1c2VCYXNlUGF0aDogZmFsc2UsXG4gICAgICBhcGlQYXRoOiBwcm9jZXNzLmVudi5TV0FHR0VSX0FQSV9TUEVDLFxuICAgICAgLy8gRGlzYWJsZSBzZXJ2aW5nIHRoZSBcImFwaS55bWxcIiBmaWxlXG4gICAgICAvLyByYXdGaWxlc1BhdGg6IGZhbHNlXG4gICAgfSkpO1xuXG4gICAgYXBwLnVzZShtdy5wYXJzZVJlcXVlc3Qoe1xuICAgICAgLy8gQ29uZmlndXJlIHRoZSBjb29raWUgcGFyc2VyIHRvIHVzZSBzZWN1cmUgY29va2llc1xuICAgICAgY29va2llOiB7XG4gICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQsXG4gICAgICB9LFxuICAgICAgLy8gRG9uJ3QgYWxsb3cgSlNPTiBjb250ZW50IG92ZXIgMTAwa2IgKGRlZmF1bHQgaXMgMW1iKVxuICAgICAganNvbjoge1xuICAgICAgICBsaW1pdDogcHJvY2Vzcy5lbnYuUkVRVUVTVF9MSU1JVCxcbiAgICAgIH0sXG4gICAgfSkpO1xuXG4gICAgLy8gVGhlc2UgdHdvIG1pZGRsZXdhcmUgZG9uJ3QgaGF2ZSBhbnkgb3B0aW9ucyAoeWV0KVxuICAgIGFwcC51c2UoXG4gICAgICBtdy5DT1JTKCksXG4gICAgICBtdy52YWxpZGF0ZVJlcXVlc3QoKSxcbiAgICApO1xuXG4gICAgcm91dGVzKGFwcCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMsIG5vLXNoYWRvd1xuICAgIGFwcC51c2UoZXJyb3JIYW5kbGVyKTtcbiAgfSk7XG59XG4iXX0=