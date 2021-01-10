var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "public", "RadioQTama", "NotSongs"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaRadioQTamaList";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * SubSrc: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        ['tj-lHz1dJs4', 0, 0, "#0 アニメ『ソードアート・オンライン』を語る！", "https://github.com/jim60105/SongLists/raw/master/QuonTama/Sub/RadioQTama/0.vtt"],
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