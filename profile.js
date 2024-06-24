const express = require('express');
const app = express();
const port = 3000;
let crypto = require('node:crypto');
let users = {};

app.get('/', (req, res) => {
    res.send('helloooo there!');
});

app.get('/newUser', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
    

    username = username.replace(/[!@#$%^&*]/g, '');
    if (!username || !password || users[username]){
        console.log(`${username} ${password} ${users}`);
        return res.sendStatus(400);
    }
    
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    users[username] = {salt, hash};

    res.sendStatus(200)
});

app.get('/auth', (req, res) => {
    let username = req.query.username || '';
    const password = req.query.password || '';
    username = username.replace(/[!@#$%^&*]/g, '');

    if (!username || !password || !users[username]) {
        return res.sendStatus(400);
    }

    const { salt, hash } = users[username];
    const encryptHash= crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    if (crypto.timingSafeEqual(hash, encryptHash)) {
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }
});



app.listen(port, () => {
    console.log(`It is time for ${port}`);
});
