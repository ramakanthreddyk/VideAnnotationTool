var mysql = require('mysql');
var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.use(cors());
router.use(cors());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'videoangular'
});

con.connect(function(err) {
  if (err) throw err;
  else {
    console.log("Connected!");
    // con.query('select * from ')
  }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

router.post('/register', function(req, res) {
  const data = req.body;
  con.query('INSERT INTO users (FirstName, LastName, Mail_Id, pwd, userName) VALUES ("'+data.firstName+'", "'+data.lastName+'", "'+data.email+'", "'+data.password+'", "'+data.username+'" )', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'sql error', error: err});
    } else {
      res.json({success: true, message: 'user registered successfully'});
    }
  });
});

router.post('/login', function(req, res) {
  const data = req.body;
  con.query('SELECT * FROM users where Mail_Id = "'+data.email+'"  AND pwd ="'+data.password+'" ', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'Server error', error: err});
    } else {
      if(data.length != 0) {
        res.json({success: true, message: 'user logged In successfully', username: data[0].Mail_Id});
      } else {
        res.json({success: false, message: 'User not found'});
      }
    }
  });
});

router.get('/annotation_description', function(req, res) {
  con.query('SELECT * FROM annotation_description', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'Server error', error: err});
    } else {
      if(data.length != 0) {
        res.json({success: true, data: data});
      } else {
        res.json({success: false, message: 'User not found'});
      }
    }
  });
});

router.get('/assets', function(req, res) {
  con.query('SELECT * FROM assets', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'Server error', error: err});
    } else {
      if(data.length != 0) {
        res.json({success: true, data: data});
      } else {
        res.json({success: false, message: 'User not found'});
      }
    }
  });
});

router.post('/storeAnnotation', function(req, res) {
  const data = req.body.data;
  console.log(data);
  con.query('INSERT INTO video_annotation (Video_Id, startTime, endTime, title, description, src, href, email) VALUES ("'+data.id+'", "'+data.startTime+'", "'+data.endTime+'", "'+data.title+'", "'+data.description+'", "'+data.src+'", "'+data.href+'", "'+data.userId+'" )', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'Server error', error: err});
    } else {
      res.json({success: true, message: 'Annotation saved successfully'});
    }
  });
});

router.post('/getPreAnnotations', function(req, res) {
  const data = req.body.data;
  console.log(data);
  con.query('SELECT * FROM video_annotation WHERE Video_Id = "'+data.videoId+'" AND  email = "'+data.username+'"', function(err, data) {
    if(err) {
      console.log(err);
      res.json({success: false, message: 'Server error', error: err});
    } else {
      res.json({success: true, data: data});
    }
  });
});
