function Controller () {
    var groupView = new GroupView(),
        tabs = new TabsView();
    
    mediator.subscribe('studentSelect', tabs.attachStudent);
}