import mongoose, { Schema } from 'mongoose';
import bcrypt from 'mongoose-bcrypt';
import timestamps from 'mongoose-timestamp';
import mongooseStringQuery from 'mongoose-string-query';

export const MoviesSchema = new Schema(
	{
		movie_id: {
			type: Number,
			required: true,
			unique: true,
			index: true
		},
		title: {
			type: String,
			required: true,
			default: ''
		},
		genres: {
			type: String,
			default: ''
		},
		posters: {
			type: String,
			default: ''
		},
		imdb_id: {
			type: Number,
			required: true,
			unique: true,
		},
		youtube_id: {
			type: String,
		},
	},
	{ collection: 'movies' }
);


MoviesSchema.plugin(bcrypt);
MoviesSchema.plugin(timestamps);
MoviesSchema.plugin(mongooseStringQuery);

MoviesSchema.index({ movie_id: 1 });

module.exports = mongoose.model('movies', MoviesSchema);