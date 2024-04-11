/*
DOM Manipulation with jQuery Project 
Date: 06/04/2024
by: Keitan Holtschmit
This code was entirely written by me so... All rights reserved
*/
'use strict';

//Declaring variables
var randomNum = 0;
var numActual = 0;
var currentQuote = '';
var currentAuthor = '';

//Using Math.floor to randomize a number (In a range of 0 to 15) that will be used to display 1 image of a Brawler and his Quote 
function changeQuote(){
    randomNum = Math.floor(Math.random()*15);
    
    //Dynamike Case
    if(randomNum == 0){
        $("#text").text("I got a short fuse");
        $("#brawler").attr("src", "Dynamike.png");
        $("#author").text("-Dynamike")
    } 
    //Poco Case
    else if(randomNum == 1){
        $("#text").text("Feel the power of music!");
        $("#brawler").attr("src", "Poco.png");
        $("#author").text("-Poco")
    }
    //Mortis Case
    else if(randomNum == 2){
        $("#text").text("Have much fear, Mortis is here!");
        $("#brawler").attr("src", "Mortis.png");
        $("#author").text("-Mortis");
    }
    //Surge Case
    else if(randomNum == 3){
        $("#text").text("To protect and surge.");
        $("#brawler").attr("src", "Surge.png");
        $("#author").text("-Surge");
    }
    //Spike Case 
    else if(randomNum == 4){
        $("#text").text(" ...");
        $("#brawler").attr("src", "Spike.png");
        $("#author").text("-Spike");
    }
    //Edgar Case
    else if(randomNum == 5){
        $("#text").text("Huh, can't believe I have to do this.");
        $("#brawler").attr("src", "Edgar.png");
        $("#author").text("-Edgar");
    }
    //Colt Case
    else if(randomNum == 6){
        $("#text").text("Check out my guns! Hahahaha!");
        $("#brawler").attr("src", "Colt.png");
        $("#author").text("-Colt");
    }
    //Byron Case
    else if(randomNum == 7){
        $("#text").text("Run, run, as fast as you can!");
        $("#brawler").attr("src", "Byron.png");
        $("#author").text("-Byron");
    }
    //Barley Case
    else if(randomNum == 8){
        $("#text").text("Ready for another?");
        $("#brawler").attr("src", "Barley.png");
        $("#author").text("-Barley");
    }
    //Belle Case
    else if(randomNum == 9){
        $("#text").text("That's why they call me the golden arm");
        $("#brawler").attr("src", "Belle.png");
        $("#author").text("-Belle");
    }
    //Fang Case
    else if(randomNum == 10){
        $("#text").text("Ok, challenge accepted.");
        $("#brawler").attr("src", "Fang.png");
        $("#author").text("-Fang");
    }
    //Melody Case
    else if(randomNum == 11){
        $("#text").text("See you when you grow up.");
        $("#brawler").attr("src", "Melody.png");
        $("#author").text("-Melody");
    }
    //Shelly Case
    else if(randomNum == 12){
        $("#text").text("Asi me gusta");
        $("#brawler").attr("src", "Shelly.png");
        $("#author").text("-Shelly");
    }
    //Grom Case
    else if(randomNum == 13){
        $("#text").text("Don't forget the milk");
        $("#brawler").attr("src", "Grom.png");
        $("#author").text("-Grom");
    }
    //Angelo Case
    else if(randomNum == 14){
        $("#text").text("Take a deep breath");
        $("#brawler").attr("src", "Angelo.png");
        $("#author").text("-Angelo");
    }
}
//If pressed the "Tweet it" button, go to Twitter (Now X) to post a Tweet with the actual quote
function tweetQuote(){
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent 
    (currentQuote + currentAuthor));

}