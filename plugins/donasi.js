let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa/pulse(Tri):*_ 6289508902582

_*Gopay:*_ 6289508902582
_*Saweria:*_ https://saweria.co/OneTXz
_*Trakteer:*_ https://trakteer.id/OneTXz
Setelah melakukan donasi kirim bukti pembayaran ke owner
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/OneTXz/', 'GITHUB', null, null, [
['MENU', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler