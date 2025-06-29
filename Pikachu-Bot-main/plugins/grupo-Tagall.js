const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix.toLowerCase() === 'a') return;

  const customEmoji = global.db?.data?.chats?.[m.chat]?.customEmoji || '⚡';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    return;
  }

  const countryFlags = {
    "1": "🇺🇸", "34": "🇪🇸", "44": "🇬🇧", "49": "🇩🇪", "52": "🇲🇽", "54": "🇦🇷", "55": "🇧🇷", "56": "🇨🇱", "57": "🇨🇴", "58": "🇻🇪", "60": "🇲🇾",
    "91": "🇮🇳", "92": "🇵🇰", "93": "🇦🇫", "94": "🇱🇰", "95": "🇲🇲", "98": "🇮🇷", "213": "🇩🇿", "351": "🇵🇹", "593": "🇪🇨", "595": "🇵🇾",
    "591": "🇧🇴", "51": "🇵🇪", "507": "🇵🇦", "507": "🇵🇦", "598": "🇺🇾", "505": "🇳🇮", "502": "🇬🇹", "503": "🇸🇻", "504": "🇭🇳",
    "506": "🇨🇷", "506": "🇨🇷", "507": "🇵🇦", "998": "🇺🇿", "380": "🇺🇦", "7": "🇷🇺", "81": "🇯🇵", "82": "🇰🇷", "86": "🇨🇳"
  };

  function getPrefix(number) {
    for (let i = 4; i >= 1; i--) {
      const sub = number.slice(0, i);
      if (countryFlags[sub]) return sub;
    }
    return "🔍";
  }

  const mensaje = args.join` `;
  const info = mensaje ? `╰🧭 *Mensaje:* ${mensaje}` : "╰⚠️ *Invocación general de Pika-bot: los administradores te necesitan.*";

  let texto = `
╭─〔⚡ 𝐏𝐈𝐊𝐀𝐋𝐋 ⚡〕──⬣
│ 🧑‍🤝‍🧑 *Miembros:* ${participants.length}
│ 🏷️ *Grupo:* ${await conn.getName(m.chat)}
${info}
╰────⬣\n`;

  for (const miembro of participants) {
    const number = miembro.id.split('@')[0];
    const prefix = getPrefix(number);
    const flag = countryFlags[prefix] || "🌐";
    texto += `⚡ ${flag} @${number}\n`;
  }

  texto += `\n🔋 𝐄𝐧𝐞𝐫𝐠í𝐚 𝐋𝐢𝐛𝐞𝐫𝐚𝐝𝐚 ⚡\n✨ *by Pikachu™* 🧃`;

  await conn.sendMessage(m.chat, {
    text: texto.trim(),
    mentions: participants.map(p => p.id)
  }, { quoted: m });
};

handler.help = ['todos <mensaje>'];
handler.tags = ['grupo'];
handler.command = ['tagall', 'todos'];
handler.group = true;

export default handler;