var Congo = {
  init: function() {
    //data:
    Congo.databases = new Congo.DatabaseCollection();

    //views:
    Congo.breadcrumbs = new Congo.BreadcrumbView({el: "#nav"});


    //start the app:
    Congo.start();
  }, 
  showDatabases: function() {
    var dbLayout = new Congo.DatabaseLayoutView({collection: this.databases});
    dbLayout.render();

    $("#details").append(dbLayout.el);
    Congo.databases.fetch();
  },
  start: function() {
    Congo.showDatabases();
  }
}