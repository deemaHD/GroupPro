function StudentView (_student) {
    var tpm = _.template(templates.studentTpm),
        tpmString = '',
        student = _student,
        listDiv = document.getElementById('list'), 
        argument;
    
    this.getView = function () {
        tpmString = tpm({
            name: student.getAttribute('name')
        });
        return tpmString;
    };
    
    return this;
}