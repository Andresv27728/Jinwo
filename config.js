import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// ╭━━━╮╱╱╱╱╱╭╮╱╱╭━━━╮╱╱╱╭╮
// ┃╭━╮┃╱╱╱╱╱┃┃╱╱┃╭━╮┃╱╱╱┃┃
// ┃┃╱┃┣━━┳━━┫╰━╮┃┃╱┃┣━━┳┫┃╭┳━━┳━╮
// ┃┃╱┃┃┃━┫┃━┫╭╮┃┃┃╱┃┃╭╮┣┫╰╯┫╭╮┃╭╯
// ┃╰━╯┃┃━┫┃━┫┃┃┃┃╰━╯┃╭╮┃┃╭╮┫╭╮┃┃
// ╰━━━┻━━┻━━┻╯╰╯╰━━━┻╯╰┻┻╯╰┻╯╰┻╯
// ╭━╮╭━┳━━┳╮╱╭┳━━━┳━━━┳━╮╭━╮
// ┃┃╰╯┃┣╮╭┫┃╱┃┃╭━╮┃╭━╮┃┃╰╯┃┃
// ┃╭╮╭╮┃┃┃┃╰━╯┃╰━╯┃┃╱┃┃╭╮╭╮┃
// ┃┃┃┃┃┃┃┃┃╭━╮┃╭━━┫╰━╯┃┃┃┃┃┃
// ┃┃┃┃┃┣╯╰┫┃╱┃┃┃╱╱┃╭━╮┃┃┃┃┃┃
// ╰╯╰╯╰┻━━┻╯╱╰┻╯╱╱╰╯╱╰┻╯╰╯╰╯

global.botNumberCode = '' 
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

// ⚙️ PROPIETARIO Y STAFF
global.owner = [
['573133374132, '💻programador💻', true],
['50764735869, 'HAROLD', true],
['573107648804', 'BOT PRINCIPAL', true],
//['numero', 'nombre', true],
];

//si no saben no toquen gracias 🫂 
global.mods = ['50433191934'];
global.suittag = ['50433191934'];
global.prems = [];

// 📚 INFORMACIÓN GENERAL
global.libreria = 'Baileys';
global.baileys = '@whiskeysockets/baileys';
global.languaje = 'Español';
global.vs = '2.2.0';
global.vsJB = '5.0';
global.nameqr = 'Pikachu-Bot';
global.namebot = 'Pikachu-Bit';
global.sessions = 'Sessions';
global.jadi = 'JadiBots';
global.kiritoJadibts = true;

// ✨ DATOS DE ESTILO Y METADATOS
global.packname = '🧃 Pikachu-Bot MD';
global.botname = '⚡ Pikachu-Bot ⚡';
global.wm = 'Pikachu-MD';
global.author = 'Creado por ⚡ Deylin';
global.dev = '© Desarrollado por Deylin';
global.textbot = 'Pikachu-Bot • Potenciado por Deylin';
global.etiqueta = 'Team Pikachu ⚡';

// 💰 MONEDA Y AVATARES
global.moneda = 'coins';
global.banner = 'https://tinyurl.com/25md9gsv'
global.avatar  = 'https://qu.ax/MuAQA.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.photoSity = [catalogo]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/DPDcHF49QoJ7KzwHvFBjiW'
global.comunidad1 = 'https://chat.whatsapp.com/DPDcHF49QoJ7KzwHvFBjiW'
global.channel = 'https://whatsapp.com/channel/0029Vb5atcVL7UVQwAB9tU2k'
global.channel2 = 'https://whatsapp.com/channel/0029Vb5atcVL7UVQwAB9tU2k'
global.md = 'https://github.com/Deylin-Eliac/Kirito-Bot-MD'
global.correo = 'deylibaquedano801@gmail.com'
global.cn ='https://whatsapp.com/channel/0029Vb5atcVL7UVQwAB9tU2k';

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: 120363419172960653@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.MyApiRestBaseUrl = 'https://api.cafirexos.com';
global.MyApiRestApikey = 'BrunoSobrino';
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['kurumi']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})