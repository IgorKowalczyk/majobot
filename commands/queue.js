const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	/*
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  return message.channel.send(`
__**Song queue:**__

${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}

**Now playing:** ${serverQueue.songs[0].title}
		`);
		*/
}

module.exports.help = {
    name: "queue",
    description: "Display the guild songs queueueueueueueueueueueue",
    usage: "queue",
    type: "Music",
}
