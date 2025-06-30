let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `${emojis} 🤖🌕YᗩᘜIᖇᗩ-ᗷOT-ᗰᗪ🌕🤖 se despide de esta manada de ineptos.`) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = ['salir','leavegc','salirdelgrupo','leave']
handler.group = true
handler.rowner = true

export default handler