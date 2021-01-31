var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //最初整理者：小飯(LittleRice)
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["Hane", "Miya", "HaneMiya", "public"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "HaneMiyaPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        //2021.01.08 トワイライト急行【オリジナルMV】歌ってみた
        ['enUcs0w45JA', 0, 0, "トワイライト急行"],

        //2020.12.06 12月の歌枠【HoneyWorks縛り】
        ['QxPgSLRP_QI', 599, 862, "私、アイドル宣言"],
        ['QxPgSLRP_QI', 1249, 1495, "幸せ。"],
        ['QxPgSLRP_QI', 1675, 1912, "金曜日のおはよう-another story-"],
        ['QxPgSLRP_QI', 2159, 2418, "ワタシノテンシ"],
        ['QxPgSLRP_QI', 2740, 2955, "ヒロイン育成計畫"],
        ['QxPgSLRP_QI', 3126, 3325, "初戀の絵本"],
        ['QxPgSLRP_QI', 3630, 3872, "戀色に咲け。"],
        ['QxPgSLRP_QI', 4495, 4750, "病名戀ワズライ"],
        ['QxPgSLRP_QI', 5251, 5502, "可愛くなりたい"],
        ['QxPgSLRP_QI', 5715, 5960, "ファンサ"],
        ['QxPgSLRP_QI', 6372, 6555, "ルマ"],

        // 2020.11.01 【CrazyPartyNight】歌ってみた
        ['QxPgSLRP_QI', 0, 0, "CrazyPartyNight"],

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
