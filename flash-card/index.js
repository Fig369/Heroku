const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createPool({
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

/* const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});


const mysql = require('mysql2');
const connection = mysql.createPool({
    connectionLimit : 10,
    database        : 'heroku_b29181ca278f904',
    user            : 'bc6f7da3001cf6',
    password        : '1deda88a',
    host            : 'us-cdbr-east-05.cleardb.net',
});


app.get('/', (req, res) => res.render('pages/index')) */

// get topics
// SELECT *  topic ORDER by topic
app.get("/topics", (req,res) => {
    let topics = [];
    connection.query('SELECT *  FROM topic ORDER by topic', (err,results)=>{
            try {
                for(let i = 0; i < results.length; i++){
                    topics.push(results[i].topic)
                }
                res.render('topic', {
                    topics: topics
                });
            }
            catch (err){
                console.log(err);
            }
        });
});

// get categories
// SELECT *  category;
app.get("/topics/:category", (req,res) => {
    let categories = [];
    connection.query('SELECT * FROM category WHERE category.cat_id = (SELECT DISTINCT cat_id FROM topic WHERE  topic.topic = ?)', [req.params.category], (err,results)=>{
                try {
                    console.log(req.params.category)
                    let categories = []
                    for(let i = 0; i < results.length; i++){
                        categories.push(results[i].category)
                    }
                    res.render('category', {
                        categories: categories,
                        topic: req.params.category
                    });
                }
                catch (err){
                    console.log(err);
                }
        });
});

// get cards
app.get("/topics/:category/:card", (req,res) => {
    let cards = [];
    connection.query('SELECT * FROM card WHERE card.cat_id = (SELECT DISTINCT cat_id FROM category WHERE  category.category = ?)', [req.params.card], (err,results)=>{
            try {
                console.log(req.params.card);
                let cards = [];
                for(let i = 0; i < results.length; i++){
                cards.push(results[i])
            }
            console.log(cards);
    res.render('wordmatch', {
                cards: cards,
                category: req.params.category
                    });
                }
                catch (err) {
                    console.log(err);
                }
         });
});

// create a topic
app.post('/topic', (req, res) => {
            console.log("save topic");
            console.log(req.body);
    let id = req.body.id;
    let topic = req.body.topic;
            console.log("id: "+id);
            console.log("topic: "+topic);
    connection.query('INSERT INTO `topic` (`cat_id`,`topic`) VALUES (?,?)', [id, topic], (err, results) => {
                try{
                    res.redirect('/');
                }
                catch(err){
                    console.log(err);
                }
        });
});

// create a category
// EX: INSERT INTO `category` (`cat_id`, `category`) VALUES ('1', 'stoicisim');
app.post('/category', (req, res) => {
            console.log("save category");
            console.log(req.body);
    let id = req.body.id;
    let category = req.body.category;
            console.log("id: "+id);
            console.log("category: "+category);
        connection.query('INSERT INTO `category` (`cat_id`, `category`) VALUES (?, ?)', [id, category], (err, results) => {
                try {
                    res.redirect('/');
                }
                catch (err) {
                    console.log(err);
                }
        });
});

// create a card
/* EX: INSERT INTO `card` (`cat_id`, `prompt`, `question`, `answer`) VALUES ('1', 'prompt', 'question','answer');
*/
app.post('/card', (req, res) => {
            console.log("save card");
            console.log(req.body);
    let id = req.body.id;
    let prompt = req.body.prompt;
    let question = req.body.question;
    let answer = req.body.answer;
            console.log("id: "+id);
            console.log("prompt: "+prompt);
            console.log("question: "+question);
            console.log("answer: "+answer);
        connection.query('INSERT INTO `card` (`cat_id`, `prompt`, `question`, `answer`) VALUES (?, ?, ?, ?);', [id, prompt, question, answer], (err, results) => {
                try {
                    res.redirect('/');
                }
                catch (err) {
                    console.log(err);
                }
        });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

/* const express = require('express');
const app = express();

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection({
    database: process.env.DB_SCHEMA,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
});

app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});


// get topics
// SELECT *  topic ORDER by topic
app.get("/topics", (req,res) => {
    let topics = [];
    connection.query('SELECT *  FROM topic ORDER by topic', (err,results)=>{
        try {
            for(let i = 0; i < results.length; i++){
                topics.push(results[i].topic)
            }
            res.render('topic', {
                topics: topics
            });
        }
        catch (err){
            console.log(err);
        }
        
    });
});

// get categories
// SELECT *  category;
app.get("/topics/:category", (req,res) => {
    let categories = [];
    connection.query('SELECT * FROM category WHERE category.cat_id = (SELECT DISTINCT cat_id FROM topic WHERE  topic.topic = ?)', [req.params.category], (err,results)=>{
        try {
            console.log(req.params.category)
            let categories = []
            for(let i = 0; i < results.length; i++){
                categories.push(results[i].category)
            }
            res.render('category', {
                categories: categories,
                topic: req.params.category
            });
        }
        catch (err){
            console.log(err);
        }
    });
});

// get cards
app.get("/topics/:category/:card", (req,res) => {
    let cards = [];
    connection.query('SELECT * FROM card WHERE card.cat_id = (SELECT DISTINCT cat_id FROM category WHERE  category.category = ?)', [req.params.card], (err,results)=>{
        try {
            console.log(req.params.card);
            let cards = [];
            for(let i = 0; i < results.length; i++){
                cards.push(results[i])
            }
            console.log(cards);
            res.render('wordmatch', {
                cards: cards,
                category: req.params.category
            });
        }
        catch (err) {
            console.log(err);
        }
    });
});

// create a topic
app.post('/topic', (req, res) => {
    console.log("save topic");
    console.log(req.body);
    let id = req.body.id;
    let topic = req.body.topic;
    console.log("id: "+id);
    console.log("topic: "+topic);
    connection.query('INSERT INTO `topic` (`cat_id`,`topic`) VALUES (?,?)', [id, topic], (err, results) => {
        try{
            res.redirect('/');
        }
        catch(err){
            console.log(err);
        }
    });
});

// create a category
// EX: INSERT INTO `category` (`cat_id`, `category`) VALUES ('1', 'stoicisim');
app.post('/category', (req, res) => {
    console.log("save category");
    console.log(req.body);
    let id = req.body.id;
    let category = req.body.category;
    console.log("id: "+id);
    console.log("category: "+category);
    connection.query('INSERT INTO `category` (`cat_id`, `category`) VALUES (?, ?)', [id, category], (err, results) => {
        try {
            res.redirect('/');
        }
        catch (err) {
            console.log(err);
        }
    });
});

// create a card
/* EX: INSERT INTO `card` (`cat_id`, `prompt`, `question`, `answer`) VALUES ('1', 'prompt', 'question','answer');
*/
/* app.post('/card', (req, res) => {
    console.log("save card");
    console.log(req.body);
    let id = req.body.id;
    let prompt = req.body.prompt;
    let question = req.body.question;
    let answer = req.body.answer;
    console.log("id: "+id);
    console.log("prompt: "+prompt);
    console.log("question: "+question);
    console.log("answer: "+answer);
    connection.query('INSERT INTO `card` (`cat_id`, `prompt`, `question`, `answer`) VALUES (?, ?, ?, ?);', [id, prompt, question, answer], (err, results) => {
        try {
            res.redirect('/');
        }
        catch (err) {
            console.log(err);
        }
    });
});

app.listen(process.env.PORT || 3000); */ 