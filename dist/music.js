const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed:true,
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: '不想再爱不明白的爱', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '戴爱玲',
            url: 'https://m804.music.126.net/20230831134906/8f7d7982530b565519fef58b52149a40/jdyyaac/075c/030b/5258/0650a0aba64adf16fa98e2d479106b91.m4a?authSecret=0000018a4a0c7ab6061e0aaba50bbff5',
            cover: '/image/love.jpg',
            theme: '#46718b'
        }
    ]
});