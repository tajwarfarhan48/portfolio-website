const logger = require( './logger' )

const requestLogger = ( req, res, next ) => {
    logger.info( '\n--------' )
    logger.info( 'Request Date & Time:', new Date() )
    logger.info( 'Request URL:', req.url )
    logger.info( 'Request Method:', req.method )
    logger.info( 'Request Body:', req.body )
    logger.info( '--------\n' )

    next()
}

const unknownEndpoint = ( req, res ) => {
    res.status( 404 ).json( { message: 'Unknown Endpoint' } )
}

const errorHandler = ( err, req, res, next ) => {
    logger.error( err )

    res.status( 500 ).json( { message: 'Internal Server Error' } )

    next()
}

module.exports = { requestLogger, unknownEndpoint, errorHandler }