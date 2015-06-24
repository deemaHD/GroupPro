function Student (_name, _lastName, _phone, _skype, _email, _city, _street) {
    var attributes = {
        name: _name,
        lastName: _lastName,
        phone: _phone,
        skype: _skype,
        email: _email,
        city: _city,
        street: _street
    };
    
    this.toJSON = function () {
        return _.clone(attributes);
    };
    
    return this;
}