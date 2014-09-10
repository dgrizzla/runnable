Runnable.Collections.Posts = Backbone.Collection.extend({
	model: Runnable.Models.Post,
	url: 'api/posts',
	name : 'posts'
});