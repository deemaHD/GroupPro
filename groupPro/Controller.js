function Controller () {
    var groupView = new GroupView(),
        tabs = new Tabs();
    
    mediator.subscribe('clickONList', tabs.attachPerson);
}