const fs = require('fs');
module.exports = {
  config: {
    name: "Joy",
    version: "1.0",
    author: "otineeeeyyyy",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "😥") {
      return message.reply({
        body: "༆᭄̲̲̲̞̎̎͢༊═══❥হাঁসি༊জিঁনিঁসঁটা༊সঁত্যিঁ༊খুঁবঁ❥┼─༊🌸🖤\n༆᭄̲̲̲̞̎̎͢༊═══❥অঁদ্ভুঁতঁ❥┼─༊🖤\n༆᭄̲̲̲̞̎̎͢༊═══❥হাঁজাঁরঁটাঁ༊কঁষ্টঁ༊লুঁকাঁনোঁরঁ❥┼─༊🌸🥀\n༆᭄̲̲̲̞̎̎͢༊═══❥জঁন্যঁ༊এঁকঁটিঁ༊মিঁথ্যাঁ༊হাঁসিঁ❥┼যথেষ্ট─❤️🥀\n\n𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘",
        attachment: fs.createReadStream("JOY/sadjoy.mp4"),
      });
    }
  }
};
