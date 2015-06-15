function Preview (_person) {
    var preview = document.getElementById('preview'),
        tpmContent = _.template(templates.previewContentTpm),
        tpmButton = _.template(templates.previewButtonTpm),
        person = _person;
    
    start();
    
    function start () {
        createPreviewButton();
        attachEvents();
    }
    
    function createPreviewButton () {
        preview.innerHTML = tpmButton({});
    }
    
    function showContent () {
        preview.innerHTML = tpmContent({
            name: person.name + ' ' + person.lastName,
            phone: person.phone,
            email: person.email,
            skype: person.skype,
            adress: person.city + ' ' + person.street
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