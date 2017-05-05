/*
 ping pong bot, whenever you send "ping", it replies "pong".
*/

var config = require('config-json');
config.load('./keys.json');

// import the discord.js module
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = config.get('key');

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('ping')) {
    message.channel.sendMessage('pong');
  }
  if (message.content.toLowerCase().includes('news team')) {
    message.channel.sendMessage('NEWS TEAM ASSEMBLE');
    message.channel.sendMessage('https://giphy.com/gifs/news-MmnNieHPeAjU4');
  }


  if (message.content.toLowerCase().includes('genji')) {
    message.channel.sendMessage('Is that a pro Genji?');
  }

  if (message.content.toLowerCase().includes('dat boi')) {
    message.channel.sendMessage('o shit waddup!');
  }


  if (message.content.toLowerCase().includes('rip')) {
    message.channel.sendMessage('dead');
  }

  if (message.content.toLowerCase().includes('ayy')) {
    message.channel.sendMessage('lmao');
  }

  if (message.content.toLowerCase() === 'roll') {
  var num = Math.floor(Math.random() * 100) + 1;
    message.channel.sendMessage(message.author + ' Roll: '+num);
  }
  if (message.content.toLowerCase() === 'testies') {
    message.reply('balls');
  }

  if (message.content.toLowerCase().includes('what the fuck')) {
    message.channel.sendMessage('https://media.giphy.com/media/iZPebV7Zn3MOI/giphy.gif');
  }



});

bot.login(token);


