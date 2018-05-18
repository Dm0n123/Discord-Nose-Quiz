const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

var data = {
  question1: {
    pic: "images/1.png"
  },
  question2: {
    pic: "images/1.png"
  },
  question3: {
    pic: "images/1.png"
  }
}

client.on('ready', function() {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', function(msg) {
  if(msg.author.equals(client.user)) return;
  if(!msg.content.startsWith(prefix)) return;

  var args = msg.content.substring(prefix.length).split(" ");

  switch(args[0]){
    case "start":
      var randomQuestion = Math.floor(Math.random()*data.length);
      console.log(randomQuestion);
    break;
  }
});

client.login("MzY4NzQ0MDA2NzcyOTgxNzkw.Dd-BPQ.CxYKMFZEodZe-BsKVrLQJFxtPdw");
