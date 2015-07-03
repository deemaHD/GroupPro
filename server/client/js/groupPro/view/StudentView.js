var StudentView = Backbone.View.extend({
    tagName: 'li',
    
    events: {
        'click': 'mediatorPublish'    
    },
    
    mediatorPublish: function () {
        mediator.publish('studentSelect', this.model);    
    },
    
    render: function () {
        this.$el.html(this.model.get('name'));
        return this;
    }
});