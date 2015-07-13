function GroupView () {
    var $div = $('#list'),
        $ul = $('<ul></ul>'),
        group = new Group(),
        students = [],
        studentView,
        $li;
        
    this.init = function () {
        students = group.toArray();
        students.forEach(function (student) {
            studentView = new StudentView({model: student});
            $li = studentView.getStudentLi();
            $ul.append($li);
        });
        $div.append($ul);
    }

    return this;
}