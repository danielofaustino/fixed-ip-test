const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {

                                  //https://httpbin.org/ip     
  const reponse = await axios.get('https://api.ipify.org/');

  res.json(reponse.data);
});


module.exports = router