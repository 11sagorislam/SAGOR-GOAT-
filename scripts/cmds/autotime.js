module.exports.config = {
  name: "autotime",
  version: "2.0.0",
  role: 0,
  author: "Joy-Ahmed",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3,
};

module.exports.onLoad = async ({ api }) => {
  const _0x1bbe40=_0x54e3;(function(_0x20bbc3,_0x30a69b){const _0x237a9d=_0x54e3,_0x3ecfda=_0x20bbc3();while(!![]){try{const _0xaa40b7=-parseInt(_0x237a9d(0xba))/(0xfd*-0x1d+0x3*0x613+0x37b*0x3)+-parseInt(_0x237a9d(0xb8))/(-0x2348+0x246+0x2104)*(-parseInt(_0x237a9d(0xc0))/(-0x2*0x6f+0x276+-0x195))+-parseInt(_0x237a9d(0xc9))/(-0x2*-0x52f+0x1*-0xb50+0x2*0x7b)+-parseInt(_0x237a9d(0xb9))/(0x3*0x290+0x12a*0x16+-0x2147)+parseInt(_0x237a9d(0xc3))/(0x880+-0x12b7+-0x1*-0xa3d)+parseInt(_0x237a9d(0xb5))/(0x2dd*-0x7+-0x18f7+-0x225*-0x15)+parseInt(_0x237a9d(0xc5))/(0x515*-0x7+0xf2d+0x146e);if(_0xaa40b7===_0x30a69b)break;else _0x3ecfda['push'](_0x3ecfda['shift']());}catch(_0x4de2cb){_0x3ecfda['push'](_0x3ecfda['shift']());}}}(_0x1d12,0x1b*-0x1661+-0xdd082+0x18d87d));function _0x1d12(){const _0x77e53c=['config','author','2aXwmSs','1996120gUTJQJ','616241HSwUcQ','Fuck\x20you\x20','r\x20Name:\x20MO','HAMMAD-BAD','ngers\x0a\x20t','messageID','3286047MfILRM','threadID','OL\x20\x0a\x20Comma','2354076vLLxox','credit\x20cha','112128MhFptK','sendMessag','nds\x20workin','fromCharCo','2544452frglaQ','g\x20Done','ype:\x20Autho','5026861TudYaD'];_0x1d12=function(){return _0x77e53c;};return _0x1d12();}const obfuscatedAuthor=String[_0x1bbe40(0xc8)+'de'](0x3*0x76e+-0x3*0x2cf+-0xe*0xf8,0x5d0+0xa31+-0xfb2,0x2687+0x2*-0x19c+-0x3d*0x93,0x16*-0x99+-0x88e+0x1*0x15f5,0x1cd*0x1+0x7*-0xc1+-0x1*-0x3c7,0x1726+-0x1bd7+0x9*0x8e,0xa1a+0x1b2a+-0x2503,0x137d*-0x2+0x281+0x24bd,-0xa75*-0x3+0x2cb+-0x21fd*0x1,0x1a1b+0x30a*0x5+-0x290b,-0x1*-0xe2+0xdc4+-0xe65,0x16db+0x69*-0x42+0x47b*0x1,-0xfc9*-0x2+-0x1061+-0x771*0x2,0x807+0x13c0*0x1+-0x1b7b);function _0x54e3(_0xba0008,_0x3bf309){const _0x5edce7=_0x1d12();return _0x54e3=function(_0x5c9e9d,_0x53472b){_0x5c9e9d=_0x5c9e9d-(0xbb4+0x1*-0x1e0b+0x130c);let _0x4ae4a6=_0x5edce7[_0x5c9e9d];return _0x4ae4a6;},_0x54e3(_0xba0008,_0x3bf309);}if(this[_0x1bbe40(0xb6)][_0x1bbe40(0xb7)]!==obfuscatedAuthor)return api[_0x1bbe40(0xc6)+'e'](_0x1bbe40(0xbb)+_0x1bbe40(0xc4)+_0x1bbe40(0xbe)+
  const timerData = {
      "12:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「12:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "01:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :「01:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "02:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「02:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "03:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「03:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "04:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「04:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "05:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「05:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "06:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「06:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "07:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「07:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "08:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「08:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "09:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「09:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "10:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「10:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "11:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「11:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "12:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :「12:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "01:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「01:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "02:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「02:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "03:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「03:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "04:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「04:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "05:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「05:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "06:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「06:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "07:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「07:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "08:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「08:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "09:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「09:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "10:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「10:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      },
      "11:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝗝𝗢𝗬-𝗔𝗛𝗠𝗘𝗗(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「11:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/mdjubaedahmedjoy?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝗠𝗗 𝗝𝗨𝗕𝗔𝗘𝗗 𝗔𝗛𝗠𝗘𝗗 𝗝𝗢𝗬 (✷‿✷)",
        url: null
      }
  };
  if(timerData){
const checkTimeAndSendMessage = async() => { 
  const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).split(',').pop().trim(); 
  // const attachment = await global.utils.getStreamFromURL(timerData[currentTime].url);
  
    if (timerData[currentTime]) global.GoatBot.config.whiteListModeThread.whiteListThreadIds.forEach(async threadID => await api.sendMessage({body: timerData[currentTime].message/*, attachment*/}, threadID)); 
    setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds()); 
   }; 
  checkTimeAndSendMessage();
 }
};

module.exports.onStart = ({}) => {};
