function Controller () {
    var groupView = new GroupView();
    
    $('#list').append(groupView.render().$el);
    
    mediator.subscribe('studentSelect', function (student) {
<<<<<<< HEAD
        var tabsView = new TabsView({el: '#tabs'});
=======
        var tabsView = new TabsView();
>>>>>>> 06964b4c2d36bfd95f998e9d4e849fe53b74cd0b
        tabsView.render(student);
    });
}