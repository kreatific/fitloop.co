Template.navigationBar.helpers({
  active : function(path){
    if(Router.current().path === path){
        return "active";
    }
    return "active";
  }
})

Template.navigationBar.rendered = function() {
  var nav = responsiveNav(".nav-collapse", {
    label: '<i class="fa fa-bars"></i>'
  });
}