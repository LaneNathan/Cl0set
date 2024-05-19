const { User } = require("../../models");
const express = require('express');

const router = require("express").Router();
const axios = require('axios');
const { response, query } = require("express");

const app = express();
// const PORT = 3001;



//---------------------------Fetch 21Forever Clothing Data Func-------------------//


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
};

//---------------------------Home Page Route-------------------//


  router.get('/', (req, res) => { 
    res.render("homepage");
});

app.use('/', router); 

router.get('/login', (req, res) =>  {
  res.render("login");


});
//---------------------------Login Route-------------------//

    // let data = { title: "Bingo", username: "Bob" }
    // res.render("homepage", { viewData: data })

// Login route
router.post('/login', (req, res) => {
  console.log('In the login page')
    const { username, password } = req.body;
    const user = User.find(u => req.body.username === username && req.body.password === password);
    let signedIn = false;
      
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
      let signedIn = true;
      console.log(signedIn);

  } else {
      res.status(401).json({ message: 'Invalid username or password' });
  }
});
//---------------------------Create Route-------------------//

  //   router.get("/createoutfit", (req, res) => {

  //     res.render("createoutfit")
  // })

  router.get("/createoutfit", async (req, res) => {
    //res.render("createoutfit");

    let search = 'mens-shirts';
    
    try{

      //parse that returned data (images, title)
    //const asosData = await fetchAsosData(search);

      const forever21Data = await FetchForever21Data(search);

      //console.log('forever21Data', forever21Data.response.docs[0]);
      console.log('21Data', forever21Data.response);

    // SEND the DATA in the CONTEXT OBJECT with the VIEW
      res.render("createoutfit", { forever21Data })


    }catch(error){
      console.error("Error fetching data:",error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
  app.use('/', router); 
//---------------------------Module Export Route-------------------//


module.exports = router;




















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
//---------------------------Original Position Nate-------------------//


// async function FetchForever21Data(search){
//     const options = {
//       method: 'GET',
//       url: 'https://apidojo-forever21-v1.p.rapidapi.com/products/search',
//       params: {
//         query: search,
//         rows: '10',
//         start: '0'
//       },
//       headers: {
//         'X-RapidAPI-Key': process.env.FOREVER21_API_KEY,
//         'X-RapidAPI-Host': process.env.FOREVER21_API_HOST
//       }
//     };

//     const response = await axios.request(options);



//     console.log(response.data);
//     return response.data;
// }

// router.get("/createoutfit", (req, res) => {
   
//     res.render("createoutfit")
// })

//     if (user) {
//         res.status(200).json({ message: 'Login successful', user });
//         let signedIn = true;
//         console.log(signedIn);

//     } else {
//         res.status(401).json({ message: 'Invalid username or password' });
//     }
// });

// // Home route Do we need?
// router.get('/', (req, res) => {
//     res.send('Welcome to the home page');
// });

// app.use('/', router); // Using router in the application

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// module.exports = router;