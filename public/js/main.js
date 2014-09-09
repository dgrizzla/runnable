/*$(document).ready(function(){
    console.log('main.js ha sido cargado');
    
    window.views.app = new BeerLocker.Views.App(($('body')));
    
    window.collections.beers =  new BeerLocker.Collections.Beers();
    window.collections.beers.on('add', function(model){
        var view = new BeerLocker.Views.Beer({model:model});
        
        view.render();
        $('.locker').prepend(view.$el.fadeIn());
    });
    
   var xhr =  window.collections.beers.fetch();
    
    xhr.done(function(){
        Backbone.history.start({
            root: '/',
            pushState:true
        });    
    });
});
*/
$(document).ready(function(){
    console.log('main.sj ha sido cargado');
    //window.views.app =  new Runnable.Views.App($('body'));
    
    

});