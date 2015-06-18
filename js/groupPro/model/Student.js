function Student (_name, _lastName, _phone, _skype, _email, _city, _street) {
    var attributes = {
        name: _name,
        lastName: _lastName,
        phone: _phone,
        skype: _skype,
        email: _email,
        city: _city,
        street: _street
    },
    studentJSON;
    
    this.getAttribute = function (name) {
        return attributes.name;
    };
    
    this.toJSON = function () {
        studentJSON = {};
        for (key in attributes) {
            studentJSON[key] = attributes[key];
        }
        return studentJSON;
    };
    
    return this;
}