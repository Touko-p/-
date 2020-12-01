//获取元素对象
const container=document.querySelector(".container");
const move=document.querySelector(".move");
const bigImg=document.querySelector(".move img");
container.addEventListener('mouseover',function () {
    move.classList.remove('hidden');
})
container.addEventListener('mouseout',function () {
    move.classList.add('hidden');
})
//绑定container的鼠标移动事件
container.addEventListener('mousemove',function (e) {
    //获取鼠标距离左侧的偏移
    let x=e.clientX;
    //获取container距离左侧的偏移
    let l=container.offsetLeft;
    //计算最终的left的值
    let moveLeft=x-l-move.offsetWidth/2;
    //边界检测
    if(moveLeft<=0)
        moveLeft=0;
    //最大值获取
    let maxLeft=container.offsetWidth-move.offsetWidth;
    if(moveLeft>=maxLeft)
        moveLeft=maxLeft;
    //设置样式
    move.style.left=moveLeft+'px';
    //计算大图的left的值
    let bigImgLeft=(moveLeft+move.offsetWidth/2)/container.offsetWidth*bigImg.offsetWidth-move.offsetWidth/2;
    //设置left的值
    bigImg.style.left=-bigImgLeft+'px';

    let y=e.clientY;
    //获取container距离左侧的偏移
    let t=container.offsetTop;
    //计算最终的left的值
    let moveTop=y-t-move.offsetHeight/2;
    //边界检测
    if(moveTop<=0)
        moveTop=0;
    //最大值获取
    let maxTop=container.offsetHeight-move.offsetHeight;
    if(moveTop>=maxTop)
        moveTop=maxTop;
    //设置样式
    move.style.top=moveTop+'px';
    //计算大图的left的值
    let bigImgTop=(moveTop+move.offsetHeight/2)/container.offsetHeight*bigImg.offsetHeight-move.offsetHeight/2;
    //设置left的值
    bigImg.style.top=-bigImgTop+'px';
})