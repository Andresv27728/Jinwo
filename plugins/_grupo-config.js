//© código creado por Deylin 
//https://github.com/deylin-eliac 
//➤  no quites créditos

let handler = async (m, { conn, args, participants, groupMetadata, usedPrefix, command, isBotAdmin, isAdmin }) => {
  const icono = 'https://files.catbox.moe/hnif5j.jpg'; 
  const emoji = '⚡';
  const emoji2 = '🔒';
  const group = m.chat;
  const totalMembers = participants.length;

  
  if (command === 'link' || command === 'enlace') {
    //if (!isAdmin) return conn.reply(m.chat, `${emoji2} *Solo los admins pueden usar este comando, entrenador.*`, m);
    if (!isBotAdmin) return conn.reply(m.chat, `${emojis} *Necesito ser admin para sacar el enlace del grupo.*`, m, rcanal);
    
    const link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group);
    await conn.reply(m.chat, 
`*『 𝑳𝑰𝑵𝑲 🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖 』*

📛 *Grupo:* ${groupMetadata.subject}
👥 *Miembros:* ${totalMembers}

🔗 *Enlace mágico:* 
${link}

Únete a mi grupo `, 
    m, { detectLink: true });
    return;
  }

  
  if (command === 'del' || command === 'delete') {
    if (!isAdmin) return conn.reply(m.chat, `${emojis} *Solo los admins pueden usar este comando, entrenador.*`, m, rcanal);
    if (!isBotAdmin) return conn.reply(m.chat, ` ${emojis} *Necesito ser admin para sacar el enlace del grupo.*`, m, rcanal);

    if (!m.quoted) return conn.reply(m.chat, `${emoji} Por favor, cita el mensaje que deseas eliminar.`, m);
    try {
      let delet = m.message.extendedTextMessage.contextInfo.participant;
      let bang = m.message.extendedTextMessage.contextInfo.stanzaId;
      return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }});
    } catch {
      return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
    }
  }

  
  if (command === 'group' || command === 'grupo') {
    if (!isAdmin) return conn.reply(m.chat, `${emojis} *Solo los admins pueden configurar el grupo.*`, m, rcanal);
    if (!isBotAdmin) return conn.reply(m.chat, `${emojis} *Necesito ser admin para cambiar la configuración del grupo.*`, m, rcanal);

    const isClose = {
      'open': 'not_announcement',
      'close': 'announcement',
      'abierto': 'not_announcement',
      'cerrado': 'announcement',
      'on': 'not_announcement',
      'off': 'announcement'
    }[(args[0] || '').toLowerCase()];

    if (!isClose) {
      return conn.reply(m.chat, 
`${emoji} *Opciones válidas para configurar el grupo:*

✦ *${usedPrefix + command} open* - 🗣️ Todos pueden hablar  
✦ *${usedPrefix + command} close* - 🔇 Solo admins

🤖 *P🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖 necesita una orden clara.* 🌕`, m);
    }

    await conn.groupSettingUpdate(m.chat, isClose);

    if (isClose === 'not_announcement') {
      m.reply(`${emoji} *¡🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖 *ABRIÓ* el grupo!* Todos pueden escribir 📝`);
    }

    if (isClose === 'announcement') {
      m.reply(`${emoji2} *¡🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖 cerró el grupo!* Solo los admins pueden escribir 🔒`);
    }
  }
};

handler.help = ['link', 'group open / close', 'del', 'delete'];
handler.tags = ['grupo'];
handler.command = ['link', 'enlace', 'group', 'grupo', 'del', 'delete'];
handler.group = true;

export default handler;