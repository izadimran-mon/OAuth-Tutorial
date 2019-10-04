let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.use(
    new GoogleStrategy({
    // options for strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired');
        console.log('profile');
    })
);

//client ID : 509460477139-f60r2madbdisj403js4egik5g6es105j.apps.googleusercontent.com
//client secret: 3nNYCOBfgAkn9PS20VXnSwvk