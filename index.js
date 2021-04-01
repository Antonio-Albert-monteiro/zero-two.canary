const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const serve = require('./serve')

client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `mas de ${client.guilds.cache.size} servidores!`,
      `vc sabiam que que eu sou irmã da Lolizinha😍`,
      `vcs sabiam que eu sou open soucer📂???`,
      `💕sempre sigam os seus sonhos pois eles são valiosos💕`,
      `vamos tomar um café?☕, mas vc que paga viu?`,
        `a minha documentação estar sendo feita para que todas as comunidades possa ver os meus códigos😶`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 10 * 700); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login('ODIz');