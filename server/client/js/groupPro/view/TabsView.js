var TabsView = Backbone.View.extend({ 
    template: _.template(templates.tabsTmp),
    
    events: {
        'click #wrapper a': 'eventHandler'    
    },
    
    eventHandler: function () {
        if (event.target.classList[0] != $('#wrapper').attr('class')) {
            $('#wrapper').removeClass();
            $('#wrapper').addClass(event.target.classList[0]);
        }    
    },
    
    render: function (student) {
        this.$el.html(this.template(student.toJSON()));
        
        this.createPreview(student);
    },
    
    createPreview: function (student) {
        var preview = new Preview();
        preview.render(student);
    }
});