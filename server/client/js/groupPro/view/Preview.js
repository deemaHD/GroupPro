var Preview = Backbone.View.extend({
    el: '#preview',
<<<<<<< HEAD
    
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
=======

    render: function (student) {
        this.template = _.template(templates.previewContentTpm);
        this.$el.html(this.template(student.toJSON()));
        
        $('.preview').click(function () {
            $(this).addClass('hiden');
            $('.previewContent').removeClass('hiden');
        });
        $('.closeContent').click(function () {
            $(this).parent().addClass('hiden');
            $('.preview').removeClass('hiden');
        });
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
    }
});