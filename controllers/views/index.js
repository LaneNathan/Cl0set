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
});

 // make the API request for data in our ROUTE/CONTROLLER
/*async function fetchAsosData(search){
    const options = {
      method: 'GET',
      url: 'https://asos-com1.p.rapidapi.com/products/search',
      params: {
        q: search
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
      }
    };

    const response = await axios.request(options);
    return response.data;
}*/

async function FetchForever21Data(search){
    const options = {
      method: 'GET',
      url: 'https://apidojo-forever21-v1.p.rapidapi.com/products/search',
      params: {
        query: search,
        rows: '10',
        start: '0'
      },
      headers: {
        'X-RapidAPI-Key': process.env.FOREVER21_API_KEY,
        'X-RapidAPI-Host': process.env.FOREVER21_API_HOST
      }
    };

    const response = await axios.request(options);


    console.log(response.data);
    return response.data;
}

module.exports = router;