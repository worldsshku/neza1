const moment = require("moment-timezone");
const fs = require("fs");
const { runtime, sleep } = require("../lib/myfunc");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname) => {
	return `${ucapanWaktu} ${pushname} 👋
	
👑 Creator : ${setting.ownerName}
🤖 Bot Name : ${setting.botName}
📆 Tanggal : ${tanggal}
⌚ Jam : ${jam}
⏳ Runtime
${runtime(process.uptime())}
${readmore}
 *RANDOM MENU*
 • ${prefix}runtime
 • ${prefix}speed
 • ${prefix}owner

 *CONVERTER/TOOLS*
 • ${prefix}sticker
 • ${prefix}toimg
 • ${prefix}tovid

 *STORE MENU*
 • ${prefix}addlist *key@response*
 • ${prefix}dellist *key*
 • ${prefix}updatelist *key@response*
 • ${prefix}list
 • ${prefix}proses
 • ${prefix}done
  
 *GROUP MENU*
 • ${prefix}linkgrup
 • ${prefix}setppgrup
 • ${prefix}setnamegc *text*
 • ${prefix}setdesc *text*
 • ${prefix}group *open/close*
 • ${prefix}revoke
 • ${prefix}hidetag *text*
 • ${prefix}tagall *text*
 • ${prefix}add *nomor*
 • ${prefix}kick *nomor*
 • ${prefix}welcome *enable/disable*
 • ${prefix}antilink *enable/disable*
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 • ${prefix}broadcast *text*
 • ${prefix}setppbot
 • ${prefix}setexif *text1 | text2*
 • ${prefix}setowner *nomor*
 • ${prefix}join *link*
 • ${prefix}leave
 • ${prefix}mode
 • ${prefix}block *nomor*
 • ${prefix}unblock *nomor*
 
 *THANKS TO*
 • WORLDSSH
`
}
