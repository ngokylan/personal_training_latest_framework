'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	// title: {
	// 	type: String,
	// 	require: true,
	// 	unique: true,
	// }
	published: {
		type: Date,
		default: Date.now
	},
	keywords: Array,
	published: Boolean,
	author: {
		type: Schema.ObjectId,// or Schema.Type.ObjectId
		ref: 'User' //grab the User Schema reference defined from other places
	},
	//Embedded sub-document
	detail: {
		modelNumber: Number,
		hardcover: Boolean,
		reviews: Number,
		rank: Number
	}
})

//create an object Book Schema
module.exports = mongoose.model('Book', BookSchema);