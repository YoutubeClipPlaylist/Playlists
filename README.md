# Playlists Repo

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/jim60105/Playlists/minify?label=PLAYLIST%20UPDATE&style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors-anon/jim60105/Playlists?style=for-the-badge) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)

此repo是 **[Youtube影片截選播放清單](https://github.com/jim60105/YoutubeClipPlaylist)** 專案的submodule，存放該專案的播放清單\
如果有意參與編輯，請詳閱以下說明

## 運作流程

 1. 此repo對各Vtuber分別開branch
 2. 一個branch由一人維護，避免衝突
 3. 修改完後發PR回master branch合併
 4. push to master branch會觸發minify action CI到minify branch
 5. 工具是直鏈minify清單raw，重整就完成更新

## 合作方式

有兩種參與方式

 1. Fork專案，在每次編輯完後發PR回來給我
 2. 至[Discussion](https://github.com/jim60105/Playlists/discussions)發個訊息，告訴我你想做哪位V，我會給你push權限\
 一開始我會看幾次PR，確定熟了就讓你自行merge
    * 所有新的歌單請從 BasePlaylist 這個tag開始
 3. ~~Google Sheet共編~~ (此方案目前未實做，相關討論請見[此issue](https://github.com/jim60105/Playlists/issues/7))

## 維護人員清單

| Vtuber                                                               | 維護者                                       |
|----------------------------------------------------------------------|----------------------------------------------|
| [久遠たま](https://www.youtube.com/channel/UCBC7vYFNQoGPupe5NxPG4Bw)   | [琳](https://github.com/jim60105)            |
| [須多夜花](https://www.youtube.com/channel/UCuy-kZJ7HWwUU-eKv0zUZFQ) | [琳](https://github.com/jim60105)            |
| [間取かける](https://www.youtube.com/channel/UCiLt4FLjMXszLOh5ISi1oqw)  | [琳](https://github.com/jim60105)            |
| [薬袋アルマ](https://www.youtube.com/channel/UCD1QOCJIAPsMKMvRSXjLahw)  | [琳](https://github.com/jim60105)            |
| [伊冬ユナ](https://www.youtube.com/channel/UCYbzeYnRZuw7fZKrgu2bgtw)   | [小飯](https://github.com/LittleRice1007)    |
| [羽宮くぅ](https://www.youtube.com/channel/UC4-EyORUDI_kyckQFmW3P7A)   | [小飯](https://github.com/LittleRice1007)    |
| [町田ちま](https://www.youtube.com/channel/UCo7TRj3cS-f_1D9ZDmuTsjw)   | [da21510](https://github.com/da21510)        |
| [牧野白](https://www.youtube.com/channel/UCbZcxNKrC0a6IZYBowvzAUg)   | [Edison Lee](https://github.com/edisonlee55) |
| [浠Mizuki](https://www.youtube.com/channel/UCjv4bfP_67WLuPheS-Z8Ekg) | [小飯](https://github.com/LittleRice1007)    |

<!--| [神月天](https://www.youtube.com/channel/UC4-EyORUDI_kyckQFmW3P7A) | [小飯](https://github.com/LittleRice1007) |-->

## 啟動連結

| 說明                  | 連結                                                                                             |
|---------------------|--------------------------------------------------------------------------------------------------|
| 全清單 循序           | <https://www.youtube.com/?startplaylist>                                                         |
| 全清單 隨機           | <https://www.youtube.com/?startplaylist&shuffle=1>                                               |
| 久遠たま全歌單循序      | <https://www.youtube.com/?startplaylist&playlistinclude=tama&playlistexclude=NotSongs>           |
| 久遠たま歌單(排除會限)  | <https://www.youtube.com/?startplaylist&playlistinclude=tama&playlistexclude=member_NotSongs>    |
| 久遠たま全歌單隨機      | <https://www.youtube.com/?startplaylist&playlistinclude=tama&playlistexclude=NotSongs&shuffle=1> |
| 久遠たまtwitcasting歌單 | <https://www.youtube.com/?startplaylist&playlistinclude=twitcasting>                             |
| RadioQTama 廣播       | <https://www.youtube.com/?startplaylist&playlistinclude=RadioQTama>                              |
| 須多夜花全歌單循序    | <https://www.youtube.com/?startplaylist&playlistinclude=yoruka>                                  |
| 須多夜花全歌單隨機    | <https://www.youtube.com/?startplaylist&playlistinclude=yoruka&shuffle=1>                        |
| 間取かける歌單循序       | <https://www.youtube.com/?startplaylist&playlistinclude=kakeru>                                  |
| 間取かける歌單隨機       | <https://www.youtube.com/?startplaylist&playlistinclude=kakeru&shuffle=1>                        |
| 薬袋アルマ歌單循序       | <https://www.youtube.com/?startplaylist&playlistinclude=aruma>                                  |
| 薬袋アルマ歌單隨機       | <https://www.youtube.com/?startplaylist&playlistinclude=aruma&shuffle=1>                        |
| 伊冬ユナ全歌單循序      | <https://www.youtube.com/?startplaylist&playlistinclude=ItouYuna>                                |
| 伊冬ユナ全歌單隨機      | <https://www.youtube.com/?startplaylist&playlistinclude=ItouYuna&shuffle=1>                      |
| 羽宮くぅ全歌單循序      | <https://www.youtube.com/?startplaylist&playlistinclude=HaneMiya>                                |
| 羽宮くぅ全歌單隨機      | <https://www.youtube.com/?startplaylist&playlistinclude=HaneMiya&shuffle=1>                      |
| 町田ちま全歌單循序      | <https://www.youtube.com/?startplaylist&playlistinclude=MachitaChima>                            |
| 町田ちま全歌單隨機      | <https://www.youtube.com/?startplaylist&playlistinclude=MachitaChima&shuffle=1>                  |
| 牧野白全歌單循序      | <https://www.youtube.com/?startplaylist&playlistinclude=MakinoShiro>                             |
| 牧野白全歌單隨機      | <https://www.youtube.com/?startplaylist&playlistinclude=MakinoShiro&shuffle=1>                   |
| 浠Mizuki全歌單循序    | <https://www.youtube.com/?startplaylist&playlistinclude=Mizuki>                                  |
| 浠Mizuki全歌單隨機    | <https://www.youtube.com/?startplaylist&playlistinclude=Mizuki&shuffle=1>                        |
