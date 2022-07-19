let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-18-at-21.37.59.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(P|p|Pp|pp|Ppp|ppp|Pppp|pppp)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler