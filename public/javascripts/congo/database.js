Congo.Database = Backbone.Model.extend({

});

Congo.Databases = Backbone.Collection.extend({
  model: Congo.Database,
  url: '/mongo-api/dbs', 
});

Congo.DatabaseView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    "click a": "sayHello",
    "click button": "buttonClick"
  },
  sayHello: function() {
    console.log("Hello");
  },
  buttonClick: function() {
    alert("Button Clicked");
  },
  render: function() {
    var template = $("#database-list-template").html();
    var renderedTemplate = _.template(template, this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

Congo.DatabaseListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped',
  events: {
    'change': 'render'
  },
  render: function() {
    var els = [];
    this.collection.each(function(item) {
      var itemView = new Congo.DatabaseView({model: item});
      els.push(itemView.render().el);
    });
    this.$el.html(els);
    $("#database-list").append(this.el);
    return this;
  }
});