var express = require('express');
var router = express.Router();

const request = require('request');

const projectModel = require('../models/projects');

const db = require('../models/db');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET project */
router.get('/projects', function(req, res, next) {
  request(`https://capsule-exams.herokuapp.com/api/capsule/projects`, function(error, response, body) {
    body = JSON.parse(body);
    res.json({result: true, projects: body});
    console.log('body du back route projects ---------->', body)
  });
});

/* POST projects. */
router.post('/myprojects', function(req, res, next) {
  // Now, we want to save a new movie.
  var newProject = new projectModel({
    name: req.body.name,
    desc: req.body.desc,
    pic_url: req.body.pic_url,
    days_spent: req.body.days_spent,
    stack_front: [ 
      req.body.stack_front
    ],
    back_front: [ 
      req.body.stack_back 
    ], 
  });

  newProject.save(function(error, project) {
        console.log("bdd backend ------>", project);

    res.json({result: true, project});
  });
});



module.exports = router;
