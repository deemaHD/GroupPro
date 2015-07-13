var Student = Backbone.Model.extend({
    defaults: {
        name: 'name',
        lastName: 'lastName',
        phone: 'phone',
        skype: 'skype',
        email: 'email',
        city: 'city',
        street: 'street'
<<<<<<< HEAD
    },
    
    validate: function (attr) {
        if (!attr.name) {
            return 'id: ' + attr.id + ' Name can\'t be empty!';
        }
=======
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
    }
});