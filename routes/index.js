const express = require('express'),
      router = express.Router()

/* GET home page. */
router.get('/', function( req, res, next ) {
    res.render( 'index', {
        title: 'Chipotle',
    })
})

module.exports = router
