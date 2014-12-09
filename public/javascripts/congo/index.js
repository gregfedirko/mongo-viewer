var Congo = {
  init: function() {
    var crumbView = new Congo.BreadcrumbView({el: "#breadcrumbs"});
    crumbView.render();

    var dbs = new Congo.Databases();
    dbs.fetch({
      success: function(collection, response, options) {
        var dbListView = new Congo.DatabaseListView({collection: dbs});
        dbListView.render();
      }, 
      error: function(collection, response, options) {
        console.log(response);
      }
    });

  }
}