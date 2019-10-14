import mongoose from 'mongoose';

import config from './config.json';
import l from './logger';

mongoose.Promise = global.Promise;

export default class Database{

	constructor(){
		this.connection = mongoose.connect(config.database.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}
	createConnection(){
		this.connection
		.then(db => {
			l.info(
				`Successfully connected to ${config.database.uri} MongoDB cluster mode.`,
			);
			return db;
		})
		.catch(err => {
			if (err.message.code === 'ETIMEDOUT') {
				l.info('Attempting to re-establish database connection.');
				mongoose.connect(config.database.uri);
			} else {
				l.error('Error while attempting to connect to database:');
				l.error(err);
			}
		});
		return this.connection;
	}
}