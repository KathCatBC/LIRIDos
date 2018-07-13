require("dotenv").config();

//import keys.js  and store in a variable

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var defaultMovie = "Mr. Nobody";
var defaultSong = "The Sign by Ace of Base";

var whatToDo = process.argv[2];
var withThis = process.argv[3];
var outputString = "";
var outputBreak = "\n --------------- \n"

console.log("what = " + whatToDo);
console.log("with = " + withThis);


function liriThis(whatToDo, withThis) {
    switch(whatToDo) {
        case "my-tweets":
            console.log("my tweets");
            tweeted();
            break;
        case "spotify-this-song":
            console.log("spotify");
            listened(withThis);
            break;
        case "movie-this":
            console.log("movie");
            watched(withThis);
            break;
        case "do-what-it-says":
            console.log("doing this");
            // read it the contents of random.txt
            // split input string at the comma
            // var whatToDo = first half of string
            // var withThis = second half of string
            //liriThis(whatToDo, withThis)
            break;
        default:
            console.log("sorry I don't understand");
            // outputString = "Huh??"
    }
}

function tweeted() {
    console.log("tweeting")
    //generated output string of last 20 tweets
}

function listened(song) {
    console.log("listening")
    if (!song) song = defaultSong;
    
        //if no song is provided use defaultSong
        // Output the following:
        // Artist(s)
        // The song's name
        // A preview link of the song from spotify
        // the name of the album the song is from
    //generate spotify data into a string
}

function watched(movie) {
    console.log("watching")
    if (!movie) movie = defaultMovie;
    
         //if no movie is provided use defaultMovie;
        //Output the following:
        //  Movie title
        //  Year of release
        // IMDB Rating of the movie
        // Rotten tomatoes rating
        // country where is was produced
        // Language of the movie
        // Plot
        //Actors
}


liriThis(whatToDo, withThis)

// console.log output string
//append output to log.txt

