var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "public", "gdrive"]; //Google Drive
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaBackupPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        // 2021/1/10 新曲多め？！ sing a song
        ['1APozbkdV1wk6wUSmyzN0yKX-_QRgRd61', 5615, 5937, "告白"],

        // 2020/12/11 スタジオジブリ作品限定歌枠✨Sing a song
        ['1STfVXuzzo9QEYJKMAx4eOaFHT-r4fOTR', 281, 443, "さんぽ"],
        ['1STfVXuzzo9QEYJKMAx4eOaFHT-r4fOTR', 3623, 3833, "もののけ姫"],

        // 2020/12/6 題名５０音歌いきるまで終われまてん💜Sing a song
        ['13LaALYNOmdN3GfD7aeKreyzshdKX-Tvz', 884, 1166, "打上花火"],

        // 2020/12/4 ボカロをうたう！エフェクト多様？！Sing a song
        ['1CbiCYP_Zhx9iUNSap9Fz_EJZVWo_GGkz', 4929, 5201, "アンノウン・マザーグース"],

        // Twitter
        // ['1N6yPBnMzF3BNBxE0IsnDlyed8Z8Gj3lN', 0, 0, "朝窓を開けたら、こちらを覗いていた👀"],
        // ['1w5aozxPEnD6Z4CfsiVC6LsG5HF66z_Xq', 0, 0, "たま子さんおはたまー！"],
        ['1GLrDrMgBypWBfUY2XLg-SJEXuZlpT25C', 0, 0, "たまの全身全霊滑舌その２"],
        // ['1s3WgpTkK412yDA9qIngqvK5TBkYkyi1L', 0, 0, "たまの全身全霊滑舌その１"],
    ];

    /** 載入判斷程式 **/
    /** 以下不要修改 **/
    var urlParams = new URLSearchParams(window.location.search);
    var flag = false;
    var include = urlParams.has('playlistinclude') ? urlParams.get('playlistinclude').toString().toLowerCase() : "";
    var exclude = urlParams.has('playlistexclude') ? urlParams.get('playlistexclude').toString().toLowerCase() : "";
    if (include != "") {
        for (var i in tags) {
            if (include == tags[i].toLowerCase()) {
                flag = true;
                break;
            }
        }
    } else {
        flag = true;
    }
    if (exclude != "") {
        for (var j in tags) {
            if (exclude == tags[j].toLowerCase()) {
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