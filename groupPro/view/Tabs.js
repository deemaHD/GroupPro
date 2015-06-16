function Tabs () {
    var student = {name: 'N/A', lastName: 'N/A', phone: 'N/A', skype: 'N/A', email: 'N/A', city: 'N/A', street: 'N/A'},
        divContent = document.getElementsByClassName('content'),
        tpmContent = _.template(templates.contentTpm),
        mainDiv = document.getElementById('tabs'),
        tpm = _.template(templates.tabsTpm),
        MODES = {
            NAME: 1,
            CONTACTS: 2,
            ADRESS: 3
        },
        dispMode = MODES.NAME,
        preview;
    
    this.attachPerson = function (_student) {
        student = _student;
        createPreview(student);      
        createContent(MODES.NAME);
    };
    
    start();
    
    function start () {
        mainDiv.innerHTML = tpm({});
        createContent(MODES.NAME);
        attachEvents();
    }
    
    function createContent (_mode) {
		dispMode = _mode;
        if (dispMode === MODES.NAME) {
            divContent[0].innerHTML = tpmContent({
                content: student.name + ' ' + student.lastName
            });
        } else if (dispMode === MODES.CONTACTS) {
            divContent[0].innerHTML = tpmContent({
                content: student.phone + ' ' + student.skype + ' ' + student.email
            });
        } else if (dispMode === MODES.ADRESS) {
            divContent[0].innerHTML = tpmContent({
                content: student.city + ' ' + student.street
            });
        }
    }
    
    function attachEvents () {
        mainDiv.addEventListener('click', eventHandler, false);
    }
    
    function eventHandler (event) {
        if (event.target.classList.contains('buttonName')) {
            createContent(MODES.NAME);
        } else if (event.target.classList.contains('buttonContacts')) {
            createContent(MODES.CONTACTS);
        } else if (event.target.classList.contains('buttonAdress')) {
            createContent(MODES.ADRESS);
        }
    }
    
    function createPreview (_student) {
        preview = new Preview(_student);    
    }
    
    return this;
}