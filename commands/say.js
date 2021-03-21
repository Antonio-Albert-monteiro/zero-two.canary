const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	const sayMessage = args.join(' ');
	message.delete().catch(O_o => {});
	
	const embed = new Discord.MessageEmbed()
	.setDescription(sayMessage)
	.setColor('#8A2BE2')
	
	message.channel.send(embed)
	//message.channel.send(sayMessage);
	//comando original aí em cima caso eu precise
};