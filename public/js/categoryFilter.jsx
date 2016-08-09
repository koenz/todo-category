/*jshint quotmark: false */
/*jshint white: false */
/*jshint trailing: false */
/*jshint newcap: false */
/*global React */
var app = app || {};

(function () {
	'use strict';


	app.CategoryFilter = React.createClass({

		render: function () {
			return (
				<li className={classNames({
					show: this.props.category.show})}>
					
					<label className="toggle" onClick={this.props.onToggle}>
						{this.props.category.title}
					</label>
					
				</li>
			);
		}
	});
})();
