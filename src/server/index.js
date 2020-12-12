const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors());

app.use(express.static('dist'))

inputData = {};
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;
console.log(`Your API key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
   })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/test', async function(req,res){
    inputData = req.body.url;
    console.log(inputData);
    const apiURL = `${baseURL}key=${apiKey}&url=${inputData}/&lang=en`;
    console.log(apiURL);
    const response = await fetch(apiURL);
    const sData = await response.json();
    console.log(sData);
    res.json(sData);
}
)


