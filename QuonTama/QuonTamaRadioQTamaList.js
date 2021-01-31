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
        ['tj-lHz1dJs4', 0, 0, "#0 アニメ『ソードアート・オンライン』を語る！", "https://gitlab.com/alubaato/tama-subs/-/raw/master/Qtama/%230%E3%80%90%E3%83%A9%E3%82%B8%E3%82%AAQtama%E3%80%91%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%80%8F%E3%82%92%E8%AA%9E%E3%82%8B%EF%BC%81%E3%80%90%E6%96%B0%E4%BA%BAVtuber%EF%BC%8F%E4%B9%85%E9%81%A0%E3%81%9F%E3%81%BE%E3%80%91.ass"],
        ['zbp1ZpZHxNM', 0, 0, "#1 アニメ『はたらく細胞』を語る！", "https://gitlab.com/alubaato/tama-subs/-/raw/master/Qtama/%231%E3%80%90%E3%83%A9%E3%82%B8%E3%82%AAQtama%E3%80%91%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%81%AF%E3%81%9F%E3%82%89%E3%81%8F%E7%B4%B0%E8%83%9E%E3%80%8F%E3%82%92%E8%AA%9E%E3%82%8B%EF%BC%81%E3%80%90%E6%96%B0%E4%BA%BAVtuber%EF%BC%8F%E4%B9%85%E9%81%A0%E3%81%9F%E3%81%BE%E3%80%91.ass"],
        ['Qvfvsgz8MEU', 0, 0, "#2 アニメ『ホリミヤ』を語る！", "https://gitlab.com/alubaato/tama-subs/-/raw/master/Qtama/%232%E3%80%90%E3%83%A9%E3%82%B8%E3%82%AAQtama%E3%80%91%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%80%8F%E3%82%92%E8%AA%9E%E3%82%8B%EF%BC%81%E3%80%90%E6%96%B0%E4%BA%BAVtuber%EF%BC%8F%E4%B9%85%E9%81%A0%E3%81%9F%E3%81%BE%E3%80%91-Qvfvsgz8MEU.ass"],
        ['9LuK87QodS4', 0, 0, "#3 アニメ『進撃の巨人』を語る！"],
    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();