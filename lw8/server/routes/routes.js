const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', function(req, res, next) {
  Product.find({}).then(function(products) {
    res.send(products);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.get('/products/:id', function(req, res, next) {
  Product.findOne({_id: req.params.id}).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.post('/products', function(req, res, next) {
  Product.create(req.body).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.put('/products/:id', function(req, res, next) {
  Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Product.findOne({_id: req.params.id}).then(function(product) {
      res.send(product);
    }).catch(function(next) {
      res.send({error: '404'});
    });
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.delete('/products/:id', function(req, res, next) {
  Product.findByIdAndRemove({_id: req.params.id}).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

module.exports = router;