const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const AuthRouter = require('./Routers/AuthRoutes')
require("./config/db")
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.json())
app.use(cors())
app.use('/auth',AuthRouter)


app.get("/ping",(req,res)=>{
    res.send("server is running")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});