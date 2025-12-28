# Playlists Repository

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/minify?label=PLAYLIST%20UPDATE&style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors-anon/YoutubeClipPlaylist/Playlists?style=for-the-badge) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)

這是 **[Youtube 影片截選播放清單](https://github.com/YoutubeClipPlaylist/YoutubeClipPlaylist)** 專案的播放清單資料儲存庫，以 submodule 形式存放各個 VTuber 的歌單資料。

## 📝 關於本專案

本儲存庫集中管理多位 VTuber 的歌曲播放清單，每位 VTuber 由專屬的維護者負責更新與管理。透過 Git 分支管理和自動化部署流程，確保歌單資料的即時性與準確性。

### 清單存取位址

| 環境 | Base URL                                                                  |
|------|---------------------------------------------------------------------------|
| 正式 | <https://raw.githubusercontent.com/YoutubeClipPlaylist/Playlists/minify/> |
| 測試 | <https://raw.githubusercontent.com/YoutubeClipPlaylist/Playlists/Demo/>   |

## 🔄 工作流程

本專案採用分支管理模式，確保各維護者能獨立作業而不互相衝突：

1. **分支管理** — 每位 VTuber 擁有獨立的 branch，由單一維護者負責
2. **內容更新** — 維護者在各自的 branch 上編輯歌單檔案
3. **提交合併** — 完成編輯後，發起 Pull Request 請求合併至 `master` branch
4. **自動化部署** — Push 到 `master` branch 會自動觸發 CI/CD 流程，將資料 minify 後推送至 `minify` branch
5. **即時生效** — 播放工具直接存取 `minify` branch 的 raw 檔案，重新整理即可套用更新

## 🤝 參與貢獻

我們歡迎所有願意貢獻的協作者！您可以透過以下方式參與：

### 方式一：Fork & Pull Request

1. Fork 本專案至您的帳號
2. 在您的 fork 中進行編輯
3. 完成後發送 Pull Request 回本儲存庫

### 方式二：成為維護者

如果您希望長期維護特定 VTuber 的歌單：

1. 前往 [Discussions](https://github.com/YoutubeClipPlaylist/Playlists/discussions) 留言，說明您想維護的 VTuber
2. 我們會授予您對應 branch 的 push 權限
3. 初期會審核幾次 PR，熟悉流程後即可自行 merge

> [!IMPORTANT]  
> 所有新建立的歌單請從 [BasePlaylist](https://github.com/YoutubeClipPlaylist/Playlists/tree/BasePlaylist) tag 開始建立，以確保格式統一。

### 其他合作方式

- ~~Google Sheet 共編~~ — 此方案目前未實做，相關討論請見 [Issue #7](https://github.com/YoutubeClipPlaylist/Playlists/issues/7)

## 維護人員清單

感謝所有自願者 \
依照參與順序排序

| Singer                                                                                                                                 | 維護者                                                                                                                                                             | Last Commit                                                                                                                                                                                                                                                                                          |
|----------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [久遠たま](https://www.youtube.com/channel/UCBC7vYFNQoGPupe5NxPG4Bw)<br>[IROA](https://www.youtube.com/channel/UCO3RDKQclxKAb3CxNq0MOsQ) | [琳](https://github.com/jim60105)                                                                                                                                  | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/QuonTama?label=%20&style=for-the-badge)                                                                                                                                                       |
| [須多夜花](https://www.youtube.com/channel/UCuy-kZJ7HWwUU-eKv0zUZFQ)                                                                   | [琳](https://github.com/jim60105)                                                                                                                                  | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/SudaYoruka?label=%20&style=for-the-badge)                                                                                                                                                     |
| [薬袋アルマ](https://www.youtube.com/channel/UCD1QOCJIAPsMKMvRSXjLahw)                                                                    | [琳](https://github.com/jim60105)                                                                                                                                  | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/MinaiAruma?label=%20&style=for-the-badge)                                                                                                                                                     |
| [浠Mizuki](https://www.youtube.com/channel/UCjv4bfP_67WLuPheS-Z8Ekg)                                                                   | [小飯](https://github.com/LittleRice1007)  <br>[(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator) | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/Mizuki?label=%20&style=for-the-badge)<br>![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)  |
| [神月天](https://www.youtube.com/channel/UCkIoEPncHPIWByx7OlzEVXQ)                                                                     | [小飯](https://github.com/LittleRice1007)                                                                                                                          | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/KandukiAma?label=%20&style=for-the-badge)                                                                                                                                                     |
| [町田ちま](https://www.youtube.com/channel/UCo7TRj3cS-f_1D9ZDmuTsjw)                                                                     | [da21510](https://github.com/da21510) <br>[(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)      | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/da21510/Playlists/MachitaChima?label=%20&style=for-the-badge)<br>![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)        |
| [YOSHIKA⁂Ch.](https://www.youtube.com/c/YOSHIKA-Ch)                                                                                    | [ralfjr](https://github.com/ralfjr)  <br>[(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)       | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/YOSHIKA?label=%20&style=for-the-badge)<br>![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge) |
| [炭酸ちゃん](https://twitcasting.tv/t3c_o0o)                                                                                              | [琳](https://github.com/jim60105)                                                                                                                                  | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/t3c?label=%20&style=for-the-badge)                                                                                                                                                            |
| [名雪薇薇](https://www.youtube.com/channel/UCdesGlD7t5JV-z28p5GqVIw)                                                                   | [andy22913539](https://github.com/andy22913539)                                                                                                                    | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/NayukiViVy?label=%20&style=for-the-badge)                                                                                                                                                     |
| [苺咲べりぃ](https://www.youtube.com/channel/UC7A7bGRVdIwo93nqnA3x-OQ)                                                                    | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
| [HACHI](https://www.youtube.com/channel/UC7XCjKxBEct0uAukpQXNFPw)                                                                      | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
| [獅子神レオナ](https://www.youtube.com/channel/UCB1s_IdO-r0nUkY2mXeti-A)                                                                  | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
| [松永依織](https://www.youtube.com/channel/UC--zuEfONeFXPvLqX0Kvbuw)                                                                   | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
| [石狩あかり](https://www.youtube.com/channel/UC7wZb5INldbGweowOhBIs8Q)                                                                    | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
| [凛々咲 Ririsya](https://www.youtube.com/c/RirisyaMusic)                                                                                | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |

### 活動休止

| Singer                                                               | 維護者                                                                                                              | Last Commit                                                                                                                                        |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [牧野白](https://www.youtube.com/channel/UCbZcxNKrC0a6IZYBowvzAUg)   | [Edison Lee](https://github.com/edisonlee55)                                                                        | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/MakinoShiro?label=%20&style=for-the-badge)  |
| [火閻まどか](https://www.youtube.com/channel/UCBhhDcVyOAhmUERi1PsQ4Rw)  | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator) |                                                                                                                                                    |
| [鈴花ステラ](https://www.youtube.com/channel/UChAOCCFuF2hto05Z68xp56A)  | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator) |                                                                                                                                                    |
| [羽宮くぅ](https://www.youtube.com/channel/UC4-EyORUDI_kyckQFmW3P7A)   | [小飯](https://github.com/LittleRice1007)                                                                           | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/HaneMiya?label=%20&style=for-the-badge)     |
| [苓吃エムリィ](https://www.youtube.com/channel/UC36tM-mb6ve_OA3jPynxp7g) | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator) |                                                                                                                                                    |
| [伊冬ユナ](https://www.youtube.com/channel/UCYbzeYnRZuw7fZKrgu2bgtw)   | [小飯](https://github.com/LittleRice1007)                                                                           | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/ItouYuna?label=%20&style=for-the-badge)     |
| [間取かける](https://www.youtube.com/channel/UCiLt4FLjMXszLOh5ISi1oqw)  | [琳](https://github.com/jim60105)                                                                                   | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/MatoriKakeru?label=%20&style=for-the-badge) |
| [紅記えり](https://www.youtube.com/channel/UCQYzqKdEiWfyYU1IAnN2S-Q)                                                                     | [(Auto Generated)](https://github.com/YoutubeClipPlaylist/Playlists/tree/AutoGenerator/AutoGenerator/AutoGenerator)                                                | ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/YoutubeClipPlaylist/Playlists/AutoGenerator?label=%20&style=for-the-badge)                                                                                                                                                  |
