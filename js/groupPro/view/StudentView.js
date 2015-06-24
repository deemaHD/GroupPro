function StudentView (_student) {
    var $li = $('<li></li>'),
        student = _student;
    
    this.getStudentLi = function () {
        $li.html(student.name);
        $li.on('click', function () {
            mediator.publish('studentSelect' , student);
        });
        return $li;
    };
    
    return this;
}