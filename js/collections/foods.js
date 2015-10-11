var app = app || {};

var Foods = Backbone.Collection.extend({

	model: app.Food,

	localStorage: new Backbone.LocalStorage('foods-backbone'),

	calorieCount: function() {
		var total = 0;
		this.each( function( food ) {
			var calories = food.get('calories');
			total =+ calories;
		});
		return total;
	},

	checked: function() {
		return this.filter(function( food ) {
			return food.get('checked');
		});
	},

    nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    comparator: function( food ) {
      return food.get('order');
    }

});

app.Foods = new Foods();