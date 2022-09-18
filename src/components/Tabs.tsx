import { FunctionComponent, useState } from 'react';

const Tabs: FunctionComponent<{ color: string }> = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const klearVideoInfo = {
    kind: 'youtube#video',
    etag: 'WVZPsfKd-DNdkb1wQa8SQ3YCZxI',
    id: 'cg93Z3si7iA',
    snippet: {
      publishedAt: '2022-09-14T11:00:14Z',
      channelId: 'UCs2t9DlvAuyTBkvk2djGZKw',
      title: 'ถามเพื่ออะไร (What for?) - KLEAR 「Official MV」',
      description:
        'MV ถามเพื่ออะไร (What for?)\nKLEAR\nNew Single 2022\ngenie records\n\nถ้าคนที่เขาบอกเลิกเรา มาถามเราว่า "เราอยู่ได้ไหม ถ้าไม่มีเขา" แล้วมันทำให้เราเกิดคำถามกลับขึ้นมาในใจว่า คำถามเหล่านี้ "ถามไปเพื่ออะไร" ถ้าตอบว่าอยู่ไม่ได้ แล้วเธอจะไม่ไปใช่หรือเปล่า หรือถามไปแบบนั้น เพื่อให้รู้สึกผิดน้อยลง เพราะถึงยังไง ก็ทิ้งกันไปอยู่ดี\n\nติดตาม KLEAR ได้ที่...\nhttp://www.fb.com/Klearband | Instagram @Klearband\n\nเนื้อร้อง : รัณนภันต์ ยั่งยืนพูนชัย\nทำนอง : รัณนภันต์ ยั่งยืนพูนชัย, วิทวัส เหมือนชอบ, ณัฐวัฒน์ แสงวิจิตร\nเรียบเรียง : Klear, วิทวัส เหมือนชอบ\n\n#ถามเพื่ออะไร (What for?)\nV1\nไม่เคยอยากได้ยินคำถาม\nที่เธอกำลังจะถามกันด้วยความห่วงใย\nเธอพูดคำลา ขอเลิกกันไป\nแต่ใจเธอยังกังวล ว่าฉันจะทนได้หรือเปล่า\n\nV2\nถ้าต้องอยู่คนเดียวอีกครั้ง\nทั้งๆที่ลืมไปแล้วว่าต้องทำอย่างไร\nกินข้าวคนเดียว ไปไหนคนเดียว \nร้องไห้ก็ตัวคนเดียว ฉันทนได้ไหมเธออยากรู้\n\nChorus\nเธอถามว่าอยู่ได้ไหมถ้าไม่มีเธอจากนี้ไป\nถ้าฉันพูดว่าไม่ไหวเธอจะไม่ไปใช่หรือเปล่า\nถ้าฉันขอเธอให้อยู่ ถ้าฉันขอเธอให้รักกันเหมือนเก่า\nอยากรู้ว่าเธอจะทำให้กันไหม\nได้โปรดอย่าเอ่ยคำถามที่ไม่ได้มาจากหัวใจ\nแค่รู้สึกผิดใช่ไหมถ้าทิ้งฉันไว้โดยไม่ลา\nฉันรู้เธอมีคนใหม่ ฉันรู้ว่าเธอเลือกเขาแล้วมากกว่า\nขอร้องไม่ต้องมาทำเป็นห่วงกัน ถ้าจะทิ้งฉันไปอยู่ดี\n\nV3\nเธอต้องการจะทิ้งกันแต่ว่าเธอทำเป็นแคร์\nตอบแบบไหนเธอก็ไป ตอบยังไงฉันก็แพ้\nมันเจ็บมากกว่าเดิม มันเจ็บที่ไม่แฟร์\nเหมือนเอาเกลือ นั้นมาโรย ซ้ำลงที่แผล\nมันคือคำถาม ที่ไม่อยากได้ยิน \nจะถามเพื่ออะไร\n\nเธอคงทิ้งกันไปอยู่ดี\n\nOutro\nฉันรู้เธอมีคนใหม่ ฉันรู้ว่าเธอเลือกเขาแล้วมากกว่า\nขอร้องไม่ต้องมาทำเป็นห่วงกัน ถ้าจะทิ้งฉันไปอยู่ดี\n\nที่รักไม่ต้องมาทำดีตอนนี้ ตอนที่จะไปจากฉัน\n\nProduced by Klear\nVocal by รัณนภันต์ ยั่งยืนพูนชัย (PAT Klear)\nGuitar by ณัฐวัฒน์ แสงวิจิตร (Knat Klear)\nBass by คียาภัทร โพธิ์วงศ์ไพรเลิศ (Kee Klear)\nDrum by นัฐ นิลวิเชียร (Nut Klear)\nPiano by วิทวัส เหมือนชอบ\nSynth by Klear, Shane Edwards\nBacking Vocal by ออย อมรภัทร เสริมทรัพย์\nBacking Vocal Arrangement by ภูวิช ทวาสินชนเดช\nRecorded at Kandee Ztudio\nEngineered & Recorded by จารุพันธ์ ศรีม่วงกลาง\nAssistant Engineer : ปุณยวีร์ ไกรลาศ\nDigital Edited by อิทธิพร นวอิทธิพร\nMixed and Mastered by Shane Edwards at Studio28\n\nนำแสดงโดย\nเก้า สุภัสสรา (@supassra_sp)\nลี ฐานัฐพ์ (@lee_thanat)\n\n#klear #genierecords \n#เก้าสุภัสสรา #lee_thanat',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/cg93Z3si7iA/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/cg93Z3si7iA/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/cg93Z3si7iA/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/cg93Z3si7iA/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Genierock',
      tags: [
        'Official MV',
        'ถามเพื่ออะไร',
        'Klear',
        'เก้า สุภัสสรา',
        'ลี ฐานัฐพ์',
        'What for?',
        'genie records',
        'Genierock',
        'เธอถามว่าอยู่ได้ไหมถ้าไม่มีเธอจากนี้ไป',
        'ถ้าฉันพูดว่าไม่ไหวเธอจะไม่ไปใช่หรือเปล่า',
        'ถ้าฉันขอเธอให้อยู่',
        'ถ้าฉันขอเธอให้รักกันเหมือนเก่า',
        'อยากรู้ว่าเธอจะทำให้กันไหม',
        'ได้โปรดอย่าเอ่ยคำถามที่ไม่ได้มาจากหัวใจ',
        'แค่รู้สึกผิดใช่ไหมถ้าทิ้งฉันไว้โดยไม่ลา',
        'ฉันรู้เธอมีคนใหม่',
        'ฉันรู้ว่าเธอเลือกเขาแล้วมากกว่า',
        'ขอร้องไม่ต้องมาทำเป็นห่วงกัน',
        'ถ้าจะทิ้งฉันไปอยู่ดี',
        'เพลงใหม่',
        '2022',
        'ขอบคุณที่เลิกกัน',
        'รักให้ตาย',
        'สิ่งของ',
      ],
      categoryId: '10',
      liveBroadcastContent: 'none',
      localized: {
        title: 'ถามเพื่ออะไร (What for?) - KLEAR 「Official MV」',
        description:
          'MV ถามเพื่ออะไร (What for?)\nKLEAR\nNew Single 2022\ngenie records\n\nถ้าคนที่เขาบอกเลิกเรา มาถามเราว่า "เราอยู่ได้ไหม ถ้าไม่มีเขา" แล้วมันทำให้เราเกิดคำถามกลับขึ้นมาในใจว่า คำถามเหล่านี้ "ถามไปเพื่ออะไร" ถ้าตอบว่าอยู่ไม่ได้ แล้วเธอจะไม่ไปใช่หรือเปล่า หรือถามไปแบบนั้น เพื่อให้รู้สึกผิดน้อยลง เพราะถึงยังไง ก็ทิ้งกันไปอยู่ดี\n\nติดตาม KLEAR ได้ที่...\nhttp://www.fb.com/Klearband | Instagram @Klearband\n\nเนื้อร้อง : รัณนภันต์ ยั่งยืนพูนชัย\nทำนอง : รัณนภันต์ ยั่งยืนพูนชัย, วิทวัส เหมือนชอบ, ณัฐวัฒน์ แสงวิจิตร\nเรียบเรียง : Klear, วิทวัส เหมือนชอบ\n\n#ถามเพื่ออะไร (What for?)\nV1\nไม่เคยอยากได้ยินคำถาม\nที่เธอกำลังจะถามกันด้วยความห่วงใย\nเธอพูดคำลา ขอเลิกกันไป\nแต่ใจเธอยังกังวล ว่าฉันจะทนได้หรือเปล่า\n\nV2\nถ้าต้องอยู่คนเดียวอีกครั้ง\nทั้งๆที่ลืมไปแล้วว่าต้องทำอย่างไร\nกินข้าวคนเดียว ไปไหนคนเดียว \nร้องไห้ก็ตัวคนเดียว ฉันทนได้ไหมเธออยากรู้\n\nChorus\nเธอถามว่าอยู่ได้ไหมถ้าไม่มีเธอจากนี้ไป\nถ้าฉันพูดว่าไม่ไหวเธอจะไม่ไปใช่หรือเปล่า\nถ้าฉันขอเธอให้อยู่ ถ้าฉันขอเธอให้รักกันเหมือนเก่า\nอยากรู้ว่าเธอจะทำให้กันไหม\nได้โปรดอย่าเอ่ยคำถามที่ไม่ได้มาจากหัวใจ\nแค่รู้สึกผิดใช่ไหมถ้าทิ้งฉันไว้โดยไม่ลา\nฉันรู้เธอมีคนใหม่ ฉันรู้ว่าเธอเลือกเขาแล้วมากกว่า\nขอร้องไม่ต้องมาทำเป็นห่วงกัน ถ้าจะทิ้งฉันไปอยู่ดี\n\nV3\nเธอต้องการจะทิ้งกันแต่ว่าเธอทำเป็นแคร์\nตอบแบบไหนเธอก็ไป ตอบยังไงฉันก็แพ้\nมันเจ็บมากกว่าเดิม มันเจ็บที่ไม่แฟร์\nเหมือนเอาเกลือ นั้นมาโรย ซ้ำลงที่แผล\nมันคือคำถาม ที่ไม่อยากได้ยิน \nจะถามเพื่ออะไร\n\nเธอคงทิ้งกันไปอยู่ดี\n\nOutro\nฉันรู้เธอมีคนใหม่ ฉันรู้ว่าเธอเลือกเขาแล้วมากกว่า\nขอร้องไม่ต้องมาทำเป็นห่วงกัน ถ้าจะทิ้งฉันไปอยู่ดี\n\nที่รักไม่ต้องมาทำดีตอนนี้ ตอนที่จะไปจากฉัน\n\nProduced by Klear\nVocal by รัณนภันต์ ยั่งยืนพูนชัย (PAT Klear)\nGuitar by ณัฐวัฒน์ แสงวิจิตร (Knat Klear)\nBass by คียาภัทร โพธิ์วงศ์ไพรเลิศ (Kee Klear)\nDrum by นัฐ นิลวิเชียร (Nut Klear)\nPiano by วิทวัส เหมือนชอบ\nSynth by Klear, Shane Edwards\nBacking Vocal by ออย อมรภัทร เสริมทรัพย์\nBacking Vocal Arrangement by ภูวิช ทวาสินชนเดช\nRecorded at Kandee Ztudio\nEngineered & Recorded by จารุพันธ์ ศรีม่วงกลาง\nAssistant Engineer : ปุณยวีร์ ไกรลาศ\nDigital Edited by อิทธิพร นวอิทธิพร\nMixed and Mastered by Shane Edwards at Studio28\n\nนำแสดงโดย\nเก้า สุภัสสรา (@supassra_sp)\nลี ฐานัฐพ์ (@lee_thanat)\n\n#klear #genierecords \n#เก้าสุภัสสรา #lee_thanat',
      },
      defaultAudioLanguage: 'th',
    },
    contentDetails: {
      duration: 'PT5M2S',
      dimension: '2d',
      definition: 'hd',
      caption: 'true',
      licensedContent: true,
      contentRating: {},
      projection: 'rectangular',
    },
    statistics: {
      viewCount: '1825503',
      likeCount: '44139',
      favoriteCount: '0',
      commentCount: '1918',
    },
  };

  const klearThumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  } = klearVideoInfo.snippet.thumbnails;

  const fourEveVideoInfo = {
    kind: 'youtube#video',
    etag: '2wh_5QQGTdaf1NfLhCi03jxBYkg',
    id: 'qNeKiYOuUjw',
    snippet: {
      publishedAt: '2022-09-18T04:00:15Z',
      channelId: 'UC9mrIKAyV8AushabYK8i2ew',
      title: '4EVE - JACKPOT | Dance Performance',
      description:
        '4th Song for New Album \n4EVE - JACKPOT | Official MV\nฟังได้แล้ววันนี้ https://youtu.be/6mlKoykV3SU\n\n#Jackpot_Performance \n#4EVE_JACKPOT\n#4EVE \n#4EVExPUBGMOBILE \n#Jackpot \n#XOXOENTERTAINMENT \n#tpop \n#4EVE #XOXOEntertainment #TPOP\n.\nFollow Artist\nJorin: https://www.instagram.com/jorinja/ \nMind: https://www.instagram.com/_.tiya_/\nHannah: https://www.instagram.com/hannah_kmz/\nFai: https://www.instagram.com/callmebanananana/\nPunch: https://www.instagram.com/ppunnch/\nTaaom: https://www.instagram.com/taaoem/\nAheye: https://www.instagram.com/aheyekrn_/\n.\nFollow 4EVE\nYouTube: https://www.youtube.com/4eveGroup\nFacebook: https://www.facebook.com/4EVEofficial\nInstagram: https://www.instagram.com/4eve_official\nTwitter: https://twitter.com/4eveOfficial\nTikTok: www.tiktok.com/@4eve_official\n.\nติดต่องานโชว์, Marketing, Sponsorship and other \nLINE ID: @xoxowork\nเบอร์โทร: 083-892-8922 (คุณปุ้ย)\nอีเมล์: xoxo.entertainment23@gmail.com',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/qNeKiYOuUjw/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/qNeKiYOuUjw/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/qNeKiYOuUjw/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: '4EVE',
      tags: ['4eve'],
      categoryId: '24',
      liveBroadcastContent: 'none',
      localized: {
        title: '4EVE - JACKPOT | Dance Performance',
        description:
          '4th Song for New Album \n4EVE - JACKPOT | Official MV\nฟังได้แล้ววันนี้ https://youtu.be/6mlKoykV3SU\n\n#Jackpot_Performance \n#4EVE_JACKPOT\n#4EVE \n#4EVExPUBGMOBILE \n#Jackpot \n#XOXOENTERTAINMENT \n#tpop \n#4EVE #XOXOEntertainment #TPOP\n.\nFollow Artist\nJorin: https://www.instagram.com/jorinja/ \nMind: https://www.instagram.com/_.tiya_/\nHannah: https://www.instagram.com/hannah_kmz/\nFai: https://www.instagram.com/callmebanananana/\nPunch: https://www.instagram.com/ppunnch/\nTaaom: https://www.instagram.com/taaoem/\nAheye: https://www.instagram.com/aheyekrn_/\n.\nFollow 4EVE\nYouTube: https://www.youtube.com/4eveGroup\nFacebook: https://www.facebook.com/4EVEofficial\nInstagram: https://www.instagram.com/4eve_official\nTwitter: https://twitter.com/4eveOfficial\nTikTok: www.tiktok.com/@4eve_official\n.\nติดต่องานโชว์, Marketing, Sponsorship and other \nLINE ID: @xoxowork\nเบอร์โทร: 083-892-8922 (คุณปุ้ย)\nอีเมล์: xoxo.entertainment23@gmail.com',
      },
      defaultAudioLanguage: 'th',
    },
    contentDetails: {
      duration: 'PT3M30S',
      dimension: '2d',
      definition: 'hd',
      caption: 'false',
      licensedContent: true,
      contentRating: {},
      projection: 'rectangular',
    },
    statistics: {
      viewCount: '113185',
      likeCount: '12087',
      favoriteCount: '0',
      commentCount: '398',
    },
  };

  const fourEveThumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  } = fourEveVideoInfo.snippet.thumbnails;

  const hybsVideoInfo = {
    kind: 'youtube#video',
    etag: 'X0J-WL9vlr4ZMiHRuQw48QNG2g0',
    id: 'WW6VE7ROcyA',
    snippet: {
      publishedAt: '2022-09-03T11:00:17Z',
      channelId: 'UCAOhYX5_YjGg-77vlBzvsRQ',
      title: 'HYBS - Would You Mind (Official MV)',
      description:
        'Go follow HYBS on\n\nFacebook : https://www.facebook.com/hybsband\nInstagram : https://www.instagram.com/hybsband/\nTwitter : https://twitter.com/hybsband\n----------------------------\n\nProduced by HYBS\n\nMusic by HYBS\nLyrics by HYBS\n\nArranged by HYBS, Danai Thongsinthusak, Vithawat Pakjamsai\nRecorded at Studio28\nMixed & Mastered by Henry Watkins \nHYBS is Alyn Wee, Karn Kasidej\n----------------------------\n\nLyrics\n\nSay hello\nDon’t know why but I always get too shy\nEvery time \nYou are around\n\nTonight\nI could pack all my love\nsend it like the wind blows\n\nYou know\nIf I could fly\nI’de fly to your window\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n\nTonight\nI could pack all my love\nsend it like the wind blows\n\nYou know\nIf I could fly\nI’de fly to your window\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n----------------------------\n\nAvailable now on all streaming!\nhttps://bfan.link/making-steak\n----------------------------\n\nFor work \nInternational Bookings\njuiceyisyours@gmail.com \n\nThai Bookings\n093-192-9669 (K.Por)\n095-649-5544 (K.Dodge) \n\n#WouldYouMind #HYBS #Juicey',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/WW6VE7ROcyA/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/WW6VE7ROcyA/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/WW6VE7ROcyA/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/WW6VE7ROcyA/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/WW6VE7ROcyA/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'HYBS',
      tags: [
        'ไอบส์',
        'ไฮส์บ',
        'ฮาย',
        'hybs',
        'HYES',
        'WouldYouMind',
        'You Mind',
        'จุ้ยซี่',
        'Juicy',
      ],
      categoryId: '10',
      liveBroadcastContent: 'none',
      localized: {
        title: 'HYBS - Would You Mind (Official MV)',
        description:
          'Go follow HYBS on\n\nFacebook : https://www.facebook.com/hybsband\nInstagram : https://www.instagram.com/hybsband/\nTwitter : https://twitter.com/hybsband\n----------------------------\n\nProduced by HYBS\n\nMusic by HYBS\nLyrics by HYBS\n\nArranged by HYBS, Danai Thongsinthusak, Vithawat Pakjamsai\nRecorded at Studio28\nMixed & Mastered by Henry Watkins \nHYBS is Alyn Wee, Karn Kasidej\n----------------------------\n\nLyrics\n\nSay hello\nDon’t know why but I always get too shy\nEvery time \nYou are around\n\nTonight\nI could pack all my love\nsend it like the wind blows\n\nYou know\nIf I could fly\nI’de fly to your window\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n\nTonight\nI could pack all my love\nsend it like the wind blows\n\nYou know\nIf I could fly\nI’de fly to your window\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\nWould you mind it \nIf I’m gonna call you my home\nWouldn’t mind it\nIf I get to call you my home\n----------------------------\n\nAvailable now on all streaming!\nhttps://bfan.link/making-steak\n----------------------------\n\nFor work \nInternational Bookings\njuiceyisyours@gmail.com \n\nThai Bookings\n093-192-9669 (K.Por)\n095-649-5544 (K.Dodge) \n\n#WouldYouMind #HYBS #Juicey',
      },
      defaultAudioLanguage: 'en',
    },
    contentDetails: {
      duration: 'PT3M34S',
      dimension: '2d',
      definition: 'hd',
      caption: 'false',
      licensedContent: true,
      contentRating: {},
      projection: 'rectangular',
    },
    statistics: {
      viewCount: '326323',
      likeCount: '17512',
      favoriteCount: '0',
      commentCount: '568',
    },
  };

  const hybsThumbnails: {
    [key: string]: {
      url: string;
      width: number;
      height: number;
    };
  } = hybsVideoInfo.snippet.thumbnails;

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-black'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                KLEAR
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-black'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                4EVE
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-2xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-black'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                HYBS
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <h3 className='text-xl uppercase font-normal my-8'>
                    Song: {klearVideoInfo.snippet.title}
                  </h3>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Channel Title: {klearVideoInfo.snippet.channelTitle}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Views:{' '}
                    {klearVideoInfo.statistics.viewCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Likes:{' '}
                    {klearVideoInfo.statistics.likeCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Comments:{' '}
                    {klearVideoInfo.statistics.commentCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Release date:{' '}
                    {new Date(
                      klearVideoInfo.snippet.publishedAt
                    ).toLocaleDateString()}
                  </h4>
                  <ul>
                    {Object.keys(klearThumbnails).map(
                      (thumbnail: string, idx: number) => (
                        <li key={Math.random().toString(36).substring(2, 7)}>
                          <p className='my-4 text-xl uppercase font-bold'>
                            {thumbnail}
                          </p>
                          <div
                            className={`w-[${klearThumbnails[thumbnail].width}] h-[${klearThumbnails[thumbnail].height}]`}
                          >
                            <img
                              src={klearThumbnails[thumbnail].url}
                              alt={`${thumbnail}-${idx}`}
                            />
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <h3 className='text-xl uppercase font-normal my-8'>
                    Song: {fourEveVideoInfo.snippet.title}
                  </h3>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Channel Title: {fourEveVideoInfo.snippet.channelTitle}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Views:{' '}
                    {fourEveVideoInfo.statistics.viewCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Likes:{' '}
                    {fourEveVideoInfo.statistics.likeCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Comments:{' '}
                    {fourEveVideoInfo.statistics.commentCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Release date:{' '}
                    {new Date(
                      fourEveVideoInfo.snippet.publishedAt
                    ).toLocaleDateString()}
                  </h4>
                  <ul>
                    {Object.keys(fourEveThumbnails).map(
                      (thumbnail: string, idx: number) => (
                        <li key={Math.random().toString(36).substring(2, 7)}>
                          <p className='my-4 text-xl uppercase font-bold'>
                            {thumbnail}
                          </p>
                          <div
                            className={`w-[${fourEveThumbnails[thumbnail].width}] h-[${fourEveThumbnails[thumbnail].height}]`}
                          >
                            <img
                              src={fourEveThumbnails[thumbnail].url}
                              alt={`${thumbnail}-${idx}`}
                            />
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <h3 className='text-xl uppercase font-normal my-8'>
                    Song: {hybsVideoInfo.snippet.title}
                  </h3>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Channel Title: {hybsVideoInfo.snippet.channelTitle}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Views:{' '}
                    {hybsVideoInfo.statistics.viewCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Likes:{' '}
                    {hybsVideoInfo.statistics.likeCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Comments:{' '}
                    {hybsVideoInfo.statistics.commentCount.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ','
                    )}
                  </h4>
                  <h4 className='text-xl uppercase font-normal my-8'>
                    Release date:{' '}
                    {new Date(
                      hybsVideoInfo.snippet.publishedAt
                    ).toLocaleDateString()}
                  </h4>
                  <ul>
                    {Object.keys(hybsThumbnails).map(
                      (thumbnail: string, idx: number) => (
                        <li key={Math.random().toString(36).substring(2, 7)}>
                          <p className='my-4 text-xl uppercase font-bold'>
                            {thumbnail}
                          </p>
                          <div
                            className={`w-[${hybsThumbnails[thumbnail].width}] h-[${hybsThumbnails[thumbnail].height}]`}
                          >
                            <img
                              src={hybsThumbnails[thumbnail].url}
                              alt={`${thumbnail}-${idx}`}
                            />
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return <Tabs color='black' />;
}
