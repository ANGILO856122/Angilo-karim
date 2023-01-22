/**
   * Create By Angilo & karim
*/

const fs = require('fs')
const chalk = require('chalk')
const so = process.env['S']
// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '8178939004',
}

// Other
global.owner = ['212657003067']
global.premium = ['212657003067']
global.packname = 'Hisoka & angilo'
global.author = 'WhatsApp Bot'
global.sessionName = process.env["S"]
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ done',
    admin: 'Opsions di Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Features In Owner',
    group: 'Features Used Only For Groups!',
    private: 'Private Success',
    bot: 'Bot Number User-Specific Features',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

