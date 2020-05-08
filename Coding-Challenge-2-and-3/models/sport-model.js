const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );
const { DATABASE_URL, PORT } = require( '../config' );
/* Your code goes here */
const sportsSchema = mongoose.Schema({
    id: {
        type: String,
        default: uuid.v4,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    num_players : {
        type: Number,
        required: true
    }
});

const sportsCollection = mongoose.model('sportsdb', sportsSchema);


let sport = {
    id: uuid.v4,
    name: String,
    num_players: Number
}
const Sports = {
    //POST
    createSports : function(newSport){
        return sportsCollection
            .create(newSport)
            .then( createdSport => {
                return createdSport
            })
            .catch( err => {
                console.log("An error was found");
            })
    },
    //just the delete by id
    delByid : function(delId){
        return sportsCollection
            .findByIdAndDelete('id: delId', sportsCollection )
            .then(deletedSport => {
                return deletedSport;
            })
            .catch(err => {
                console.log( "There is an error with the db ");
            })
    }

}

module.exports = {Sports};