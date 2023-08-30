const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed:true,
    listFolded: false,//列表默认折叠
    listMaxHeight: 90,//列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: '不想再爱不明白的爱', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '戴爱玲',
            url: 'https://m804.music.126.net/20230830234543/173d97e144199e9404ea03832cd324d9/jdyyaac/075c/030b/5258/0650a0aba64adf16fa98e2d479106b91.m4a?authSecret=0000018a470857300bcc0aa4637a1a21',
            cover: '/image/love.jpg',
            theme: '#46718b'
        },
        {
            name: '把回忆拼好给你', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '王贰浪',
            url: 'https://m704.music.126.net/20230830234602/0ecd1d8df50bbc85fe16755e1ed62b7b/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096427141/c08e/402c/e87d/1caf9695a8233cd8e22010d4e7cbd7bb.m4a?authSecret=0000018a4708a1ce09e60aaba360c34c',
            cover: '/image/memory.jpg',
            theme: '#46718b'
        },
        {
            name: '与我无关', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '阿冗',
            url: 'https://m804.music.126.net/20230830234842/3c529c25c8a062c7f1c27e447cd9b4f0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096428100/4c5b/eb42/04b0/7b607352a3f6d6701abbdec4850005fb.m4a?authSecret=0000018a470b10ac061d0aaba0480f57',
            cover: '/image/1.jpg',
            theme: '#46718b'
        },
        {
            name: '可不可以', 
            artist: '张紫豪',
            url: 'https://m704.music.126.net/20230830233222/d7697c54233e121467440ed0e6d33e04/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28481674407/a6a0/6c23/cdaf/a1eaa03d12f03fb14497cc9f25c9a4c2.m4a?authSecret=0000018a46fc1c711b570aaba55d29b0',
            cover: '/image/5.jpg',
            theme: '#46718b'
        },
        {
            name: '形容', 
            artist: '沈以诚',
            url: 'https://m704.music.126.net/20230830233407/046ca57811764971fb0656536c342f0f/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096408550/edfa/66b0/8aff/7cf0edafc6b18302e8d2abb6305edc2e.m4a?authSecret=0000018a46fdb9e909e60aaba24339d2',
            cover: '/image/6.jpg',
            theme: '#46718b'
        },
        {
            name: 'MOM', 
            artist: '蜡笔小心',
            url: 'https://m804.music.126.net/20230830233610/b963e1013a1a1bf8401135a5131bd4d0/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096407035/f7db/d8cb/32fb/84d6fce71fb40f72346d1e096f2eb255.m4a?authSecret=0000018a46ff97981bff0aaba052a5f8',
            cover: '/image/7.jpg',
            theme: '#46718b'
        },
        {
            name: '我的名字', 
            artist: '焦迈奇',
            url: 'https://m704.music.126.net/20230830233759/e8a6163c8e1a2ae98ee5c54c4d312c93/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096413600/96e4/0a6a/a085/78c03012f10c9abe9af05125b8ea0433.m4a?authSecret=0000018a4701408d14650aaba1312648',
            cover: '/image/8.jpg',
            theme: '#46718b'
        },
        {
            name: '致你', 
            artist: 'yihuik苡慧',
            url: 'https://m704.music.126.net/20230830233935/c012d402dfd7fe50682f606e4fc14585/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096413541/85d4/bfac/ac75/d2a14499e6defb902438ed83758396db.m4a?authSecret=0000018a4702b94301470aaba5241c93',
            cover: '/image/10.jpg',
            theme: '#46718b'
        },
        {
            name: '还是分开', 
            artist: '张叶蕾',
            url: 'https://m804.music.126.net/20230830234123/52805a4aba8471c121ea4f5cd60fa135/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096407677/0248/d415/4fcf/e74860c0825b4b5f478fdbc11c80d8ba.m4a?authSecret=0000018a47045fc912a30aaba03c2260',
            cover: '/image/11.jpg',
            theme: '#46718b'
        }
    ]
});