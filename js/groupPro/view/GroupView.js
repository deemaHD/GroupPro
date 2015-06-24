function GroupView () {
    var $div = $('#list'),
        $ul = $('<ul></ul>'),
        group = new Group(),
        students = group.toArray(),
        studentView,
        $li;
        
    this.init = function () {
        students.forEach(function (student) {
            studentView = new StudentView(student);
            $li = studentView.getStudentLi();
            $div.append($li);
        });
    };
    
    return this;
}