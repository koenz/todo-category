/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
var app = app || {};

(function () {
	'use strict';


	app.TodoCategory = React.createClass({

		render: function () {
			return (
				<li className={classNames({
					selected: this.props.category.selected})}>
					<div>
						<label className="toggle" onClick={this.props.onToggle}>
							{this.props.category.title}
						</label>
						<button className="destroy" onClick={this.props.onDestroy} />
					</div>
				</li>
			);
		}
	});
})();
