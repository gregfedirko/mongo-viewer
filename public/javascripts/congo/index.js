var Congo = {
  init: function() {
    var crumbView = new Congo.BreadcrumbView({el: "#breadcrumbs"});
    crumbView.render();

    var dbListView = new Congo.DatabaseListView();
    dbListView.render();
  }
}