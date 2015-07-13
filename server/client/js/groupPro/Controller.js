function Controller () {
    var groupView = new GroupView();
    
    $('#list').append(groupView.render().$el);
    
    mediator.subscribe('studentSelect', function (student) {
        var tabsView = new TabsView({el: '#tabs'});
        tabsView.render(student);
    });
}