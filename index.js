const Discord = require('discord.js')
const bot = new Discord.Client()
const token = require("./token.json")

bot.login(token.token);

bot.on("ready", async () =>{
    console.log("bot on")
    bot.user.setStatus("online")
    bot.user.setActivity("?!help")
})

// send message channel //


bot.on('message', function (message) {
    if (message.content === 'je crois que...') {
        message.channel.send('...jai fais un rêve');
    }
});
bot.on('message', function (message) {
    if (message.content === 'salut les amis...') {
        message.channel.send('...cest davidlafargepokemon !!');
    }
});
bot.on('message', function (message) {
    if (message.content === 'encore...') {
        message.channel.send('...ca fait beaucoup la non ?');
    }
});
bot.on('message', function (message) {
    if (message.content === 'Alerte psychopathe !') {
        message.channel.send('Regarde maman un psychopathe !');
    }
});
bot.on('message', function (message) {
    if (message.content === 'mdrr') {
        message.channel.send(':joy: :joy:');
    }
});
bot.on('message', function (message) {
    if (message.content === 'kenti tu fais quoi ?') {
        message.channel.send('il joue a valo surment xD');
    }
});


// send message private //


bot.on('message', function (message) {
    if (message.content === 'wsh gros !!') {
        message.reply('salut bg');
    }
});
bot.on('message', function (message) {
    if (message.content === 'bonne nuit') {
        message.reply('bonne nuit, pense bien au 8h de sommeil !');
    }
});
bot.on('message', function (message) {
    if (message.content === 'bon appétit') {
        message.reply('pense bien a manger 5 fruits et légumes par jour !');
    }
});


// send picture //


bot.on('message', function (message) {
    if (message.content === '!nino') {
        message.channel.send('https://images8.alphacoders.com/995/thumb-1920-995320.png');
    }
});
bot.on('message', function (message) {
    if (message.content === '!miku') {
        message.channel.send('https://i.ytimg.com/vi/9eD9u30oPnw/maxresdefault.jpg');
    }
});
bot.on('message', function (message) {
    if (message.content === '!saber') {
        message.channel.send(' https://addons-media.operacdn.com/media/CACHE/images/themes/35/34535/1.0-rev1/images/87e2d26d-ee96-425c-9012-1fce8eb0d43f/953ea02005faa52ccb4f2b51e874cc32.jpg ');
    }
});
bot.on('message', function (message) {
    if (message.content === '!quintuplets') {
        message.channel.send('https://images-na.ssl-images-amazon.com/images/I/81XWWXe4PeL._AC_SL1440_.jpg');
    }
});


// profile picture //


bot.on('message', msg => {
   if(msg.content === "c'est moi wsh") {
      msg.reply(msg.author.displayAvatarURL());
   }
});


// send orders //


bot.on('message', message => {
   if (message.content === '?!help') {
      message.reply('voici les commandes, faites en bon usage je vous surveille :yum:');
      message.channel.send('__**images bot**__   :   - !nino  ,  !quintuplets  ,  !miku  ,  !saber ');
      message.channel.send('__**messages bot**__   :   - je crois que...  ,   salut les amis...  ,   encore...   ,   Alerte psychopathe !  ,   wsh gros !!  ,   bonne nuit  ,  bon appétit');
      message.channel.send("__**profile bot**__   :   - c'est moi wsh");
   }
});


// bot statut //

module.exports = client => {

    var serveur = client.guilds.size;
    var membre = client.users.size;

const statutdubot = [

    "?!help",
    `${serveur} serveurs | $${membre} membres`  
];
};