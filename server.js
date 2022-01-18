var express = require('express');
var formidable = require('express-formidable');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use(formidable());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', async (req, res) => {
  try {
    const {name, type, size} = req.files.upfile;
    res.status(200).json({
      'name': name,
      'type': type,
      'size': size
    });
  }
  catch(error) {
    res.status(400).json({error: error.message});a
  }
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
