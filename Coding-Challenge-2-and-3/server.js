const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const {Sports} = require('./models/sport-model');
const app = express();
const uuid = require( 'uuid' );

/* Your code goes here */

// delete a sport by id


app.post('/sports/createSport', jsonParser, (req, res) => {
    let sport = {
        id: uuid.v4,
        name: String,
        num_players: Number
    }
    Sports
        .createSports(sport)
        .then( result => {
            return res.status(201).json(result)
        })
        .catch(err =>{
            return res.status(500).end()
        })
})
//jsonParser to handle the body

app.delete('/sports/delete', jsonParser, (req, res) => {
    // hacer los requires el de body id y query sportId
    let id = req.body.id
    let sportId = req.query.id
    // hacer las verificaciones
    if(!id){
        res.statusMessage = "No se envio el id en el body";
        return res.status(406).end();
    }
    if(!sportId){
        res.statusMessage = "No se envio el id en el query";
        return res.status(406).end();
    }
    if(sportId !== id){
        res.statusMessage = "los ids no coinciden";
        return res.status(409).end();
    }
    // borrar mandar ya sea el del id o el de sportId ya que son lo mismo para este punto
    Sports
        .delByid(id)
        .then( result => {
            return res.status(204).end();
        })
        .catch( err => {
            return res.status(404).end();
        })
})


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});