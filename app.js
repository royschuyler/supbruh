var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
let game,
    dungeon,
    gameString,
    dungeonString;
let [,,...args] = process.argv;
let dash = args.indexOf('-')
let postDash = args.splice(dash + 1)

for (let j = 0; j < dash; j++) {
  gameString += args[j] + '-'
}
  game = gameString.slice(0, -1).slice(9)

for (let i = 0; i < postDash.length; i++) {
  dungeonString += postDash[i] + '-'
} 
  dungeon = dungeonString.slice(0, -1).slice(9)


// app.get('/', function(req, res){
  request(`http://www.zeldadungeon.net/${game}-walkthrough/${dungeon}/`, function (error, response, html) {
        var walkthrough;
        var $ = cheerio.load(html);
        var json = { walkthrough : "", release : "", rating : ""};
     if(!error){
        $('div.walkthrough p').filter(function(){
        var data = $(this);
        walkthrough = data.text();
        console.log(walkthrough)
      })
    }
  })
// })

app.listen('8080');
module.exports.app = app;


// run nodemon app.js then look at terminal console
