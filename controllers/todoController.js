module.exports = function(app) {
    app.get('/todo', (req,res)=>{
        console.log('Iam here');
        
        res.render('todo');
    });

    app.post('./todo', (req,res)=>{
        
    });

    app.delete('./todo', (req,res)=>{
        
    });


}