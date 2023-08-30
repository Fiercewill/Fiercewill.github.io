const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed:true,
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: '不想再爱不明白的爱', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '戴爱玲',
            url: 'https://m704.music.126.net/20230831004532/6467bd7154d4296705694d2a27514444/jdyyaac/075c/030b/5258/0650a0aba64adf16fa98e2d479106b91.m4a?authSecret=0000018a473f19a2170d0aaba1501448',
            cover: '/image/love.jpg',
            theme: '#46718b'
        },
        {
            name: '可不可以', 
            artist: '张紫豪',
            url: 'https://m704.music.126.net/20230831004558/c3d2c46060bf9ccec39297120d6ca14c/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481674407/a6a0/6c23/cdaf/a1eaa03d12f03fb14497cc9f25c9a4c2.m4a?authSecret=0000018a473f8157129e0aa4635214fe',
            cover: '/image/5.jpg',
            theme: '#46718b'
        }
    ]
});