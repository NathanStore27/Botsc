let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *Group Official* ]─────✧
🍀 Group WhatsApp : https://chat.whatsapp.com/I3vA3TS6Au81uO35sgNg3i
🍀 Group WhatsApp RizkyEditz : https://chat.whatsapp.com/I5mqRWgL6J1CI8IJ5RKIOv
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['⋮☰ LIST MENU','.list']],m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
