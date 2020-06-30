const Discord = require("discord.js");
const cnf = require('../config.json');

module.exports.run = async (client, message, args) => {
const embed = new Discord.RichEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite", "[Invite the bot here (Recomended!)](" + `${cnf.website}` + "/authorize) \n[Invite the bot here (Normal)](https://discordapp.com/oauth2/authorize/?permissions=8&scope=bot&client_id=" + `${client.user.id})`)
  .addField("Website", `[Visit webiste](${cnf.website})`)
  .addField("Server", `[Join to official server](${cnf.server})`)
  .setFooter("Bot created by" + `${cnf.owner}`)
  .setTimestamp()
message.author.send({embed})

message.channel.send({embed: {
            color: 3447003,
            description: "Check a priv message!"
        }})
}

module.exports.help = {
    name: "invite",
    description: "Sends a bot invite",
    usage: "invite",
    type: "General"  
}


