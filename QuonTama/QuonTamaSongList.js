var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["quon", "tama", "public"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "QuonTamaPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        // 2021/1/10 新曲多め？！ sing a song
        ['1N_j3LoqAwE', 120, 209, "くちづけDiamond Short"],
        ['1N_j3LoqAwE', 338, 584, "COOLISH WALK"],
        ['1N_j3LoqAwE', 862, 1099, "不可思議のカルテ"],
        ['1N_j3LoqAwE', 1275, 1491, "MOON PRIDE"],
        ['1N_j3LoqAwE', 1642, 1843, "うっせぇわ"],
        ['1N_j3LoqAwE', 2127, 2402, "いけないボーダーライン"],
        ['1N_j3LoqAwE', 2538, 2836, "奏"],
        ['1N_j3LoqAwE', 2947, 3231, "旅の途中"],
        ['1N_j3LoqAwE', 3396, 3590, "ハルジオン"],
        ['1N_j3LoqAwE', 3840, 4189, "あたしが隣にいるうちに"],
        ['1N_j3LoqAwE', 4377, 4639, "アイのシナリオ"],
        ['1N_j3LoqAwE', 4717, 4990, "雲雀"],
        ['1N_j3LoqAwE', 5101, 5386, "独白"],
        // ['1N_j3LoqAwE', 5615, 5937, "告白"], //消除
        // ['1N_j3LoqAwE', 5649, 5819, "夜もすがら君想ふ ED"],

        // 2021/1/3 2021年最初のアニソン✨ sing a song
        ['6LaRupTUDng', 141, 379, "革命デュアリズム"],
        ['6LaRupTUDng', 866, 962, "君のせい Short"],
        ['6LaRupTUDng', 1190, 1425, "Scarlet Ballet"],
        ['6LaRupTUDng', 1573, 1930, "あなたに出会わなければ ～夏雪冬花～"],
        ['6LaRupTUDng', 2134, 2483, "RE:I AM"],
        ['6LaRupTUDng', 2640, 2897, "narrative"],
        ['6LaRupTUDng', 3035, 3277, "アイリス"],
        ['6LaRupTUDng', 3609, 3893, "KABANERI OF THE IRON FORTRESS"],
        ['6LaRupTUDng', 4014, 4290, "英雄 運命の詩"],
        ['6LaRupTUDng', 4381, 4603, "瞬間センチメンタル"],
        ['6LaRupTUDng', 4678, 4937, "black bullet"],
        // ['6LaRupTUDng', 5276, 5566, "THERE IS A REASON"],
        ['6LaRupTUDng', 5778, 6021, "crossing field"],
        // ['6LaRupTUDng', 6103, 6273, "夜もすがら君想ふ ED"],

        // 歌ってみた THERE IS A REASON
        ['zPfLB7WWhao', 0, 0, 'THERE IS A REASON'],

        // 2020/12/31 ２０２０年ありがとうございました‼sing a song
        ['QcymUTP93Dk', 143, 277, "KING"],
        ['QcymUTP93Dk', 628, 916, "ROCK-mode '18"],
        // ['QcymUTP93Dk', 1161, 1427, "夜に駆ける"],
        ['QcymUTP93Dk', 1692, 1985, "月光花"],
        ['QcymUTP93Dk', 2116, 2335, "if…"],
        ['QcymUTP93Dk', 2433, 2798, "花の唄"],
        ['QcymUTP93Dk', 2880, 3155, "I beg you"],
        ['QcymUTP93Dk', 3207, 3507, "春はゆく"],
        ['QcymUTP93Dk', 3660, 3953, "Angelic Angel"],
        ['QcymUTP93Dk', 4119, 4395, "シルシ"],
        ['QcymUTP93Dk', 4402, 4693, "unlasting"],
        ['QcymUTP93Dk', 4766, 5004, "渡月橋 ～君 想ふ～"],
        ['QcymUTP93Dk', 5120, 5380, "このピアノでお前を8759632145回ぶん殴る"],
        ['QcymUTP93Dk', 5677, 5906, "病名は愛だった"],
        ['QcymUTP93Dk', 6026, 6340, "ETERNAL BLAZE"],
        ['QcymUTP93Dk', 6490, 6766, "Shangri-La"],
        ['QcymUTP93Dk', 6911, 7165, "カワキヲアメク"],
        ['QcymUTP93Dk', 7327, 7563, "unravel"],
        ['QcymUTP93Dk', 7943, 8194, "Here"],
        // ['QcymUTP93Dk', 8377, 8646, "炎"],
        ['QcymUTP93Dk', 8767, 9066, "ライオン"],
        ['QcymUTP93Dk', 9215, 9400, "ルマ"],

        // 作業用BGM アニソン歌枠メドレー２
        // ['OcUebK_2Als', 0, 0, "作業用BGMアニソン歌枠メドレー２"],

        // 2020/12/27 ５万人感謝の歌枠✨sing a song
        ['YVwC8zTXbsY', 310, 536, "お願いマッスル"],
        ['YVwC8zTXbsY', 714, 955, "Mela!"],
        ['YVwC8zTXbsY', 1046, 1322, "白日"],
        ['YVwC8zTXbsY', 1513, 1794, "謎"],
        ['YVwC8zTXbsY', 2145, 2477, "六等星の夜"],
        ['YVwC8zTXbsY', 2619, 2870, "白金ディスコ"],
        ['YVwC8zTXbsY', 2958, 3235, "七転八起☆至上主義!"],
        ['YVwC8zTXbsY', 3498, 3734, "ラピスラズリ"],
        ['YVwC8zTXbsY', 3911, 4268, "うたかた花火"],
        ['YVwC8zTXbsY', 4393, 4623, "Paradisus-Paradoxum"],
        ['YVwC8zTXbsY', 4823, 5074, "again"],
        ['YVwC8zTXbsY', 5181, 5505, "The Everlasting Guilty Crown"],
        ['YVwC8zTXbsY', 5758, 6006, "Rising Hope"],
        // ['YVwC8zTXbsY', 6081, 6250, "夜もすがら君想ふ ED"],

        // 歌ってみた ninelie - arrange ver.- 
        ['iZcUFwlQtgM', 0, 0, "ninelie - arrange ver.-"],

        // 歌ってみた 紅蓮華 - arrange ver.-
        ['G0b6hmkgS3c', 0, 0, "紅蓮華 - arrange ver.-"],

        // 2020/12/22 ボカロ多めな予感💭 sing a song
        ['pPqy2GYj2oU', 407, 652, "オレンジ"],
        ['pPqy2GYj2oU', 892, 1176, "ヨンジュウナナ"],
        ['pPqy2GYj2oU', 1478, 1794, "例えば、今此処に置かれた花に"],
        ['pPqy2GYj2oU', 1899, 2144, "忘れじの言の葉"],
        ['pPqy2GYj2oU', 2300, 2568, "心做し"],
        ['pPqy2GYj2oU', 2807, 3074, "炎 Piano ver."],
        ['pPqy2GYj2oU', 3449, 3665, "時ノ雨、最終戦争"],
        ['pPqy2GYj2oU', 3848, 4214, "終わりの世界から"],
        ['pPqy2GYj2oU', 4491, 4569, "ミレナリオ Acapella"],
        ['pPqy2GYj2oU', 4708, 5054, "オレンジ"],
        ['pPqy2GYj2oU', 5215, 5479, "たぶん"],
        ['pPqy2GYj2oU', 5735, 6011, "Sincerely"],
        // ['pPqy2GYj2oU', 6098, 6267, "夜もすがら君想ふ ED"],

        // 2020/12/20 fate限定歌枠❗ sing a song
        ['BP8zmIZl5w4', 116, 223, "to the beginning"],
        ['BP8zmIZl5w4', 464, 710, "Oath Sign"],
        ['BP8zmIZl5w4', 1002, 1291, "MEMORIA"],
        ['BP8zmIZl5w4', 1461, 1722, "空は高く風は歌う"],
        ['BP8zmIZl5w4', 1916, 2171, "ideal white"],
        ['BP8zmIZl5w4', 2326, 2555, "Brave Shine"],
        ['BP8zmIZl5w4', 2662, 2972, "LAST STARDUST"],
        // ['BP8zmIZl5w4', 3093, 3370, "英雄 運命の詩"], //New1/3
        ['BP8zmIZl5w4', 3540, 3774, "ASH"],
        // ['BP8zmIZl5w4', 3947, 4262, "花の唄"], //New12/31
        // ['BP8zmIZl5w4', 4332, 4608, "I beg you"], //New12/31
        // ['BP8zmIZl5w4', 4935, 5236, "春はゆく"], //New12/31
        // ['BP8zmIZl5w4', 5364, 5534, "夜もすがら君想ふ ED"],

        // 歌ってみた Snow halation
        ['Y-EVxJhfsfE', 0, 0, "Snow halation"],

        // 2020/12/15 今まで謎に消された歌😂＆音源ない歌アカペラで歌う
        ['svQwwn4qh6c', 366, 586, "花に亡霊 Acapella"],
        ['svQwwn4qh6c', 777, 1057, "ユメセカイ Acapella"],
        ['svQwwn4qh6c', 1294, 1576, "ロミオとシンデレラ Acapella"],
        ['svQwwn4qh6c', 1684, 1873, "エウテルペ Acapella"],
        ['svQwwn4qh6c', 1990, 2229, "Departures〜あなたにおくるアイの歌〜 Acapella"],
        ['svQwwn4qh6c', 2438, 2792, "ノーザンクロス Acapella"],
        ['svQwwn4qh6c', 2917, 3032, "Giraffe Blues Acapella"],
        ['svQwwn4qh6c', 3133, 3410, "たった1つの想い Acapella"],
        ['svQwwn4qh6c', 3827, 4079, "VOICE Acapella"],
        ['svQwwn4qh6c', 5155, 5437, "シルシ Acapella"],
        ['svQwwn4qh6c', 5529, 5684, "夜もすがら君想ふ Acapella ED"],

        // 2020/12/13 🎂お誕生日パーティー開催🎉
        // ['jHeW6Wm0zK4', 240, 513, "いけないボーダーライン"], //New1/10
        ['jHeW6Wm0zK4', 614, 818, "翼"],
        ['jHeW6Wm0zK4', 941, 1201, "月灯り"],
        ['jHeW6Wm0zK4', 1328, 1646, "trust you"],
        // ['jHeW6Wm0zK4', 1782, 2057, "Sincerely"], //New12/22
        ['jHeW6Wm0zK4', 2170, 2449, "トライアングラー"],
        ['jHeW6Wm0zK4', 2614, 2982, "鳥の詩"],
        ['jHeW6Wm0zK4', 3051, 3411, "一番の宝物"],
        // ['jHeW6Wm0zK4', 3496, 3773, "Shangri-La"], //New12/31
        ['jHeW6Wm0zK4', 3858, 4171, "名前のない怪物"],
        // ['jHeW6Wm0zK4', 4312, 4561, "Rising Hope"], //New12/27

        // 歌ってみた おねがいダーリン
        ['dG8YSoTpIjw', 0, 0, "おねがいダーリン"],

        // 2020/12/11 スタジオジブリ作品限定歌枠✨Sing a song
        // ['zcMbtIp4ugU', 0, 0, "さんぽ"], //消除
        ['zcMbtIp4ugU', 563, 803, "風の谷のナウシカ"],
        ['zcMbtIp4ugU', 953, 1132, "ルージュの伝言"],
        ['zcMbtIp4ugU', 1185, 1372, "やさしさに包まれたなら"],
        ['zcMbtIp4ugU', 1524, 1686, "崖の上のポニョ"],
        ['zcMbtIp4ugU', 1912, 2164, "となりのトトロ"],
        ['zcMbtIp4ugU', 2709, 2921, "いつも何度でも"],
        ['zcMbtIp4ugU', 3082, 3310, "いのちの名前"],
        // ['zcMbtIp4ugU', 0, 0, "もののけ姫"], //消除
        ['zcMbtIp4ugU', 3537, 3736, "君をのせて"],
        ['zcMbtIp4ugU', 3880, 4082, "Arrietty's Song"],
        ['zcMbtIp4ugU', 4252, 4528, "風になる"],
        ['zcMbtIp4ugU', 4615, 4844, "カントリー・ロード"],
        // ['zcMbtIp4ugU', 4993, 5162, "夜もすがら君想ふ ED"],

        // 2020/12/6 題名５０音歌いきるまで終われまてん💜Sing a song
        ['1pnlXQIswws', 320, 590, "I will..."],
        ['1pnlXQIswws', 619, 830, "インフェルノ"],
        // ['1pnlXQIswws', 619, 830, "打上花火"], //消除
        // ['1pnlXQIswws', 995, 1309, "ETERNAL BLAZE"], //New12/31
        ['1pnlXQIswws', 1403, 1667, "オリオンをなぞる"],
        ['1pnlXQIswws', 1730, 1997, "カラフル"],
        ['1pnlXQIswws', 2035, 2309, "キセキ"],
        ['1pnlXQIswws', 2376, 2610, "黒毛和牛上塩タン焼680円"],
        ['1pnlXQIswws', 2677, 2855, "檄！帝国華撃団"],
        ['1pnlXQIswws', 2929, 3203, "God Knows..."],
        ['1pnlXQIswws', 3298, 3551, "残酷な天使のテーゼ"],
        ['1pnlXQIswws', 3690, 3941, "シュガーソングとビターステップ"],
        ['1pnlXQIswws', 4004, 4248, "Starry Wish"],
        ['1pnlXQIswws', 4300, 4581, "前前前世"],
        ['1pnlXQIswws', 4612, 4863, "空色デイズ"],
        ['1pnlXQIswws', 4916, 5142, "だってアタシのヒーロー。"],
        ['1pnlXQIswws', 5182, 5423, "CheerS"],
        ['1pnlXQIswws', 5463, 5704, "ツキアカリのミチシルベ"],
        ['1pnlXQIswws', 5773, 6022, "Departures〜あなたにおくるアイの歌〜"],
        // ['1pnlXQIswws', 6072, 6324, "となりのトトロ"], //New12/11
        ['1pnlXQIswws', 6402, 6659, "ないものねだり"],
        ['1pnlXQIswws', 6697, 6787, "にめんせい☆ウラオモテライフ"],
        ['1pnlXQIswws', 6849, 7072, "すーぱーぬこになりたい"],
        ['1pnlXQIswws', 7115, 7385, "猫"],
        ['1pnlXQIswws', 7458, 7767, "ノーザンクロス"],
        ['1pnlXQIswws', 8920, 9185, "破滅の純情"],
        ['1pnlXQIswws', 9252, 9483, "ヒトリゴト"],
        // ['1pnlXQIswws', 9627, 9951, "フリージア"],
        ['1pnlXQIswws', 10051, 10296, "Baby Sweet Berry Love"],
        // ['1pnlXQIswws', 10445, 10715, "炎"],
        ['1pnlXQIswws', 10818, 11155, "My Dearest"],
        ['1pnlXQIswws', 11238, 11509, "三日月"],
        ['1pnlXQIswws', 11557, 11727, "ムーンライト伝説"],
        ['1pnlXQIswws', 11796, 12064, "メリッサ"],
        ['1pnlXQIswws', 12140, 12408, "もうそう えくすぷれす"],
        // ['1pnlXQIswws', 12622, 12809, "やさしさに包まれたなら"], //New12/11
        ['1pnlXQIswws', 12904, 13173, "ユキトキ"],
        // ['1pnlXQIswws', 13261, 13527, "夜に駆ける"],
        // ['1pnlXQIswws', 13600, 13900, "ライオン"], //New12/31
        ['1pnlXQIswws', 14133, 14380, "流星"],
        ['1pnlXQIswws', 14500, 14596, "ルンがピカッと光ったら"],
        ['1pnlXQIswws', 14742, 14965, "RESISTER"],
        ['1pnlXQIswws', 15147, 15426, "ロミオとシンデレラ"],
        ['1pnlXQIswws', 15583, 15870, "What 'bout my star?"],
        ['1pnlXQIswws', 16021, 16302, "創聖のアクエリオン"],

        // 久遠たまのパドルパドル
        // ['4h8b19OyRqM', 0, 0, "久遠たまのパドルパドル"],

        // 2020/12/4 ボカロをうたう！エフェクト多様？！Sing a song
        ['tXY_4qh_Hbc', 146, 344, "ブリキノダンス"],
        ['tXY_4qh_Hbc', 504, 717, "ジャンキーナイトタウンオーケストラ"],
        ['tXY_4qh_Hbc', 797, 1029, "ハッピーシンセサイザ"],
        ['tXY_4qh_Hbc', 1144, 1314, "Booo!"],
        ['tXY_4qh_Hbc', 1471, 1735, "シリョクケンサ"],
        ['tXY_4qh_Hbc', 2034, 2301, "フラジール"],
        ['tXY_4qh_Hbc', 2408, 2665, "メルト"],
        ['tXY_4qh_Hbc', 2781, 2988, "彗星ハネムーン"],
        ['tXY_4qh_Hbc', 3065, 3315, "アイロニ"],
        ['tXY_4qh_Hbc', 3409, 3674, "地球最後の告白を"],
        ['tXY_4qh_Hbc', 3800, 4069, "サリシノハラ"],
        ['tXY_4qh_Hbc', 4146, 4446, "会いたい"],
        ['tXY_4qh_Hbc', 4582, 4795, "六兆年と一夜物語"],
        // ['tXY_4qh_Hbc', 4942, 5152, "アンノウン・マザーグース"], //原曲消除一半
        ['tXY_4qh_Hbc', 5320, 5554, "夜もすがら君想ふ"],

        // 歌ってみた 僕らの戦場
        ['AaIF6Aobf7g', 0, 0, "僕らの戦場"],

        // 2020/11/29 新しい曲ありの歌枠！！Sing a song
        ['2KMm0BPu640', 333, 588, "Butter-Fly"],
        // ['2KMm0BPu640', 734, 904, "ムーンライト伝説"],
        // ['2KMm0BPu640', 1072, 1342, "メリッサ"], //New12/6
        ['2KMm0BPu640', 1483, 1687, "嘘"],
        // ['2KMm0BPu640', 1990, 2230, "ツキアカリのミチシルベ"], //New12/6
        ['2KMm0BPu640', 2336, 2602, "sugar sweet nightmare"],
        ['2KMm0BPu640', 2794, 3077, "打上花火"],
        ['2KMm0BPu640', 3151, 3408, "sister's noise"],
        ['2KMm0BPu640', 3626, 3887, "LEVEL5"],
        // ['2KMm0BPu640', 4103, 4354, "空色デイズ"], //New12/6
        ['2KMm0BPu640', 4540, 4810, "ANIMA"],
        // ['2KMm0BPu640', 5170, 5432, "破滅の純情"], //New12/6
        ['2KMm0BPu640', 5797, 6090, "時を刻む唄"],
        // ['2KMm0BPu640', 6185, 6354, "夜もすがら君想ふ ED"],

        // 2020/11/27 LiSAさんの歌を歌いまくる✨Sing a song
        ['W7v2rfo0PnE', 317, 595, "Catch the Moment"],
        // ['W7v2rfo0PnE', 681, 969, "ROCK-mode '18"], //New12/31
        // ['W7v2rfo0PnE', 1136, 1373, "紅蓮華"],
        ['W7v2rfo0PnE', 1509, 1783, "from the edge"],
        // ['W7v2rfo0PnE', 1977, 2247, "炎"],
        // ['W7v2rfo0PnE', 2357, 2603, "Oath Sign"], //New/12/20
        // ['W7v2rfo0PnE', 2685, 2920, "ASH"], //New/12/20
        // ['W7v2rfo0PnE', 3093, 3370, "シルシ"], //New12/31
        ['W7v2rfo0PnE', 3561, 3782, "ADAMAS"],
        // ['W7v2rfo0PnE', 3892, 4182, "unlasting"], //New12/31
        ['W7v2rfo0PnE', 4307, 4501, "夜咄ディセイブ"],
        ['W7v2rfo0PnE', 4695, 4937, "愛錠"],
        // ['W7v2rfo0PnE', 5121, 5367, "Rising Hope"], //New12/13
        // ['W7v2rfo0PnE', 5572, 5803, "だってアタシのヒーロー。"], //New12/6
        // ['W7v2rfo0PnE', 5923, 6168, "crossing field"], //New1/3
        // ['W7v2rfo0PnE', 6244, 6413, "夜もすがら君想ふ ED"],

        // 歌ってみた 紅蓮華 GURENGE English Ver.
        ['MlTtKZTaGsk', 0, 0, "紅蓮華 GURENGE English Ver."],

        // 2020/11/22 珍しのJPOP歌枠！Singing JPOP
        ['R0DfGvRL6mw', 350, 609, "チェリー"],
        ['R0DfGvRL6mw', 694, 997, "ハナミズキ"],
        ['R0DfGvRL6mw', 1169, 1385, "やさしいキスをして"],
        ['HrsBo3O5BnI', 0, 0, "会いたくて 会いたくて"], //原片消除
        // ['R0DfGvRL6mw', 1551, 1770, "if…"], //New12/31
        ['4i2vBLWKFkU', 0, 0, "if"], //原片消除
        ['R0DfGvRL6mw', 2053, 2321, "M"],
        ['R0DfGvRL6mw', 2438, 2689, "Butterfly"],
        ['R0DfGvRL6mw', 2882, 3133, "かたちあるもの"],
        ['R0DfGvRL6mw', 3206, 3508, "プラネタリウム"],
        ['R0DfGvRL6mw', 3559, 3895, "雪の華"],
        ['R0DfGvRL6mw', 4009, 4236, "会いたかった"],
        ['R0DfGvRL6mw', 4390, 4748, "ありがとう"],
        // ['R0DfGvRL6mw', 4836, 5105, "猫"], //New12/6
        ['R0DfGvRL6mw', 5329, 5683, "YELL"],
        // ['R0DfGvRL6mw', 5717, 5886, "夜もすがら君想ふ ED"],

        // 2020/11/19 アニソンで突っ走れっーー！
        // ['CIhkUQWrAI0', 349, 601, "残酷な天使のテーゼ"], //New12/6
        ['CIhkUQWrAI0', 870, 1193, "魂のルフラン"],
        ['CIhkUQWrAI0', 1553, 1822, "コネクト"],
        ['CIhkUQWrAI0', 2065, 2376, "secret base ～君がくれたもの～"],
        // ['CIhkUQWrAI0', 2483, 2760, "God Knows..."], //New12/6
        ['CIhkUQWrAI0', 2880, 3136, "恋愛サーキュレーション"],
        ['CIhkUQWrAI0', 3325, 3665, "君の知らない物語"],
        // ['CIhkUQWrAI0', 3814, 4051, "unravel"], //New12/31
        ['CIhkUQWrAI0', 4184, 4413, "星間飛行"],
        // ['CIhkUQWrAI0', 4568, 4868, "ライオン"], //New12/6
        // ['CIhkUQWrAI0', 5066, 5300, "紅蓮華"],
        //['CIhkUQWrAI0', 5412, 5581, "夜もすがら君想ふ ED"],

        // 歌ってみた あ・え・い・う・え・お・あお!!
        ['fZR3zr2R5Qc', 0, 0, "あ・え・い・う・え・お・あお!!"],

        // 久遠たまの日常6
        // ['1OrD9G4rtn8', 0, 0], 

        // 2020/11/15 アニソンだらけの歌枠
        ['DOoy0iNjGsQ', 465, 713, "狂乱 Hey Kids!!"],
        // ['DOoy0iNjGsQ', 1027, 1264, "CheerS"], //New12/6
        // ['DOoy0iNjGsQ', 1510, 1800, "MEMORIA"], //New/12/20
        ['DOoy0iNjGsQ', 1968, 2229, "カーストルーム"],
        ['DOoy0iNjGsQ', 2458, 2731, "Rally Go Round"],
        // ['DOoy0iNjGsQ', 2936, 3203, "ユキトキ"], //New12/6
        // ['DOoy0iNjGsQ', 3379, 3673, "Angelic Angel"], //New12/31
        ['DOoy0iNjGsQ', 3762, 4015, "Snow halation"],
        // ['DOoy0iNjGsQ', 4114, 4377, "オリオンをなぞる"], //New12/6
        ['DOoy0iNjGsQ', 4615, 4867, "only my railgun"],
        // ['DOoy0iNjGsQ', 5010, 5257, "Rising Hope"], //New11/27
        // ['DOoy0iNjGsQ', 5295, 5464, "夜もすがら君想ふ ED"],

        // 2020/11/13 『ほぼ』ボカロ限定歌枠開催
        ['k-muid-bJNs', 300, 583, "からくりピエロ"],
        ['k-muid-bJNs', 715, 956, "フィクサー"],
        ['Udkzy2w0AMA', 0, 0, "厨病激発ボーイ"], //原片消除
        ['k-muid-bJNs', 1155, 1429, "チルノのパーフェクトさんすう教室"],
        ['k-muid-bJNs', 1524, 1847, "rain stops, good-bye"],
        ['k-muid-bJNs', 1883, 2057, "雨き声残響"],
        // ['k-muid-bJNs', 2145, 2422, "ロミオとシンデレラ"], //New12/6
        ['k-muid-bJNs', 2559, 2823, "右肩の蝶"],
        ['iYorDqR3WFQ', 0, 0, "ホワイトハッピー"], //原片消除
        // ['k-muid-bJNs', 3025, 3254, "病名は愛だった"], //New12/31
        ['k-muid-bJNs', 3340, 3588, "愛して愛して愛して"],
        ['k-muid-bJNs', 3688, 3954, "ラプンツェル"],
        ['k-muid-bJNs', 4105, 4332, "人生リセットボタン"],
        ['k-muid-bJNs', 4441, 4660, "おじゃま虫"],
        // ['k-muid-bJNs', 4949, 5084, "KING"], //New12/31
        ['k-muid-bJNs', 5406, 5608, "ボッカデラベリタ"],
        // ['k-muid-bJNs', 5748, 0, "夜もすがら君想ふ ED"],

        // 作業用BGM アニソン歌枠メドレー
        // ['uAsuhjimkrA', 0, 0 "作業用BGMアニソン歌枠メドレー１"],

        // 2020/11/8 定期歌枠の日！みんなで楽しもうねっ❣
        // ['P2lQSYdJLao', 528, 805, "白日"], //New12/27
        ['P2lQSYdJLao', 978, 1256, "変わらないもの"],
        // ['P2lQSYdJLao', 1478, 1766, "ROCK-mode '18"], //New11/27
        // ['P2lQSYdJLao', 1838, 2049, "インフェルノ"], //New12/6
        ['P2lQSYdJLao', 2366, 2459, "侵略ノススメ"],
        ['P2lQSYdJLao', 2630, 2735, "打打打打打打打打打打"],
        ['P2lQSYdJLao', 2903, 3139, "恋は渾沌の隷也"],
        ['P2lQSYdJLao', 3318, 3538, "Let It Go"],
        // ['P2lQSYdJLao', 3840, 4110, "I will..."], //New12/6
        // ['P2lQSYdJLao', 4334, 4588, "Here"], //New12/31
        // ['P2lQSYdJLao', 4682, 4953, "炎"],
        // ['P2lQSYdJLao', 5098, 5408, "ノーザンクロス"], //New12/6
        // ['P2lQSYdJLao', 5587, 5869, "創聖のアクエリオン"], //New12/6
        // ['P2lQSYdJLao', 5930, 6099, "夜もすがら君想ふ ED"],

        // 歌ってみた フリージア
        ['ksy-vbtJBik', 0, 0, "フリージア"],

        // 2020/11/1 アニソンはいいぞぉぉ…！
        ['meMBuDPHUaM', 397, 646, "träumerei"],
        ['meMBuDPHUaM', 832, 1155, "茜さす"],
        // ['meMBuDPHUaM', 1352, 1669, "trust you"], //New12/13
        ['meMBuDPHUaM', 1948, 2147, "Sparkling Daydream"],
        // ['meMBuDPHUaM', 2300, 2534, "ASH"], //New11/27
        // ['meMBuDPHUaM', 2631, 2892, "空は高く風は歌う"], //New/12/20
        // ['meMBuDPHUaM', 3023, 3270, "oath sign"], //New11/27
        ['meMBuDPHUaM', 3522, 3741, "嘘の火花"],
        // ['meMBuDPHUaM', 4056, 4306, "シュガーソングとビターステップ"], //New12/6
        // ['meMBuDPHUaM', 4437, 4704, "炎"],
        ['meMBuDPHUaM', 4988, 5240, "紅蓮華 THE FIRST TAKE バージョン"],
        // ['meMBuDPHUaM', 5310, 5480, "夜もすがら君想ふ ED"],

        // 歌ってみた Happy Halloween
        ['lx7Hh8rHLxE', 0, 0, "Happy Halloween"],

        // 2020/10/31 １年に１度のHalloweenParty
        ['kw1WFhhzInY', 2302, 2554, "Mrs.Pumpkinの滑稽な夢"],
        ['kw1WFhhzInY', 2725, 2989, "Monster"],
        ['kw1WFhhzInY', 3235, 3531, "サラバ、愛しき悲しみたちよ"],
        ['kw1WFhhzInY', 4083, 4308, "おジャ魔女カーニバル"],
        ['kw1WFhhzInY', 4399, 4648, "Crazy Party Night ～ぱんぷきんの逆襲～"],

        // 久遠たまの日常5
        // ['j2mC3Ws0OAE', 0, 0],

        // 2020/10/25 本格的にボカロ攻め
        // ['ykcroeCICx8', 351, 533, "ルマ"], //New12/31
        ['ykcroeCICx8', 676, 904, "虎視眈々"],
        ['ykcroeCICx8', 1016, 1277, "ビタースウィート"],
        ['ykcroeCICx8', 1422, 1668, "ファンサ"],
        ['ykcroeCICx8', 1748, 1945, "ドレミファロンド"],
        ['ykcroeCICx8', 2052, 2242, "ダンスロボットダンス"],
        ['ykcroeCICx8', 2326, 2526, "太陽系デスコ"],
        ['ykcroeCICx8', 2727, 2946, "恋愛裁判"],
        ['ykcroeCICx8', 3103, 3317, "妄想税"],
        ['ykcroeCICx8', 3483, 3681, "威風堂々"],
        ['ykcroeCICx8', 3795, 3994, "ギガンティックO.T.N"],
        ['ykcroeCICx8', 4040, 4243, "聖槍爆裂ボーイ"],
        ['ykcroeCICx8', 4362, 4605, "バレリーコ"],
        ['ykcroeCICx8', 4729, 5015, "初音ミクの消失"],
        ['ykcroeCICx8', 5358, 5562, "ヒバナ"],
        ['ykcroeCICx8', 5748, 5980, "劣等上等"],
        // ['ykcroeCICx8', 6051, 6221, "夜もすがら君想ふ ED"],

        // 久遠たまの日常４
        // ['dNEWWyYlNio', 0, 0],

        // 2020/10/18 ！たまソングフィーバー！
        // ['ETjgki1sSgc', 578, 855, "白日"], //New11/8
        ['ETjgki1sSgc', 1114, 1367, "Lemon"],
        ['ETjgki1sSgc', 1591, 1880, "アイネクライネ"],
        ['ETjgki1sSgc', 2189, 2431, "一番の宝物 ~Yui final ver.~"],
        // ['ETjgki1sSgc', 2570, 2926, "うたかた花火"], //New12/27
        // ['ETjgki1sSgc', 2995, 3269, "Rally Go Round"], //New11/15
        // ['ETjgki1sSgc', 3379, 3628, "only my railgun"], //New11/15
        ['ETjgki1sSgc', 3855, 4067, "ハレ晴レユカイ"],
        // ['ETjgki1sSgc', 4328, 4595, "カラフル"], //New12/6
        ['ETjgki1sSgc', 4750, 4986, "magnet"],
        ['ETjgki1sSgc', 5189, 5480, "だれかの心臓になれたなら"],
        ['ETjgki1sSgc', 5673, 5905, "daze"],
        // ['ETjgki1sSgc', 5950, 0, "夜もすがら君想ふ ED"],

        // 歌ってみた 炎
        ['a4thI28v_SM', 0, 0, "炎"],

        // 2020/10/14 どうしても言いたいチーズケーキの話
        // ['-5xm35kLZLw', 1030, 1210, "Fallen Short Acapella"],
        // ['-5xm35kLZLw', 1222, 0, "炎 Short Acapella"], //New10/17

        // 久遠たまの日常３
        // ['Px3JIjwkuok', 0, 0],

        // 2020/10/11 ２万人感謝も込めてたくさん歌います
        // ['mvmik-rA-I4', 463, 733, "猫"], //New11/22
        // ['mvmik-rA-I4', 910, 1148, "渡月橋 ～君 想ふ～"], //New12/31
        // ['mvmik-rA-I4', 1280, 1551, "三日月"], //New12/6
        // ['mvmik-rA-I4', 1660, 1854, "ハルジオン"], //New1/10
        ['mvmik-rA-I4', 1993, 2291, "ライラック"],
        // ['mvmik-rA-I4', 2428, 2766, "My Dearest"], //New12/6
        ['mvmik-rA-I4', 2878, 3175, "平行線"],
        ['mvmik-rA-I4', 3332, 3563, "拍手喝采歌合"],
        // ['mvmik-rA-I4', 3796, 4053, "僕らの戦場"], //New12/3
        // ['mvmik-rA-I4', 4248, 4522, "Sincerely"], //New12/13
        // ['mvmik-rA-I4', 4739, 4983, "忘れじの言の葉"], //New12/22
        ['mvmik-rA-I4', 5131, 5348, "ダダダダ天使"],
        // ['mvmik-rA-I4', 5532, 5901, "鳥の詩"], //New12/13
        // ['mvmik-rA-I4', 6189, 6503, "ETERNAL BLAZE"], //New12/6
        // ['mvmik-rA-I4', 6580, 0, "夜もすがら君想ふ ED"],

        // 歌ってみた ダーリンダンス
        ['ZXNvteUXoZQ', 0, 0, "ダーリンダンス"],

        // 歌ってみた 夜に駆ける
        ['fOLD2Om-ino', 0, 0, "夜に駆ける"],

        // 久遠たまの日常2
        // ['qRNSouvHncw', 0, 0],

        // 2020/10/4 明日からのエネルギーチャージ！！
        // ['eD6LNaZmj1w', 311, 522, "インフェルノ"], //New11/8
        // ['eD6LNaZmj1w', 637, 862, "おジャ魔女カーニバル"], //New10/31
        // ['eD6LNaZmj1w', 968, 1196, "Paradisus-Paradoxum"], //New12/27
        // ['eD6LNaZmj1w', 1477, 1745, "ANIMA"], //New11/29
        ['eD6LNaZmj1w', 1935, 2175, "Time after time ～花舞う街で～"],
        // ['eD6LNaZmj1w', 2292, 2555, "アイのシナリオ"], //New1/10
        // ['eD6LNaZmj1w', 2688, 2940, "Here"], //New11/8
        // ['eD6LNaZmj1w', 3104, 3357, "カワキヲアメク"], //New12/31
        // ['eD6LNaZmj1w', 3498, 3842, "オレンジ"], //New12/22
        // ['eD6LNaZmj1w', 3961, 4198, "unravel"], //New11/19
        // ['eD6LNaZmj1w', 4373, 4654, "創聖のアクエリオン"], //New11/8
        // ['eD6LNaZmj1w', 4878, 5163, "前前前世"], //New12/6
        ['eD6LNaZmj1w', 5519, 5723, "カタオモイ"],
        // ['eD6LNaZmj1w', 6053, 6151, "ノーザンクロス Short Acapella Full9/27"],
        // ['eD6LNaZmj1w', 6246, 6519, "いけないボーダーライン"], //New12/13
        // ['eD6LNaZmj1w', 6776, 7052, "God Knows..."], //New11/19
        // ['eD6LNaZmj1w', 7284, 7529, "Rising Hope"], //New11/15
        // ['eD6LNaZmj1w', 7729, 0, "夜もすがら君想ふ ED"],

        // 2020/10/2 あたしの歌を聞け～っ！
        ['RiY3B0_H0hk', 262, 542, "トライアングラー fight on stage"],
        // ['RiY3B0_H0hk', 640, 869, "星間飛行"], //New11/19
        ['RiY3B0_H0hk', 949, 1272, "放課後オーバーフロウ"],
        ['RiY3B0_H0hk', 1355, 1637, "オベリスク"],
        ['RiY3B0_H0hk', 1706, 2019, "禁断のエリクシア"],
        ['RiY3B0_H0hk', 2098, 2375, "ホシキラ"],
        ['RiY3B0_H0hk', 2488, 2844, "ユニバーサル・バニー"],
        ['RiY3B0_H0hk', 2922, 3168, "インフィニティ"],
        ['RiY3B0_H0hk', 3293, 3512, "Welcom To My FanClub's Night!"],
        ['RiY3B0_H0hk', 3593, 3939, "射手座☆午後九時Don't be late"],
        ['RiY3B0_H0hk', 4047, 4338, "虹いろ・クマクマ"],
        ['RiY3B0_H0hk', 4413, 4737, "ダイアモンドクレバス"],
        ['RiY3B0_H0hk', 4864, 5298, "サヨナラノツバサ ～the end of triangle"],
        // ['RiY3B0_H0hk', 5417, 5717, "ライオン"], //New11/19
        // ['RiY3B0_H0hk', 5839, 0, "夜もすがら君想ふ ED"],

        // 2020/10/1 おひさしぶり！ふぉるがいずくん！
        // ['t2UuIVy2ZHQ', 4055, 4304, "シュガーソングとビターステップ"], //New11/1
        // ['t2UuIVy2ZHQ', 4592, 4846, "風になる"], //New12/11

        // (這一回音量過小)
        // // 2020/9/30 ボカロ限定でたくさん歌う！
        // ['uaKAOYzt5cA', 394, 607, "ロストワンの号哭"],
        // // ['uaKAOYzt5cA', 838, 1068, "ハッピーシンセサイザ"], //New12/4
        // ['uaKAOYzt5cA', 1243, 1442, "アサガオの散る頃に"],
        // // ['uaKAOYzt5cA', 1551, 1817, "心做し"], //New12/22
        // // ['uaKAOYzt5cA', 1904, 2074, "Booo!"], //New12/4
        // ['uaKAOYzt5cA', 2200, 2458, "拝啓ドッペルゲンガー"],
        // ['uaKAOYzt5cA', 2589, 2778, "東京テディベア"],
        // ['uaKAOYzt5cA', 2904, 3148, "再教育"],
        // ['uaKAOYzt5cA', 3252, 3505, "ヒビカセ"],
        // ['uaKAOYzt5cA', 3607, 3833, "ロキ"],
        // ['uaKAOYzt5cA', 4011, 4225, "深海少女"],
        // // ['uaKAOYzt5cA', 4320, 4582, "夜に駆ける"], //New10/6
        // ['uaKAOYzt5cA', 4762, 4950, "天ノ弱"],
        // // ['uaKAOYzt5cA', 5279, 5645, "終わりの世界から"], //New12/22
        // // ['uaKAOYzt5cA', 5751, 5964, "六兆年と一夜物語"], //New12/4
        // // ['uaKAOYzt5cA', 6081, 0, "夜もすがら君想ふ ED"],

        // 2020/9/29 定期もぐもぐ雑談の巻
        // ['6iMAjF61q7w', 940, 0, "Sincerely Short Acapella"],
        // ['6iMAjF61q7w', 1008, 0, "courage Short Acapella"],
        // ['6iMAjF61q7w', 1023, 0, "鳥の詩 Short Acapella"],
        // ['6iMAjF61q7w', 1184, 0, "お願いマッスル Short Acapella"],
        // ['6iMAjF61q7w', 4343, 0, "Departures〜あなたにおくるアイの歌〜 Short Acapella"],
        // ['6iMAjF61q7w', 4430, 0, "エウテルペ 〜Silence〜 Short Acapella"],
        // ['6iMAjF61q7w', 4601, 0, "ダイアモンド クレバス Short Acapella"],

        // 久遠たまの日常
        // ['a7vKI57G7_U', 0, 0],

        // 2020/9/27 日曜のたまソング
        // ['Q06Zq_3il9o', 296, 616, "瞬き"], //New11/6
        // ['Q06Zq_3il9o', 759, 1032, "月光花"], //New12/31
        // ['Q06Zq_3il9o', 1148, 1462, "LAST STARDUST"], //New/12/20
        // ['Q06Zq_3il9o', 1563, 1605, "君色シグナル"], //半消除
        // ['Q06Zq_3il9o', 1804, 2081, "七転八起☆至上主義!"], //New12/27
        // ['Q06Zq_3il9o', 2217, 2458, "ツキアカリのミチシルベ"], //New11/29
        // ['Q06Zq_3il9o', 2579, 2859, "ロミオとシンデレラ"], //New11/13
        // ['Q06Zq_3il9o', 2971, 3280, "ノーザンクロス"], //New11/8
        ['Q06Zq_3il9o', 3400, 3640, "気まぐれロマンティック"],
        // ['Q06Zq_3il9o', 3762, 4110, "あたしが隣にいるうちに"], //New1/10
        // ['Q06Zq_3il9o', 4228, 4482, "Snow halation"], //New11/15
        // ['Q06Zq_3il9o', 4597, 4776, "檄！帝国華撃団"], //New12/6
        ['Q06Zq_3il9o', 4901, 5191, "THERE IS A REASON"],
        // ['Q06Zq_3il9o', 5526, 5781, "恋愛サーキュレーション"], //New11/19
        // ['Q06Zq_3il9o', 5839, 0, "夜もすがら君想ふ ED"],

        // 歌ってみた 紅蓮華
        ['GDOQTShjTQs', 0, 0, "紅蓮華"],

        // 2020/9/25 アニメ縛りのスタートはやっぱりこれだっ！
        // ['Y6EMzMzUjKQ', 213, 457, "crossing field"], //New11/27
        ['Y6EMzMzUjKQ', 561, 848, "ユメセカイ"],
        ['Y6EMzMzUjKQ', 967, 1244, "INNOCENCE"],
        ['Y6EMzMzUjKQ', 1366, 1625, "Overfly"],
        ['Y6EMzMzUjKQ', 1706, 1956, "IGNITE"],
        ['Y6EMzMzUjKQ', 2073, 2318, "courage"],
        // ['Y6EMzMzUjKQ', 2426, 2702, "シルシ"], //New11/27
        // ['Y6EMzMzUjKQ', 2850, 3127, "Catch the Moment"], //New11/27
        // ['Y6EMzMzUjKQ', 3223, 3469, "流星"], //New12/6
        // ['Y6EMzMzUjKQ', 3563, 3786, "ADAMAS"], //New11/27
        // ['Y6EMzMzUjKQ', 3959, 4202, "アイリス"], //New1/3
        // ['Y6EMzMzUjKQ', 4282, 4505, "RESISTER"], //New12/6
        // ['Y6EMzMzUjKQ', 4618, 4907, "unlasting"], //New11/27
        // ['Y6EMzMzUjKQ', 5302, 5370, "ANIMA Short"], //New10/4
        // ['Y6EMzMzUjKQ', 5493, 5761, " I will..."], //New11/8
        // ['Y6EMzMzUjKQ', 5896, 0, "夜もすがら君想ふ ED"],

        // 2020/9/20 たまソング聴いていきませんか？
        // ['MRZk4LZ589w', 302, 542, "Mela!"], //New12/27
        // ['MRZk4LZ589w', 677, 914, "革命デュアリズム"], //New1/3
        // ['MRZk4LZ589w', 1042, 1293, "白金ディスコ"], //New12/27
        // ['MRZk4LZ589w', 1589, 1797, "嘘"], //New11/29
        // ['MRZk4LZ589w', 1965, 2204, "渡月橋～君 想ふ～"], //New10/11
        ['MRZk4LZ589w', 2310, 2547, "ピースサイン"],
        ['MRZk4LZ589w', 2663, 2917, "秒針を噛む"],
        // ['MRZk4LZ589w', 3035, 3266, "残酷な天使のテーゼ"], //New11/19
        ['MRZk4LZ589w', 3376, 3694, "Pretender"],
        // ['MRZk4LZ589w', 3837, 4136, "奏"], //New1/10
        // ['MRZk4LZ589w', 4231, 4532, "secret base ～君がくれたもの～"], //New11/19
        ['MRZk4LZ589w', 4635, 4853, "ブルーバード"],
        // ['MRZk4LZ589w', 4945, 5261, "魂のルフラン"], //New11/19
        ['MRZk4LZ589w', 5574, 5806, "シャルル"],
        // ['MRZk4LZ589w', 6013, 0, "夜もすがら君想ふ ED"],

        // 2020/9/18 アニソン祭りじゃ～！！
        ['IL4jXmjciOM', 252, 358, "Alchemy Short"],
        ['IL4jXmjciOM', 358, 428, "crow song Short"],
        ['IL4jXmjciOM', 428, 519, "Bravely You Short"],
        ['IL4jXmjciOM', 649, 758, "Little Busters! Short"],
        // ['IL4jXmjciOM', 862, 956, "Butter-fly Short"], //New11/29
        ['IL4jXmjciOM', 1059, 1158, "太陽曰く燃えよカオス Short"],
        ['IL4jXmjciOM', 1233, 1336, "Hacking to the Gate Short"],
        ['IL4jXmjciOM', 1483, 1577, "シリウス Short"],
        // ['IL4jXmjciOM', 1578, 1674, "流星 Short"], //New9/25
        ['IL4jXmjciOM', 1777, 1870, "Preserved Roses Short"],
        ['IL4jXmjciOM', 1957, 2046, "final phase Short"],
        ['IL4jXmjciOM', 2047, 2123, "nameless story Short"],
        // ['IL4jXmjciOM', 2276, 2365, "ASH Short"], //New11/1
        // ['IL4jXmjciOM', 2370, 2500, "MEMORIA Short"], //New11/15
        // ['IL4jXmjciOM', 2506, 2603, "英雄 運命の詩 Short"], //New/12/20
        // ['IL4jXmjciOM', 2729, 2818, "ヒトリゴト Short"], //New12/6
        // ['IL4jXmjciOM', 2956, 3075, "ダイアモンドクレバス Short"], //New10/2
        // ['IL4jXmjciOM', 3077, 3184, "トライアングラー fight on stage Short"], //New10/2
        // ['IL4jXmjciOM', 3273, 3366, "一度だけの恋なら Short"], //New11/6
        // ['IL4jXmjciOM', 3367, 3487, "Giraffe Blues Short"], //New12/15
        // ['IL4jXmjciOM', 3603, 3689, "KABANERI OF THE IRON FORTRESS Short"], //New1/3
        // ['IL4jXmjciOM', 3764, 3867, "Baby Sweet Berry Love Short"], //New12/6
        // ['IL4jXmjciOM', 3937, 4030, "君のせい Short"], //New1/3
        ['IL4jXmjciOM', 4191, 4312, "告白 Short"],
        // ['IL4jXmjciOM', 4314, 4480, "My Dearest Short"], //New10/11
        // ['IL4jXmjciOM', 4643, 4800, "RE:I AM Short"], //New1/3
        // ['IL4jXmjciOM', 4801, 4925, "trust you Short"], //New11/1
        // ['IL4jXmjciOM', 4928, 5028, "narrative Short"], //New1/3
        // ['IL4jXmjciOM', 5139, 5243, "träumerei Short"], //New11/1
        // ['IL4jXmjciOM', 5372, 5607, "紅蓮華"], //New9/26
        // ['IL4jXmjciOM', 5784, 0, "夜もすがら君想ふ ED"],

        // 歌ってみた My Soul,Your Beats!
        ['ekB9_dr65dQ', 0, 0, "My Soul,Your Beats! Short"],

        // 2020/9/13 日曜日の定期歌枠たくさん歌うぞ～！
        // ['T53Wjlbotug', 212, 499, "ROCK-mode '18"], //New11/8
        ['T53Wjlbotug', 667, 905, "千本桜"],
        ['T53Wjlbotug', 1239, 1517, "This game"],
        ['T53Wjlbotug', 1634, 1905, "Calc."],
        ['T53Wjlbotug', 2102, 2283, "ストリーミングハート"],
        // ['T53Wjlbotug', 2375, 2565, "おねがいダーリン"], //New12/13
        ['T53Wjlbotug', 2683, 2914, "回レ！雪月花"],
        ['T53Wjlbotug', 3076, 3297, "乙女解剖"],
        // ['T53Wjlbotug', 3424, 3620, "ブリキノダンス"], //New12/4
        ['T53Wjlbotug', 3680, 3904, "ロキ"], //New9/30
        // ['T53Wjlbotug', 3988, 4068, "unlasting Short"], //New9/25
        ['T53Wjlbotug', 4332, 4567, "プライド革命"],
        ['T53Wjlbotug', 5025, 5199, "アスノヨゾラ哨戒班"],
        // ['T53Wjlbotug', 5337, 0, "夜もすがら君想ふ ED"],

        //2020/9/11 金曜日のたまLIVE ※非公開(Private)
        // ['rIQ1wRsnnDE', 207, 0, "インフェルノ"], //New10/4
        // ['rIQ1wRsnnDE', 559, 0, "お願いマッスル"], //New9/29
        // ['rIQ1wRsnnDE', 911, 0, "courage"], //New9/29
        // ['rIQ1wRsnnDE', 1273, 0, "Sincerely"], //New10/11
        // ['rIQ1wRsnnDE', 1665, 0, "My Soul,Your Beats!"], //New9/14
        // ['rIQ1wRsnnDE', 2005, 0, "Starry Wish"], //New10/9メン限
        // ['rIQ1wRsnnDE', 2326, 0, "Paradisus-Paradoxum"], //New10/4
        // ['rIQ1wRsnnDE', 2912, 0, "Oath Sign"], //New11/1
        // ['rIQ1wRsnnDE', 3367, 0, "創聖のアクエリオン"], //New10/4
        // ['rIQ1wRsnnDE', 3844, 0, "Departures〜あなたにおくるアイの歌〜"], //New9/29
        // ['rIQ1wRsnnDE', 4176, 0, "鳥の詩"], //New10/11
        // ['rIQ1wRsnnDE', 4676, 0, "夜もすがら君想ふ ED"],

        // 2020/9/6 ついにこの日が来たぞ！！！！
        ['AxY3M8pYoXY', 202, 482, "Deal with the devil"],
        // ['AxY3M8pYoXY', 648, 912, "コネクト"], //New11/19
        // ['AxY3M8pYoXY', 1048, 1359, "only my railgun"], //New10/18
        ['AxY3M8pYoXY', 1475, 1567, "チカっとチカ千花っ♡"],
        // ['AxY3M8pYoXY', 1714, 1992, "創聖のアクエリオン"], //New10/4
        // ['AxY3M8pYoXY', 2077, 2367, "一番の宝物"], //New12/13
        // ['AxY3M8pYoXY', 2492, 2757, "Alchemy"], //New9/18
        ['AxY3M8pYoXY', 2886, 3094, "かくしん的☆めたまるふぉ〜ぜっ!"],
        ['AxY3M8pYoXY', 3244, 3511, "春擬き"],
        // ['AxY3M8pYoXY', 3547, 3798, "カワキヲアメク"], //New10/4
        // ['AxY3M8pYoXY', 3976, 4316, "射手座☆午後九時 Don't be late"], //New10/2
        // ['AxY3M8pYoXY', 4497, 4767, "いけないボーダーライン"], //New10/4
        // ['AxY3M8pYoXY', 4909, 5130, "ADAMAS"], //New9/25
        // ['AxY3M8pYoXY', 5197, 0, "夜もすがら君想ふ ED"],

        // 2020/9/4 鯖落ちからのゲリラ歌枠＞＜
        // ['_Ejha-aifWg', 530, 775, "ファンサ"], //New10/25
        ['_Ejha-aifWg', 973, 1219, "セツナトリップ"],
        // ['_Ejha-aifWg', 1332, 1608, "God knows..."], //New10/4
        ['_Ejha-aifWg', 1683, 1878, "ベノム"],
        // ['_Ejha-aifWg', 1993, 2258, "右肩の蝶"], //New11/13
        ['_Ejha-aifWg', 2578, 2662, "だから僕は音楽を辞めた Short"],
        ['_Ejha-aifWg', 2708, 2949, "ふわふわ時間"],
        // ['_Ejha-aifWg', 3048, 3182, "KING"], //New11/13
        ['_Ejha-aifWg', 3352, 3523, "グッバイ宣言"],
        // ['_Ejha-aifWg', 3753, 4064, "名前のない怪物"], //New12/13
        // ['_Ejha-aifWg', 4191, 0, "夜もすがら君想ふ ED"],

        // 歌ってみた ようこそジャパリパークへ 自己紹介
        ['MmuNPcSN50E', 0, 0, "ようこそジャパリパークへ 自己紹介"],

        // 2020/8/30 またまたリクエストを歌ってゆくぞー！！
        // ['U8nr6UR2f5k', 368, 646, "少女レイ"], //New11/6
        ['U8nr6UR2f5k', 774, 978, "ただ君に晴れ"],
        // ['U8nr6UR2f5k', 1073, 1387, "ETERNAL BLAZE"], //New10/11
        // ['U8nr6UR2f5k', 1509, 1757, "おちゃめ機能"], //New11/6
        ['U8nr6UR2f5k', 1911, 2104, "惑星ループ"],
        ['U8nr6UR2f5k', 2267, 2504, "PLATONIC GIRL"],
        // ['U8nr6UR2f5k', 2775, 2975, "ボッカデラベリタ"], //New11/13
        // ['U8nr6UR2f5k', 3073, 3415, "君の知らない物語"], //New11/19
        ['U8nr6UR2f5k', 3518, 3801, "打上花火"],
        // ['U8nr6UR2f5k', 4023, 0, "夜もすがら君想ふ ED"],

        // 2020/8/24 初歌枠！リクエストを歌ってゆくー！！
        ['EiDlaX-saHw', 318, 523, "ゴーストルール"],
        // ['EiDlaX-saHw', 666, 923, "このピアノでお前を8759632145回ぶん殴る"], //New12/31
        // ['EiDlaX-saHw', 1096, 1343, "夜に駆ける"], //New10/6
        // ['EiDlaX-saHw', 1538, 1753, "ダダダダ天使"], //New10/11
        // ['EiDlaX-saHw', 1872, 2085, "おじゃま虫"], //New11/13
        // ['EiDlaX-saHw', 2364, 2661, "ライオン"], //New10/2
        // ['EiDlaX-saHw', 2793, 3022, "星間飛行"], //New10/2
        // ['EiDlaX-saHw', 3235, 3481, "Rising Hope"], //New10/4
        // ['EiDlaX-saHw', 3709, 0, "夜もすがら君想ふ ED"],

        // 2020/8/22 GuildCQ所属、久遠たまです！
        // ['WNIcs_pdvEw', 2175, 2358, "ルマ"], //New10/25
        ['WNIcs_pdvEw', 2580, 2888, "夜明けと蛍"],
        // ['WNIcs_pdvEw', 3089, 3291, "ヒバナ"] //New10/25
        // ['WNIcs_pdvEw', 3582, 3815, "紅蓮華"], //New9/26
        // ['WNIcs_pdvEw', 3962, 0, "夜もすがら君想ふ ED"]
    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();