"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*⭕𝐆𝐌𝐀𝐗 𝐈𝐒 𝐎𝐍𝐋𝐈𝐍𝐄⭕* 🙏 \n\n ' + "𝐆𝐌𝐀𝐗 𝗖𝗔𝗡𝗧 𝗦𝗟𝗘𝗘𝗣⏰⭕";
    let d = '                                                                           𝗛𝗘𝗔𝗟𝗧𝗛 𝗦𝗧𝗔𝗧𝗨𝗦✨';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/ce58cf8c538b1496fda33.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");