const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    message.delete()
    if(message.author.bot) return

    let msg = await message.channel.send("Nous sommes entrain de faire le test...")
    msg.delete();

    let PING = new Discord.MessageEmbed()
    .setColor('#30009c')
    .setThumbnail('https://cdn.discordapp.com/attachments/720329253035573289/853187847264010280/static_1.png')
    .setTitle('PONG !')
    .setDescription("Voci les résultas de votre demande :")
    .addField("Ma latence est de :", Math.floor(msg.createdAt - message.createdAt)+ " " + "ms")
    .setTimestamp()
    message.channel.send(PING)
}

module.exports.config = {
    name: 'ping'
}