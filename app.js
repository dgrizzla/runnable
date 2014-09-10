var express = require('express'),
    mongoose =  require('mongoose'),
    bodyParser =  require('body-parser'),
    cookieParser = require('cookie-parser'),
    methodOverride =  require('method-override');


var app = express();
var http = require('http').Server(app);
var io =  require('socket.io')(http);

var port = process.env.PORT || 3000;

//metodos para socket.io
//evento que se lanza cuando alguien se conecta
io.on('connection',function(socket){
    socket.on('sendPost', function(data){
      io.socket.emit('newPost',{msg:data});
    });
});
//evento que se lanza cuando alguien se desconecta



//Middlewares
app.use(bodyParser());
app.use(cookieParser());
app.use(methodOverride());
app.use(express.static('./public'));

//Conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/runnable',function(err,res){
    if(err) throw err;
    console.log('Base de datos conectada');
});


var Post = require('./models/post')(app,mongoose),
    PostCtrl = require('./controllers/post');

var router = express.Router();
router.get('/',function(req,res){
    res.send('Hola');
});
app.use(router);



var posts = express.Router();

posts.route('/posts')
    .get(PostCtrl.buscarPosts)
    .post(PostCtrl.agregarPost);

posts.route('/posts/:id')
    .get(PostCtrl.buscarPorId)
    .put(PostCtrl.editarPost)
    .delete(PostCtrl.eliminarPost);

/*router.use(function(req,res,next){
    console.log('Holis');
    console.log('%s %s',req.method, req.path);
    next();
});*/



/*
router.get('/',function(req,res){
    res.json({message:'Test router funcionando'});
});

router.post('')

//Devuelve todo los posts
router.get('/posts',function(req,res,next){
    //proceso del get

    //res.json({})
});

router.get('/posts/:id',function(req,res,next){

});*/

app.use('/api',posts);
app.listen(port, function(){
    console.log('Esperando en el puerto '+port);
});
