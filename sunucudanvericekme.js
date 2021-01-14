// akinturtul.com/gamedig.html
// İnstagram : akin.js
const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {
  Gamedig.query({
    type: "csgo",
    host: "185.171.25.10"
  })
    .then(state => {
      const akinjs = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("Pcshyo # Jailbreak Sunucu Durumu") // Embed Başlığı
        .addField("Sunucu Adı: ", state.name)
        .addField("Sunucu IP: ", "185.171.25.10") // Dilerseniz dns ip yazabilirsiniz.
		.addField("Harita: ", state.map)
        .addField(
          "Aktif Oyuncu Sayısı: ",
          state.raw.numplayers + "/" + state.maxplayers
        )
		.setFooter("© www.akinturtul.com | akin.js") // Footer kısmı
      message.channel.send(akinjs);
    })
    .catch(err =>
      message.channel.send("Sunucu Kapalı veya bu IPde bir sunucu bulunamadı!") // Bir sorun yaşanırsa ne yazıcak
    );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["csgo"],
  permLevel: 0,
};

exports.help = {
  name: 'jb',
  description: 'PcshyoBot kategorili yardım menüsü',
  usage: 'jb <ip>'
};
