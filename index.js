

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

const prefix = 'v/'

bot.on('message', function (message){
    if (message.content === 'Salut') {
        message.reply ('coucou')
    }
} );

bot.on('message', function (message) {
    if (message.content === 'v/ping') {
        message.reply('Pong')
    }
});

bot.on('ready', function() {
    bot.user.setActivity('MAINTENANCE').catch(console.error)
});

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenu sur le discord lit bien les règles')
    }).catch(console.error)
});


bot.on('message', function (message){;
    if (message.content === 'salut') {;
        message.reply ('coucou');
    };
} );

bot.on('message', function (message){;
    if (message.content === 'wsh') {;
        message.reply ('coucou');
    };
} );

bot.on('message', function (message){;
    if (message.content === 'v/invite') {;
        message.reply ('https://discordapp.com/api/oauth2/authorize?client_id=438744787668041740&permissions=8&scope=bot')
    };
} );

bot.on('message', function (message){;
    if (message.content === 'yop') {;
        message.reply ('coucou');
    };
} );

bot.on('message', function (message){;
    if (message.content === 'Sa va?') {;
        message.reply ('Je suis un bot pas un humain...');
    };
} );

bot.on('message', function (message) {;
    if (message.content === 'v/Help') {;
        message.reply('Commande Pour Les Admin: v/Admin ; Commande pour les membres: v/Member');
    };
});



bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', "user");
member.addRole(role);

});

bot.on('message', message => {
    if (message.content.startsWith('v/off')) {
        message.reply('Bonne nuit.')

        if (message.author.id == "278626732150358016") {

            console.log("Je suis off");
        
            bot.destroy();
        
        process.exit(1);
        }
    }
})

bot.on('message', message => {

    if(message.content === 'v/avatar') {

        message.reply(message.author.avatarURL)
    }
})

bot.on('guildMemberLeave', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bonne continuation à toi')
    }).catch(console.error)
})

bot.on('message', message => {;
    if (message.content === 'v/Mod') {;
        message.reply('commande envoyé')
        message.author.send('Voici les commandes de modération: v/purge ; v/ban ; v/kick ; v/mute ; v/tempmute ; v/warn');
        ;
    };
});

bot.on('message', message => {;
    if (message.content === 'v/Member') {;
        message.reply('commande envoyé')
        message.author.send('Voici les commandes des membre: v/avatar ; v/invite ; v/ping');
        ;
    };
});

bot.on('message', message => {
      if(message.content.startsWith('v/report')){
        let args = message.content.split(' ')[1];
    
        //!report @ned this is the reason
    
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find user.");
        let rreason = args.join(" ").slice(22);
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rreason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    
    
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
        return;
      }
    
    
    
    
      if(message.content.startsWith('v/serverinfo')){
        let args = message.content.split(' ')[1];
    
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#990000")
        .setThumbnail(sicon)
        .addField("Nom du serveur", message.guild.name)
        .addField("Date de création:", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Nombre total de membre", message.guild.memberCount);
    
        return message.channel.send(serverembed);
      }            

    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    
    if (message.content.startsWith(prefix + 'purge')) {
        
        async function purge() {
            message.delete(); 

            
            if (!message.member.roles.find("name", "VexBot")) { 
                    

            }

            
            if (isNaN(args[0])) {
                
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); 
                
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...'); 

            
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));

        }

        
        purge(); 

    }
});


bot.on('message', message => {

    {
        "name"; "tempmute",
        "permissions"; "NONE",
        "restriction"; "1",
        "actions"; [
          {
            "info": "1",
            "find": "mute",
            "storage": "1",
            "varName": "muterole",
            "name": "Find Role"
          },
          {
            "info": "0",
            "infoIndex": "1",
            "storage": "1",
            "varName": "minutes",
            "name": "Store Command Params"
          },
          {
            "storage": "0",
            "varName": "",
            "name": "Delete Message"
          },
          {
            "member": "0",
            "varName2": "",
            "role": "3",
            "varName": "muterole",
            "name": "Add Member Role"
          },
          {
            "channel": "0",
            "varName": "",
            "message": ":white_check_mark: ${mentionedUser} has been successfully muted for ${tempVars(\"minutes\")} minutes.\n",
            "storage": "1",
            "varName2": "mutemsg",
            "name": "Send Message"
          },
          {
            "time": "2",
            "measurement": "1",
            "name": "Wait"
          },
          {
            "storage": "1",
            "varName": "mutemsg",
            "name": "Delete Message"
          },
          {
            "time": "${tempVars(\"minutes\")}",
            "measurement": "2",
            "name": "Wait"
          },
          {
            "member": "0",
            "varName2": "",
            "role": "3",
            "varName": "muterole",
            "name": "Remove Member Role"
          },
          {
            "channel": "0",
            "varName": "",
            "message": "${mentionedUser} has just been unmuted after ${tempVars(\"minutes\")} minutes!\n",
            "storage": "1",
            "varName2": "unmutemsg",
            "name": "Send Message"
          },
          {
            "time": "2",
            "measurement": "1",
            "name": "Wait"
          },
          {
            "storage": "1",
            "varName": "unmutemsg",
            "name": "Delete Message"
          }
        ]
      }

    if (message.content.startsWith(prefix)) {
        let args = message.content.split(" ");
        var command = args.shift().slice(1).toLowerCase();


        if (message.content.startsWith("v/mute")) {
            let args = message.content.split(" ");
            if (message.guild.member(message.author.id).hasRole('VexBot')) {
                var member = message.mentions.members.first();
                if (!member) return message.channel.send(`Mentionne un membre valide !`);
                var reason = message.content.split(" ").join(" ");
                if (reason == undefined) return message.channel.send("Donne une raison a ce mute");
                var role = message.guild.roles.find("name", "Muted | Muté");

                if (member.roles.find("name", "Muted | Muté")) {
                    return member.removeRole(role) 
                } else {
                    member.addRole(role);
                    return message.channel.send(`${member.toString()} a bien été mute par ${message.author}, car ${reason}`);
                }
            } else {
                return message.channel.send("**Vous n'avez pas les perms d'administrateur pour executer cette commande**");
            }
        }
    }

bot.on("message", message => {
    function warn(message,prefix,API,bot){
  
        var fs = require('fs');
        let warns = JSON.parse(fs.readFileSync("./Dekstop/VexBot/warns.json", "utf8"));
        if (message.content.startsWith(prefix + "warn")){
        if (message.channel.type === "dm") return;
        var mentionned = message.mentions.users.first();
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: Vous n'avez pas la permission `MANAGE_MESSAGES` dans ce serveur**").catch(console.error);
        if(message.mentions.users.size === 0) {
          return message.channel.send("**:x: Vous n'avez mentionnée aucun utilisateur**");
        }else{
            const args = message.content.split(' ').slice(1);
            const mentioned = message.mentions.users.first();
              if (message.mentions.users.size != 0) {
                if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
                  if (args.slice(1).length != 0) {
                    const date = new Date().toUTCString();
                    if (warns[message.guild.id] === undefined)
                      warns[message.guild.id] = {};
                    if (warns[message.guild.id][mentioned.id] === undefined)
                      warns[message.guild.id][mentioned.id] = {};
                    const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
                    if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
                      warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
                    } else {
                      if (Object.keys(warns[message.guild.id][mentioned.id]).length === 3) return message.channel.send('**'+mentioned.tag+'** a déjÃ  3 warns, un ban serait judicieux pour calmer cet utilisateur prétencieux :thinking:');
                      warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
                        time: date,
                        user: message.author.id};
                    }    (async function(){
                  var fs = require('fs');
          let logs = JSON.parse(fs.readFileSync("./Dekstop/VexBot/logs.json", "utf8"));
        
            let args = message.content.split(" ")
          let mention = message.mentions.users.first()
          let reason = args.slice(2).join(" ")
              let logchannel = JSON.parse(fs.readFileSync("./data/modlogchannel.json", "utf8"));
            var sallog = logchannel[message.guild.id];
        if (message.author.bot) return;
        if(!sallog) return;
        if (!message.guild.channels.exists('name', sallog.channel)) return;
        if(!logs[message.guild.id]) {
           logs[message.guild.id] = {
            "modCase": []
          };
           await fs.writeFile("./Dekstop/VexBot/logs.json", JSON.stringify(logs))
        }
        let list = Object.keys(logs[message.guild.id]);
        for (let i = 0; i < list.length; i++) {
                   logs[message.guild.id][i] = {
            "admin": {
                "name": message.author.username,
                "discrim": message.author.discriminator,
                "id": message.author.id
            },
            "user": {
                "name": mention.username,
                "discrim": mention.discriminator,
                "id": mention.id
            },
            "server": {
                "name": message.guild.name,
                "id": message.guild.id,
                "channel": message.channel.name,
                "channel_id": message.channel.id
            },
            "reason": reason
        }
              await fs.writeFile("./VexBot/logs.json", JSON.stringify(logs))
                }
        
        const Discord = require("discord.js");
          const lcembed = new Discord.RichEmbed()
          .setTitle("Case #" + list.length)
          .setColor(0xFF5B2B)
          .addField(":bust_in_silhouette: Utilisateur:", mention.tag, true)
          .addField(":cop: Moderateur:", message.author.tag, true)
          .addField(":hammer: Action", 'Warn', false)
          .addField(":speech_balloon: Raison:", reason ? reason : 'aucune', true)
         await message.guild.channels.find('name', sallog.channel).send(lcembed)
        
        }())
                    fs.writeFile("./Dekstop/VexBot/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
        message.delete();
                    message.channel.send(':warning: | **'+mentionned.tag+' a été averti**');
        message.mentions.users.first().send(`:warning: **Warn |** depuis **${message.guild.name}** donné par **${message.author.username}**\n\n**Raison:** ` + args.slice(1).join(' '))
             
                  } else {
                    message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
                  }
                } else {
                  message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
                }
              } else {
                message.channel.send("Erreur mauvais usage: "+prefix+"warn <user> <raison>");
              }
          }
        };
          if (message.content.startsWith(prefix+"seewarns")||message.content===prefix+"seewarns") {
        if (message.channel.type === "dm") return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: Vous n'avez pas la permission `MANAGE_MESSAGES` dans ce serveur**").catch(console.error);
            const mentioned = message.mentions.users.first();
            const args = message.content.split(' ').slice(1);
              if (message.mentions.users.size !== 0) {
                if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
                  try {
                    if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
                      message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
                      return;
                    }
                  } catch (err) {
                    message.channel.send("**"+mentioned.tag+"** n'a aucun warn :eyes:");
                    return;
                  }
                  let arr = [];
                  arr.push(`**${mentioned.tag}** a **`+Object.keys(warns[message.guild.id][mentioned.id]).length+"** warns :eyes:");
                  for (var warn in warns[message.guild.id][mentioned.id]) {
                    arr.push(`**${warn}** - "**`+warns[message.guild.id][mentioned.id][warn].raison+
                    "**\" warn donné par **"+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+"** a/le **"+warns[message.guild.id][mentioned.id][warn].time+"**");
                  }
                  message.channel.send(arr.join('\n'));
                } else {
                  message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
                  console.log(args);
                }
              } else {
                message.channel.send("Erreur mauvais usage: "+prefix+"seewarns <user> <raison>");
              }
              };
        
        
          if (message.content.startsWith(prefix+"clearwarns")||message.content===prefix+"clearwarns") {
        if (message.channel.type === "dm") return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**:x: Vous n'avez pas la permission `MANAGE_MESSAGES` dans ce serveur**").catch(console.error);
           const mentioned = message.mentions.users.first();
            const args = message.content.split(' ').slice(1);
            const arg2 = Number(args[1]);
              if (message.mentions.users.size != 0) {
                if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
                  if (!isNaN(arg2)) {
                    if (warns[message.guild.id][mentioned.id] === undefined) {
                      message.channel.send(mentioned.tag+" n'a aucun warn");
                      return;
                    } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
                      message.channel.send("**:x: Ce warn existe pas**");
                      return;
                    }
                    delete warns[message.guild.id][mentioned.id][arg2];
                    var i = 1;
                    Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
                      var val=warns[message.guild.id][mentioned.id][key];
                      delete warns[message.guild.id][mentioned.id][key];
                      key = i;
                      warns[message.guild.id][mentioned.id][key]=val;
                      i++;
                    });
                    fs.writeFile("./Dekstop/VexBot/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
                    if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
                      delete warns[message.guild.id][mentioned.id];
                    }
                    message.channel.send(`Le warn de **${mentioned.tag}**: **nÂ°${args[1]}** a été enlevé avec succÃ¨s!`);
                    return;
                  } if (args[1] === "tout") {
                    delete warns[message.guild.id][mentioned.id];
                    fs.writeFile("./Dekstop/VexBot/warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
                    message.channel.send(`Les warns de **${mentioned.tag}** ont tous été enlevés avec succÃ¨s!`);
                    return;
                  } else {
                    message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre|tout>");
                  }
                } else {
                  message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre|tout>");
                }
              } else {
               message.channel.send("Erreur mauvais usage: "+prefix+"clearwarns <utilisateur> <nombre|tout>");
              }
              };
            }
            module.exports = warn
})

bot.on('message', message => {
    if (message.content.startsWith(prefix+ "vcs")) {
        message.delete(message.author);
        let argson = message.content.split(" ").slice(1);
        let vcsmsg = argson.join(" ")
        if(!message.guild.channels.find("name", "vcs-vexbot")) return message.reply("erreur le channel `vcs-vexbot`est introuvable");
        if(message.channel.name !== "vcs-vexbot") return message.reply("Mauvais channel!");
        if(!vcsmsg) return message.reply("Merci de m'indiquer un message");

        var replys = [
            '#01FEDC',

        ];

        
        let reponse = (replys[Math.floor(Math.random() * replys.lenght)])
        var embed = new Discord.RichEmbed()
        .setColor('#990000')
        .setAuthor("VexBot - VCS", bot.user.avatarURL)
        .addField("serveur", message.guild.name, true)
        .addField("Utilisateur", message.author.tag, true)
        .addField('Message', vcsmsg)
        .setFooter("VCS")
        bot.channels.findAll('name', 'vcs-vexbot').map(channel => channel.send(embed))
    }
})
{}})


bot.on('message', message => {
  if (message.content.startsWith(prefix+ "avatar")) {
    message.delete(message.author);
    let users = message.mentions.users.first() || message.author;
  
    let embed = new Discord.RichEmbed()
    .setAuthor(`${users.username}`)
    .setImage(users.displayAvatarURL)
    .setColor('RANDOM')
      .addField("Voici l'avatar de", `${users.username}`)
  
    message.channel.send(embed)
  };
})

bot.on('message', message => {
  if (message.content.startsWith(prefix+ "avatar")) {
    message.delete(message.author);
    let users = message.mentions.users.first() || message.author;
  
    let embed = new Discord.RichEmbed()
    .setAuthor(`${users.username}`)
    .setImage(users.displayAvatarURL)
    .setColor('RANDOM')
      .addField("Voici l'avatar de", `${users.username}`)
  
    message.channel.send(embed)
  };
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + "kick")) {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        return message.reply("Tu n'as pas les permissions !").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
        return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
        return message.reply("Cet utilisateur est introuvable ou impossible a kick")
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci").catch(console.error);
    }
    kickMember.kick().then(member => {
        message.channel.send(` :wave: ${member.user.username} a été kick :point_right:`).catch(console.error);

    }).catch(console.error);
}
})

bot.on('message', message => {
  if (message.content.startsWith(prefix + "ban")) {
    if(!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply("Tu n'as pas les permissions !").catch(console.error);
    }
    if(message.mentions.users.size === 0) {
        return message.reply("Merci de mentionner un utilisateur.").catch(console.error);
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
        return message.reply("Cet utilisateur est introuvable ou impossible a ban")
    }
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
        return message.reply("Je n'ai pas la permission BAN_MEMBERS pour faire ceci").catch(console.error);
    }
    kickMember.kick().then(member => {
        message.channel.send(` :wave: ${member.user.username} a été ban :point_right:`).catch(console.error);

    }).catch(console.error);
}
})