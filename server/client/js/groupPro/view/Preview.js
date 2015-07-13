var Preview = Backbone.View.extend({
    el: '#preview',
    
    template: _.template(templates.previewContentTpm),
    
    events: {
        'click .preview': 'previewHandler',
        'click .closeContent': 'closeContentHandler'
    },
    
    previewHandler: function () {
        $('.preview').addClass('hiden');
        $('.previewContent').removeClass('hiden');
    },
    
    closeContentHandler: function () {
        $('.previewContent').addClass('hiden');
        $('.preview').removeClass('hiden');
    },
    
    render: function (student) {
        this.$el.html(this.template(student.toJSON()));
    }
});