var GroupView = Backbone.View.extend({
    tagName: 'ul',
    
    initialize: function () {
        this.collection = new Group();
        this.collection.on('add', this.renderStudent, this);
<<<<<<< HEAD
        this.collection.on('invalid', function (model, error) {
            console.log(error);
        });
        this.collection.fetch({validate: true});
    },
    
    renderStudent: function (student) {   
=======
        this.collection.fetch();
    },
    
    renderStudent: function (student) {
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
        var studentView = new StudentView({model: student}).render();
        this.$el.append(studentView.$el);
    },
    
    render: function () {
        return this;
    }
});