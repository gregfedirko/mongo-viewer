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

Congo.DatabaseOptionView = Congo.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "submit form": "addDb"
  },
  template: "#database-option-template",
  addDb: function(event) {
    event.preventDefault();
    var newDbName = $("#newDb").val();
    var newDb = new Congo.Database({name: newDbName});
    newDb.save();
    Congo.databases.add(newDb);
  }
});

Congo.DatabaseView = Congo.View.extend({
  tagName: 'tr',
  template: "#database-list-template",
  events: {
    "click button": "removeDb"
  },
  removeDb: function() {
    if(confirm("Are you sure you want to destroy this database?")) {
      this.model.destroy();
      Congo.databases.remove(this.model);
    }
  }
});

Congo.DatabaseListView = Congo.ListView.extend({
  tagName: 'table',
  className: 'table table-striped',
  ItemView: Congo.DatabaseView
});








