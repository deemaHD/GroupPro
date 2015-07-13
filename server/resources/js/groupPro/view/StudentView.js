var StudentView = Backbone.View.extend({
    tagName: 'li',
    
    getStudentLi: function () {
        var student = this.model;
        this.$el.html(this.model.name);
        this.$el.on('click', function () {
            mediator.publish('studentSelect', student);    
        });
        return this.$el;
    }
});