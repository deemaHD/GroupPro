var TabsView = Backbone.View.extend({ 
<<<<<<< HEAD
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
=======
    el: '#tabs',
    
    render: function (student) {
        this.template = _.template(templates.tabsTmp);
        this.$el.html(this.template(student.toJSON()));
        
        $('#wrapper a').click(function() {
            if ($(this).attr('class') != $('#wrapper').attr('class') ) {
                $('#wrapper').attr('class',$(this).attr('class'));
            }
        });
        
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
        var preview = new Preview();
        preview.render(student);
    }
});