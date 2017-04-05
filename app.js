var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/', function(req, res){
  request('http://www.zeldadungeon.net/ocarina-of-time-walkthrough/fire-temple/', function (error, response, html) {
        var $ = cheerio.load(html);
        var walkthrough;
        var json = { walkthrough : "", release : "", rating : ""};
     if(!error){
        $('div.walkthrough p').filter(function(){
        var data = $(this);
        walkthrough = data.text();
        console.log(walkthrough)
      })
    }
  })
})

app.listen('8080');
module.exports.app = app;

// run nodemon app.js then look at terminal console
