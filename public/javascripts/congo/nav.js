Congo.BreadcrumbView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  render: function() {
    $(this.el).html('<li><h3><a href="#">DATABASES</a></h3></li>');
  }, 
  events: {
    "click a": "sayHello"
  },
  sayHello: function() {
    console.log("hello");
  }  
});