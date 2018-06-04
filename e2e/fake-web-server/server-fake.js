const express = require('express');

let currentValue = [{"id": 1, "name": "Biscuits and Gravy", "rating": 5},
    recipe2 = {"id": 2, "name": "Tacos", "rating": 6}];
// let currentValue;
let httpServer;

async function startServer(port) {

    if (httpServer) {
        return;
    }

    return startServerAsync(port);
}

function setRecipes(value) {
    currentValue = value;
}

function startServerAsync(port) {
    return new Promise((resolve, reject) => {
        const app = express();
        app.get('/recipes', (req, res) => {
            res.json(currentValue);
        });
        httpServer = app.listen(port, (err) => {
            console.log(`;alkdsjf;laksjd;fklajsdl;fjasl;dkf`);
            if (err)
                reject(err);
            else
                resolve();
        })
    })
}

function stopServer() {
    httpServer.close();
}

module.exports = {startServer, stopServer, setRecipes};