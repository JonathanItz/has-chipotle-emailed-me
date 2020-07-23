const express = require('express'),
      router = express.Router()

router.get( '/request', function( req, res, next ) {
    const { email, password } = req.query
    console.log(req.query);
    res.send( email )
    return false
})

module.exports = router
