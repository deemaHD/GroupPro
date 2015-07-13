var Student = Backbone.Model.extend({
    defaults: {
        name: 'name',
        lastName: 'lastName',
        phone: 'phone',
        skype: 'skype',
        email: 'email',
        city: 'city',
        street: 'street'
    },
    
    validate: function (attr) {
        if (!attr.name) {
            return 'id: ' + attr.id + ' Name can\'t be empty!';
        }
    }
});