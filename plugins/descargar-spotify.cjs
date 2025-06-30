const fetch = require('node-fetch');
const { Spotify } = require('canvafy');
const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args.length) return m.reply(`masukkan judul lagu nya ⚡ contoh : ${usedPrefix + command} night changes`);
  const query = args.join('');
  const searchUrl = `https://zenz.biz.id/search/spotify?query=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(searchUrl);
    const json = await res.json();
    if (!json.status || !json.result?.length) {
      return m.reply('gaada lagu lu yg mau lu cari 😌');
    }
    const track = json.result[0];
    const { title, artist, album, url, cover } = track;
    const dlUrl = `https://zenz.biz.id/downloader/spotify?url=${encodeURIComponent(url)}`;
    const dlRes = await fetch(dlUrl);
    const dlJson = await dlRes.json();
    if (!dlJson.status || !dlJson.data?.download) {
      return m.reply('gagal mendapatkan audio dari lagu inii 😅');
    }
    const downloadUrl = dlJson.data.download;
    const durationMs = dlJson.data.duration || 180000;
    const buffer = await new Spotify()
      .setAuthor(artist)
      .setAlbum(album || 'Spotify Music')
      .setTitle(title)
      .setImage(cover)
      .setTimestamp(1000, durationMs)
      .setBlur(1)
      .setOverlayOpacity(0.8)
      .build();
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: `🎶 *Spotify Play* 🎶
🎧 *${title}* oleh *${artist}*
💿 Album: ${album}
🔗 Spotify: ${url}
_Audio akan segera dikirim..._`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: artist,
          thumbnailUrl: cover,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: "audio/mpeg",
      ptt: true,
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: artist,
          thumbnailUrl: cover,
          mediaUrl: url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('eror bang cek api nya coba 😁');
  }
};
handler.help = ['spotify', 'spot'];
handler.tags = ['audio'];
handler.command = /^spotify|spot$/i;
module.exports = handler;