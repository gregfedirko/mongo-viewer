Congo.Database = Backbone.Model.extend({
  url: function() {
    return '/mongo-api/dbs/' + this.id;
  },
  idAttribute: 'name'
});

Congo.DatabaseCollection = Backbone.Collection.extend({
  model: Congo.Database,
  url: '/mongo-api/dbs', 
});

Congo.DatabaseOptionView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "submit form": "addDb"
  },
  addDb: function(event) {
    event.preventDefault();
    var newDbName = $("#newDb").val();
    var newDb = new Congo.Database({name: newDbName});
    newDb.save();
    Congo.databases.add(newDb);
  },
  render: function() {
    var template = $("#database-option-template").html();
    var renderedTemplate = _.template(template, {});
    this.$el.html(renderedTemplate);
    return this;
  }
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
  initialize: function() {
    this.collection.bind("reset", this.render, this);
    this.collection.bind("add", this.render, this);
    this.collection.bind("remove", this.render, this);
    this.renderOptionView();
  },
  tagName: 'table',
  className: 'table table-striped',
  events: {
    'change': 'render'
  },
  renderOptionView: function() {
    Congo.optionView = new Congo.DatabaseOptionView({el: "#db-options"});
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