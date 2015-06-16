function StudentView (_student) {
    var tpm = _.template(templates.studentTpm),
        student = _student,
        tpmString = '';
    
    this.getView = function () {
        tpmString = tpm({
            name: student.getAttribute('name')
        });
        return tpmString;
    };
    
    return this;
}