const express = require('express')
const router = express.Router()

router.post('/giftData',(req,res)=>{
    try{
        console.log("Data is being fetched")
        res.send([global.gift,global.giftCategory])

    }catch(error){
        console.log(error)
        console.error(error.message);
        res.send("Server Error")
    }

})



module.exports = router;