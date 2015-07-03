var GroupView = Backbone.View.extend({
    tagName: 'ul',
    
    initialize: function () {
        this.collection = new Group();
        this.collection.on('add', this.renderStudent, this);
        this.collection.fetch();
    },
    
    renderStudent: function (student) {
        var studentView = new StudentView({model: student}).render();
        this.$el.append(studentView.$el);
    },
    
    render: function () {
        return this;
    }
});