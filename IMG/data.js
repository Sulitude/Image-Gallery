var data=[];
var dataStr='1、碧海青天&nbsp水天一色<br>\
<br>\
一个人至少拥有一个梦想,<br>\
有一个理由去坚强.<br>\
心若没有栖息的地方,<br>\
到哪里都是在流浪.<br>\
<br>\
---《我的青春谁做主》<br>\
<br>\
<br>\
2、岁暮天寒&nbsp晨光熹微<br>\
<br>\
雨下了那么多日,<br>\
它没有弄湿过我,<br>\
是我心底在雨季,<br>\
我自己弄湿了自己.<br>\
<br>\
---《雨季不再来》<br>\
<br>\
<br>\
3、林海茫茫&nbsp阴翳蔽日<br>\
<br>\
对朋友的失望,大部分来自对方所言所行,<br>\
达不到自己对他所要求的标准.<br>\
而我认为,<br>\
朋友是不能要求的,<br>\
一点也不能,<br>\
因为我们没有权利.<br>\
<br>\
---《亲爱的三毛》<br>\
<br>\
<br>\
4、艳雪初融&nbsp万物回春<br>\
<br>\
如果有来生,要做一棵树,<br>\
站成永恒.没有悲欢的姿势,<br>\
一半在尘土里安详,<br>\
一半在风中飞扬;<br>\
一半洒落阴凉,<br>\
一半沐浴阳光.<br>\
非常沉默、非常骄傲.<br>\
从不依靠、从不寻找.<br>\
<br>\
---《说给自己听》<br>\
<br>\
<br>\
5、松涛阵阵&nbsp直插云霄<br>\
<br>\
出发,<br>\
总是好的,<br>\
它象征着一种出离,<br>\
更是必须面对的另一个开始.<br>\
<br>\
---《送你一匹马》<br>\
<br>\
<br>\
6、盘虬卧龙&nbsp枝繁叶茂<br>\
<br>\
无论是短短的几日,<br>\
长长的一生,<br>\
哭、笑、爱、恨,<br>\
梦里梦外,<br>\
颠颠倒倒,<br>\
竟都有它消失的一日.<br>\
<br>\
---《撒哈拉的故事》<br>\
<br>\
<br>\
7、沙漠绿洲&nbsp日薄西山<br>\
<br>\
夜有它特别的气息,<br>\
寂静有它自己的声音.<br>\
<br>\
---《梦里花落知多少》<br>\
<br>\
<br>\
8、涓涓细流&nbsp曲径通幽<br>\
<br>\
对人处事我并不天真,<br>\
但我依旧看不起油滑,<br>\
我不偏激,<br>\
我甚至对每一个人都心存感激,<br>\
因为生活是人群共同建立的,<br>\
没有他人,<br>\
也不可能有我.<br>\
<br>\
---《当三毛还是二毛的时候》<br>\
<br>\
<br>\
9、烟雨空蒙&nbsp云雾缭绕<br>\
<br>\
"相信人有前生和来世吗?<br>\
我认识过你,<br>\
不在今生."<br>\
<br>\
---《万水千山走遍》<br>\
<br>\
<br>\
10、溪云初起&nbsp山雨欲来<br>\
<br>\
刻骨的思念,<br>\
即使再回头,<br>\
也看不见什么了.<br>\
<br>\
---《雨季不再来》<br>\
<br>\
<br>\
11、百川归海&nbsp波澜壮阔<br>\
<br>\
世事一场大梦,<br>\
人生几度新凉,<br>\
劫难过来的人,<br>\
再回来已是槁木死灰.<br>\
<br>\
---《你是我不及的梦》<br>\
<br>\
<br>\
12、清莹秀澈&nbsp静谧优美<br>\
<br>\
没有一个人是经得起分析的,<br>\
能够试着了解,<br>\
已是不容易了.<br>\
<br>\
---《亲爱的三毛》'
var d = dataStr.split('<br><br><br>')
for(var i=0,len=d.length;i<len;i++){
    var x = d[i].split('<br><br>')
    data.push({
        img:(i+1)+'.jpg',
        caption:x[0].split('、')[1],
        desc:x[1],
        name:x[2]
    });
    // console.log((i+1)+'.jpg');
}