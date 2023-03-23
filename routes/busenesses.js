let express = require("express");

let router = express.Router();

router.post("/", (req,res)=>{
    res.end("post")
})

router.put("/:id", (req,res)=>{
    res.end("put")
})

router.get("/", (req,res)=>{
    res.end("list")
})

router.get("/:id", (req,res)=>{
    res.end("single user")
})

router.delete("/:id", (req,res)=>{
    res.end("delete")
})



module.exports = router;

