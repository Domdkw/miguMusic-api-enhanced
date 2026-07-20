//import {createClient} from "migu-api-enhanced";
import axios from "axios";

//const migu = createClient();

//async function test(){const r = (await axios.get(`http://app.c.nf.migu.cn/bmw/search/song/v1.0?pageNo=1&text=APT.`)).data; console.log(r);}
//await test();
const pageSize = 20;

// 搜索音乐
async function searchMusic(query, page) {
    const res = (await axios.get(`http://app.c.nf.migu.cn/bmw/search/song/v1.0?pageNo=${page}&text=${query}`)).data;

    const data = res.data;
    const hasNext = data.hasNext;
    const items = data.items;
    const list = items.map(function(it) {
        const item = it.song;
        const artistNameList = item.singerList.map(function(t) {
            return t.name;
        });
        item.artistNames = artistNameList.join("/");
        return formatMusicItem(item);
    });
    return {data: list, isEnd: !hasNext};
}
function formatMusicItem(it) {
  return {
    id: it.contentId,
    title: it.songName,
    artist: it.artistNames,
    album: it.album,
    duration: it.duration,
    artwork: 'https://d.musicapp.migu.cn' + it.img3,
    albumId: it.albumId,
    lrc: it.lrcUrl,
    // new
    singerList: it.singerList,
    resourceType: it.resourceType,
    mvId: it.mvId,
    ringToneId: it.ringToneId,
    ringCopyrightId: it.ringCopyrightId,
    copyrightId: it.copyrightId,
    playNumDesc: it.playNumDesc,
  };
}

// 搜索专辑
async function searchAlbum(query, page) {
    const res = (await axios.get(`http://app.c.nf.migu.cn/bmw/search/album/v1.0?pageNo=${page}&text=${query}`)).data;

    const data = res.data;
    const hasNext = data.hasNext;
    const items = data.items;
    const list = items
        .filter(function(i) {
            // 过滤 dalbum
            return i.album !== undefined;
        })
        .map(function(i) {
            const item = i.album;
            return formatAlbumItem(item);
        });
    return {data: list, isEnd: !hasNext};
}
function formatAlbumItem(it) {
  return {
    id: it.albumId,
    title: it.title,
    artist: it.singer,
    artistId: it.singerId,
    artwork: it.imgItems[0].img,
    date: it.publishDate,
    // new
    resourceType: it.resourceType,
    totalCount: it.totalCount,
  };
}

// 搜索作者
async function searchSinger(query, page) {
    const res = (await axios.get(`http://app.c.nf.migu.cn/bmw/search/singer/v2.0?pageNo=${page}&text=${query}`)).data;

    const data = res.data;
    const hasNext = data.hasNext;
    const items = data.items;
    const list = items.map(function(it) {
        const item = it.singer;
        return formatSingerItem(item);
    });
    return {data: list, isEnd: !hasNext};
}
function formatSingerItem(it) {
  return {
    id: it.singerId,
    name: it.singer,
    fans: it.followNums,
    description: it.summary,//it.detail
    avatar: it.imgs[0].img,
    worksNum: it.songNum,
    //new
    mvNum: it.mvNum,
    albumNum: it.albumNum,
    vrbtNum: it.vrbtNum,
    latestContentId: it.latestContentId,
    columnId: it.columnId,
    videoUserId: it.videoUserId,
    resourceType: it.resourceType,
  };
}

async function getMediaSource(musicItem, quality) {
  
async function getUrlH5V24(contentId, copyrightId, toneFlag = "PQ", resourceType = "2") {
  const headers = {
    "birth": "h5page",
    "channel": "014X031",
    "Referer": "https://y.migu.cn/",
    "location-data": "30.6698676660,104.1229614820",
    "location-info": ""
  };
  const res = await axios.get(
    `https://c.musicapp.migu.cn/strategy/listen-url/h5/v2.4?contentId=${contentId}&copyrightId=${copyrightId}&resourceType=${resourceType}&netType=01&toneFlag=${toneFlag}&scene=&lowerQualityContentId=${contentId}`,
    {
      headers,
      responseType: "arraybuffer"
    }
  );
  return await decryptData2(res.data);
};
var SECURE2 = ["Jk8qzuePiJ1qE3mDYhLQ3T73DtDoAhLP"];
function strToUtf8Bytes(e) {
  return new TextEncoder().encode(e);
}
function utf8Bytes2str(e) {
  var t = [], n = true, r = false, o = void 0;
  try {
    for (var a, i = e[Symbol.iterator](); !(n = (a = i.next()).done); n = true) {
      var s = a.value;
      s < 16 ? t.push(String.fromCharCode(s)) : (t.push("%"), t.push(s.toString(16)));
    }
  } catch (e2) {
    r = true, o = e2;
  } finally {
    try {
      !n && i.return && i.return();
    } finally {
      if (r)
        throw o;
    }
  }
  return decodeURIComponent(t.join(""));
}
function decode(e, t) {
  if (0 == t.length)
    return null;
  var n = e.length;
  if (n < 4)
    return null;
  if (171 != e[0] || 205 != e[1])
    return null;
  if (1 != e[2])
    return null;
  for (var r = e[3], o = strToUtf8Bytes(t), a = o.length, i = new Uint8Array(n - 4), s = 0, c = 4; c < n; c++, s++)
    i[s] = e[c] + r - o[s % a];
  return i;
}
async function decryptData2(ab) {
  const r = decode(new Uint8Array(ab), SECURE2[0]);
  const d = utf8Bytes2str(r);
  return JSON.parse(d);
};

    const res = await getUrlH5V24(musicItem.id, musicItem.copyrightId || '' );
    const data = res?.data || {};
    let url = data?.url || "";
    url = url.split("?")[0];
    return {url};
}

//info
async function getAlbumInfo(albumItem, page) {
  const res = (await axios.get(`http://app.c.nf.migu.cn/MIGUM3.0/resource/album/song/v2.0?albumId=${albumItem.id}&pageNo=${page || 1}`)).data;
  const songList = res?.data?.songList || [];
  const list = songList.map(function(it) {
    const item = it;
    item.artistNames = item.singerList.map(function(t) {
        return t.name;
    }).join("/");
    return formatAlbumInfoItem(item);
  });
  return {
    isEnd: true, // 专辑歌曲通常一次性返回
    musicList: list
  };
}
function formatAlbumInfoItem(it) {
  return {
    id: it.contentId,
    title: it.songName,
    artist: it.artistNames,
    album: it.album,
    duration: it.duration,
    artwork: it.img3,
    albumId: it.albumId,
    lrc: it.lrcUrl,
    // new
    singerList: it.singerList,
    resourceType: it.resourceType,
    copyrightId: it.copyrightId,
  };
}

async function getArtistWorks(artistItem, page, type) {
  const res = (await axios.get(`http://app.c.nf.migu.cn/bmw/singer/song/v1.0?pageNo=${page || 1}&singerId=${artistItem.id}&type=1`)).data;
  const songList = res?.data?.contents?.[0]?.contents || [];
  const list = songList.map(function(it) {
    const songItem = it.songItem;
    songItem.artistNames = songItem.singerList.map(function(t) {
        return t.name;
    }).join("/");
    return formatMusicItem(songItem);
  });
  return {
    isEnd: list.length < 20, // 假设每页20条
    data: list
  };
}



module.exports = {
  platform: "Migu",
  version: "0.0.1",
  author: 'Domdkw',
  primaryKey: ["id", "singerId", "albumId", "copyrightId", "resourceType", "toneFlag", 'totalCount'],
  cacheControl: "cache",

  async search(query, page, type) {
    query = encodeURIComponent(query);
    if (type === "music") {
      return await searchMusic(query, page);
    } else if (type === "album") {
      return await searchAlbum(query, page);
    } else if (type === "artist") {
      return await searchSinger(query, page);
    }

    return {
      data: [],
      isEnd: true,
    };
  },
  getMediaSource,
  getAlbumInfo,
  getArtistWorks,
};

//console.log(await getAlbumInfo({id: 1138608258}))
