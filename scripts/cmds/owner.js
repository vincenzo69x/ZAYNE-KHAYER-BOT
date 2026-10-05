module.exports = {
  config: {
    name: "owner",
    version: "1.0",
    author: "ZAYNE KHAYER",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Show bot owner information"
    },
    description: {
      en: "Display the owner profile information with video"
    },
    category: "info",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const msg = `👤  𝗡𝗔𝗠𝗘             ➤ ZAYNE ᏦHAYER 
🌐  𝗙𝗥𝗢𝗠             ➤ Bᴀʀɪsʜᴀʟ 
🎂  𝗔𝗚𝗘                 ➤ 18+
🎓  𝗪𝗢𝗥𝗞             ➤ Sᴛᴜᴅᴇɴᴛ 📘
☪️  𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡      ➤ Mᴜsʟɪᴍ 🕋
💼  𝗙𝗨𝗧𝗨𝗥𝗘          ➤ Bᴜsɪɴᴇssᴍᴀɴ 💎
💛  𝗦𝗧𝗔𝗧𝗨𝗦          ➤ 🌸



❝ 𝐀𝐋𝐇𝐀𝐌𝐃𝐔𝐋𝐈𝐋𝐋𝐀𝐇 𝐅𝐎𝐑 𝐄𝐕𝐄𝐑𝐘𝐓𝐇𝐈𝐍𝐆 ❞ 🤍`;

    const videoUrl = "https://drive.google.com/uc?export=download&id=1_RNeQYeiscOxw9iUChhR3dW1fyorIt22";

    try {
      const attachment = await global.utils.getStreamFromURL(videoUrl);
      return message.reply({
        body: msg,
        attachment: attachment
      });
    } catch (err) {
      // যদি ভিডিও লোড না হয়, শুধু টেক্সট পাঠাবে
      return message.reply(msg);
    }
  }
};
