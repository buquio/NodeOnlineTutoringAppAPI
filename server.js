/**
 *  1. Creating an express server
 *  2. Connect to mongodb
 * 2b. connect to Database
 *  3. Initialise express
 *  4. Initialise express middleware
 *  5. Create a simple get request home-route (optional)
 *  6. Define our routes
 *  7. Listen to our app connection
 */

// 1. Creating an express server
const express = require('express');

//  2. Connect to mongodb
const connectDB = require('./config/db');

//2b. Connect Database
connectDB();

//3. Initialise express
const app = express();


//4. Initialise Express Middleware
app.use(express.json({ extended: false }));

// 5. Create a simple get request home-route (optional)
app.get('/', (req, res) => res.json({ msg: 'Hello world!'}));


//6. Define Routes
app.use('/api/users/students', require('./routes/studentUsers'));
app.use('/api/users/tutors', require('./routes/tutorUsers'));
app.use('/api/users/admin', require('./routes/adminUsers'));
app.use('/api/studentAuth', require('./routes/studentAuth'));
app.use('/api/tutorAuth', require('./routes/tutorAuth'));
app.use('/api/adminAuth', require('./routes/adminAuth'));
app.use('/api/category', require('./routes/category'));
app.use('/api/subjects', require('./routes/subjects'));



// 7. Listen to our app connection
// const PORT = process.env.PORT || 9005; //or
const port = process.env.PORT || PORT; 


// Listen
app.listen(PORT, () => console.log(`Server started on ${PORT}`));