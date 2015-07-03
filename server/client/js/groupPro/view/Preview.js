var Preview = Backbone.View.extend({
    el: '#preview',

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
    }
});