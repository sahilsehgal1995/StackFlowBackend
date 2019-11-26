import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';
import moment  from 'moment';
import mongooseStringQuery from 'mongoose-string-query';

export const TagsSchema = new Schema (
	{
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
		},
	},
	{collection:  'Tags'}

);

TagsSchema.plugin(bcrypt);
TagsSchema.plugin(timestamps);
TagsSchema.plugin(mongooseStringQuery);

TagsSchema.index({ id: 1 });

module.exports = mongoose.model('Tags', TagsSchema);