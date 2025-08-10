const http=require('http');
const app=require('./app');
const port=process.env.PORT || 4000;
const ConnectToDB=require('./db/db.js');

const server=http.createServer(app);//create the server here 


ConnectToDB();//connect database 


server.listen(port,()=>{
    console.log(`server is running at port  http://localhost:${port}}`);
})








 