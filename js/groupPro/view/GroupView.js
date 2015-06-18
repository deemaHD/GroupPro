function GroupView () {
    var listDiv = document.getElementById('list'), 
        tpm = _.template(templates.groupTpm),
        group = new Group(),
        students = group.getStudents(),
        tpmString = '',
        argument = {},
        studentView;
    
    init();
    
    function init () {
        students.forEach(function (student) {
            studentView = new StudentView(student);
            tpmString += studentView.getView();
        });
    
        getView();
        listDiv.addEventListener('click', addEvents, false);
    }
    
    function getView () {
        listDiv.innerHTML = tpm({
            students: tpmString
        });
    };
    
    function addEvents (event) {
        if (event.target.innerHTML === students[0].name) {
            argument = students[0];
        } else if (event.target.innerHTML === students[1].name) {
            argument = students[1];
        } else if (event.target.innerHTML === students[2].name) {
            argument = students[2];
        } else if (event.target.innerHTML === students[3].name) {
            argument = students[3];
        } else if (event.target.innerHTML === students[4].name) {
            argument = students[4];
        } else if (event.target.innerHTML === students[5].name) {
            argument = students[5];
        } else if (event.target.innerHTML === students[6].name) {
            argument = students[6];
        } else if (event.target.innerHTML === students[7].name) {
            argument = students[7];
        }
        mediator.publish('studentSelect', argument);
    }
    
    return this;
}