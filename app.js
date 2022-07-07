
const express = require('express');
const app = express();

let donnees = [
	{"data": {"sentence": "Le premier text"}},
	{"data": {"sentence": "Le deuxieme text"}},
	{"data": {"sentence": "Le troisieme text"}},
	{"data": {"sentence": "Le quatrieme text"}},
	{"data": {"sentence": "Le cinquieme text"}}
];

const cors = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type');
};

app.get('', (req, res) => {
	cors(req, res);
	res.send(donnees);
})
for (var i = 0; i < donnees.length; i++) {
	const reponse = donnees[i];
	app.get(`/api/${i+1}`, (req, res) => {
	cors(req, res);
	res.json(reponse);
})
}

module.exports = app;