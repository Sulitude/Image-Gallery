// 1.翻面切换
function turn(elem){
    var i = elem.className;
    var n = elem.getAttribute("id");
    n = n.replace(/\D*/,'');
    var j = g('#button'+n).className;
    // 图片正反面切换   居中图片
    
    if (/flip_front/.test(i)&/center_choice/.test(i)){
        i = i.replace("flip_front","flip_back");
    }
    else if(/flip_back/.test(i)){
        i = i.replace("flip_back","flip_front");
    }
    if (!/center_choice/.test(i)){
        randomSort(n);
        i +=" center_choice ";
    }
    
    // 按钮样式切换
    if (/button_front/.test(j)){
        j = j.replace("button_front","button_back");
    }
    else if(/button_back/.test(j)){
        j = j.replace("button_back","button_front");
    }
    else{
        var _buttons = g('.button');
        for (var x = 0;x<_buttons.length;x++){
            _buttons[x].className = _buttons[x].className.replace(/button_front/,'');
            _buttons[x].className = _buttons[x].className.replace(/button_back/,'');
        }
        j += (" button_front ");
    }
    
    return elem.className = i,g('#button'+n).className = j;   
}
// 定义通用函数
function g(selector){
    var method = selector.substr(0,1)=='#'?'getElementById' : 'getElementsByClassName';
    return document [method](selector.substr(1));                                              //??为什么只能用方括号语法
}
// 随机生成一个range范围内的整数数字
function random( range ){
    var Max = Math.max(range[0],range[1]);
    var Min = Math.min(range[0],range[1]);
    var diff = Max-Min;
    var num = Math.floor((Math.random()*diff+Min));
    return num;
}
 // 图片尽量均匀,新加函数random_n
 function random_n( range ){
    var a = random( range );
    var b = a/5;
    b = Math.floor(b)*5;
    return b;
}

// 范围控制函数
function range(){      
    var range = { left:{ x:[],y:[]} , right:{ x:[],y:[]} };
    var gallery = {
        w:g('#gallery').clientWidth,
        h:g('#gallery').clientHeight
    }
    var center = {
        w:g('.center')[0].clientWidth,
        h:g('.center')[0].clientHeight
    }
    // range.gallery = gallery;
    // range.center = center;
    range.left.x = [0-center.w , gallery.w/2 - center.w/2];
    range.left.y = [0-center.h , gallery.h];

    range.right.x = [gallery.w/2 + center.w/2 , gallery.w + center.w];
    range.right.y = [0-center.h , gallery.h];
    return range;

}
// 修改HTML内容
var data = data;
function addImg(){
    var content = g('#gallery').innerHTML;
    var nav = g('#nav').innerHTML;
    var HTML = [];
    var HTML2 = [];
for (n in data){
    var html = content
                    .replace(/{{index}}/,n)
                    .replace(/{{img}}/g,data[n].img)
                    .replace('{{caption}}',data[n].caption)
                    .replace('{{desc}}',data[n].desc)
                    .replace('{{name}}',data[n].name);
    var html2 = nav.replace(/{{index}}/g,n);
    HTML.push(html);
    HTML2.push(html2);
}
    g('#gallery').innerHTML = HTML.join('');
    g('#nav').innerHTML = HTML2.join('');
    randomSort(random([0,data.length]));
}
addImg();
// 图片 选中居中  其余左右两边 各随机摆放
function randomSort( num ){
    var _imgs = g('.center');
    var imgs = [];
    for (var m = 0;m<_imgs.length;m++){
        _imgs[m].className = _imgs[m].className.replace(/\s*center_choice\s*/,' ');
        imgs.push( _imgs[m] );
        
    }
    // 选中图片居中
    var center = g('#img'+num);
    center.className += (' center_choice ');
    center.style = null;
    center = imgs.splice(num,1)[0];
//  选中图片对应按钮样式改变
    var button = g('#button'+num);
    button.className +=' button_front '; 
//非选中图片分为左右两部分
    imgsleft  = imgs.splice(0,Math.ceil(imgs.length/2));
    imgsright = imgs;
    var ranges = range();


   
    for (n in imgsleft){
        var img = imgsleft[n];
        

        // img.style.left = random(ranges.left.x)+'px';
        // img.style.top= random(ranges.left.y)+'px';
        img.style['-webkit-transform'] = 'rotate('+random_n([-60,-120])+'deg) scale(.7) translateY(-1200px)';
        img.style['-moz-transform'] = 'rotate('+random_n([-60,-120])+'deg) scale(.7) translateY(-1200px)';
        img.style['-ms-transform'] = 'rotate('+random_n([-60,-120])+'deg) scale(.7) translateY(-1200px)';
        img.style['-o-transform'] = 'rotate('+random_n([-60,-120])+'deg) scale(.7) translateY(-1200px)';
        img.style['transform'] = 'rotate('+random_n([-60,-120])+'deg) scale(.7) translateY(-1200px)';
    }
    for (n in imgsright){
        var img = imgsright[n];
        // img.style.left = random(ranges.right.x)+'px';
        // img.style.top= random(ranges.right.y)+'px';
        img.style['-webkit-transform'] = 'rotate('+random_n([60,120])+'deg) scale(.7) translateY(-1200px)' ;
        img.style['-moz-transform'] = 'rotate('+random_n([60,120])+'deg) scale(.7) translateY(-1200px)' ;
        img.style['-ms-transform'] = 'rotate('+random_n([60,120])+'deg) scale(.7) translateY(-1200px)' ;
        img.style['-o-transform'] = 'rotate('+random_n([60,120])+'deg) scale(.7) translateY(-1200px)' ;
        img.style['transform'] = 'rotate('+random_n([60,120])+'deg) scale(.7) translateY(-1200px)' ;
    }
}