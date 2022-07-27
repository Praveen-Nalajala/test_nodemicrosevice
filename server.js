const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('webapp'));
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/home', (req, res) => {
  res.send('Welcome to NodeJs World');
});
app.get('/files', (req, res) => {
  res.send(fs.readFileSync('./files/testTxt.txt',"utf-8"));
});
app.get("/vendors",function(req,res){
  res.send({
    "vendors": [{
            "id": 1001,
            "name": "SAP Labs",
            "city": "Bangalore",
            "location": "India",
            "gstNo": "DHHSSYC45456",
            "type": "Service",
            "status": "A"
        },
        {
            "id": 1002,
            "name": "IBM Incorporation",
            "city": "Taxas",
            "location": "US",
            "gstNo": "UUDSYJHHD9959",
            "type": "Hardware",
            "status": "A"
        },
        {
            "id": 1003,
            "name": "Dell Microsystems",
            "city": "Torronto",
            "location": "Canada",
            "gstNo": "897844DD4DD",
            "type": "Service",
            "status": "A"
        }
    ]
});
})
app.listen(process.env.PORT || 3000);
console.log("the web server is running on http://localhost:3000, to stop press Ctrl+C");