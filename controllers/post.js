var mongoose =  require('mongoose'),
    Post = mongoose.model('Post');

exports.buscarPosts =  function(req, res){
    Post.find(function(err,posts){
        if(err) res.send(500,err.message);
        
        console.log('GET /posts');
        res.status(200).jsonp(posts);
    });
};

exports.buscarPorId = function(req,res){
    Post.findById(req.params.id,function(err,post){
        if(err) return res.send(500,err.message);err
        
        console.log('GET /post/'+req.params.id);
        res.status(200).jsonp(post);
    });
};

exports.agregarPost =  function(req,res){
    console.log('POST');
    console.log(req.body);
    
    var post = new Post({
        contenido   : req.body.contenido,
        like        : 0,
        dislike     : 0,
    });
    
    post.save(function(err,post){
        if(err) return res.sen(500, err.message);
        
        res.status(200).jsonp(post);
    });
};

exports.editarPost =  function(req,res){
    console.log('PUT');
    console.log(req.body);
    
    Post.findById(req.params.id,function(err,post){
        post.contenido  = req.body.contenido;
        post.like       = req.body.like;
        post.dislike    = req.body.dislike;
        
        post.save(function(err){
            if(err) return res.send(500,err.message);
            
            res.status(200).jsonp(post);
        });
    });
};

exports.eliminarPost = function(req, res){
    Post.findById(res.params.id,function(err,post){
        post.remove(function(err){
            res.status(200);
        });
    });
};