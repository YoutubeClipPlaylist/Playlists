var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function () {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "member"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaMemberPlaylist";
    /**
     * ['VideoID',StartTime,EndTime]
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是正數。如果要從頭播放，輸入1
     * EndTime: 只能是正數。如果要播放至尾，輸入1
     * @type {*[]}
     */
    var newPlaylist = [
        //メン限
        //2020/10/16 みんな！卵の準備はいいかい！！
        ['O3QgoG2Tg5Y', 275, 600],
        ['O3QgoG2Tg5Y', 741, 830],
        ['O3QgoG2Tg5Y', 984, 1072],
        ['O3QgoG2Tg5Y', 1243, 1334],
        ['O3QgoG2Tg5Y', 1444, 1535],
        ['O3QgoG2Tg5Y', 1918, 2009],
        ['O3QgoG2Tg5Y', 2020, 2269],
        ['O3QgoG2Tg5Y', 2422, 2511],
        ['O3QgoG2Tg5Y', 2852, 2941],
        ['O3QgoG2Tg5Y', 3103, 3328],
        ['O3QgoG2Tg5Y', 3734, 3999],
        ['O3QgoG2Tg5Y', 4479, 4771],
        ['O3QgoG2Tg5Y', 4910, 5187],
        ['O3QgoG2Tg5Y', 5365, 5597],
        //['O3QgoG2Tg5Y', 5652, 1],

        //2020/10/9 初メン限歌枠ドキドキドキ・・
        ['ooZW7m7uGsg', 538, 628],
        ['ooZW7m7uGsg', 1020, 1280],
        ['ooZW7m7uGsg', 1422, 1665],
        ['ooZW7m7uGsg', 1819, 2183],
        ['ooZW7m7uGsg', 2317, 2567],
        ['ooZW7m7uGsg', 2697, 2895],
        ['ooZW7m7uGsg', 3031, 3345],
        ['ooZW7m7uGsg', 3625, 3853],
        ['ooZW7m7uGsg', 4008, 4299],
        ['ooZW7m7uGsg', 4666, 4873],
        ['ooZW7m7uGsg', 5193, 5486],
        ['ooZW7m7uGsg', 5829, 6118],
        //['ooZW7m7uGsg', 6229, 1],

        //2020/10/3 たま子へようこそ 廃墟の国のアリス
        ['a8qXEElTnaA', 237, 1]

    ];

    /** 載入判斷 **/
    var urlParams = new URLSearchParams(window.location.search);
    var flag = false;
    var include = urlParams.has('playlistinclude') ? urlParams.get('playlistinclude').toString().toLowerCase() : "";
    var exclude = urlParams.has('playlistexclude') ? urlParams.get('playlistexclude').toString().toLowerCase() : "";
    if (include != "") {
        for (var i in tags) {
            if (include.indexOf(tags[i].toLowerCase()) >= 0) {
                flag = true;
                break;
            }
        }
    } else {
        flag = true;
    }
    if (exclude != "") {
        for (var j in tags) {
            if (exclude.indexOf(tags[j].toLowerCase()) >= 0) {
                flag = false;

                console.log(`Exclude ${listName} with tag: ${tags[j]}`);
                break;
            }
        }
    }

    if (flag) {
        myPlaylist = myPlaylist.concat(newPlaylist);

        console.log("Load Playlist: " + listName);
        console.log("Playlist Count: " + myPlaylist.length);
    }
})();