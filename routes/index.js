var express = require('express');
var router = express.Router();

/* GET home page. */
const listItems = [
  {'id': '123','term': 'java','description': 'hallo world','references': 'http'}
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', subheading: 'eabnndg',
  list: listItems });
});

module.exports = router;
