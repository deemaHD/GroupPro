function Controller () {
    var groupView = new GroupView(),
        tabs = new TabsView();
    
    mediator.subscribe('studentSelect', tabs.init);
    mediator.subscribe('serverResponse', groupView.init);
}