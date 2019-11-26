"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagsSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseBcrypt = _interopRequireDefault(require("mongoose-bcrypt"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _moment = _interopRequireDefault(require("moment"));

var _mongooseStringQuery = _interopRequireDefault(require("mongoose-string-query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TagsSchema = new _mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  wiki_post_id: {
    type: String,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  },
  tag_name: {
    type: String
  },
  except_post_id: {
    type: String,
    default: ''
  }
}, {
  collection: 'Tags'
});
exports.TagsSchema = TagsSchema;
TagsSchema.plugin(_mongooseBcrypt.default);
TagsSchema.plugin(_mongooseTimestamp.default);
TagsSchema.plugin(_mongooseStringQuery.default);
TagsSchema.index({
  id: 1
});
module.exports = _mongoose.default.model('Tags', TagsSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL3RhZ3MuanMiXSwibmFtZXMiOlsiVGFnc1NjaGVtYSIsIlNjaGVtYSIsImlkIiwidHlwZSIsIk51bWJlciIsInJlcXVpcmVkIiwidW5pcXVlIiwiaW5kZXgiLCJ3aWtpX3Bvc3RfaWQiLCJTdHJpbmciLCJkZWZhdWx0IiwiY291bnQiLCJ0YWdfbmFtZSIsImV4Y2VwdF9wb3N0X2lkIiwiY29sbGVjdGlvbiIsInBsdWdpbiIsImJjcnlwdCIsInRpbWVzdGFtcHMiLCJtb25nb29zZVN0cmluZ1F1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvb3NlIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsZ0JBQUosQ0FDekI7QUFDQ0MsRUFBQUEsRUFBRSxFQUFFO0FBQ0ZDLElBQUFBLElBQUksRUFBRUMsTUFESjtBQUVGQyxJQUFBQSxRQUFRLEVBQUUsSUFGUjtBQUdGQyxJQUFBQSxNQUFNLEVBQUUsSUFITjtBQUlGQyxJQUFBQSxLQUFLLEVBQUU7QUFKTCxHQURMO0FBUUNDLEVBQUFBLFlBQVksRUFBRTtBQUNaTCxJQUFBQSxJQUFJLEVBQUVNLE1BRE07QUFFWkMsSUFBQUEsT0FBTyxFQUFFO0FBRkcsR0FSZjtBQWFDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTFIsSUFBQUEsSUFBSSxFQUFFQyxNQUREO0FBRUxNLElBQUFBLE9BQU8sRUFBRTtBQUZKLEdBYlI7QUFrQkNFLEVBQUFBLFFBQVEsRUFBRTtBQUNMVCxJQUFBQSxJQUFJLEVBQUVNO0FBREQsR0FsQlg7QUFzQkNJLEVBQUFBLGNBQWMsRUFBRTtBQUNkVixJQUFBQSxJQUFJLEVBQUVNLE1BRFE7QUFFZEMsSUFBQUEsT0FBTyxFQUFFO0FBRks7QUF0QmpCLENBRHlCLEVBNEJ6QjtBQUFDSSxFQUFBQSxVQUFVLEVBQUc7QUFBZCxDQTVCeUIsQ0FBbkI7O0FBZ0NQZCxVQUFVLENBQUNlLE1BQVgsQ0FBa0JDLHVCQUFsQjtBQUNBaEIsVUFBVSxDQUFDZSxNQUFYLENBQWtCRSwwQkFBbEI7QUFDQWpCLFVBQVUsQ0FBQ2UsTUFBWCxDQUFrQkcsNEJBQWxCO0FBRUFsQixVQUFVLENBQUNPLEtBQVgsQ0FBaUI7QUFBRUwsRUFBQUEsRUFBRSxFQUFFO0FBQU4sQ0FBakI7QUFFQWlCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsa0JBQVNDLEtBQVQsQ0FBZSxNQUFmLEVBQXVCdEIsVUFBdkIsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdtb25nb29zZS1iY3J5cHQnO1xuaW1wb3J0IHRpbWVzdGFtcHMgZnJvbSAnbW9uZ29vc2UtdGltZXN0YW1wJztcbmltcG9ydCBtb21lbnQgIGZyb20gJ21vbWVudCc7XG5pbXBvcnQgbW9uZ29vc2VTdHJpbmdRdWVyeSBmcm9tICdtb25nb29zZS1zdHJpbmctcXVlcnknO1xuXG5leHBvcnQgY29uc3QgVGFnc1NjaGVtYSA9IG5ldyBTY2hlbWEgKFxuXHR7XG5cdFx0aWQ6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0dW5pcXVlOiB0cnVlLFxuXHRcdFx0XHRpbmRleDogdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdHdpa2lfcG9zdF9pZDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHRcdFx0fSxcblx0XG5cdFx0Y291bnQ6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxuXHRcdFx0XHRkZWZhdWx0OiAwXG5cdFx0fSxcblxuXHRcdHRhZ19uYW1lOiB7XG5cdFx0XHQgICAgdHlwZTogU3RyaW5nXG5cdFx0fSxcblxuXHRcdGV4Y2VwdF9wb3N0X2lkOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHR9LFxuXHR9LFxuXHR7Y29sbGVjdGlvbjogICdUYWdzJ31cblxuKTtcblxuVGFnc1NjaGVtYS5wbHVnaW4oYmNyeXB0KTtcblRhZ3NTY2hlbWEucGx1Z2luKHRpbWVzdGFtcHMpO1xuVGFnc1NjaGVtYS5wbHVnaW4obW9uZ29vc2VTdHJpbmdRdWVyeSk7XG5cblRhZ3NTY2hlbWEuaW5kZXgoeyBpZDogMSB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnVGFncycsIFRhZ3NTY2hlbWEpOyJdfQ==