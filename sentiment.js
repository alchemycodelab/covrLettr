// practice file for npm package 
let Sentiment = require('sentiment');
let sentiment = new Sentiment();
const cat = 'I’ve been giving my friends and family free computer advice since I was 10, and recently decided it’s time I get paid for it. That’s why I couldn’t believe it when I found a Boss ass dev position at Facebook.When I found the Boss ass dev  position available at Facebook I felt like it was meant for me.Your mission to helping people speaks to me, as integrity, honesty, and gettin drunk have been at the forefront of who I am for some time.I’ve been following Facebook for some time now and am impressed by baby yoda holding a corgi.I’m excited to see how we are able to improve these technologies in the coming years.Some highlights of my tech stacks are Javascript, Node, React, as well as Express.Some examples of my past experience are Being a boss and undefined.A past accomplishment I’m proud of is Made a full-stack app.I believe my skills and drive will blossom in this job because of the renowned support Facebook gives to its team.I\'d love to show you how my skills can translate to real growth for both of us.';
let result = sentiment.analyze(cat);
console.log(result); 
