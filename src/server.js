const express = require ('express');
const mysql = require ('mysql');
var cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt')
const saltRounds = 10

const {sign} = require('jsonwebtoken')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gers_garage',
    port: '3306',
})

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));

app.use(session({
    key: "userId",
    secret: "subscribe",
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))



app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user})
    } else {
        res.send({ loggedIn: false})
    }

})

app.post("/login", (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const role = req.body.role

        const sqlSelect = "SELECT * FROM user WHERE email = ?;";
        connection.query(sqlSelect, [email], (err, result) => {
           if(err) {
               console.log("lol")
           }
           if (Object.keys(result).length > 0) {
               bcrypt.compare(password, result[0].password, (error, response) => {
                   if (response) {
                      
                       const id = result[0].id
                       const token = sign(
                          {id: req.body.id, email}, 
                       "jwtSecret", {
                           expiresIn: "2h",
                       })
                      req.session.user = result;

                       res.json(token);
                   } else {
                       res.send({error: "wrong email/password combination"});
                   }
               })
           } else {
            res.json({error: "User doesn't exist"});
        }
        } 
        );

});

app.post("/register", (req, res) =>{

    const email = req.body.email
    const password = req.body.password
    const role = req.body.role

    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err)
        }
    const sqlSelect = "SELECT * FROM user WHERE email = ?";
    connection.query(sqlSelect, [email], (err, rows) =>{
        if (err) {
            console.log(err);
        }
        if (!email == rows) {
            const sqlInsert = "INSERT INTO user (email, password, role) VALUES (?,?,'costumer')";
            connection.query(sqlInsert, [email, hash, role], (err, result) =>{
                res.send(result);
                console.log("User registered")
       
        })
    }
    else {
        console.log("User already exist")
    }   
    });
})
});

app.post("/api/insert2", (req, res) =>{

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const email = req.body.email
    const phone_number = req.body.phone_number
    const user_id = req.body.user_id

    const sqlSelect = "SELECT * FROM user_details WHERE email = ?";
    connection.query(sqlSelect, [email], (err, rows) =>{
       
            const sqlInsert = "INSERT INTO user_details (first_name, last_name, email, phone_number, user_id) VALUES (?,?,?,?,?)";
            connection.query(sqlInsert, [first_name, last_name, email, phone_number, user_id], (err, result) =>{
                res.send(result);
                console.log("User details registered")
       
        })  
    });
});

app.get("/api/insert2", (req, res) =>{
 const sqlSelect = "SELECT * FROM user_details";
 connection.query(sqlSelect, (err, result) =>{
     res.send(result);
 })
});

app.post("/api/insert3", (req, res) =>{

    const brand = req.body.brand
    const model = req.body.model
    const year = req.body.year
    const registration = req.body.registration
    const color = req.body.color
    const engine_type = req.body.engine_type
    const user_id = req.body.user_id

    const sqlSelect = "SELECT * FROM vehicle";
    connection.query(sqlSelect, [brand, model, year, registration, color, engine_type, user_id], (err, rows) =>{
       
            const sqlInsert = "INSERT INTO vehicle (brand, model, year, registration, color, engine_type, user_id) VALUES (?,?,?,?,?,?,?)";
            connection.query(sqlInsert, [brand, model, year, registration, color, engine_type, user_id], (err, result) =>{
                res.send(result);
                console.log("vehicle registrated")
       
        })  
    });
});


app.get("/api/insert3", (req, res) =>{
    const sqlSelect = "SELECT * FROM vehicle";
    connection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
   });

app.post("/api/insert4", (req, res) =>{

    const service = req.body.service
    const date = req.body.date
    const time = req.body.time
    const comment = req.body.comment
    const user_id = req.body.user_id

    const sqlSelect = "SELECT * FROM booking";
    connection.query(sqlSelect, [service, date, time, comment, user_id], (err, rows) =>{
       
            const sqlInsert = "INSERT INTO booking (service, date, time, comment, user_id) VALUES (?,?,?,?,?)";
            connection.query(sqlInsert, [service, date, time, comment, user_id], (err, result) =>{
                res.send(result);
                console.log("booking registered")
       
        })  
    });
});

app.get("/api/insert4", (req, res) =>{
    const sqlSelect = "SELECT * FROM booking";
    connection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
   });

const port = process.env.PORT  || 3001;
app.listen(port);

console.log("App is listening on port " + port)