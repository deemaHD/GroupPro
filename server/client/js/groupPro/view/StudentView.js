var StudentView = Backbone.View.extend({
    tagName: 'li',
    
    events: {
<<<<<<< HEAD
        'click': 'mediatorPublish'
=======
        'click': 'mediatorPublish'    
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
    },
    
    mediatorPublish: function () {
        mediator.publish('studentSelect', this.model);    
    },
    
    render: function () {
        this.$el.html(this.model.get('name'));
        return this;
    }
});