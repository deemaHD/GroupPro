function Preview (_student) {
    var tmpContent = _.template(templates.previewContentTpm),
        $previewClass = $('.preview'),
        $previewContent = $('.previewContent'),
        student = _student;
    
    init();
    
    function init () {
        $('#preview').html(tmpContent(student));
        attachEvents();
    }

    function attachEvents () {
        $('.preview').click(function () {
            $(this).addClass('hiden');
            $('.previewContent').removeClass('hiden');
        });
        $('.closeContent').click(function () {
            $(this).parent().addClass('hiden');
            $('.preview').removeClass('hiden');
        });
    }

    return this;
}