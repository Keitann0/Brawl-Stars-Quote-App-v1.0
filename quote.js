'use strict';

var randomNum = 0;
var numActual = 0;
var currentQuote = '';
var currentAuthor = '';

function changeQuote(){
    randomNum = Math.floor(Math.random()*10);
    

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
}

function tweetQuote(){
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent 
    (currentQuote + currentAuthor));

}