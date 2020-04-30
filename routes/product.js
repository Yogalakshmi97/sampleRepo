var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('dairymilk')
  })
  router.post('/product',function(req,res){
    res.send('Got a POST request')
  })
  
  router.put('/product',function(req,res){
    res.send('Got a PUT request at /user')
  })
  
  router.delete('/product',function(req,res){
    res.send('Got a DELETE request at /user')
  })
module.exports = router;