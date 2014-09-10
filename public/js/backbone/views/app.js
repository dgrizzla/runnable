Runnable.Views.App  = Backbone.View.extend({
	events:{
		"click .agregar"	: "showForm",
		"submit form" 		: "createPost"
	},
	initialize : function  ($el) {
		this.$el = $el;
	},
	showForm : function  () {
		this.$el.find('form').show();
	},
	createPost : function (e) {
		e.preventDefault();

		var contenido = $('input[name=contenido]').val();
		//var like = $('input[name=like]').val();
		//var dislike = $('input[name=dislike]');
		if(contenido !== ''){
			var data = {
				"contenido" : contenido,
				//"like"		: like,
				//"dislike"	: dislike
			};

			var  model = new Runnable.Models.Post(data);
			model.save();
			//var socket = io.connect();
			//socket.emit('sendPost',data);
			//socket.on('newPost',function(data){
				window.collections.posts.fetch();
				$('.post').remove();
			//});
			this.$el.find('form input[type=text]').val('');
			this.$el.find('form').slideUp();
		}

	}

});
