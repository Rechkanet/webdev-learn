const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

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

router.get('/reviews', function(req, res, next) {
  Review.find({}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.get('/reviews/:id', function(req, res, next) {
  Review.findOne({_id: req.params.id}).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.post('/reviews', function(req, res, next) {
  Review.create(req.body).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.put('/reviews/:id', function(req, res, next) {
  Review.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
    Review.findOne({_id: req.params.id}).then(function(review) {
      res.send(review);
    }).catch(function(next) {
      res.send({error: '404'});
    });
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.delete('/reviews/:id', function(req, res, next) {
  Review.findByIdAndRemove({_id: req.params.id}).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.get('/products/:id/reviews', function(req, res, next) {
  Review.find({productId: req.params.id}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

module.exports = router;