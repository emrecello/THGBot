const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu çoçuğu') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'annesiz') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amq') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iarda ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('tam bir oç');
		} else {
		msg.reply('(͡° ͜ʖ ͡°)');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktir') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bb') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('bay bay');
		}
	}
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'puşt') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'berkay ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Çomar');
		} else {
		msg.reply('Çomar');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'loxora ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Çomar');
		} else {
		msg.reply('tam bir sapık');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mk') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'onay ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Adamın Dibi');
		} else {
		msg.reply('Adamın Dibi');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'arda ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('tam bir bronz');
		} else {
		msg.reply('Tam bi CHALLENGER');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'samet ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('feeder bronz');
		} else {
		msg.reply('feeder bronz');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'emre ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('sunucu sahibi');
		} else {
		msg.reply('Şişko piç');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'anneni sikeyim emre') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'öç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === '0ç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'Øç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'σç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'OROSPU') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospuu') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pıç') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('küfür etme!');
		} else {
		msg.reply('küfür etme!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'emir ne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Tam bi ÜSTAD!');
		} else {
		msg.reply('Tam bi ÜSTAD!');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mq') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ibne') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gavat') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç kurusu') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq malı') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'salak') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananızı sikerim') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananızı sikem') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'annenizi sikeyim') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'annene atlıyım') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'orospu') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'senin ben anneni') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Küfür Etme');
		} else {
		msg.reply('Küfür Etme');
		}
	}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
