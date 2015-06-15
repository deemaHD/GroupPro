function GroupView () {
    var tpm = _.template(templates.groupTpm),
        tpmString = '',
        students = new Group().getStudents(),
        listDiv = document.getElementById('list'),
        argument = {};
    
    init();
    
    function init () {
        students.forEach(function (student) {
            tpmString += new StudentView(student).getView();
        });
    
        getViev();
        listDiv.addEventListener('click', addEvents, false);
    }
    
    function getViev () {
        listDiv.innerHTML = tpm({
            students: tpmString
        });
    };
    
    function addEvents (event) {
        if (event.target.innerHTML === students[0].getAttribute('name')) {
            argument = students[0].toJSON();
        } else if (event.target.innerHTML == students[1].getAttribute('name')) {
            argument = students[1].toJSON();
        } else if (event.target.innerHTML == students[2].getAttribute('name')) {
            argument = students[2].toJSON();
        } else if (event.target.innerHTML == students[3].getAttribute('name')) {
            argument = students[3].toJSON();
        } else if (event.target.innerHTML == students[4].getAttribute('name')) {
            argument = students[4].toJSON();
        } else if (event.target.innerHTML == students[5].getAttribute('name')) {
            argument = students[5].toJSON();
        } else if (event.target.innerHTML == students[6].getAttribute('name')) {
            argument = students[6].toJSON();
        } else if (event.target.innerHTML == students[7].getAttribute('name')) {
            argument = students[7].toJSON();
        }
        mediator.publish('clickONList', argument);
    }
    
    return this;
}