const express = require('express');
const PORT = process.env.PORT || 5000
const axios = require('axios');
const app = express();

//this is a dev key that resets every 24hrs
//in prod, need to have a file ignored by git containing api_keys
const API_KEY = "RGAPI-ac65c2ea-a49d-43a2-b5fc-011c0fe1074b"
const REGION = 'americas.api.riotgames.com'

app.get('/challenger_list', (req, res) => {
    axios.get(`https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${API_KEY}`).then(res => {
        console.log(res.data);
        res.send
    })
})




app.listen(PORT, () => {
    console.log('Server is running and listening to PORT:', PORT)
})

