const router = require("express").Router();
const axios = require('axios');
const { response, query } = require("express");

router.get("/", async (req, res) => {

let search = 'mens-shirts';
 
  try{

    //parse that returned data (images, title)
   //const asosData = await fetchAsosData(search);
    const forever21Data = await FetchForever21Data(search);

    
    //console.log('forever21Data', forever21Data.response.docs[0]);
    console.log('21Data', forever21Data.response);

 // SEND the DATA in the CONTEXT OBJECT with the VIEW
    res.render("homepage", { forever21Data })


  }catch(error){
    console.error("Error fetching data:",error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/login", (req, res) => {
   
    res.render("login")
})


module.exports = router;