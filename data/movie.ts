// data/movies.ts
const MOVIES = [
    {
        id: 273,
        title: "Frankenstein",
        image: "https://i1-vnexpress.vnecdn.net/2025/11/12/frankenstein-1762952896.jpg?w=330&h=495&q=100&dpr=1&fit=crop&s=qrKo5Pg3-uhCseHrscG0yw",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "8aulMPhE12g",
        new: true
    },{
        id: 272,
        title: "Panor: Tà Thuật Huyết Ngải",
        image: "https://cdn.galaxycine.vn/media/2025/3/19/panor-500_1742366645006.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "PFI1EkszP1o",
        new: true
    },{
        id: 271,
        title: "Yadang: Ba Mặt Lật Kèo",
        image: "https://cdn.galaxycine.vn/media/2025/5/9/yadang-500_1746783491666.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "pH2izI5S2Kc",
        new: true
    },{
        id: 270,
        title: "SiSu - Già Gân Báo Thù 2",
        image: "https://couplecinema.vn/wp-content/uploads/2025/12/itWues3GbmReREgtuPNEACvL628.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "IJkeEYcktAo",
        new: true
    },{
        id: 269,
        title: "Quan Tài Vợ Quỷ",
        image: "https://cdn.galaxycine.vn/media/2025/6/19/quan-tai-vo-qu-500_1750327081229.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "z5d_g1MOgAk",
        new: true
    },
    {
        id: 268,
        title: "Âm dương lộ 2025",
        image: "https://cdn.galaxycine.vn/media/2025/3/14/adl-500_1741934632272.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "GOeKx7L8yyk",
        new: true
    },{
        id: 267,
        title: "Tiểu Yêu Quái Núi Lãng (2025)",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-nobodu_1.jpg",
        category: "Hoạt hình",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "D6vLPsyMSUY",
        new: true
    },
    {
        id: 266,
        title: "Tay Anh Giữ Một Vì Sao – Love Barista (2025)",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/t/a/tay_anh_giu_mo_t_vi_sao_-_payoff_poster_-_kho_i_chie_u_03.10.2025.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "ZsSYbAy2Ez8",
        new: true
    },
    {
        id: 265,
        title: "Avatar 3: Lửa và Tro tàn (2025)",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/c/g/cgv_350x495_1_2.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "lMH_cVX5pGI",
        new: true
    },
    {
        id: 264,
        title: "Vong nhi cúp bế",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/d/h/dh-mainposter-0112.jpg",
        category: "Kinh dị",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "KdZ6dH11PPA",
        new: true
    },
    {
        id: 263,
        title: "Làm giàu với ma 2: Cuộc chiến hột xoàn",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-lgvm2_1.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "qq4l_rficuw",
        new: true
    },
    {
        id: 262,
        title: "Mang mẹ đi bỏ",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/m/mm_b_poster_teaser2_fa_70x100cm_digital_1_.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "yF2pXRJictA",
        new: true
    },
    {
        id: 261,
        title: "Mưa đỏ",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-muado_1.jpg",
        category: "Hành động",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "BD6PoZJdt_M",
        new: true
    },
    {
        id: 260,
        title: "Thám tử kiên - kỳ án không đầu",
        image: "https://upload.wikimedia.org/wikipedia/vi/4/49/Tham_tu_kien.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "QiXNbEKF3U0",
        new: true
    },
    {
        id: 259,
        title: "Địa Đạo: Mặt Trời Trong Bóng Tối",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-diadao_1.jpg",
        category: "Lịch sử",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "xh6IDHjvytU",
        new: true
    },
    {
        id: 258,
        title: "Zombie cưng của ba",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/4/7/470wx700h-zombie_1.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "WxrYCewy19A",
        new: true
    },
    {
        id: 257,
        title: "Bộ tứ báo thủ",
        image: "https://cdn.galaxycine.vn/media/2025/1/29/bo-4-bao-thu-2_1738152214225.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "zKMOgOWn8lQ",
        new: true
    },
    {
        id: 256,
        title: "Nhà Gia Tiên",
        image: "https://cdn.galaxycine.vn/media/2025/2/17/nha-gia-tien-500_1739775156127.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "5b5oEQotzXo",
        new: true
    },
    {
        id: 255,
        title: "Doraemon: Nobita và Cuộc phiêu lưu vào thế giới trong tranh",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/c/o/copy_of_250220_dr25_main_b1_localized_embbed_1_.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "Qs-yOanuK9c",
        new: true
    },
    {
        id: 254,
        title: "Zootopia: Phi vụ động trời 2",
        image: "https://upload.wikimedia.org/wikipedia/vi/5/52/Zootopia2.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "4iWVnVg33Pc",
        new: true
    },
    {
        id: 253,
        title: "Thanh gươm diệt quỷ: Vô hạn thành",
        image: "https://cdn.moveek.com/storage/media/cache/tall/67c9174a864fa606990538.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "BSkUboiyeCo",
        new: true
    },
    {
        id: 252,
        title: "Bạch Tuyết",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/s/n/snow_white_-_vn_payoff_-_1sheet.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "EgLJj6ua9fw",
        new: true
    },
    {
        id: 251,
        title: "LILO & STITCH",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/c/g/cgv_350x495-stitch.png",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "9qhrQqijrOU",
        new: true
    },{
        id: 250,
        title: "Natra 2: Ma đồng náo hải",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsy7PGmcMAgpTqNPcerozy7jdK7w-j4xa5hg&s",
        category: "Hoạt hình",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "ETlOSBR92Fs",
        new: true
    },{
        id: 249,
        title: "Elio Cậu bé đến từ Trái đất",
        image: "https://cdn.galaxycine.vn/media/2025/6/26/elio-500_1750930369252.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "8qyk6dgwcKs",
        new: true
    },{
        id: 248,
        title: "Quái Thú Đại Náo Sở Thú",
        image: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hoat_hinh_chieu_rap_80_005b954bf4.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "FdqP73ZuNic",
        new: true
    },{
        id: 247,
        title: "Bí Kíp Luyện Rồng",
        image: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hoat_hinh_chieu_rap_6_75e4fdaab5.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "xpWLaHtfyxg",
        new: true
    },{
        id: 246,
        title: "Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn",
        image: "https://simg.zalopay.com.vn/zlp-website/assets/phim_hoat_hinh_chieu_rap_1_bfe8a1f974.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "dz5mN-iIC4g",
        new: true
    },{
        id: 245,
        title: "Xì Trum",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/7/0/700x1000-smurfs.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "wn-rx2oumsw",
        new: true
    },{
        id: 244,
        title: "Quái Thú Vô Hình: Vùng Đất Chết Chóc – Predator: Badlands (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/6aPy2tMgQLVz2IcifrL1Z2Q9u1t.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "AzBi73ddou4",
        new: true
    },{
        id: 243,
        title: "Minecraft: The Movie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFIx_aIQRy6d8bBzRlwLbQUTAJuxLIANqQHgMWsM7Dh0d-Fo7NG_bT_a2UUsCmhwQdeFycNg2B-RnlgD0hYoELurkeEAYRP6PpzWfRD_H&s=10",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "c7FisB876Ek",
        new: true
    },{
        id: 242,
        title: "Kẻ vô danh 2",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/n/b/nb2_poolposter_470x700.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "rTpeRfGM23M",
        new: true
    },{
        id: 241,
        title: "Phi Vụ Thế Kỷ 3: Thoắt Ẩn Thoắt Hiện – Now You See Me: Now You Don’t (2025)",
        image: "https://cdn.galaxycine.vn/media/2025/11/24/now-you-see-me-500_1763957863013.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "hg2YUkIvAg0",
        new: true
    },{
        id: 240,
        title: "Anh Trai Say Xe – The First Ride (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/nfim1WDatD7732BM364oAQvsFnW.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "uB94gXmcxR4",
        new: true
    },
    {
        id: 239,
        title: "Họng súng vô tình",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbk3HaMMUHL1OTCtKNev8C6PR-VydKPnhSg&s",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "GHwhgxthTFI",
        new: true
    },{
        id: 238,
        title: "Trăm Dặm Tử Thần ",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_tram_dam_tu_than_3.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "j_FghUMcBP0",
        new: true
    },{
        id: 237,
        title: "Kế Hoạch Bảo Vệ Gia Đình 2",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/fMQI7VEpvlPOoSetYd3ctLEY54G.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "dqolYtJGuf4",
        new: true
    },{
        id: 236,
        title: "Nhiệm vụ bất khả thi - Nghiệp báo cuối cùng",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/i/mi8_poster_470x700_1.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "no2HdwAX8jI",
        new: true
    },
    {
        id: 235,
        title: "F1",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_f1_6_1_.jpg",
        category: "Tâm lý",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "YwB1w3V5V3I",
        new: true
    },{
        id: 234,
        title: "Thế giới khủng long: Tái sinh",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/j/w/jw4_sjquetzart_470x700.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "F175sCpwXbo",
        new: true
    },{
        id: 233,
        title: "The Conjuring: Nghi Lễ Cuối Cùng",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sjvW985erG7NSKJScFNhLbjhyma.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "sbsNPOzdBg0",
        new: true
    },{
        id: 232,
        title: "Dính Lẹo – Together (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mHheVgcXINVdZTyzSyGQf33evc2.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "bhd-CKFeXM0",
        new: true
    },{
        id: 231,
        title: "28 năm sau hậu tận thế",
        image: "https://cdn.galaxycine.vn/media/2025/6/20/28-year-later-500_1750407074215.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "fMrcIQZ4cto",
        new: true
    },{
        id: 230,
        title: "Huyền Thoại – HIM (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tUndheUCbTxc2gyP7ckMCZNg9Ds.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "hpEy0iOixb4",
        new: true
    },{
        id: 229,
        title: "Exit 8 - Ga Tàu Vô Tận",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/AdqhED7D1k2QnzTqDiPTI9UTzfr.jpg",
        category: "Kinh dị",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "YXR0tMXhnog",
        new: true
    },{
        id: 228,
        title: "Hồn ma giếng Suriram",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yEJuc55kaaWjj3tABr6i78kM1Oz.jpg",
        category: "Kinh dị",
        country: "Maylaysia",
        type: "Vietsub",
        youtubeId: "KQNnd-HSV2s",
        new: true
    },
    {
        id: 227,
        title: "Cưới ma giải hạn",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/3/5/350x495-redenvelope.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "L7KuvLShQ_Y",
        new: true
    },{
        id: 226,
        title: "Ga tử thần",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/4/7/470wx700h_2.jpg",
        category: "Kinh dị",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "e6xGn8GvRNc",
        new: true
    },{
        id: 225,
        title: "Đèn âm hồn",
        image: "https://cdn.galaxycine.vn/media/2025/2/5/den-am-hon-500_1738745745581.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "PWdeLkzoJ5s",
        new: true
    },{
        id: 224,
        title: "Bộ tứ siêu đẳng",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/f/f/ffour_028m_g_vie-vn_4x5_up.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "xJ3nz9_tj10",
        new: true
    },{
        id: 223,
        title: "Mưa trên cánh bướm",
        image: "https://upload.wikimedia.org/wikipedia/vi/0/0a/M%C6%B0a_tr%C3%AAn_c%C3%A1nh_b%C6%B0%E1%BB%9Bm_-_Don%E2%80%99t_Cry%2C_Butterfly_%28poster%29.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "EXhamQsxNqU",
        new: true
    },{
        id: 222,
        title: "Hồn ma xác mẹ",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/a/main_poster_1__3_2.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "KDS_SAsG7qE",
        new: false
    },{
        id: 221,
        title: "Một nửa hoàn hảo",
        image: "https://cdn.galaxycine.vn/media/2025/6/20/mot-nua-hoan-hao-500_1750391504780.jpg",
        category: "Tình cảm",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "uy6nTrRgzIM",
        new: false
    },{
        id: 220,
        title: "Đêm thánh - Đội săn quỷ",
        image: "https://cdn.galaxycine.vn/media/2025/5/6/holy-night-500_1746503995269.jpg",
        category: "Kinh dị",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "VFWi7MzvhBI",
        new: false
    },{
        id: 219,
        title: "Giờ Mất Tích",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lVY3xYt7ai6ahduq3D7F2z5wwin.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "0U9qK3rV1lE",
        new: false
    },{
        id: 218,
        title: "Hành trình rực rỡ ta đã yêu",
        image: "https://cdn.galaxycine.vn/media/2025/10/2/hanh-trinh-ruc-ro-ta-da-yeu-500_1759396701841.jpg",
        category: "Tình cảm",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "eZqesmtK1L4",
        new: false
    },{
        id: 217,
        title: "Paddington - Gấu thủ chu du",
        image: "https://cdn.galaxycine.vn/media/2025/1/8/paddington-3-500_1736307755357.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "TdAz-ZYo5Sw",
        new: false
    },{
        id: 216,
        title: "Em xinh tinh quái",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/c/pc-couple_poster-sun-ji.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "kiJtQfZ-3nw",
        new: false
    },{
        id: 215,
        title: "404 - Chạy ngay đi",
        image: "https://cdn.galaxycine.vn/media/2024/12/27/404-500_1735272706136.jpg",
        category: "Hài",
        country: "Thái Lan",
        type: "Lồng tiếng",
        youtubeId: "bTJ-fHJopAI",
        new: false
    },{
        id: 214,
        title: "Giờ thả máu",
        image: "https://cdn.galaxycine.vn/media/2025/7/28/gio-tha-mau-500_1753695981985.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "eNdY0qpL20s",
        new: false
    },{
        id: 213,
        title: "Tôi Có Bệnh Mới Thích Cậu",
        image: "https://cdn.galaxycine.vn/media/2025/7/31/toi-co-benh-moi-thich-cau-500_1753944562739.jpg",
        category: "Tình cảm",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "WlvYnndj9l4",
        new: false
    },{
        id: 212,
        title: "Chị đại cuồng sát",
        image: "https://cdn.galaxycine.vn/media/2025/8/13/chi-dai-cuong-sat-500_1755069345479.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "vWZVw9aRwh0",
        new: false
    },{
        id: 211,
        title: "Nữ Tu Bóng Tối",
        image: "https://cdn.galaxycine.vn/media/2025/2/11/dark-nuns-sneak-500_1739260872262.jpg",
        category: "Kinh dị",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "PnlS4B0GPOA",
        new: false
    },{
        id: 210,
        title: "Halabala - Rừng ma tế xác",
        image: "https://cdn.galaxycine.vn/media/2025/6/10/halaba-500_1749539454772.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "svKkKMHM8UU",
        new: false
    },{
        id: 209,
        title: "Tiếng vọng kinh hoàng",
        image: "https://cdn.galaxycine.vn/media/2025/3/8/the-monkey-2_1741403107007.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "E_Xt-GKT1vc",
        new: false
    },{
        id: 208,
        title: "Captain America: Thế Giới Mới",
        image: "https://cdn.galaxycine.vn/media/2025/2/10/captambravenewworld-500_1739183561790.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Y3h6Noj_pEw",
        new: false
    },{
        id: 207,
        title: "Biệt Đội Sấm Sét",
        image: "https://cdn.galaxycine.vn/media/2025/4/23/thunderbolts-500_1745395912649.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "FQ_3yVjvW6o",
        new: false
    },{
        id: 206,
        title: "Kẻ Đồng Hành",
        image: "https://cdn.galaxycine.vn/media/2025/1/23/ke-dong-hanh-500_1737614978458.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "_GgntZm0k_c",
        new: false
    },{
        id: 205,
        title: "Sát Thủ Mắt Trái Tim",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/ebqttF1Vjgde6uSFBEw9mta7Hd3.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "1cRzZcMlJh8",
        new: false
    },{
        id: 204,
        title: "Tay Nghiệp Dư",
        image: "https://cdn.galaxycine.vn/media/2025/3/28/tay-nghiep-du-500_1743148894221.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "W8w9iOqkP1U",
        new: false
    },{
        id: 203,
        title: "Karate Kid: Huyền thoại",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HjRgF32LLXf5BJ1lh84cgq59x0FWgqk33g&s",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "LhRXf-yEQqA",
        new: false
    },{
        id: 202,
        title: "Superman",
        image: "https://cdn.galaxycine.vn/media/2025/7/10/superman-500_1752140210619.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "QZbk3DtUpt0",
        new: false
    },{
        id: 201,
        title: "Điện thoại đen 2 ",
        image: "https://cdn.galaxycine.vn/media/2025/10/27/black-phone-2-500_1761537100774.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "K4Ml_YDwfoU",
        new: false
    },{
        id: 200,
        title: "Nhân Diện",
        image: "https://cdn.galaxycine.vn/media/2025/9/24/nhan-dien-500_1758685845886.jpg",
        category: "Giật gân",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "LJ6VPGRnxsw",
        new: false
    },{
        id: 199,
        title: "Until Dawn: Bí Mật Kinh Hoàng",
        image: "https://cdn.galaxycine.vn/media/2025/5/6/until-dawn-500_1746522709856.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "3z3fpXETgsU",
        new: false
    },{
        id: 198,
        title: "Sát thủ bọ ngựa",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-n8Bt92OfBPFEUIxIJaiTRLdsLhQ6mOUnZMIzgU1BUEYnmgmX",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "PItlVyrf15U",
        new: false
    },{
        id: 197,
        title: "Băng trộm săn vàng 2025",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBdcJX6DF93mwZafLgpMe5ATEhDMI8TBwTg&s",
        category: "Hài",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "2MVjg_SXjgM",
        new: false
    },{
        id: 196,
        title: "Buôn thần bán thánh",
        image: "https://cdn.galaxycine.vn/media/2025/5/14/the-stone-500_1747194516159.jpg",
        category: "Giật gân",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "NjnbheW-GxE",
        new: false
    },{
        id: 195,
        title: "Hẻm Núi – The Gorge",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fRChc2N8kLZpDmol3eTGZnYyVen.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "rUSdnuOLebE",
        new: false
    },{
        id: 194,
        title: "M3GAN 2.0",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/m/g/mg2_mainposter_400x633.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "ek7XNYoCpAM",
        new: false
    },{
        id: 193,
        title: "Tính Bản Ác – Vicious",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dYxrsyUEdFOOq7xzIuvEb1858Sg.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "tSx8ubSBFN8",
        new: false
    },{
        id: 192,
        title: "Mượn Hồn Đoạt Xác – Bring Her Back (2025)",
        image: "https://cdn.galaxycine.vn/media/2025/5/30/bring-her-back-1_1748596379645.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "HWOrKVH6gvs",
        new: false
    },{
        id: 191,
        title: "Thuốc Trường Sinh – The Elixir (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qD8RChlG2mqvIwGFxq7xNR4sa8s.jpg",
        category: "Giật gân",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "XL48F7LGoig",
        new: false
    },{
        id: 190,
        title: "Những Chiến Binh Bất Tử 2 – The Old Guard 2 (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2Kflmz9Qt5UQ97JtU8mn6wTrr0z.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "lyivgZ074PY",
        new: false
    },
    {
        id: 189,
        title: "Mai",
        image: "https://www.elle.vn/wp-content/uploads/2023/12/06/560540/poster-Mai-scaled.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "Yz96EBNwMGw",
        new: false
    },
    {
        id: 188,
        title: "Hai Muối",
        image: "https://bazaarvietnam.vn/wp-content/uploads/2024/08/BZ-phim-Hai-muoi-1.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "MjxPoqCvvVs",
        new: false
    },
    {
        id: 187,
        title: "Chị dâu",
        image: "https://cdn.galaxycine.vn/media/2024/12/11/chi-dau-550_1733886704672.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "XU4oplOtoQo",
        new: false
    },
    {
        id: 186,
        title: "Đào, Phở và Piano",
        image: "https://upload.wikimedia.org/wikipedia/vi/2/29/%C3%81p_ph%C3%ADch_%C4%90%C3%A0o%2C_ph%E1%BB%9F_v%C3%A0_piano.jpg",
        category: "Lịch sử",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "qn1t_biQigc",
        new: false
    },
    {
        id: 185,
        title: "Làm giàu với ma",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/3/5/350x495-lgvm.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "MtZ_hf7tLxk",
        new: false
    },
    {
        id: 184,
        title: "Công tử bạc liêu",
        image: "https://cdn.galaxycine.vn/media/2024/11/15/cong-tu-bac-lieu-500_1731641572864.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "7oVbS8zQxQ0",
        new: false
    },
    {
        id: 183,
        title: "Linh miêu - quỷ nhập tràng",
        image: "https://cdn.galaxycine.vn/media/2024/11/14/linh-mieu-2_1731569950588.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "XsPl7SbL2kg",
        new: false
    },
    {
        id: 182,
        title: "Robot hoang dã",
        image: "https://cdn.galaxycine.vn/media/2024/10/2/the-wild-robot-500_1727843731507.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "2l8_FNIBWLM"
    },
    {
        id: 181,
        title: "Những gã trai hư - chơi hay bị xơi - Bad boys 4",
        image: "https://cdn.galaxycine.vn/media/2024/6/5/bad-boy-500_1717559748357.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "RGnBFA_g0rg"
    },
    {
        id: 180,
        title: "Vây hãm trên không - HiJack 1971",
        image: "https://static.khenphim.com/khenohim_media/2024/07/Hijack-1971-pic1-poster_KP.webp",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "f9OeK-ruVVo"
    },
    {
        id: 179,
        title: "Gặp lại chị bầu",
        image: "https://i.pinimg.com/736x/e3/1a/d2/e31ad2cee4bb66dad71cbdf567b6f643.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "Gggw9jwr1h4",
        new: false
    },
    {
        id: 178,
        title: "Cái giá của hạnh phúc",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/7/0/700x1000-cgchp.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "79BznZKQwIQ",
        new: false
    },
    {
        id: 177,
        title: "Gia Tài Của Ngoại",
        image: "https://static.khenphim.com/khenohim_media/2024/06/Gia-Tai-Cua-Ngoai-pic1-poster_KP-scaled.webp",
        category: "Tâm lý",
        country: "Thái Lan",
        type: "Lồng tiếng",
        youtubeId: "Y_qYJ6To93k"
    },
    {
        id: 176,
        title: "Cám",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7KH0lxqk8EBtxfZMMBCzqStHsWh7HULG_sw&s",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "_8qUFEmPQbc"
    },
    {
        id: 175,
        title: "Cô dâu hào môn",
        image: "https://cdn.galaxycine.vn/media/2024/10/18/co-dau-hao-mon-500_1729221052856.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "QJ8E9R70csY"
    },
    {
        id: 174,
        title: "Biệt đội săn ma - Kỷ nguyên băng giá",
        image: "https://upload.wikimedia.org/wikipedia/vi/2/23/Bi%E1%BB%87t_%C4%91%E1%BB%99i_s%C4%83n_ma_2024.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Y4Fbcvq-9RU"
    },
    {
        id: 173,
        title: "Dune 2: Hành Tinh Cát",
        image: "https://couplecinema.vn/wp-content/uploads/2024/04/3587a6cd29f779d19e235bc39b28d4a4-691x1024.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "kCO-RO3q7U4"
    },
    {
        id: 172,
        title: "Chàng nữ phi công",
        image: "https://cdn.galaxycine.vn/media/2024/8/5/pilot-500_1722847726956.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "MzrT5FL4W7g"
    },
    {
        id: 171,
        title: "Doraemon - Nobita và Bản Giao Hưởng Địa Cầu",
        image: "https://cdn.galaxycine.vn/media/2024/5/21/doraemon-movie-43-nobitas-earth-symphony-1-1_1716273120350.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Lồng tiếng",
        youtubeId: "6SuyvoJ4tyk"
    },
    {
        id: 170,
        title: "Tee yod - quỷ ăn tạng 2",
        image: "https://metiz.vn/media/poster_film/rsz_ty2-teaser-poster.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "vHONH3M9RYU"
    },
    {
        id: 169,
        title: "Anh trai say hi - Kẻ phản diện tạo nên người hùng",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/a/t/atsh_mainposter_700x1000-min.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "FE-5Pwleheg"
    },
    {
        id: 168,
        title: "Trước giờ yêu",
        image: "https://www.vietphucinema.com/temp/-uploaded-hinhphim-2024-4_b4struocgioyeudoc1_cr_500x700.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "JJ_SyVWN9g0"
    },
    {
        id: 167,
        title: "Yêu nhầm bạn thân",
        image: "https://cdn.galaxycine.vn/media/2025/1/17/yeu-nham-ban-than-500_1737106006464.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "Z7AbUpnfcW8"
    },
    {
        id: 166,
        title: "Godzilla x Kong - Đế chế mới",
        image: "https://cdn.galaxycine.vn/media/2024/4/1/god-x-kong-500_1711942287737.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "5XkgG_AAQs0"
    },
    {
        id: 165,
        title: "Hành Tinh Khỉ: Vương Quốc Mới",
        image: "https://upload.wikimedia.org/wikipedia/vi/e/eb/Kingdom_of_Planet_of_Apes_VN_poster.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "8ZFsTMe9JDw"
    },
    {
        id: 164,
        title: "Phỏng vấn sát nhân",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/p/o/poster_5.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "HvCD-SuMpNc"
    },
    {
        id: 163,
        title: "Nơi tình yêu kết thúc",
        image: "https://upload.wikimedia.org/wikipedia/vi/1/1b/It_Ends_with_Us_2024_film_poster.jpg",
        category: "Tình cảm",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Jl5hV02tzVo"
    },
    {
        id: 162,
        title: "Anh trai vượt mọi tam tai",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_dc_main-poster_final.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "hBbndPyAPeg"
    },
    {
        id: 161,
        title: "Alienoid 2: Đa Chiều Hỗn Chiến",
        image: "https://m.media-amazon.com/images/M/MV5BNjNkMzcxYjgtZmY4MC00ZWMwLTk1OTQtMmE5NzIxMzU2M2Q0XkEyXkFqcGc@._V1_.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "NOppyZPNyMo"
    },
    {
        id: 160,
        title: "Godzilla Minus One",
        image: "https://preview.redd.it/godzilla-minus-one-new-poster-and-footage-for-cinematic-v0-2gzetkh3ckvd1.jpeg?auto=webp&s=2a6960faec8bffc9da9263c1a3f2300e16c83bdd",
        category: "Hành động",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "nAYKaslCXPc"
    },
    {
        id: 159,
        title: "Deadpool & Wolverine",
        image: "https://upload.wikimedia.org/wikipedia/vi/4/4c/Deadpool_%26_Wolverine_poster.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "inIVdZSFfc0"
    },{
        id: 158,
        title: "Exhuma - Quật mộ trùng ma",
        image: "https://cdn.galaxycine.vn/media/2024/3/15/500_1710489843381.jpg",
        category: "Kinh dị",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "cPad6xY3cr4"
    },{
        id: 157,
        title: "Thanh Xuân 18x2: Lữ Trình Hướng Về Em",
        image: "https://cdn.galaxycine.vn/media/2024/4/8/thanh-xuan-500_1712564815636.jpg",
        category: "Tình cảm",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "KGEvTFR4wZA"
    },{
        id: 156,
        title: "Đại chiến người khổng lồ - Lần tấn công cuối cùng",
        image: "https://cdn.galaxycine.vn/media/2025/1/14/attack-on-titan-the-movie-the-last-attack-2_1736838026697.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "YfQ7Ftv_Sqg"
    },{
        id: 155,
        title: "Thám Tử Lừng Danh Conan: Ngôi Sao 5 Cánh 1 Triệu Đô",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/2/4/240531_-_dc27_-_main_poster_1_.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Lồng tiếng",
        youtubeId: "x_gGMJOppAo"
    },
    {
        id: 154,
        title: "Kung Fu Panda 4",
        image: "https://cdn.galaxycine.vn/media/2024/2/23/kungfu-panda-4-500_1708659195441.jpg",
        category: "Hoạt hình",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "8MhTBKv-mSg",
        new: false
    },{
        id: 153,
        title: "Bé ma của anh",
        image: "https://cdn.galaxycine.vn/media/2024/7/11/my-boo-500_1720672187224.jpg",
        category: "Hài",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "GjNBgdk02rw",
        new: false
    },{
        id: 152,
        title: "Ác linh trong xác mẹ",
        image: "https://cdn.galaxycine.vn/media/2024/7/12/ac-linh-trong-xac-me-500_1720755910175.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "ngaupZ3rWV4",
        new: false
    },{
        id: 151,
        title: "Hẹn hò với sát nhân",
        image: "https://cdn.galaxycine.vn/media/2024/9/23/hen-ho-voi-sat-nhan-500_1727061354972.jpg",
        category: "Tâm lý",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "F4YSh5iy_tE",
        new: false
    },{
        id: 150,
        title: "Joker: Folie à Deux Điên Có Đôi",
        image: "https://cdn.galaxycine.vn/media/2024/8/30/joker-folie-duex-500_1725002156768.jpg",
        category: "Tâm lý",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "n2k54qx9YkE",
        new: false
    },{
        id: 149,
        title: "Transformers One",
        image: "https://cdn.galaxycine.vn/media/2024/8/13/transformers-500_1723544375976.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Lồng tiếng",
        youtubeId: "YTP6joQcCho",
        new: false
    },{
        id: 148,
        title: "Điềm Báo Của Quỷ",
        image: "https://cdn.galaxycine.vn/media/2024/4/2/omen-500_1712040966315.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "vOcg4Fn4KZU",
        new: false
    },{
        id: 147,
        title: "Bẫy nuốt mạng",
        image: "https://cdn.galaxycine.vn/media/2024/6/5/bnm-500_1717558177894.jpg",
        category: "Giật gân",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "InzMglrIVIY",
        new: false
    },{
        id: 146,
        title: "Giếng Quỷ",
        image: "https://cdn.galaxycine.vn/media/2024/8/15/gieng-qu-500_1723693934297.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "bKbP-cMilBs",
        new: false
    },{
        id: 145,
        title: "Đố anh còng được tôi",
        image: "https://cdn.galaxycine.vn/media/2024/9/18/do-anh-cong-duoc-toi-500_1726635602912.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "Mb3f6ZDSty0",
        new: false
    },{
        id: 144,
        title: "Đôi bạn học yêu",
        image: "https://cdn.galaxycine.vn/media/2024/11/1/doi-ban-hoc-yeu-500_1730430929809.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "WOpnzT2Jb0A",
        new: false
    },{
        id: 143,
        title: "Vòng Vây Cá Mập",
        image: "https://cdn.galaxycine.vn/media/2024/1/24/no-way-up-500_1706066704826.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "8nDaSPMLnRs",
        new: false
    },{
        id: 142,
        title: "Mật vụ ong",
        image: "https://cdn.galaxycine.vn/media/2024/1/3/beekeeper-500_1704265069414.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Jd-1Qn8yLoE",
        new: false
    },{
        id: 141,
        title: "Những người bạn tưởng tượng",
        image: "https://cdn.galaxycine.vn/media/2024/4/15/if-500_1713166372279.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Ilnr--QqwxY",
        new: false
    },{
        id: 140,
        title: "The garfield - Mèo béo siêu quậy",
        image: "https://cdn.galaxycine.vn/media/2024/5/27/garfield-1_1716798361490.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "hMrTVMZS0TA",
        new: false
    },{
        id: 139,
        title: "Harold và cây bút phép thuật",
        image: "https://cdn.galaxycine.vn/media/2024/8/12/harold-500_1723454759393.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "lAQ-8lZwgx8",
        new: false
    },{
        id: 138,
        title: "Giao hàng cho ma",
        image: "https://cdn.galaxycine.vn/media/2025/2/3/rider-500_1738553006855.jpg",
        category: "Hài",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "xCzPuit3pKA",
        new: false
    },{
        id: 137,
        title: "Bẫy hồi sinh",
        image: "https://cdn.galaxycine.vn/media/2025/8/13/the-ghost-game-500_1755056755053.jpg",
        category: "Kinh dị",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "mPkWk1OMP5E",
        new: false
    },{
        id: 136,
        title: "Tu Viện Máu",
        image: "https://cdn.galaxycine.vn/media/2024/3/29/tu-vien-mau-500_1711695290985.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "abc3qHfmdx0",
        new: false
    },{
        id: 135,
        title: "Tarot",
        image: "https://cdn.galaxycine.vn/media/2024/4/17/tarot-500_1713325464321.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "GUoJ3jDEfVY",
        new: false
    },{
        id: 134,
        title: "Ngôi Đền Kỳ Quái 4",
        image: "https://cdn.galaxycine.vn/media/2024/5/27/pee-nak-4-1_1716796582162.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "mef0GxyZE8M",
        new: false
    },
    {
        id: 133,
        title: "Tình Người Duyên Ma: Tái Hợp",
        image: "https://cdn.galaxycine.vn/media/2024/12/26/kang-mak-3_1735201342845.jpg",
        category: "Hài",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "O3HTUAoCJ88"
    },{
        id: 132,
        title: "Giao Ước Quỷ",
        image: "https://cdn.galaxycine.vn/media/2023/12/26/the-verge-of-death-500_1703561616286.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "CYcfpPrgXa8"
    },{
        id: 131,
        title: "Xuyên không cải mệnh gia tộc",
        image: "https://cdn.galaxycine.vn/media/2024/8/26/chinatown-cha-cha-500_1724657094609.jpg",
        category: "Hài",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "OtNMMFrVegU"
    },{
        id: 130,
        title: "Tiếng yêu không lời - Slient Love",
        image: "https://cdn.galaxycine.vn/media/2024/3/8/tieng-yeu-khong-loi-500_1709869385632.jpg",
        category: "Tình cảm",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "PCMpdWADIzY"
    },{
        id: 129,
        title: "Quỷ thay đầu (Baghead)",
        image: "https://cdn.galaxycine.vn/media/2024/2/19/baghead-500_1708317004756.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "RMPeNbgFbXg"
    },{
        id: 128,
        title: "Quỷ tha ma bắt",
        image: "https://cdn.galaxycine.vn/media/2025/5/29/qu-tha-ma-bat-500_1748503238035.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "p76CjOjWf8Y"
    },{
        id: 127,
        title: "Mồ Tra Tấn",
        image: "https://cdn.galaxycine.vn/media/2024/7/25/grave-torture-1_1721895911608.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "KKKK8qptIJc"
    },{
        id: 126,
        title: "Lọ lem chơi ngải",
        image: "https://cdn.galaxycine.vn/media/2025/10/27/lo-lem-choi-ngai-500_1761538767400.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "u0A17Cn7Yo0"
    },{
        id: 125,
        title: "Vùng Đất Câm Lặng: Ngày Một",
        image: "https://cdn.galaxycine.vn/media/2024/6/7/aqp-500_1717732454254.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "eD1O0wVwW7o"
    },{
        id: 124,
        title: "Thầy trừ tà",
        image: "https://cdn.galaxycine.vn/media/2024/6/5/exorcim-500_1717573379987.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "1jOY-WPqbsI"
    },{
        id: 123,
        title: "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh",
        image: "https://cdn.galaxycine.vn/media/2024/5/28/lhvn-500_1716885771360.jpg",
        category: "Kinh dị",
        country: "Indonesia",
        type: "Vietsub",
        youtubeId: "fo0qhQqyksU"
    },{
        id: 122,
        title: "Argylle Siêu Điệp Viên",
        image: "https://cdn.galaxycine.vn/media/2024/1/12/argylle-500_1705031665490.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "SmjV2aHlxhk"
    },{
        id: 121,
        title: "Furiosa: Câu Chuyện Từ Max Điên",
        image: "https://cdn.galaxycine.vn/media/2024/5/24/furiosa-500_1716547292998.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "BUwndlpdbVU"
    },{
        id: 120,
        title: "Atlas",
        image: "https://m.media-amazon.com/images/M/MV5BNDUwNTFkNzYtMGM5NS00NTc4LWEwMDUtMmE5MzgyMjcwOWM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Jokpt_LJpbw"
    },{
        id: 119,
        title: "Dự án mật - Thảm họa trên cầu",
        image: "https://cdn.galaxycine.vn/media/2024/7/2/project-silince-500_1719894451139.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "wuDaOwKCDmc"
    },{
        id: 118,
        title: "Lift: Vụ trộm trên không",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/8BO3zMlWvWM7zquWAVXifXf5A6M.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "nBxJOhHNiCM"
    },{
        id: 117,
        title: "Thợ săn hoang mạc",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/aMelXG1OBTHvvIz1lpSp5m5cjv0.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "rOZK710Kgs"
    },{
        id: 116,
        title: "Madam Web",
        image: "https://cdn.galaxycine.vn/media/2024/1/24/madame-web-500_1706063512367.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "_D12RvkYphg"
    },{
        id: 115,
        title: "Vây hãm: Kẻ trừng phạt",
        image: "https://cdn.galaxycine.vn/media/2024/4/26/roundup-500_1714102279125.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "h4okylxDB1Y"
    },{
        id: 114,
        title: "Móng vuốt",
        image: "https://cdn.galaxycine.vn/media/2024/6/6/mong-vuot-500-docx_1717644756258.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "uVuARLQdC8Y"
    },{
        id: 113,
        title: "The Crow: Báo Thù",
        image: "https://cdn.galaxycine.vn/media/2024/8/30/the-crow-500_1725012333336.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "-HJnPmDYJag"
    },{
        id: 112,
        title: "The killers Game - Trò chơi tử thần",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxuRMDdg3un_-zB0YXATGd6F5mdASxjY--A&s",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "ZHK6WghyWGY"
    },{
        id: 111,
        title: "Trò chơi ảo giác - Ares",
        image: "https://cdn.galaxycine.vn/media/2025/10/10/tron-ares-500_1760067381479.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "aJpOT4_dJXc"
    },{
        id: 110,
        title: "Hào quang đẫm máu",
        image: "https://cdn.galaxycine.vn/media/2024/4/5/wannbe-500_1712309020688.jpg",
        category: "Giật gân",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "-FYXYc5wz9Q"
    },{
        id: 109,
        title: "Lốc xoáy tử thần",
        image: "https://cdn.galaxycine.vn/media/2024/6/28/twisters-500_1719558113896.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "Qtx3OuKXxRI"
    },{
        id: 108,
        title: "Quái Vật Không Gian: Romulus",
        image: "https://cdn.galaxycine.vn/media/2024/7/18/alien-romulus-500_1721273080878.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "GCubqFPehTw"
    },{
        id: 107,
        title: "Không Nói Điều Dữ",
        image: "https://cdn.galaxycine.vn/media/2024/9/9/speak-no-evil-500_1725875282848.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "T-TQAfES10g"
    },{
        id: 106,
        title: "Thanh Gươm Trừ Tà",
        image: "https://cdn.galaxycine.vn/media/2023/9/21/cheon-500_1695281331881.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "IJydCDfITpw"
    },
    {
        id: 105,
        title: "Lật mặt 6: Chiếc vé định mệnh",
        image: "https://cdn.galaxycine.vn/media/2023/4/17/300wx450h_1681703428813.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "2EnP2tVC00Q",
        new: false
    },{
        id: 104,
        title: "Nhà bà nữ",
        image: "https://cdn-i.doisongphapluat.com.vn/media/dang-nhat-duy/2022/12/03/poster-phim-tran-thanh-nha-ba-nu-dspl-31220221.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "IkaP0KJWTsQ",
        new: false
    },
    {
        id: 103,
        title: "Chị chị em em 2",
        image: "https://static.khenphim.com/khenohim_media/2023/02/Chi-Chi-Em-Em-2-1-poster_KP.webp",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "j3r7kq0UZMw"
    },
    {
        id: 102,
        title: "Người vợ cuối cùng",
        image: "https://www.elle.vn/wp-content/uploads/2023/10/03/550011/Kaity-Nguyen-va-Thuan-Nguyen-trong-Nguoi-Vo-Cuoi-Cung.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "JcJ-wemgVbQ",
        new: false
    },
    {
        id: 101,
        title: "Trên bàn nhậu dưới bàn mưu",
        image: "https://metiz.vn/media/poster_film/teaser_poster_-_social_1_.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "rZYVIK0R6sg"
    },
    {
        id: 100,
        title: "Bên Trong Vỏ Kén Vàng",
        image: "https://upload.wikimedia.org/wikipedia/vi/f/f7/B%C3%AAn_trong_v%E1%BB%8F_k%C3%A9n_v%C3%A0ng_poster.jpg",
        category: "Tâm lý",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "YczZiw_frpI"
    },
    {
        id: 99,
        title: "Con nhót mót chồng",
        image: "https://images2.thanhnien.vn/528068263637045248/2023/5/3/con-nhot-poser-16831069636091018563712.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "e7KHOQ-alqY"
    },{
        id: 96,
        title: "Đất rừng phương nam",
        image: "https://cdn.galaxycine.vn/media/2023/10/16/datrungpn-3_1697433762119.jpg",
        category: "Tình cảm",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "DHa4MSOzPXw"
    },
    {
        id: 98,
        title: "Đầu gấu đụng đầu đất",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/b/e/bear-main-poster-printing.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "MagrY1rpOT4"
    },
    {
        id: 97,
        title: "Yêu lại vợ ngầu 2023",
        image: "https://cdn.galaxycine.vn/media/2023/11/6/lr-500_1699256438199.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "081I7DXNknc"
    },
    {
        id: 95,
        title: "Aquaman và Vương quốc thất lạc",
        image: "https://upload.wikimedia.org/wikipedia/vi/b/bf/Aquaman_And_The_Lost_Kingdom_VN_poster.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "keZ70jipjXc"
    },
    {
        id: 94,
        title: "Fast & Furious 10",
        image: "https://upload.wikimedia.org/wikipedia/vi/2/22/Fast_X_VN_poster.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "JSE9vhCuxs8"
    },
    {
        id: 93,
        title: "Cá mập siêu bạo chúa 2",
        image: "https://upload.wikimedia.org/wikipedia/vi/0/0d/THE_MEG_2_VIETNAM_POSTER.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "IvTvR8paEm0"
    },
    {
        id: 92,
        title: "Doraemon - Nobita và vùng đất lý tưởng trên bầu trời",
        image: "https://cdn.galaxycine.vn/media/2023/5/15/doraemon-utopia-2_1684121814838.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Lồng tiếng",
        youtubeId: "SthaOnp5uDs"
    },
    {
        id: 91,
        title: "Thám tử lừng danh Conan: Tàu ngầm sắt màu đen",
        image: "https://cdn.galaxycine.vn/media/2023/7/8/conan-movie-26-1_1688781407463.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Lồng tiếng",
        youtubeId: "0bJXtdfb7hg"
    },{
        id: 90,
        title: "Transformers: Quái thú trỗi dậy",
        image: "https://cdn.galaxycine.vn/media/2023/5/19/300x450_1684480233307.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "VV_Mjc8ttrg"
    },{
        id: 89,
        title: "Phi đội gà bay - Âm mưu gà nugget",
        image: "https://cdn-glx-2.galaxycloud.vn/tool/media/static.lib?sid=45&db681=1&type=ms&id=dc672061&media=image&name=imgPaste_1702648034.png&w=315",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Lồng tiếng",
        youtubeId: "VXSIvn8iHUA"
    },{
        id: 88,
        title: "Xứ sở các nguyên tố",
        image: "https://cdn.galaxycine.vn/media/2023/6/21/elemental-3_1687331405033.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "j2DD_MlAnoA"
    },{
        id: 87,
        title: "Nàng tiên cá",
        image: "https://cdn.galaxycine.vn/media/2023/5/26/300x450-tien-ca_1685071821037.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "RxXHUnAi45E"
    },{
        id: 86,
        title: "Ruby Thủy Quái Tuổi Teen",
        image: "https://cdn.galaxycine.vn/media/2023/6/7/300x450_1686122433078.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "6sJcL5sm9n4"
    },{
        id: 85,
        title: "Tay đua kiệt xuất",
        image: "https://cdn.galaxycine.vn/media/2023/6/27/300x450_1687848001114.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "ZsQwK81LdZA"
    },{
        id: 84,
        title: "Insidious 5 Quỷ quyệt - Cửa đỏ vô định",
        image: "https://cdn.galaxycine.vn/media/2023/7/14/500x750-insi_1689307032412.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "aGBOK2cnHSE"
    },{
        id: 83,
        title: "Dinh thự ma ám",
        image: "https://cdn.galaxycine.vn/media/2023/7/10/500x750_1688963181342.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "OiFU9-Yqzxg"
    },{
        id: 82,
        title: "Ác Quỷ Ma Sơ II",
        image: "https://cdn.galaxycine.vn/media/2023/9/2/300_1693671135181.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "DtveUNmDfx4"
    },{
        id: 81,
        title: "Lưỡi cưa X",
        image: "https://media.themoviedb.org/t/p/w600_and_h900_face/njQ5T5xVLZFk9pGFCwkZ0r6MMnM.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "yPDfYu7wTs"
    },{
        id: 80,
        title: "Phong ấn quỷ dữ",
        image: "https://cdn.galaxycine.vn/media/2023/10/4/500x750_1696401627051.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "AioPaMuZbto"
    },{
        id: 79,
        title: "Wonka",
        image: "https://cdn.galaxycine.vn/media/2023/12/8/wonka-2_1702003033035.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "eNX92tBO7YQ"
    },{
        id: 78,
        title: "Kẻ Ăn Hồn",
        image: "https://cdn.galaxycine.vn/media/2023/12/16/ke-an-hon-2_1702706122713.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "wfvi4R0lb30"
    },{
        id: 77,
        title: "Vây hãm: Không lối thoát",
        image: "https://media.themoviedb.org/t/p/w440_and_h660_face/jeRp9uQSt4IkpGPqR2iWviRUEsE.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "Efe7oVx27E4"
    },{
        id: 76,
        title: "Thiện ác đối đầu 3",
        image: "https://cdn.galaxycine.vn/media/2023/8/28/equalizer-1_1693210797610.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "VEgaQviZZPM"
    },{
        id: 75,
        title: "Đường cùng",
        image: "https://cdn.galaxycine.vn/media/2023/10/27/duong-cung-500_1698390217836.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "jN-_0m7ajPw"
    },
    {
        id: 74,
        title: "Tee yod - quỷ ăn tạng",
        image: "https://cdn.galaxycine.vn/media/2023/12/12/ty-500_1702368995659.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "4oJKI7fMpUk"
    },
    {
        id: 73,
        title: "Tình người duyên ma: Ngoại truyện",
        image: "https://cdn.galaxycine.vn/media/2023/4/30/300x450_1682824293266.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "udsNY4iGju0"
    },{
        id: 72,
        title: "Missing - Mất tích",
        image: "https://cdn.galaxycine.vn/media/2023/2/14/300x450_1676362323844.jpg",
        category: "Giật gân",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "zl7LlstHTio"
    },{
        id: 71,
        title: "Gọi Hồn Quỷ Dữ",
        image: "https://cdn.galaxycine.vn/media/2023/8/3/500x750_1691053002685.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "CfWw9ubDgKI"
    },{
        id: 70,
        title: "Thánh vật của quỷ",
        image: "https://cdn.galaxycine.vn/media/2023/2/8/300x450-q_1675830226477.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "oqHZFKBAiBw"
    },{
        id: 69,
        title: "Mặt nạ quỷ",
        image: "https://cdn.galaxycine.vn/media/2023/4/7/300x450_1680840617286.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "3MKRzG9k76Q"
    },{
        id: 68,
        title: "Năm Đêm Kinh Hoàng",
        image: "https://cdn.galaxycine.vn/media/2023/8/22/five-500_1692691061892.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "oZIaNznczVY"
    },{
        id: 67,
        title: "Quỷ Cẩu",
        image: "https://cdn.galaxycine.vn/media/2023/12/26/qc-500_1703563648819.jpg",
        category: "Kinh dị",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "aKwLkndLZtw"
    },{
        id: 66,
        title: "Luyện Ngải: Cô Hồn Dã Quỷ",
        image: "https://cdn.galaxycine.vn/media/2024/5/13/luyen-ngai-500_1715569977281.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "PEpy9UQatd4"
    },{
        id: 65,
        title: "Blue Beetle",
        image: "https://cdn.galaxycine.vn/media/2023/7/17/500x750-bb_1689566756939.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "kY-4x45tC0A"
    },{
        id: 64,
        title: "Cô giáo em là số 1",
        image: "https://cdn.galaxycine.vn/media/2023/11/9/500x750_1699500910364.jpg",
        category: "Hành động",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "VPG2OG_OgL0"
    },{
        id: 63,
        title: "Quỷ lùn tinh nghịch - Đồng tâm hiệp nhạc",
        image: "https://cdn.galaxycine.vn/media/2023/11/3/trolls-500_1699000954176.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "dvGFh-XdDgQ"
    },{
        id: 62,
        title: "Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca Và Rắn Độc",
        image: "https://cdn.galaxycine.vn/media/2023/11/1/thg-500_1698821052668.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "hpTjTKo7q54"
    },{
        id: 61,
        title: "Kẻ Kiến Tạo",
        image: "https://cdn.galaxycine.vn/media/2023/9/29/500x750_1695961593994.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "MLUcZfI6dbU"
    },{
        id: 60,
        title: "Phi vụ toàn sao",
        image: "https://cdn.galaxycine.vn/media/2023/1/11/300x450_1673410451375.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "_27zRPq3954"
    },{
        id: 59,
        title: "SiSu - Già Gân Báo Thù",
        image: "https://cdn.galaxycine.vn/media/2023/4/28/300_1682666851796.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "InyuAyDUDJE"
    },{
        id: 58,
        title: "Flash",
        image: "https://cdn.galaxycine.vn/media/2023/5/22/300x450_1684739467824.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "fEKGQ91isng"
    },{
        id: 57,
        title: "Heart of Stone",
        image: "https://m.media-amazon.com/images/M/MV5BOTM5OTQ2ZTYtY2EzMC00Zjc3LTg3NWEtZWI4OTdlMjcwMGFlXkEyXkFqcGc@._V1_.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "XuDwndGaCFo"
    },{
        id: 56,
        title: "Rebel Moon – Phần một: Người con của lửa",
        image: "https://static.aircms.xyz/storage/images/rebel-moon-phan-mot-nguoi-con-cua-lua/rebel-moon-phan-mot-nguoi-con-cua-lua-thumb.webp",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Lồng tiếng",
        youtubeId: "RBZcvbTyams "
    },{
        id: 55,
        title: "Mùa Hè Kinh Hãi",
        image: "https://cdn.galaxycine.vn/media/2025/7/10/mua-he-kinh-hai-500_1752130367601.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "NQeFJXBt8Ro "
    },{
        id: 54,
        title: "Di Sản Ma Quái – Rosario (2025)",
        image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/beLZhuHT97849WkWgty2X1hkWUa.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "gHalJwAHJC8 "
    },{
        id: 53,
        title: "Phong Thần Bảng: Chiến hỏa tây kỳ 2",
        image: "https://image.voh.com.vn/voh/image/2024/12/20/voh-phong-than-tam-bo-khuc-phan-2-5-092413.jpg?t=o&w=1600&q=85",
        category: "Giật gân",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "vtCHhjYoeiU"
    },
    {
        id: 50,
        title: "Bỗng dưng trúng số",
        image: "https://upload.wikimedia.org/wikipedia/vi/e/ef/Bong_dung_trung_so.jpeg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "D3KbO3QF-lg"
    },{
        id: 49,
        title: "Avatar 2: Dòng chảy của nước",
        image: "https://cdn.galaxycine.vn/media/2025/9/19/avatar-2-500_1758269569105.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "_CgHXISxU4E"
    },{
        id: 48,
        title: "365 Ngày: Hôm Nay",
        image: "https://duyendang.webcanhcam.vn/wp-content/uploads/2025/12/reviewphim365day6.jpeg",
        category: "Tình cảm",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "9ezOPt8NBDw"
    },{
        id: 47,
        title: "Thám tử lừng danh Conan: Nàng dâu Halloween",
        image: "https://cdn.galaxycine.vn/media/2022/6/24/900wx1350h1_1656065081813.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "V6qby0eZzlA"
    },{
        id: 46,
        title: "One Piece Film: Red",
        image: "https://cdn.galaxycine.vn/media/2022/11/21/300x450_1668999463552.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "L-aFL-bX1ao"
    },{
        id: 45,
        title: "Lyle chú cá sấu biết hát",
        image: "https://cdn.galaxycine.vn/media/2022/11/1/1200x1800_1667275197172.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "J14BfxOUxIs"
    },{
        id: 44,
        title: "Shin Ultraman",
        image: "https://cdn.galaxycine.vn/media/2022/9/27/ultraman_1664265739679.jpg",
        category: "Hoạt hình",
        country: "Nhật Bản",
        type: "Vietsub",
        youtubeId: "YiRq1UOkMrY"
    },{
        id: 43,
        title: "Ông trùm mông má",
        image: "https://cdn.galaxycine.vn/media/2023/1/3/300x450_1672737956984.jpg",
        category: "Hài",
        country: "Hàn Quốc",
        type: "Vietsub",
        youtubeId: "mp_jmkFI7G4"
    },{
        id: 42,
        title: "365 ngày tiếp theo – The Next 365 Days",
        image: "https://gaucafephim.vn/wp-content/uploads/2023/12/The_Next_365_Days_2022_poster-730x1024.jpg",
        category: "Tình cảm",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "iXdw5wYI4cY"
    },{
        id: 41,
        title: "Blood Shot",
        image: "https://assets.glxplay.io/images/w600/title/bloodshot_web_posterPortrait_34478d720b3f97fd3a5353f5c0ddc433.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "2xmqGklHWLI"
    },{
        id: 40,
        title: "Cười",
        image: "https://cdn.galaxycine.vn/media/2022/9/5/1200wx1800h_1662347282801.jpg",
        category: "Kinh dị",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "W6veSPvtnI0"
    },{
        id: 39,
        title: "578: Phát Đạn Của Kẻ Điên",
        image: "https://cdn.galaxycine.vn/media/2022/4/21/1200x1800_1650510065525.jpg",
        category: "Hành động",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "iB2ZH7hsWew"
    },{
        id: 38,
        title: "Black Adam",
        image: "https://cdn.galaxycine.vn/media/2022/9/26/900wx1350h_1664177555434.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "XBH5bmXOyUc"
    },{
        id: 37,
        title: "Chiến Binh Báo Đen: Wakanda Bất Diệt",
        image: "https://cdn.galaxycine.vn/media/2022/11/10/300x450_1668066486371.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "2Qcg6ZaSj8A"
    },{
        id: 36,
        title: "Vận May",
        image: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_van_may_1_2_.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "8OEClvL6U-Y"
    },{
        id: 35,
        title: "Kẻ đâm lén: Glass Onion",
        image: "https://cdn.moveek.com/storage/media/cache/tall/6385c328b91af416863642.jpg",
        category: "Hài",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "wbWgJT-8kEQ"
    },{
        id: 20,
        title: "Hội ngộ diệu kỳ - CoCo",
        image: "https://cdn.galaxycine.vn/media/2020/10/6/900x1350_1601953430186.jpg",
        category: "Hoạt hình",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "MCdX78ZIKug"
    },{
        id: 19,
        title: "Natra 1: Ma đồng giáng thế",
        image: "https://cdn.galaxycine.vn/media/2019/9/4/300x450-natra_1567571844467.jpg",
        category: "Hoạt hình",
        country: "Trung Quốc",
        type: "Vietsub",
        youtubeId: "oJEwLXhPY7Y"
    },{
        id: 18,
        title: "Avatar 1",
        image: "https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg",
        category: "Hành động",
        country: "Âu Mỹ",
        type: "Vietsub",
        youtubeId: "5PSNL1qE6VY"
    },{
        id: 17,
        title: "Ngôi đền kỳ quái 3",
        image: "https://cdn.galaxycine.vn/media/2022/4/5/1200x1800---copy_1649150515606.jpg",
        category: "Kinh dị",
        country: "Thái Lan",
        type: "Vietsub",
        youtubeId: "Rom6Om-eZDU"
    },{
        id: 16,
        title: "LẬT MẶT: BA CHÀNG KHUYẾT",
        image: "https://cdn.galaxycine.vn/media/2020/9/23/bhds-lat-ma-ba-chang-khuyet-poster_1600856737315.jpg",
        category: "Hài",
        country: "Việt Nam",
        type: "Gốc",
        youtubeId: "ACvEJobsJCA"
    }
];
export default MOVIES