$(document).ready(function(){
    console.log('main.js ha sido cargado');
    //window.views.app =  new Runnable.Views.App($('body'));
    window.views.app =  new Runnable.Views.App( $('body'));
   // debugger;
    window.collections.posts =  new Runnable.Collections.Posts();
    window.collections.posts.on('add',function(model) {
       console.log(model); 
        var view = new Runnable.Views.Post({model:model});
       // view.render();
        $('.posts').append(view.$el.fadeIn());
    });

    var xhr =  window.collections.posts.fetch();

    xhr.done(function  () {
        Backbone.history.start({
            root: '/',
            pushState:true
        });
    });
});