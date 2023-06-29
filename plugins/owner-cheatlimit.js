let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat !*`, m)
        global.db.data.users[m.sender].money = 1000000000000000
        global.db.data.users[m.sender].limit = 1000000000000000
        global.db.data.users[m.sender].level = 10000000000000
        global.db.data.users[m.sender].exp = 100000000000
}
handler.command = /^(curang)$/i

handler.mods = true

export default handler
