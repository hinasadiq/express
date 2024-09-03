const app = require('express')();
const PORT =4005;


app.listen(
  PORT,
  ()=>console.log(`server is running on ${PORT}`)
);
app.get('/getRequest',(req,res)=>{
  res.send("THIS IS  GET REQUEDST")
});
app.post('/postRequest',(req,res)=>{
  res.send("hello this is post method")
});
  