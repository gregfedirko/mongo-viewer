Congo.View = Backbone.View.extend({
  render: function() {
    var source = $(this.template).html();
    var data = {};
    if (this.model) {
      data = this.model.toJSON();
    }
    var renderedTemplate = _.template(source, data);
    this.$el.html(renderedTemplate);
    return this;
  }
});

Congo.ItemView = Congo.View.extend({
  remove: function() {
    var confirmed = confirm("Are you sure you want to delete this?");
    if (confirmed) {
      this.model.destroy();
    }
  }
});

Congo.ListView = Backbone.View.extend({
  initialize: function() {
    this.collection.bind("reset", this.render, this);
    this.collection.bind("add", this.render, this);
    this.collection.bind("remove", this.render, this);
  },
  
  events: {
    'change': 'render'
  },
  render: function() {
    var els = [];
    var that = this;
    this.collection.each(function(item) {
      var itemView = new that.ItemView({model: item});
      els.push(itemView.render().el);
    });
    this.$el.html(els);
    return this;
  }
});

Congo.Layout = Backbone.View.extend({
  render: function() {
    // add the details template to the DOM
    var templateSource = $(this.template).html();
    this.$el.append(_.template(templateSource));

    var that = this;

    // loop the regions and make them available on this
    _.each(this.regions, function(selector, name) {
      // explicitly declate each region as a jQuery selector..
      // scoped to this view
      that[name] = that.$(selector);
    });

    // now, emit an event that says the DOM template is loaded
    // and that we have explicit jQuery objects set for the regions

    if (that.layoutReady) {
      that.layoutReady();
    }

    return that;

  }
});

Congo.AppLayout = Backbone.View.extend({
  renderNavigator: function() {

  }, 
  renderDetails: function(detailView) {
    // pass the region in on init...
    this.$(this.options.detailRegion).empty();
    console.log("799999999")
    detailView.render();
    this.$(this.options.detailRegion).append(detailView.el);
  }
});






