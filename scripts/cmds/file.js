const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100089690164634"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝑱𝒆 𝒔𝒖𝒊𝒔 𝒑𝒂𝒓𝒇𝒐𝒊𝒔 𝒅𝒐𝒖𝒙, 𝒆𝒕 𝒑𝒂𝒓𝒇𝒐𝒊𝒔 𝒂𝒎𝒆̀𝒓𝒆 𝒆𝒙𝒑𝒆𝒔𝒆 𝒅'𝒊𝒏𝒔𝒊𝒈𝒏𝒊𝒇𝒊𝒂𝒏𝒕🖕 𝒄𝒆 𝒓𝒐𝒖𝒍𝒐 𝒒𝒖𝒆 𝒕𝒖 𝒗𝒆𝒖𝒕 𝒂𝒄𝒄𝒆̀𝒅𝒆 𝒆𝒔𝒕 𝒑𝒐𝒖𝒓 𝒎𝒐𝒏 𝒎𝒂𝒊̂𝒕𝒓𝒆😑", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝚕𝚎 𝚏𝚒𝚌𝚑𝚒𝚎𝚛 ?? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`💫𝔫𝔬𝔱 𝔣𝔬𝔲𝔫𝔡 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
}
