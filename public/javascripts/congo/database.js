Congo.Database = Backbone.Model.extend({

});

Congo.Databases = Backbone.Collection.extend({
  model: Congo.Database,
  url: '/mongo-api/dbs'
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
    var renderedTemplate = _.template(template, {name: 'Templated Name'});
    this.$el.html(renderedTemplate);
    return this;
  }
});

Congo.DatabaseListView = Backbone.View.extend({
  tagName: 'table',
  className: 'table table-striped',
  render: function() {
    var els = [];
    for (var i = 0; i < 5; i++) {
      var itemView = new Congo.DatabaseView();
      // $(this.el).append(itemView.render().el);
      els.push(itemView.render().el);
    }
    // return this;
    this.$el.html(els);
    $("#database-list").append(this.el);
  }
});