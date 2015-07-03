var Group = Backbone.Collection.extend({
    model: Student,
    url: '/getstudents'
});
