var Congo = {
  init: function() {
    //data:
    Congo.databases = new Congo.DatabaseCollection();

    //views:
    Congo.breadcrumbs = new Congo.BreadcrumbView({el: "#breadcrumbs"});
    Congo.databaseList = new Congo.DatabaseListView({collection: Congo.databases});

    //start the app:
    Congo.start();
  }, 
  start: function() {
    Congo.databases.fetch();
  }
}