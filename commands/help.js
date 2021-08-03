const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setDescription(`
Creates a giveaway. **!gstart <channel> <time> <winners> <prize>**
Ends a giveaway. **!gend <message ID>**
Rerolls a giveaway. **!greroll <message ID>**
Shows the commands. **!ghelp**`)
      .setTimestamp()
	  .setColor("GREEN");

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
