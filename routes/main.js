const express = require("express");
const router = express.Router();

const {
listar,
} = require("../controllers/main");

/* GET header */
/* 
router.get("/ejs", (req, res)=>{
    res.render("header")
}) 
*/

router.get("/", listar);

/* GET home page. */
/* 
router.get("/", (req, res)=>{
    // res.send("el mensaje");
    res.render('index', { title: 'Express' });

}) 
*/

/* exportamos... */
module.exports = router;