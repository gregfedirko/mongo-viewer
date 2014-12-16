var Congo = {
  init: function() {
    //router:
    Congo.router = new Congo.Router();

    //data:
    Congo.databases = new Congo.DatabaseCollection();
    Congo.currentCollection = new Congo.MongoCollections();

    //views:
    Congo.breadcrumbs = new Congo.BreadcrumbView({el: "#nav"});
    Congo.collectionLayout = new Congo.CollectionLayoutView({collection: Congo.currentCollection});
    Congo.dbLayout = new Congo.DatabaseLayoutView({collection: Congo.databases});

    //the App layout:
    Congo.appLayout = new Congo.AppLayout({
      el: "#app",
      detailRegion: "#details"
    });

  }, 
  showDatabases: function() {
    
  },
  start: function() {
    // initialize the app
    Congo.init();

    //for routing purposes
    Backbone.history.start();
  }
}

Congo.Router = Backbone.Router.extend({
  initialize: function() {

  },

  routes: {
    "": "index",
    ":db": "showDatabase"
  },

  showDatabase: function(db) {
    console.log("db selected: ", db);
    Congo.currentDatabase = db;
    console.log("+++++", Congo.currentDatabase);
    Congo.appLayout.renderDetails(Congo.collectionLayout);
    Congo.currentCollection.fetch();
  },

  index: function() {
    console.log("Page is Loaded");
    Congo.appLayout.renderDetails(Congo.dbLayout);
    Congo.databases.fetch();
  }
})