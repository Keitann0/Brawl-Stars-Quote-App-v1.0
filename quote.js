/*
DOM Manipulation with jQuery Project 
Date: 06/04/2024
by: Keitan Holtschmit
All rights reserved
*/
'use strict';

var randomNum = 0;
var numActual = 0;
var currentQuote = '';
var currentAuthor = '';

function changeQuote(){
    randomNum = Math.floor(Math.random()*15);
    

    if(randomNum == 0){
        $("#text").text("I got a short fuse");
        $("#brawler").attr("src", "Dynamike.png");
        $("#author").text("-Dynamike")
    } 
    else if(randomNum == 1){
        $("#text").text("Feel the power of music!");
        $("#brawler").attr("src", "Poco.png");
        $("#author").text("-Poco")
    }
    else if(randomNum == 2){
        $("#text").text("Have much fear, Mortis is here!");
        $("#brawler").attr("src", "Mortis.png");
        $("#author").text("-Mortis");
    }
    else if(randomNum == 3){
        $("#text").text("To protect and surge.");
        $("#brawler").attr("src", "Surge.png");
        $("#author").text("-Surge");
    }
    else if(randomNum == 4){
        $("#text").text(" ...");
        $("#brawler").attr("src", "Spike.png");
        $("#author").text("-Spike");
    }
    else if(randomNum == 5){
        $("#text").text("Huh, can't believe I have to do this.");
        $("#brawler").attr("src", "Edgar.png");
        $("#author").text("-Edgar");
    }
    else if(randomNum == 6){
        $("#text").text("Check out my guns! Hahahaha!");
        $("#brawler").attr("src", "Colt.png");
        $("#author").text("-Colt");
    }
    else if(randomNum == 7){
        $("#text").text("Run, run, as fast as you can!");
        $("#brawler").attr("src", "Byron.png");
        $("#author").text("-Byron");
    }
    else if(randomNum == 8){
        $("#text").text("Ready for another?");
        $("#brawler").attr("src", "Barley.png");
        $("#author").text("-Barley");
    }
    else if(randomNum == 9){
        $("#text").text("That's why they call me the golden arm");
        $("#brawler").attr("src", "Belle.png");
        $("#author").text("-Belle");
    }
    else if(randomNum == 10){
        $("#text").text("Ok, challenge accepted.");
        $("#brawler").attr("src", "Fang.png");
        $("#author").text("-Fang");
    }
    else if(randomNum == 11){
        $("#text").text("See you when you grow up.");
        $("#brawler").attr("src", "Melody.png");
        $("#author").text("-Melody");
    }
    else if(randomNum == 12){
        $("#text").text("Asi me gusta");
        $("#brawler").attr("src", "Shelly.png");
        $("#author").text("-Shelly");
    }
    else if(randomNum == 13){
        $("#text").text("Don't forget the milk");
        $("#brawler").attr("src", "Grom.png");
        $("#author").text("-Grom");
    }
    else if(randomNum == 14){
        $("#text").text("Take a deep breath");
        $("#brawler").attr("src", "Angelo.png");
        $("#author").text("-Angelo");
    }
}

function tweetQuote(){
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent 
    (currentQuote + currentAuthor));

}