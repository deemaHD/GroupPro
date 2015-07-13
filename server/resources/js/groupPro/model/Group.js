function Group () {
    var students = [],
        studentsClone = [],
        ajax = new XMLHttpRequest(),
        studentsJson = {};

    init();
    
    function init () {
        ajax.open('GET', '/getstudents', true);
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                studentsJson = JSON.parse(ajax.response);
                parseStudents(studentsJson);
                mediator.publish('serverResponse');
            }
        };
        ajax.send();
    }
    
    function parseStudents (_json) {
        for (var key in _json) {
            students.push(new Student(_json[key]));   
        }
    }
    
    this.toArray = function () {
        students.forEach(function (student, i) {
            studentsClone[i] = student.toJSON();
        });
        return studentsClone; 
    }
    
    return this;
}