function Preview (_student) {
    var tpmContent = _.template(templates.previewContentTpm),
        tpmButton = _.template(templates.previewButtonTpm),
        preview = document.getElementById('preview'),
        student = _student;
    
    init();
    
    function init () {
        createPreviewButton();
        attachEvents();
    }
    
    function createPreviewButton () {
        preview.innerHTML = tpmButton({});
    }
    
    function showContent () {
        preview.innerHTML = tpmContent({
            name: student.name + ' ' + student.lastName,
            phone: student.phone,
            email: student.email,
            skype: student.skype,
            adress: student.city + ' ' + student.street
        });
    }
    
    function closePreview () {
        createPreviewButton();
    }
    
    function attachEvents () {
        preview.addEventListener('click', eventHandler, false);
    }
    
    function eventHandler (event) {
        if (event.target.classList.contains('preview')) {
            showContent();
        } else if (event.target.classList.contains('closeContent')) {
            createPreviewButton();
        }
    }
    
    return this;
}