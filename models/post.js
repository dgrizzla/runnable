exports = module.exports =  function(app,mongoose){
    
    var postSchema = new mongoose.Schema({
        contenido   : {type : String},
        like        : {type : Number},
        dislike     : {type : Number}
    });
    
    mongoose.model('Post',postSchema);
};