const router = require('express').Router()

router.post('/login',(req,res)=>{
    console.log("Login success")
})

router.post('/signup',(req,res)=>{
    console.log("Signup success")
})

module.exports = router