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
        //久遠たまの日常４
        //['dNEWWyYlNio', 1, 1],

        //2020/10/18 ！たまソングフィーバー！
        ['ETjgki1sSgc', 578, 855],
        ['ETjgki1sSgc', 1114, 1367],
        ['ETjgki1sSgc', 1591, 1880],
        ['ETjgki1sSgc', 2189, 2431],
        ['ETjgki1sSgc', 2570, 2926],
        ['ETjgki1sSgc', 2995, 3269],
        ['ETjgki1sSgc', 3379, 3628],
        ['ETjgki1sSgc', 3855, 4067],
        ['ETjgki1sSgc', 4328, 4595],
        ['ETjgki1sSgc', 4750, 4986],
        ['ETjgki1sSgc', 5189, 5480],
        ['ETjgki1sSgc', 5673, 5905],
        ['ETjgki1sSgc', 5950, 1],

        //炎
        ['a4thI28v_SM', 1, 1],

        //2020/10/14 どうしても言いたいチーズケーキの話
        //['-5xm35kLZLw', 1030, 1210],
        //['-5xm35kLZLw', 1222, 1],

        //久遠たまの日常３
        //['Px3JIjwkuok', 1, 1],

        //2020/10/11 ２万人感謝も込めてたくさん歌います
        ['mvmik-rA-I4', 463, 733],
        ['mvmik-rA-I4', 910, 1148],
        ['mvmik-rA-I4', 1280, 1551],
        ['mvmik-rA-I4', 1660, 1854],
        ['mvmik-rA-I4', 1993, 2291],
        ['mvmik-rA-I4', 2428, 2766],
        ['mvmik-rA-I4', 2878, 3175],
        ['mvmik-rA-I4', 3332, 3563],
        ['mvmik-rA-I4', 3796, 4053],
        ['mvmik-rA-I4', 4248, 4522],
        ['mvmik-rA-I4', 4739, 4983],
        ['mvmik-rA-I4', 5131, 5348],
        ['mvmik-rA-I4', 5532, 5901],
        ['mvmik-rA-I4', 6189, 6503],
        //['mvmik-rA-I4', 6580, 1],

        //ダーリンダンス
        ['ZXNvteUXoZQ', 1, 1],

        //夜に駆ける
        ['fOLD2Om-ino', 1, 1],

        //久遠たまの日常2
        //['qRNSouvHncw', 1, 1],

        //2020/10/4 明日からのエネルギーチャージ！！
        ['eD6LNaZmj1w', 311, 522],
        ['eD6LNaZmj1w', 637, 862],
        ['eD6LNaZmj1w', 968, 1196],
        ['eD6LNaZmj1w', 1477, 1745],
        ['eD6LNaZmj1w', 1935, 2175],
        ['eD6LNaZmj1w', 2292, 2555],
        ['eD6LNaZmj1w', 2688, 2940],
        ['eD6LNaZmj1w', 3104, 3357],
        ['eD6LNaZmj1w', 3498, 3842],
        ['eD6LNaZmj1w', 3961, 4198],
        ['eD6LNaZmj1w', 4373, 4654],
        ['eD6LNaZmj1w', 4878, 5163],
        ['eD6LNaZmj1w', 5519, 5723],
        //['eD6LNaZmj1w', 6053, 6151], //ノーザンクロス Full9/27
        ['eD6LNaZmj1w', 6246, 6519],
        ['eD6LNaZmj1w', 6776, 7052],
        ['eD6LNaZmj1w', 7284, 7529],
        //['eD6LNaZmj1w', 7729, 1],

        //2020/10/2 あたしの歌を聞け～っ！
        ['RiY3B0_H0hk', 262, 542],
        ['RiY3B0_H0hk', 640, 869],
        ['RiY3B0_H0hk', 949, 1272],
        ['RiY3B0_H0hk', 1355, 1637],
        ['RiY3B0_H0hk', 1706, 2019],
        ['RiY3B0_H0hk', 2098, 2375],
        ['RiY3B0_H0hk', 2488, 2844],
        ['RiY3B0_H0hk', 2922, 3168],
        ['RiY3B0_H0hk', 3293, 3512],
        ['RiY3B0_H0hk', 3593, 3939],
        ['RiY3B0_H0hk', 4047, 4338],
        ['RiY3B0_H0hk', 4413, 4737],
        ['RiY3B0_H0hk', 4864, 5298],
        ['RiY3B0_H0hk', 5417, 5717],
        //['RiY3B0_H0hk', 5839, 1],

        //2020/10/1 おひさしぶり！ふぉるがいずくん！
        ['t2UuIVy2ZHQ', 4055, 4304],
        ['t2UuIVy2ZHQ', 4592, 4846],

        //2020/9/30 ボカロ限定でたくさん歌う！
        ['uaKAOYzt5cA', 394, 607],
        ['uaKAOYzt5cA', 838, 1068],
        ['uaKAOYzt5cA', 1243, 1442],
        ['uaKAOYzt5cA', 1551, 1817],
        ['uaKAOYzt5cA', 1904, 2074],
        ['uaKAOYzt5cA', 2200, 2458],
        ['uaKAOYzt5cA', 2589, 2778],
        ['uaKAOYzt5cA', 2904, 3148],
        ['uaKAOYzt5cA', 3252, 3505],
        ['uaKAOYzt5cA', 3607, 3833],
        ['uaKAOYzt5cA', 4011, 4225],
        //['uaKAOYzt5cA', 4320, 4582], //夜に駆ける New10/6
        ['uaKAOYzt5cA', 4762, 4950],
        ['uaKAOYzt5cA', 5279, 5645],
        ['uaKAOYzt5cA', 5751, 5964],
        //['uaKAOYzt5cA', 6081, 1],

        //2020/9/29 定期もぐもぐ雑談の巻
        //['6iMAjF61q7w', 940, 1],
        //['6iMAjF61q7w', 1008, 1],
        //['6iMAjF61q7w', 1023, 1],
        //['6iMAjF61q7w', 1184, 1],
        //['6iMAjF61q7w', 4343, 1],
        //['6iMAjF61q7w', 4430, 1],
        //['6iMAjF61q7w', 4601, 1],

        //久遠たまの日常
        //['a7vKI57G7_U', 1, 1],

        //2020/9/27 日曜のたまソング
        ['Q06Zq_3il9o', 296, 616],
        ['Q06Zq_3il9o', 759, 1032],
        ['Q06Zq_3il9o', 1148, 1462],
        //['Q06Zq_3il9o', 1563, 1605], //君色シグナル 半消除
        ['Q06Zq_3il9o', 1804, 2081],
        ['Q06Zq_3il9o', 2217, 2458],
        ['Q06Zq_3il9o', 2579, 2859],
        ['Q06Zq_3il9o', 2971, 3280],
        ['Q06Zq_3il9o', 3400, 3640],
        ['Q06Zq_3il9o', 3762, 4110],
        ['Q06Zq_3il9o', 4228, 4482],
        ['Q06Zq_3il9o', 4597, 4776],
        ['Q06Zq_3il9o', 4901, 5191],
        ['Q06Zq_3il9o', 5526, 5781],
        //['Q06Zq_3il9o', 5839, 1],

        //紅蓮華
        ['GDOQTShjTQs', 1, 1],

        //2020/9/25 アニメ縛りのスタートはやっぱりこれだっ！
        ['Y6EMzMzUjKQ', 213, 457],
        ['Y6EMzMzUjKQ', 561, 848],
        ['Y6EMzMzUjKQ', 967, 1244],
        ['Y6EMzMzUjKQ', 1366, 1625],
        ['Y6EMzMzUjKQ', 1706, 1956],
        ['Y6EMzMzUjKQ', 2073, 2318],
        ['Y6EMzMzUjKQ', 2426, 2702],
        ['Y6EMzMzUjKQ', 2850, 3127],
        ['Y6EMzMzUjKQ', 3223, 3469],
        ['Y6EMzMzUjKQ', 3563, 3786],
        ['Y6EMzMzUjKQ', 3959, 4202],
        ['Y6EMzMzUjKQ', 4282, 4505],
        ['Y6EMzMzUjKQ', 4618, 4907],
        //['Y6EMzMzUjKQ', 5302, 5370], //ANIMA New10/4
        ['Y6EMzMzUjKQ', 5493, 5761],
        //['Y6EMzMzUjKQ', 5896, 1],

        //2020/9/20 たまソング聴いていきませんか？
        ['MRZk4LZ589w', 302, 542],
        ['MRZk4LZ589w', 677, 914],
        ['MRZk4LZ589w', 1042, 1293],
        ['MRZk4LZ589w', 1589, 1797],
        //['MRZk4LZ589w', 1965, 2204], //渡月橋～君 想ふ～ New10/11
        ['MRZk4LZ589w', 2310, 2547],
        ['MRZk4LZ589w', 2663, 2917],
        ['MRZk4LZ589w', 3035, 3266],
        ['MRZk4LZ589w', 3376, 3694],
        ['MRZk4LZ589w', 3837, 4136],
        ['MRZk4LZ589w', 4231, 4532],
        ['MRZk4LZ589w', 4635, 4853],
        ['MRZk4LZ589w', 4945, 5261],
        ['MRZk4LZ589w', 5573, 5805],
        //['MRZk4LZ589w', 6013, 1],

        //2020/9/18 アニソン祭りじゃ～！！
        ['IL4jXmjciOM', 252, 358],
        ['IL4jXmjciOM', 358, 428],
        ['IL4jXmjciOM', 428, 519],
        ['IL4jXmjciOM', 649, 758],
        ['IL4jXmjciOM', 862, 956],
        ['IL4jXmjciOM', 1059, 1158],
        ['IL4jXmjciOM', 1233, 1336],
        ['IL4jXmjciOM', 1483, 1577],
        //['IL4jXmjciOM', 1578, 1674], //流星 New9/25
        ['IL4jXmjciOM', 1777, 1870],
        ['IL4jXmjciOM', 1957, 2046],
        ['IL4jXmjciOM', 2047, 2123],
        ['IL4jXmjciOM', 2276, 2365],
        ['IL4jXmjciOM', 2370, 2500],
        ['IL4jXmjciOM', 2506, 2603],
        ['IL4jXmjciOM', 2729, 2818],
        //['IL4jXmjciOM', 2956, 3075], //ダイアモンドクレバス New10/2
        //['IL4jXmjciOM', 3077, 3184], //トライアングラー fight on stage New10/2
        ['IL4jXmjciOM', 3273, 3366],
        ['IL4jXmjciOM', 3367, 3487],
        ['IL4jXmjciOM', 3603, 3689],
        ['IL4jXmjciOM', 3764, 3867],
        ['IL4jXmjciOM', 3937, 4030],
        ['IL4jXmjciOM', 4191, 4312],
        //['IL4jXmjciOM', 4314, 4480], //My Dearest New10/11
        ['IL4jXmjciOM', 4643, 4800],
        ['IL4jXmjciOM', 4801, 4925],
        ['IL4jXmjciOM', 4928, 5028],
        ['IL4jXmjciOM', 5139, 5243],
        //['IL4jXmjciOM', 5372, 5607], //紅蓮華 New9/26
        //['IL4jXmjciOM', 5784, 1],

        //My Soul,Your Beats!
        ['ekB9_dr65dQ', 1, 1],

        //2020/9/13 日曜日の定期歌枠たくさん歌うぞ～！
        ['T53Wjlbotug', 212, 499],
        ['T53Wjlbotug', 667, 905],
        ['T53Wjlbotug', 1239, 1517],
        ['T53Wjlbotug', 1634, 1905],
        ['T53Wjlbotug', 2102, 2283],
        ['T53Wjlbotug', 2375, 2565],
        ['T53Wjlbotug', 2683, 2914],
        ['T53Wjlbotug', 3076, 3297],
        ['T53Wjlbotug', 3424, 3620],
        //['T53Wjlbotug', 3680, 3904], //ロキ New9/30
        //['T53Wjlbotug', 3988, 4068], //unlasting New9/25
        ['T53Wjlbotug', 4332, 4567],
        ['T53Wjlbotug', 5025, 5198],
        //['T53Wjlbotug', 5337, 1],

        //2020/9/11 金曜日のたまLIVE ※非公開(Private)
        //['rIQ1wRsnnDE', 207, 1],
        //['rIQ1wRsnnDE', 559, 1],
        //['rIQ1wRsnnDE', 911, 1],
        //['rIQ1wRsnnDE', 1273, 1],
        //['rIQ1wRsnnDE', 1665, 1],
        //['rIQ1wRsnnDE', 2005, 1],
        //['rIQ1wRsnnDE', 2326, 1],
        //['rIQ1wRsnnDE', 2912, 1],
        //['rIQ1wRsnnDE', 3367, 1],
        //['rIQ1wRsnnDE', 3844, 1],
        //['rIQ1wRsnnDE', 4176, 1],
        //['rIQ1wRsnnDE', 4676, 1],

        //2020/9/6 ついにこの日が来たぞ！！！！
        ['AxY3M8pYoXY', 202, 482],
        ['AxY3M8pYoXY', 648, 912],
        ['AxY3M8pYoXY', 1048, 1359], //only my railgun New10/18
        ['AxY3M8pYoXY', 1475, 1567],
        //['AxY3M8pYoXY', 1714, 1992], //創聖のアクエリオン New10/4
        ['AxY3M8pYoXY', 2077, 2367],
        //['AxY3M8pYoXY', 2492, 2757], //Alchemy New9/18
        ['AxY3M8pYoXY', 2886, 3094],
        ['AxY3M8pYoXY', 3244, 3511],
        //['AxY3M8pYoXY', 3547, 3798], //カワキヲアメク New10/4
        //['AxY3M8pYoXY', 3976, 4316], //射手座☆午後九時 Don't be late New10/2
        //['AxY3M8pYoXY', 4497, 4767], //いけないボーダーライン New10/4
        //['AxY3M8pYoXY', 4909, 5130], //ADAMAS New9/25
        //['AxY3M8pYoXY', 5197, 1],

        //2020/9/4 鯖落ちからのゲリラ歌枠＞＜
        ['_Ejha-aifWg', 530, 775],
        ['_Ejha-aifWg', 973, 1219],
        //['_Ejha-aifWg', 1332, 1608], //God knows... New10/4
        ['_Ejha-aifWg', 1683, 1878],
        ['_Ejha-aifWg', 1993, 2258],
        ['_Ejha-aifWg', 2578, 2662],
        ['_Ejha-aifWg', 2708, 2949],
        ['_Ejha-aifWg', 3048, 3182],
        ['_Ejha-aifWg', 3352, 3523],
        ['_Ejha-aifWg', 3753, 4064],
        //['_Ejha-aifWg', 4191, 1],

        //ようこそジャパリパークへ 自己紹介
        ['MmuNPcSN50E', 1, 1],

        //2020/8/30 またまたリクエストを歌ってゆくぞー！！
        ['U8nr6UR2f5k', 368, 646],
        ['U8nr6UR2f5k', 774, 978],
        //['U8nr6UR2f5k', 1073, 1387], //ETERNAL BLAZE New10/11
        ['U8nr6UR2f5k', 1509, 1757],
        ['U8nr6UR2f5k', 1911, 2104],
        ['U8nr6UR2f5k', 2267, 2504],
        ['U8nr6UR2f5k', 2775, 2975],
        ['U8nr6UR2f5k', 3073, 3415],
        ['U8nr6UR2f5k', 3518, 3801],
        //['U8nr6UR2f5k', 4023, 1],

        //2020/8/24 初歌枠！リクエストを歌ってゆくー！！
        ['EiDlaX-saHw', 318, 523],
        ['EiDlaX-saHw', 666, 923],
        //['EiDlaX-saHw', 1096, 1343], //夜に駆ける New10/6
        //['EiDlaX-saHw', 1538, 1753], //ダダダダ天使 New10/11
        ['EiDlaX-saHw', 1872, 2085],
        //['EiDlaX-saHw', 2364, 2661], //ライオン New10/2
        ['EiDlaX-saHw', 2793, 3022], //星間飛行 New10/2
        //['EiDlaX-saHw', 3235, 3481], //Rising Hope New10/4
        //['EiDlaX-saHw', 3709, 1],

        //2020/8/22 GuildCQ所属、久遠たまです！
        ['WNIcs_pdvEw', 2175, 2358],
        ['WNIcs_pdvEw', 2580, 2888],
        ['WNIcs_pdvEw', 3089, 3291],
        //['WNIcs_pdvEw', 3582, 3815], //紅蓮華 New9/26
        //['WNIcs_pdvEw', 3962, 1]

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