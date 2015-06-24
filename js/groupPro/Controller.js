function Controller () {
    var groupView = new GroupView(),
        tabs = new TabsView();
    
    groupView.init();
    
    mediator.subscribe('studentSelect', tabs.init);
}