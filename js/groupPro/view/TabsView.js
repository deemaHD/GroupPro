function TabsView () {
    var $div = $('#tabs'),
        tmp = _.template(templates.tabsTpm),
        student = {},
        $tab = $('.tab'),
        preview;
    
    this.init = function (_student) {
        student = _student;
        createPreview(student);
        $div.html(tmp(student));
        attachEvents();
    };

    function attachEvents () {
        $('.button').each(function (buttonIndex) {
            $(this).on('click', function () {
                $('.tab').each(function (tabIndex) {
                    if (buttonIndex !== tabIndex) {
                        $(this).addClass('hiden');
                    } else {
                        $(this).removeClass('hiden');
                    }
                });
            });
        });
    }
    
    function createPreview (_student) {
        preview = new Preview(_student);    
    }
    
    return this;
}