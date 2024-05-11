
const pupeteer = require('puppeteer');
const axios = require('axios');

const asosApiKey = process.env.RAPIDAPI_KEY;
const asosApiHost = process.env.RAPIDAPI_HOST;
const forever21ApiKey = process.env.FOREVER21_API_KEY;
const forever21ApiHost = process.env.FOREVER21_API_HOST;
let search = '';


const asos = async ()=>{
const options = {
   
  method: 'GET',
  url: 'https://asos-com1.p.rapidapi.com/products/search',
  params: {
    q: 'shearling jacket'
  },
  headers: {
    'X-RapidAPI-Key': asosApiKey,
    'X-RapidAPI-Host': asosApiHost,
  }
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
}
  const f21 = async () =>{
  const options = {
    method: 'GET',
    url: 'https://apidojo-forever21-v1.p.rapidapi.com/products/search',
    params: {
      query: 'jackets',
      rows: '60',
      start: '0',
      color_groups: 'black'
    },
    headers: {
      'X-RapidAPI-Key': forever21ApiKey,
      'X-RapidAPI-Host': forever21ApiHost
    }
  };

  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  };
  }

  