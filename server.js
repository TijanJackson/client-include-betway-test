const express = require("express");

const app = express();

app.get('/api/content', (req, res) => {
    const content = [
        {color: "", 
        headerName: "betway",
        headerLogin: "Login",
        log: "login",
        green: "green",
        headerSignup: "Sign Up",
        sign: "sign",
        sports: "sports",
        casion: "casino",
        backgroundImage: "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp",
        string1: "SPORTS NEW CUSTOMER OFFER", string2: "Get Up to $10 in Free Bets", 
        join: "Join Now", joinLink: ""
    },
    ];
    res.json(content);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));