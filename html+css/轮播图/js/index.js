//��ȡԪ��
const  items=document.querySelectorAll('.item');
//�������¼�
for (let i=0;i<items.length;i++){
    items[i].addEventListener('click',function () {
        //ʹ�����Ԫ�ش����м�λ��
        this.classList.remove('left','middle','right');
        this.classList.add('middle');
        document.body.style.background=this.dataset.color;
        //���Ԫ�ر仯
        let left=this.previousElementSibling ?? items[items.length-1];
        left.classList.remove('left','middle','right');
        left.classList.add('left');
        //�Ҳ�Ԫ�ر仯
        let right=this.nextElementSibling ?? items[0];
        right.classList.remove('left','middle','right');
        right.classList.add('right');
    })
}