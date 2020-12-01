//获取元素
const  items=document.querySelectorAll('.item');
//遍历绑定事件
for (let i=0;i<items.length;i++){
    items[i].addEventListener('click',function () {
        //使被点击元素处于中间位置
        this.classList.remove('left','middle','right');
        this.classList.add('middle');
        document.body.style.background=this.dataset.color;
        //左侧元素变化
        let left=this.previousElementSibling ?? items[items.length-1];
        left.classList.remove('left','middle','right');
        left.classList.add('left');
        //右侧元素变化
        let right=this.nextElementSibling ?? items[0];
        right.classList.remove('left','middle','right');
        right.classList.add('right');
    })
}