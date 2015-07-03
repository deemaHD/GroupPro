var TabsView = Backbone.View.extend({ 
    el: '#tabs',
    
    render: function (student) {
        this.template = _.template(templates.tabsTmp);
        this.$el.html(this.template(student.toJSON()));
        
        $('#wrapper a').click(function() {
            if ($(this).attr('class') != $('#wrapper').attr('class') ) {
                $('#wrapper').attr('class',$(this).attr('class'));
            }
        });
        
        var preview = new Preview();
        preview.render(student);
    }
});