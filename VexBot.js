const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDM4NzQ0Nzg3NjY4MDQxNzQw.DcNOoA.z1IcznGtprXj2ET1Gsj-irWt2Uk')

bot.on('message', function (message){
    if (message.content === 'Salut') {
        message.reply ('coucou')
    }
} )

bot.on('message', function (message) {
    if (message.content === 'help') {
        message.reply('Contacte un Helper Ou un Administrateur')
    }
})

bot.on('message', function (message) {
    if (message.content === '!ping') {
        message.reply('Pong')
    }
})

