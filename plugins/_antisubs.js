import { areJidsSameUser } from '@whiskeysockets/baileys'
export async function before(m, { participants, conn }) {
    if (m.isGroup) {
        let chat = global.db.data.chats[m.chat];

         if (!chat.antiBot2) {
            return
        }


        let botJid = global.conn.user.jid // JID del bot principal

       if (botJid === conn.user.jid) {
           return
        } else {
           let isBotPresent = participants.some(p => areJidsSameUser(botJid, p.id))

          if (isBotPresent) {
                setTimeout(async () => {
                    await conn.reply(m.chat, `🤖──〔 🌕 *🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖* 
 ⚠️ Ya estoy en este grupo como *bot principal*.

Para evitar spam y confusión, me voy tranquilamente 🌩️
¡Hasta la próxima!
─────────────────────────`, m, rcanal);
                    await this.groupLeave(m.chat)
                }, 5000)// 5 segundos
            }
        }
    }
}