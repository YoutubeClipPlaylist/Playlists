var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function () {
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
     * ['VideoID',StartTime,EndTime]
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是正數。如果要從頭播放，輸入1
     * EndTime: 只能是正數。如果要播放至尾，輸入1
     * @type {*[]}
     */
    var newPlaylist = [
        //"2020/11/1 アニソンはいいぞぉぉ…！
        ['meMBuDPHUaM', 397, 646], //träumerei
        ['meMBuDPHUaM', 832, 1155], //茜さす
        ['meMBuDPHUaM', 1352, 1669], //trust you
        ['meMBuDPHUaM', 1948, 2147], //Sparkling Daydream
        ['meMBuDPHUaM', 2300, 2534], //ASH
        ['meMBuDPHUaM', 2631, 2892], //空は高く風は歌う
        ['meMBuDPHUaM', 3023, 3270], //oath sign
        ['meMBuDPHUaM', 3522, 3741], //嘘の火花
        ['meMBuDPHUaM', 4056, 4306], //シュガーソングとビターステップ
        //['meMBuDPHUaM', 4437, 4704], //炎
        ['meMBuDPHUaM', 4988, 5240], //紅蓮華 THE FIRST TAKE バージョン
        ['meMBuDPHUaM', 5310, 5480], //夜もすがら君想ふ ED

        //たまのおうた工房 Happy Halloween
        ['lx7Hh8rHLxE', 1, 1],

        //"2020/10/31 １年に１度のHalloweenParty
        ['kw1WFhhzInY', 2302, 2554], //Mrs.Pumpkinの滑稽な夢
        ['kw1WFhhzInY', 2725, 2989], //Monster
        ['kw1WFhhzInY', 3235, 3531], //サラバ、愛しき悲しみたちよ 歌詞
        ['kw1WFhhzInY', 4083, 4308], //おジャ魔女カーニバル
        ['kw1WFhhzInY', 4399, 4648], //Crazy Party Night ～ぱんぷきんの逆襲～

        //久遠たまの日常5
        //['j2mC3Ws0OAE', 1, 1],

        //2020/10/25 本格的にボカロ攻め
        ['ykcroeCICx8', 351, 533], //ルマ
        ['ykcroeCICx8', 676, 904], //虎視眈々
        ['ykcroeCICx8', 1016, 1277], //ビタースウィート
        ['ykcroeCICx8', 1422, 1668], //ファンサ
        ['ykcroeCICx8', 1748, 1945], //ドレミファロンド
        ['ykcroeCICx8', 2052, 2242], //ダンスロボットダンス
        ['ykcroeCICx8', 2326, 2526], //太陽系デスコ
        ['ykcroeCICx8', 2727, 2946], //恋愛裁判
        ['ykcroeCICx8', 3103, 3317], //妄想税
        ['ykcroeCICx8', 3483, 3681], //威風堂々
        ['ykcroeCICx8', 3795, 3994], //ギガンティックO.T.N
        ['ykcroeCICx8', 4040, 4243], //聖槍爆裂ボーイ
        ['ykcroeCICx8', 4362, 4605], //バレリーコ
        ['ykcroeCICx8', 4729, 5015], //初音ミクの消失
        ['ykcroeCICx8', 5358, 5562], //ヒバナ
        ['ykcroeCICx8', 5748, 5980], //劣等上等
        //['ykcroeCICx8', 6051, 6221], //夜もすがら君想ふ ED

        //久遠たまの日常４
        //['dNEWWyYlNio', 1, 1],

        //2020/10/18 ！たまソングフィーバー！
        ['ETjgki1sSgc', 578, 855], //白日
        ['ETjgki1sSgc', 1114, 1367], //Lemon
        ['ETjgki1sSgc', 1591, 1880], //アイネクライネ
        ['ETjgki1sSgc', 2189, 2431], //一番の宝物 ~Yui final ver.~
        ['ETjgki1sSgc', 2570, 2926], //うたかた花火
        ['ETjgki1sSgc', 2995, 3269], //Rally Go Round
        ['ETjgki1sSgc', 3379, 3628], //only my railgun
        ['ETjgki1sSgc', 3855, 4067], //ハレ晴レユカイ
        ['ETjgki1sSgc', 4328, 4595], //カラフル
        ['ETjgki1sSgc', 4750, 4986], //magnet
        ['ETjgki1sSgc', 5189, 5480], //だれかの心臓になれたなら
        ['ETjgki1sSgc', 5673, 5905], //daze
        //['ETjgki1sSgc', 5950, 1], //夜もすがら君想ふ ED

        //炎
        ['a4thI28v_SM', 1, 1],

        //2020/10/14 どうしても言いたいチーズケーキの話
        //['-5xm35kLZLw', 1030, 1210], //Fallen Short Acapella
        //['-5xm35kLZLw', 1222, 1], //炎 Short Acapella New10/17

        //久遠たまの日常３
        //['Px3JIjwkuok', 1, 1],

        //2020/10/11 ２万人感謝も込めてたくさん歌います
        ['mvmik-rA-I4', 463, 733], //猫
        ['mvmik-rA-I4', 910, 1148], //渡月橋 ～君 想ふ～
        ['mvmik-rA-I4', 1280, 1551], //三日月
        ['mvmik-rA-I4', 1660, 1854], //ハルジオン
        ['mvmik-rA-I4', 1993, 2291], //ライラック
        ['mvmik-rA-I4', 2428, 2766], //My Dearest
        ['mvmik-rA-I4', 2878, 3175], //平行線
        ['mvmik-rA-I4', 3332, 3563], //拍手喝采歌合
        ['mvmik-rA-I4', 3796, 4053], //僕らの戦場
        ['mvmik-rA-I4', 4248, 4522], //Sincerely
        ['mvmik-rA-I4', 4739, 4983], //忘れじの言の葉
        ['mvmik-rA-I4', 5131, 5348], //ダダダダ天使
        ['mvmik-rA-I4', 5532, 5901], //鳥の詩
        ['mvmik-rA-I4', 6189, 6503], //ETERNAL BLAZE
        //['mvmik-rA-I4', 6580, 1], //夜もすがら君想ふ ED

        //ダーリンダンス
        ['ZXNvteUXoZQ', 1, 1],

        //夜に駆ける
        ['fOLD2Om-ino', 1, 1],

        //久遠たまの日常2
        //['qRNSouvHncw', 1, 1],

        //2020/10/4 明日からのエネルギーチャージ！！
        ['eD6LNaZmj1w', 311, 522], //インフェルノ
        ['eD6LNaZmj1w', 637, 862], //おジャ魔女カーニバル
        ['eD6LNaZmj1w', 968, 1196], //Paradisus-Paradoxum
        ['eD6LNaZmj1w', 1477, 1745], //ANIMA
        ['eD6LNaZmj1w', 1935, 2175], //Time after time ～花舞う街で～
        ['eD6LNaZmj1w', 2292, 2555], //アイのシナリオ
        ['eD6LNaZmj1w', 2688, 2940], //Here
        ['eD6LNaZmj1w', 3104, 3357], //カワキヲアメク
        ['eD6LNaZmj1w', 3498, 3842], //オレンジ
        ['eD6LNaZmj1w', 3961, 4198], //unravel
        ['eD6LNaZmj1w', 4373, 4654], //創聖のアクエリオン
        ['eD6LNaZmj1w', 4878, 5163], //前前前世
        ['eD6LNaZmj1w', 5519, 5723], //カタオモイ
        //['eD6LNaZmj1w', 6053, 6151], //ノーザンクロス Short Acapella Full9/27
        ['eD6LNaZmj1w', 6246, 6519], //いけないボーダーライン
        ['eD6LNaZmj1w', 6776, 7052], //God Knows...
        ['eD6LNaZmj1w', 7284, 7529], //Rising Hope
        //['eD6LNaZmj1w', 7729, 1], //夜もすがら君想ふ ED

        //2020/10/2 あたしの歌を聞け～っ！
        ['RiY3B0_H0hk', 262, 542], //トライアングラー fight on stage
        ['RiY3B0_H0hk', 640, 869], //星間飛行
        ['RiY3B0_H0hk', 949, 1272], //放課後オーバーフロウ
        ['RiY3B0_H0hk', 1355, 1637], //オベリスク
        ['RiY3B0_H0hk', 1706, 2019], //禁断のエリクシア
        ['RiY3B0_H0hk', 2098, 2375], //ホシキラ
        ['RiY3B0_H0hk', 2488, 2844], //ユニバーサル・バニー
        ['RiY3B0_H0hk', 2922, 3168], //インフィニティ
        ['RiY3B0_H0hk', 3293, 3512], //Welcom To My FanClub's Night!
        ['RiY3B0_H0hk', 3593, 3939], //射手座☆午後九時Don't be late
        ['RiY3B0_H0hk', 4047, 4338], //虹いろ・クマクマ
        ['RiY3B0_H0hk', 4413, 4737], //ダイアモンドクレバス
        ['RiY3B0_H0hk', 4864, 5298], //サヨナラノツバサ ～the end of triangle
        ['RiY3B0_H0hk', 5417, 5717], //ライオン
        //['RiY3B0_H0hk', 5839, 1], //夜もすがら君想ふ ED

        //2020/10/1 おひさしぶり！ふぉるがいずくん！
        //['t2UuIVy2ZHQ', 4055, 4304], //シュガーソングとビターステップ
        ['t2UuIVy2ZHQ', 4592, 4846], //風になる

        //2020/9/30 ボカロ限定でたくさん歌う！
        ['uaKAOYzt5cA', 394, 607], //ロストワンの号哭
        ['uaKAOYzt5cA', 838, 1068], //ハッピーシンセサイザ
        ['uaKAOYzt5cA', 1243, 1442], //アサガオの散る頃に
        ['uaKAOYzt5cA', 1551, 1817], //心做し
        ['uaKAOYzt5cA', 1904, 2074], //Booo!
        ['uaKAOYzt5cA', 2200, 2458], //拝啓ドッペルゲンガー
        ['uaKAOYzt5cA', 2589, 2778], //東京テディベア
        ['uaKAOYzt5cA', 2904, 3148], //再教育
        ['uaKAOYzt5cA', 3252, 3505], //ヒビカセ
        ['uaKAOYzt5cA', 3607, 3833], //ロキ
        ['uaKAOYzt5cA', 4011, 4225], //深海少女
        //['uaKAOYzt5cA', 4320, 4582], //夜に駆ける New10/6
        ['uaKAOYzt5cA', 4762, 4950], //天ノ弱
        ['uaKAOYzt5cA', 5279, 5645], //終わりの世界から
        ['uaKAOYzt5cA', 5751, 5964], //六兆年と一夜物語
        //['uaKAOYzt5cA', 6081, 1], //夜もすがら君想ふ ED

        //2020/9/29 定期もぐもぐ雑談の巻
        //['6iMAjF61q7w', 940, 1], //Sincerely Short Acapella
        //['6iMAjF61q7w', 1008, 1], //courage Short Acapella
        //['6iMAjF61q7w', 1023, 1], //鳥の詩 Short Acapella
        //['6iMAjF61q7w', 1184, 1], //お願いマッスル Short Acapella
        //['6iMAjF61q7w', 4343, 1], //Departures〜あなたにおくるアイの歌〜 Short Acapella
        //['6iMAjF61q7w', 4430, 1], //エウテルペ 〜Silence〜 Short Acapella
        //['6iMAjF61q7w', 4601, 1], //ダイアモンド クレバス Short Acapella

        //久遠たまの日常
        //['a7vKI57G7_U', 1, 1],

        //2020/9/27 日曜のたまソング
        ['Q06Zq_3il9o', 296, 616], //瞬き
        ['Q06Zq_3il9o', 759, 1032], //月光花
        ['Q06Zq_3il9o', 1148, 1462], //LAST STARDUST
        //['Q06Zq_3il9o', 1563, 1605], //君色シグナル 半消除
        ['Q06Zq_3il9o', 1804, 2081], //七転八起☆至上主義!
        ['Q06Zq_3il9o', 2217, 2458], //ツキアカリのミチシルベ
        ['Q06Zq_3il9o', 2579, 2859], //ロミオとシンデレラ
        ['Q06Zq_3il9o', 2971, 3280], //ノーザンクロス
        ['Q06Zq_3il9o', 3400, 3640], //気まぐれロマンティック
        ['Q06Zq_3il9o', 3762, 4110], //あたしが隣にいるうちに
        ['Q06Zq_3il9o', 4228, 4482], //Snow halation
        ['Q06Zq_3il9o', 4597, 4776], //檄！帝国華撃団
        ['Q06Zq_3il9o', 4901, 5191], //THERE IS A REASON
        ['Q06Zq_3il9o', 5526, 5781], //恋愛サーキュレーション
        //['Q06Zq_3il9o', 5839, 1], //夜もすがら君想ふ ED

        //紅蓮華
        ['GDOQTShjTQs', 1, 1],

        //2020/9/25 アニメ縛りのスタートはやっぱりこれだっ！
        ['Y6EMzMzUjKQ', 213, 457], //crossing field
        ['Y6EMzMzUjKQ', 561, 848], //ユメセカイ
        ['Y6EMzMzUjKQ', 967, 1244], //INNOCENCE
        ['Y6EMzMzUjKQ', 1366, 1625], //Overfly
        ['Y6EMzMzUjKQ', 1706, 1956], //IGNITE
        ['Y6EMzMzUjKQ', 2073, 2318], //courage
        ['Y6EMzMzUjKQ', 2426, 2702], //シルシ
        ['Y6EMzMzUjKQ', 2850, 3127], //Catch the Moment
        ['Y6EMzMzUjKQ', 3223, 3469], //流星
        ['Y6EMzMzUjKQ', 3563, 3786], //ADAMAS
        ['Y6EMzMzUjKQ', 3959, 4202], //アイリス
        ['Y6EMzMzUjKQ', 4282, 4505], //RESISTER
        ['Y6EMzMzUjKQ', 4618, 4907], //unlasting
        //['Y6EMzMzUjKQ', 5302, 5370], //ANIMA Short New10/4
        ['Y6EMzMzUjKQ', 5493, 5761], // I will...
        //['Y6EMzMzUjKQ', 5896, 1], //夜もすがら君想ふ ED

        //2020/9/20 たまソング聴いていきませんか？
        ['MRZk4LZ589w', 302, 542], //Mela!
        ['MRZk4LZ589w', 677, 914], //革命デュアリズム
        ['MRZk4LZ589w', 1042, 1293], //白金ディスコ
        ['MRZk4LZ589w', 1589, 1797], //嘘
        //['MRZk4LZ589w', 1965, 2204], //渡月橋～君 想ふ～ New10/11
        ['MRZk4LZ589w', 2310, 2547], //ピースサイン
        ['MRZk4LZ589w', 2663, 2917], //秒針を噛む
        ['MRZk4LZ589w', 3035, 3266], //残酷な天使のテーゼ
        ['MRZk4LZ589w', 3376, 3694], //Pretender
        ['MRZk4LZ589w', 3837, 4136], //奏
        ['MRZk4LZ589w', 4231, 4532], //secret base ～君がくれたもの～
        ['MRZk4LZ589w', 4635, 4853], //ブルーバード
        ['MRZk4LZ589w', 4945, 5261], //魂のルフラン
        ['MRZk4LZ589w', 5573, 5805], //シャルル
        //['MRZk4LZ589w', 6013, 1], //夜もすがら君想ふ ED

        //2020/9/18 アニソン祭りじゃ～！！
        ['IL4jXmjciOM', 252, 358], //Alchemy Short
        ['IL4jXmjciOM', 358, 428], //crow song Short
        ['IL4jXmjciOM', 428, 519], //Bravely You Short
        ['IL4jXmjciOM', 649, 758], //Little Busters! Short
        ['IL4jXmjciOM', 862, 956], //Butter-fly Short
        ['IL4jXmjciOM', 1059, 1158], //太陽曰く燃えよカオス Short
        ['IL4jXmjciOM', 1233, 1336], //Hacking to the Gate Short
        ['IL4jXmjciOM', 1483, 1577], //シリウス Short
        //['IL4jXmjciOM', 1578, 1674], //流星 Short New9/25
        ['IL4jXmjciOM', 1777, 1870], //Preserved Roses Short
        ['IL4jXmjciOM', 1957, 2046], //final phase Short
        ['IL4jXmjciOM', 2047, 2123], //nameless story Short
        //['IL4jXmjciOM', 2276, 2365], //ASH Short New11/1
        ['IL4jXmjciOM', 2370, 2500], //MEMORIA Short
        ['IL4jXmjciOM', 2506, 2603], //英雄 運命の詩 Short
        ['IL4jXmjciOM', 2729, 2818], //ヒトリゴト Short
        //['IL4jXmjciOM', 2956, 3075], //ダイアモンドクレバス Short New10/2
        //['IL4jXmjciOM', 3077, 3184], //トライアングラー fight on stage Short New10/2
        ['IL4jXmjciOM', 3273, 3366], //一度だけの恋なら Short
        ['IL4jXmjciOM', 3367, 3487], //Giraffe Blues Short
        ['IL4jXmjciOM', 3603, 3689], //KABANERI OF THE IRON FORTRESS Short
        ['IL4jXmjciOM', 3764, 3867], //Baby Sweet Berry Love Short
        ['IL4jXmjciOM', 3937, 4030], //君のせい Short
        ['IL4jXmjciOM', 4191, 4312], //告白 Short
        //['IL4jXmjciOM', 4314, 4480], //My Dearest Short New10/11
        ['IL4jXmjciOM', 4643, 4800], //RE:I AM Short
        //['IL4jXmjciOM', 4801, 4925], //trust you Short New11/1
        ['IL4jXmjciOM', 4928, 5028], //narrative Short
        //['IL4jXmjciOM', 5139, 5243], //träumerei Short New11/1
        //['IL4jXmjciOM', 5372, 5607], //紅蓮華 New9/26
        //['IL4jXmjciOM', 5784, 1], //夜もすがら君想ふ ED

        //My Soul,Your Beats!
        ['ekB9_dr65dQ', 1, 1],//Short

        //2020/9/13 日曜日の定期歌枠たくさん歌うぞ～！
        ['T53Wjlbotug', 212, 499], //ROCK-mode '18
        ['T53Wjlbotug', 667, 905], //千本桜
        ['T53Wjlbotug', 1239, 1517], //This game
        ['T53Wjlbotug', 1634, 1905], //Calc.
        ['T53Wjlbotug', 2102, 2283], //ストリーミングハート
        ['T53Wjlbotug', 2375, 2565], //おねがいダーリン
        ['T53Wjlbotug', 2683, 2914], //回レ！雪月花
        ['T53Wjlbotug', 3076, 3297], //乙女解剖
        ['T53Wjlbotug', 3424, 3620], //ブリキノダンス
        //['T53Wjlbotug', 3680, 3904], //ロキ New9/30
        //['T53Wjlbotug', 3988, 4068], //unlasting Short New9/25
        ['T53Wjlbotug', 4332, 4567], //プライド革命
        ['T53Wjlbotug', 5025, 5198], //アスノヨゾラ哨戒班
        //['T53Wjlbotug', 5337, 1], //夜もすがら君想ふ ED

        //2020/9/11 金曜日のたまLIVE ※非公開(Private)
        //['rIQ1wRsnnDE', 207, 1], //インフェルノ New10/4
        //['rIQ1wRsnnDE', 559, 1], //お願いマッスル New9/29
        //['rIQ1wRsnnDE', 911, 1], //courage New9/29
        //['rIQ1wRsnnDE', 1273, 1], //Sincerely New10/11
        //['rIQ1wRsnnDE', 1665, 1], //My Soul,Your Beats! New9/14
        //['rIQ1wRsnnDE', 2005, 1], //Starry Wish New10/9メン限
        //['rIQ1wRsnnDE', 2326, 1], //Paradisus-Paradoxum New10/4
        //['rIQ1wRsnnDE', 2912, 1], //Oath Sign
        //['rIQ1wRsnnDE', 3367, 1], //創聖のアクエリオン New10/4
        //['rIQ1wRsnnDE', 3844, 1], //Departures〜あなたにおくるアイの歌〜 New9/29
        //['rIQ1wRsnnDE', 4176, 1], //鳥の詩 New10/11
        //['rIQ1wRsnnDE', 4676, 1], //夜もすがら君想ふ ED

        //2020/9/6 ついにこの日が来たぞ！！！！
        ['AxY3M8pYoXY', 202, 482], //Deal with the devil
        ['AxY3M8pYoXY', 648, 912], //コネクト
        //['AxY3M8pYoXY', 1048, 1359], //only my railgun New10/18
        ['AxY3M8pYoXY', 1475, 1567], //チカっとチカ千花っ♡
        //['AxY3M8pYoXY', 1714, 1992], //創聖のアクエリオン New10/4
        ['AxY3M8pYoXY', 2077, 2367], //一番の宝物
        //['AxY3M8pYoXY', 2492, 2757], //Alchemy New9/18
        ['AxY3M8pYoXY', 2886, 3094], //かくしん的☆めたまるふぉ〜ぜっ!
        ['AxY3M8pYoXY', 3244, 3511], //春擬き
        //['AxY3M8pYoXY', 3547, 3798], //カワキヲアメク New10/4
        //['AxY3M8pYoXY', 3976, 4316], //射手座☆午後九時 Don't be late New10/2
        //['AxY3M8pYoXY', 4497, 4767], //いけないボーダーライン New10/4
        //['AxY3M8pYoXY', 4909, 5130], //ADAMAS New9/25
        //['AxY3M8pYoXY', 5197, 1], //夜もすがら君想ふ ED

        //2020/9/4 鯖落ちからのゲリラ歌枠＞＜
        ['_Ejha-aifWg', 530, 775], //ファンサ
        ['_Ejha-aifWg', 973, 1219], //セツナトリップ
        //['_Ejha-aifWg', 1332, 1608], //God knows... New10/4
        ['_Ejha-aifWg', 1683, 1878], //ベノム
        ['_Ejha-aifWg', 1993, 2258], //右肩の蝶
        ['_Ejha-aifWg', 2578, 2662], //だから僕は音楽を辞めた Short
        ['_Ejha-aifWg', 2708, 2949], //ふわふわ時間
        ['_Ejha-aifWg', 3048, 3182], //KING
        ['_Ejha-aifWg', 3352, 3523], //グッバイ宣言
        ['_Ejha-aifWg', 3753, 4064], //名前のない怪物
        //['_Ejha-aifWg', 4191, 1], //夜もすがら君想ふ ED

        //ようこそジャパリパークへ 自己紹介
        ['MmuNPcSN50E', 1, 1],

        //2020/8/30 またまたリクエストを歌ってゆくぞー！！
        ['U8nr6UR2f5k', 368, 646], //少女レイ
        ['U8nr6UR2f5k', 774, 978], //ただ君に晴れ
        //['U8nr6UR2f5k', 1073, 1387], //ETERNAL BLAZE New10/11
        ['U8nr6UR2f5k', 1509, 1757], //おちゃめ機能
        ['U8nr6UR2f5k', 1911, 2104], //惑星ループ
        ['U8nr6UR2f5k', 2267, 2504], //PLATONIC GIRL
        ['U8nr6UR2f5k', 2775, 2975], //ボッカデラベリタ
        ['U8nr6UR2f5k', 3073, 3415], //君の知らない物語
        ['U8nr6UR2f5k', 3518, 3801], //打上花火
        //['U8nr6UR2f5k', 4023, 1], //夜もすがら君想ふ ED

        //2020/8/24 初歌枠！リクエストを歌ってゆくー！！
        ['EiDlaX-saHw', 318, 523], //ゴーストルール
        ['EiDlaX-saHw', 666, 923], //このピアノでお前を8759632145回ぶん殴る
        //['EiDlaX-saHw', 1096, 1343], //夜に駆ける New10/6
        //['EiDlaX-saHw', 1538, 1753], //ダダダダ天使 New10/11
        ['EiDlaX-saHw', 1872, 2085], //おじゃま虫
        //['EiDlaX-saHw', 2364, 2661], //ライオン New10/2
        //['EiDlaX-saHw', 2793, 3022], //星間飛行 New10/2
        //['EiDlaX-saHw', 3235, 3481], //Rising Hope New10/4
        //['EiDlaX-saHw', 3709, 1], //夜もすがら君想ふ ED

        //2020/8/22 GuildCQ所属、久遠たまです！
        ['WNIcs_pdvEw', 2175, 2358], //ルマ
        ['WNIcs_pdvEw', 2580, 2888], //夜明けと蛍
        ['WNIcs_pdvEw', 3089, 3291], //ヒバナ
        //['WNIcs_pdvEw', 3582, 3815], //紅蓮華 New9/26
        //['WNIcs_pdvEw', 3962, 1], //夜もすがら君想ふ ED

    ];

    /** 載入判斷程式 **/
    /** 以下不要修改 **/
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