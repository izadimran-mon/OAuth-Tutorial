let express = require('express');
let authRoutes = require('./routes/auth-routes');
let passportSetup = require('./config/passport-setup');

let app = express();

app.set('view engine', 'ejs');

// setup routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});