var GroupView = Backbone.View.extend({
    tagName: 'ul',
    
    initialize: function () {
        this.collection = new Group();
        this.collection.on('add', this.renderStudent, this);
        this.collection.on('invalid', function (model, error) {
            console.log(error);
        });
        this.collection.fetch({validate: true});
    },
    
    renderStudent: function (student) {   
        var studentView = new StudentView({model: student}).render();
        this.$el.append(studentView.$el);
    },
    
    render: function () {
        return this;
    }
});