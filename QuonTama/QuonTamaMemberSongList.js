var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "member"]; //メン限
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaMemberPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        // 2020/11/6 たまのオフや裏が知れちゃう場所
        // ['_GGEHueF5rU', 771, 1021, "空色デイズ"], //11/29
        // ['_GGEHueF5rU', 1332, 1687, "あなたに出會わなければ~夏雪冬花~"], //1/3
        // ['_GGEHueF5rU', 1793, 1883, "Bravely You Short"], //9/18
        // ['_GGEHueF5rU', 1997, 2256, "たぶん"], //12/22
        ['_GGEHueF5rU', 2360, 2644, "少女レイ"],
        ['_GGEHueF5rU', 2768, 2867, "青空のラプソディ Short"],
        ['_GGEHueF5rU', 3020, 3268, "おちゃめ機能"],
        ['_GGEHueF5rU', 4396, 4716, "瞬き"],
        ['_GGEHueF5rU', 4882, 5009, "ふなのり Short Acapella"],
        // ['_GGEHueF5rU', 5117, 5212, "ルンがピカッと光ったら Short"], //12/6
        ['_GGEHueF5rU', 5424, 5489, "私の彼はパイロット Short"],
        ['_GGEHueF5rU', 5543, 5779, "ドラマツルギー"],
        ['_GGEHueF5rU', 6102, 6351, "一度だけの恋なら"],
        // ['_GGEHueF5rU', 6648, 6817, "夜もすがら君想ふ ED"],

        // 2020/10/23 た魔女になって歌っちゃうねっ！
        ['3RUKStFG46U', 419, 608, "パート・オブ・ユア・ワールド"],
        ['3RUKStFG46U', 637, 798, "ホール・ニュー・ワールド"],
        ['3RUKStFG46U', 1011, 1206, "パプリカ"],
        // ['3RUKStFG46U', 1308, 1559, "となりのトトロ"], //12/6
        ['3RUKStFG46U', 2357, 2646, "Ahoy!! 我ら宝鐘海賊団☆ Acapella"],
        ['3RUKStFG46U', 2901, 3080, "エイリアンエイリアン"],
        ['3RUKStFG46U', 3133, 3321, "ローリンガール"],
        // ['3RUKStFG46U', 3551, 3769, "チューリングラブ"], //這首唱炸了
        // ['3RUKStFG46U', 4380, 4589, "いつも何度でも"], //12/11
        // ['3RUKStFG46U', 4660, 4855, "君をのせて"], //12/11
        // ['3RUKStFG46U', 5063, 5337, "ANIMA - THE FIRST TAKE"], //10/4
        // ['3RUKStFG46U', 5399, 5568, "夜もすがら君想ふ ED"],

        // 2020/10/16 みんな！卵の準備はいいかい！！
        ['O3QgoG2Tg5Y', 275, 600, "楓"],
        ['O3QgoG2Tg5Y', 741, 830, "そしていま Short"],
        ['O3QgoG2Tg5Y', 984, 1072, "うまるん体操 Short"],
        ['O3QgoG2Tg5Y', 1243, 1334, "TOMORROW Short"],
        ['O3QgoG2Tg5Y', 1444, 1535, "GATE～それは暁のように～ Short"],
        ['O3QgoG2Tg5Y', 1918, 2009, "海色 Short"],
        ['O3QgoG2Tg5Y', 2020, 2269, "吹雪"],
        // ['O3QgoG2Tg5Y', 2422, 2511, "Sparkling Daydream Short"], //11/1
        ['O3QgoG2Tg5Y', 2852, 2941, "Resolution Short"],
        // ['O3QgoG2Tg5Y', 3103, 3328, "お願いマッスル"], //12/27
        // ['O3QgoG2Tg5Y', 3734, 3999, "たぶん"], //New11/6
        ['O3QgoG2Tg5Y', 4479, 4771, "アクアテラリウム"],
        // ['O3QgoG2Tg5Y', 4910, 5187, "Shangri-La"], //12/13
        ['O3QgoG2Tg5Y', 5365, 5597, "いかないで"],
        // ['O3QgoG2Tg5Y', 5652, 0, "夜もすがら君想ふ ED"],

        // 2020/10/9 初メン限歌枠ドキドキドキ・・
        // ['ooZW7m7uGsg', 538, 628, "にめんせい☆ウラオモテライフ"], //12/6
        // ['ooZW7m7uGsg', 1020, 1280, "カーストルーム"], //11/15
        // ['ooZW7m7uGsg', 1422, 1665, "Starry Wish"], //12/6
        ['ooZW7m7uGsg', 1819, 2183, "アメフラシの歌～Beautiful Rain～"],
        // ['ooZW7m7uGsg', 2317, 2567, "Departures～あなたにおくるアイの歌～"], //12/6
        ['ooZW7m7uGsg', 2697, 2895, "蒼のエーテル"],
        ['ooZW7m7uGsg', 3031, 3345, "妖精"],
        // ['ooZW7m7uGsg', 3625, 3853, "いのちの名前"], //12/11
        ['ooZW7m7uGsg', 4008, 4299, "美しき残酷な世界"],
        ['ooZW7m7uGsg', 4666, 4873, "you"],
        // ['ooZW7m7uGsg', 5193, 5486, "時を刻む唄"], //New11/29
        // ['ooZW7m7uGsg', 5829, 6118, "THERE IS A REASON"], //9/27
        // ['ooZW7m7uGsg', 6229, 0, "夜もすがら君想ふ ED"],

        // 2020/10/3 たま子へようこそ
        ['a8qXEElTnaA', 237, 0, "廃墟の国のアリス"]
    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();