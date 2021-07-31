const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {

  const reponse = await axios.get('https://httpbin.org/ip');

  res.json(reponse.data.origin);
});


module.exports = router