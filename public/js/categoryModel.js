/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
var app = app || {};

(function () {
	'use strict';

	var Utils = app.Utils;
	// Generic "model" object. You can use whatever
	// framework you want. For this application it
	// may not even be worth separating this logic
	// out, but we do this to demonstrate one way to
	// separate out parts of your application.
	app.CategoryModel = function (key) {
		this.key = key;
		this.categories = Utils.store(key);
		this.onChanges = [];

		// set first Uncategorised category
		if(this.categories[0] == undefined){
			this.addCategory('Uncategorised');
		}
		
	};


	app.CategoryModel.prototype.subscribe = function (onChange) {
		this.onChanges.push(onChange);
	};

	app.CategoryModel.prototype.inform = function () {
		Utils.store(this.key, this.categories);
		this.onChanges.forEach(function (cb) { cb(); });
	};

	app.CategoryModel.prototype.addCategory = function (title) {
		this.categories = this.categories.concat({
			id: Utils.uuid(),
			title: title,
			selected: true,
			show: false
		});

		this.inform();
	};

	app.CategoryModel.prototype.toggle = function (categoryToToggle) {
		this.categories = this.categories.map(function (category) {
			return category.id === categoryToToggle.id ?
				Utils.extend({}, category, {selected: true}) :
				Utils.extend({}, category, {selected: false});
		});

		this.inform();
	};

	app.CategoryModel.prototype.toggleShow = function (categoryToToggle) {
		this.categories = this.categories.map(function (category) {

			return category.id === categoryToToggle.id ?
				Utils.extend({}, category, {show: true}) :
				Utils.extend({}, category, {show: false});

		});

		this.inform();
	};

	app.CategoryModel.prototype.toggleAll = function () {
		this.categories = this.categories.map(function (category) {
			return Utils.extend({}, category, {selected: false});
		});

		this.inform();
	};

	app.CategoryModel.prototype.destroy = function (category) {
		this.categories = this.categories.filter(function (candidate) {
			return candidate.id !== category.id;
		});

		this.inform();
	};

	app.CategoryModel.prototype.save = function (categoryToSave, text) {
		this.categories = this.categories.map(function (category) {
			return category !== categoryToSave ? category : Utils.extend({}, category, {title: text});
		});

		this.inform();
	};


})();
