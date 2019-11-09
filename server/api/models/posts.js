import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';
import moment  from 'moment';
import mongooseStringQuery from 'mongoose-string-query';

export const PostsSchema = new Schema(
	{
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
			default: moment()
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
			required: true,
		},
		last_editor_user_id: {
			type: Number
		},
		last_edit_date: {
			type: Date,
			default: moment()
		},
		last_activity_date: {
			type: Date,
			default: moment()
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
  		},
	},
	{ collection: 'Posts' }
);


PostsSchema.plugin(bcrypt);
PostsSchema.plugin(timestamps);
PostsSchema.plugin(mongooseStringQuery);

PostsSchema.index({ id: 1 });

module.exports = mongoose.model('Posts', PostsSchema);