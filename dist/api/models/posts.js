"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseBcrypt = _interopRequireDefault(require("mongoose-bcrypt"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _moment = _interopRequireDefault(require("moment"));

var _mongooseStringQuery = _interopRequireDefault(require("mongoose-string-query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PostsSchema = new _mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  post_type_id: {
    type: Number
  },
  accepted_answer_id: {
    type: Number
  },
  creation_date: {
    type: Date,
    default: (0, _moment.default)()
  },
  score: {
    type: Number
  },
  view_count: {
    type: Number
  },
  body: {
    type: String,
    default: ''
  },
  owner_user_id: {
    type: Number,
    required: true
  },
  last_editor_user_id: {
    type: Number
  },
  last_edit_date: {
    type: Date,
    default: (0, _moment.default)()
  },
  last_activity_date: {
    type: Date,
    default: (0, _moment.default)()
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  tags: {
    type: String,
    default: ''
  },
  answer_count: {
    type: Number,
    default: 0
  },
  comment_count: {
    type: Number,
    default: 0
  },
  favorite_count: {
    type: Number,
    default: 0
  }
}, {
  collection: 'Posts'
});
exports.PostsSchema = PostsSchema;
PostsSchema.plugin(_mongooseBcrypt.default);
PostsSchema.plugin(_mongooseTimestamp.default);
PostsSchema.plugin(_mongooseStringQuery.default);
PostsSchema.index({
  id: 1
});
module.exports = _mongoose.default.model('Posts', PostsSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvbW9kZWxzL3Bvc3RzLmpzIl0sIm5hbWVzIjpbIlBvc3RzU2NoZW1hIiwiU2NoZW1hIiwiaWQiLCJ0eXBlIiwiTnVtYmVyIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJpbmRleCIsInBvc3RfdHlwZV9pZCIsImFjY2VwdGVkX2Fuc3dlcl9pZCIsImNyZWF0aW9uX2RhdGUiLCJEYXRlIiwiZGVmYXVsdCIsInNjb3JlIiwidmlld19jb3VudCIsImJvZHkiLCJTdHJpbmciLCJvd25lcl91c2VyX2lkIiwibGFzdF9lZGl0b3JfdXNlcl9pZCIsImxhc3RfZWRpdF9kYXRlIiwibGFzdF9hY3Rpdml0eV9kYXRlIiwidGl0bGUiLCJ0YWdzIiwiYW5zd2VyX2NvdW50IiwiY29tbWVudF9jb3VudCIsImZhdm9yaXRlX2NvdW50IiwiY29sbGVjdGlvbiIsInBsdWdpbiIsImJjcnlwdCIsInRpbWVzdGFtcHMiLCJtb25nb29zZVN0cmluZ1F1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vbmdvb3NlIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFTyxNQUFNQSxXQUFXLEdBQUcsSUFBSUMsZ0JBQUosQ0FDMUI7QUFDQ0MsRUFBQUEsRUFBRSxFQUFFO0FBQ0hDLElBQUFBLElBQUksRUFBRUMsTUFESDtBQUVIQyxJQUFBQSxRQUFRLEVBQUUsSUFGUDtBQUdIQyxJQUFBQSxNQUFNLEVBQUUsSUFITDtBQUlIQyxJQUFBQSxLQUFLLEVBQUU7QUFKSixHQURMO0FBT0NDLEVBQUFBLFlBQVksRUFBRTtBQUNiTCxJQUFBQSxJQUFJLEVBQUVDO0FBRE8sR0FQZjtBQVVDSyxFQUFBQSxrQkFBa0IsRUFBRTtBQUNuQk4sSUFBQUEsSUFBSSxFQUFFQztBQURhLEdBVnJCO0FBYUNNLEVBQUFBLGFBQWEsRUFBRTtBQUNkUCxJQUFBQSxJQUFJLEVBQUVRLElBRFE7QUFFZEMsSUFBQUEsT0FBTyxFQUFFO0FBRkssR0FiaEI7QUFpQkNDLEVBQUFBLEtBQUssRUFBRTtBQUNOVixJQUFBQSxJQUFJLEVBQUVDO0FBREEsR0FqQlI7QUFvQkNVLEVBQUFBLFVBQVUsRUFBRTtBQUNYWCxJQUFBQSxJQUFJLEVBQUVDO0FBREssR0FwQmI7QUF1QkNXLEVBQUFBLElBQUksRUFBRTtBQUNMWixJQUFBQSxJQUFJLEVBQUVhLE1BREQ7QUFFTEosSUFBQUEsT0FBTyxFQUFFO0FBRkosR0F2QlA7QUEyQkNLLEVBQUFBLGFBQWEsRUFBRTtBQUNkZCxJQUFBQSxJQUFJLEVBQUVDLE1BRFE7QUFFZEMsSUFBQUEsUUFBUSxFQUFFO0FBRkksR0EzQmhCO0FBK0JDYSxFQUFBQSxtQkFBbUIsRUFBRTtBQUNwQmYsSUFBQUEsSUFBSSxFQUFFQztBQURjLEdBL0J0QjtBQWtDQ2UsRUFBQUEsY0FBYyxFQUFFO0FBQ2ZoQixJQUFBQSxJQUFJLEVBQUVRLElBRFM7QUFFZkMsSUFBQUEsT0FBTyxFQUFFO0FBRk0sR0FsQ2pCO0FBc0NDUSxFQUFBQSxrQkFBa0IsRUFBRTtBQUNuQmpCLElBQUFBLElBQUksRUFBRVEsSUFEYTtBQUVuQkMsSUFBQUEsT0FBTyxFQUFFO0FBRlUsR0F0Q3JCO0FBMENHUyxFQUFBQSxLQUFLLEVBQUU7QUFDTmxCLElBQUFBLElBQUksRUFBRWEsTUFEQTtBQUVOWCxJQUFBQSxRQUFRLEVBQUUsSUFGSjtBQUdOTyxJQUFBQSxPQUFPLEVBQUU7QUFISCxHQTFDVjtBQStDR1UsRUFBQUEsSUFBSSxFQUFFO0FBQ0xuQixJQUFBQSxJQUFJLEVBQUVhLE1BREQ7QUFFTEosSUFBQUEsT0FBTyxFQUFFO0FBRkosR0EvQ1Q7QUFtREdXLEVBQUFBLFlBQVksRUFBRTtBQUNicEIsSUFBQUEsSUFBSSxFQUFFQyxNQURPO0FBRWJRLElBQUFBLE9BQU8sRUFBRTtBQUZJLEdBbkRqQjtBQXVER1ksRUFBQUEsYUFBYSxFQUFFO0FBQ2RyQixJQUFBQSxJQUFJLEVBQUVDLE1BRFE7QUFFZFEsSUFBQUEsT0FBTyxFQUFFO0FBRkssR0F2RGxCO0FBMkRHYSxFQUFBQSxjQUFjLEVBQUU7QUFDZnRCLElBQUFBLElBQUksRUFBRUMsTUFEUztBQUVmUSxJQUFBQSxPQUFPLEVBQUU7QUFGTTtBQTNEbkIsQ0FEMEIsRUFpRTFCO0FBQUVjLEVBQUFBLFVBQVUsRUFBRTtBQUFkLENBakUwQixDQUFwQjs7QUFxRVAxQixXQUFXLENBQUMyQixNQUFaLENBQW1CQyx1QkFBbkI7QUFDQTVCLFdBQVcsQ0FBQzJCLE1BQVosQ0FBbUJFLDBCQUFuQjtBQUNBN0IsV0FBVyxDQUFDMkIsTUFBWixDQUFtQkcsNEJBQW5CO0FBRUE5QixXQUFXLENBQUNPLEtBQVosQ0FBa0I7QUFBRUwsRUFBQUEsRUFBRSxFQUFFO0FBQU4sQ0FBbEI7QUFFQTZCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsa0JBQVNDLEtBQVQsQ0FBZSxPQUFmLEVBQXdCbEMsV0FBeEIsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdtb25nb29zZS1iY3J5cHQnO1xuaW1wb3J0IHRpbWVzdGFtcHMgZnJvbSAnbW9uZ29vc2UtdGltZXN0YW1wJztcbmltcG9ydCBtb21lbnQgIGZyb20gJ21vbWVudCc7XG5pbXBvcnQgbW9uZ29vc2VTdHJpbmdRdWVyeSBmcm9tICdtb25nb29zZS1zdHJpbmctcXVlcnknO1xuXG5leHBvcnQgY29uc3QgUG9zdHNTY2hlbWEgPSBuZXcgU2NoZW1hKFxuXHR7XG5cdFx0aWQ6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0dW5pcXVlOiB0cnVlLFxuXHRcdFx0aW5kZXg6IHRydWVcblx0XHR9LFxuXHRcdHBvc3RfdHlwZV9pZDoge1xuXHRcdFx0dHlwZTogTnVtYmVyXG5cdFx0fSxcblx0XHRhY2NlcHRlZF9hbnN3ZXJfaWQ6IHtcblx0XHRcdHR5cGU6IE51bWJlclxuXHRcdH0sXG5cdFx0Y3JlYXRpb25fZGF0ZToge1xuXHRcdFx0dHlwZTogRGF0ZSxcblx0XHRcdGRlZmF1bHQ6IG1vbWVudCgpXG5cdFx0fSxcblx0XHRzY29yZToge1xuXHRcdFx0dHlwZTogTnVtYmVyXG5cdFx0fSxcblx0XHR2aWV3X2NvdW50OiB7XG5cdFx0XHR0eXBlOiBOdW1iZXJcblx0XHR9LFxuXHRcdGJvZHk6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fSxcblx0XHRvd25lcl91c2VyX2lkOiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHR9LFxuXHRcdGxhc3RfZWRpdG9yX3VzZXJfaWQ6IHtcblx0XHRcdHR5cGU6IE51bWJlclxuXHRcdH0sXG5cdFx0bGFzdF9lZGl0X2RhdGU6IHtcblx0XHRcdHR5cGU6IERhdGUsXG5cdFx0XHRkZWZhdWx0OiBtb21lbnQoKVxuXHRcdH0sXG5cdFx0bGFzdF9hY3Rpdml0eV9kYXRlOiB7XG5cdFx0XHR0eXBlOiBEYXRlLFxuXHRcdFx0ZGVmYXVsdDogbW9tZW50KClcblx0XHR9LFxuICBcdFx0dGl0bGU6IHtcbiAgXHRcdFx0dHlwZTogU3RyaW5nLFxuICBcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcbiAgXHRcdFx0ZGVmYXVsdDogJydcbiAgXHRcdH0sXG4gIFx0XHR0YWdzOiB7XG4gIFx0XHRcdHR5cGU6IFN0cmluZyxcbiAgXHRcdFx0ZGVmYXVsdDogJydcbiAgXHRcdH0sXG4gIFx0XHRhbnN3ZXJfY291bnQ6IHtcbiAgXHRcdFx0dHlwZTogTnVtYmVyLFxuICBcdFx0XHRkZWZhdWx0OiAwXG4gIFx0XHR9LFxuICBcdFx0Y29tbWVudF9jb3VudDoge1xuICBcdFx0XHR0eXBlOiBOdW1iZXIsXG4gIFx0XHRcdGRlZmF1bHQ6IDBcbiAgXHRcdH0sXG4gIFx0XHRmYXZvcml0ZV9jb3VudDoge1xuICBcdFx0XHR0eXBlOiBOdW1iZXIsXG4gIFx0XHRcdGRlZmF1bHQ6IDBcbiAgXHRcdH0sXG5cdH0sXG5cdHsgY29sbGVjdGlvbjogJ1Bvc3RzJyB9XG4pO1xuXG5cblBvc3RzU2NoZW1hLnBsdWdpbihiY3J5cHQpO1xuUG9zdHNTY2hlbWEucGx1Z2luKHRpbWVzdGFtcHMpO1xuUG9zdHNTY2hlbWEucGx1Z2luKG1vbmdvb3NlU3RyaW5nUXVlcnkpO1xuXG5Qb3N0c1NjaGVtYS5pbmRleCh7IGlkOiAxIH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdQb3N0cycsIFBvc3RzU2NoZW1hKTsiXX0=