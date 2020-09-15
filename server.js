const Discord = require('discord.js');
const client = new Discord.Client();

function presence(){
client.user.setPresence({
 status:"online",
 game: {
   name:"CALLAO LACRA | -help",
   type:"PLAYING"
 }

});


}

client.on('ready', () => {
  console.log(`BOT_JOSE LISTO!!! ${client.user.tag}!`);
  presence();
});

client.on('message', msg => {
  if (msg.content === '/klk') {
    msg.reply('tamo activo pai :)');
  }
});
 
client.on("message", msg => {
var Mensajes = ["hola","respeta","callao lacra","payaso"];
var aleatorio = Math.floor(Math.random()*(Mensajes.length));
if (message.content.startsWith('hola')){
  message.channel.send(Mensajes[aleatorio]);
}

});
 


client.login('NzQ1ODQyNzE5NDYwNDI1NzM5.Xz3qKQ.qDl4j138fvJdou6X-w6mk1rXs0A');