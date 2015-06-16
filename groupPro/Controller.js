function Controller () {
    var groupView = new GroupView(),
        tabs = new Tabs();
    
    mediator.subscribe('studentSelect', tabs.attachPerson);
}