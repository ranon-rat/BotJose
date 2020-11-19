const {token}=require("./settings.json")
//packages
const Discord = require("discord.js"), // discord bots
  axios = require("axios"), //http request
  cheerio = require("cheerio"); //web scrapping
//objects
const client = new Discord.Client(),
  commands = {
    "/callao": function(msg) {
      msg.channel.send("when haces tus momos en video :V");
    },
    "/newMomo": function(msg) {
      let url = "https://www.reddit.com/r/memesmexicanos/";
      axios
        .get(url)
        .then(r => {
          let $ = cheerio.load(r.data);
          $("._2_tDEnGMLxpM6uOa2kaDB3").each((i, e) => {
            img.push($(e).attr("src"));
          });
        })
        .catch(e => {
          if (e) {
            msg.channel.send(" no se ha encontrado un buen momo");
          }
        });
    },
    "/momo": function(msg) {
      msg.channel.send(img[Math.floor(Math.random() * img.length)]);
    },
    "/monda": function(msg) {
      msg.channel.send(
        "https://www.infobae.com/new-resizer/8iwerQ0t9dEThspv78qqDC0L7Uc=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/GGPDEBMJVNDIDAOTSULULDIVDA.jpg"
      );
    }
  };

client.on("ready", () => {
  client.user.setPresence({
    game: { name: "with discord.js" },
    status: "idle"
  });

  console.log(`${client.user.username} is up and running!`);

  console.log(`BOT_JOSE LISTO!!! ${client.user.tag}!`);
});
var img = [];

client.on("message", msg => {
  if (commands.hasOwnProperty(msg.content)) {
    commands[msg.content](msg);
  }
  if (/\:v/i.test(msg.content) && !msg.author.bot) {
    msg.author.send("viva la grasa :V");
  }
});
client.login(token);
