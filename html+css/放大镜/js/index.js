//��ȡԪ�ض���
const container=document.querySelector(".container");
const move=document.querySelector(".move");
const bigImg=document.querySelector(".move img");
container.addEventListener('mouseover',function () {
    move.classList.remove('hidden');
})
container.addEventListener('mouseout',function () {
    move.classList.add('hidden');
})
//��container������ƶ��¼�
container.addEventListener('mousemove',function (e) {
    //��ȡ����������ƫ��
    let x=e.clientX;
    //��ȡcontainer��������ƫ��
    let l=container.offsetLeft;
    //�������յ�left��ֵ
    let moveLeft=x-l-move.offsetWidth/2;
    //�߽���
    if(moveLeft<=0)
        moveLeft=0;
    //���ֵ��ȡ
    let maxLeft=container.offsetWidth-move.offsetWidth;
    if(moveLeft>=maxLeft)
        moveLeft=maxLeft;
    //������ʽ
    move.style.left=moveLeft+'px';
    //�����ͼ��left��ֵ
    let bigImgLeft=(moveLeft+move.offsetWidth/2)/container.offsetWidth*bigImg.offsetWidth-move.offsetWidth/2;
    //����left��ֵ
    bigImg.style.left=-bigImgLeft+'px';

    let y=e.clientY;
    //��ȡcontainer��������ƫ��
    let t=container.offsetTop;
    //�������յ�left��ֵ
    let moveTop=y-t-move.offsetHeight/2;
    //�߽���
    if(moveTop<=0)
        moveTop=0;
    //���ֵ��ȡ
    let maxTop=container.offsetHeight-move.offsetHeight;
    if(moveTop>=maxTop)
        moveTop=maxTop;
    //������ʽ
    move.style.top=moveTop+'px';
    //�����ͼ��left��ֵ
    let bigImgTop=(moveTop+move.offsetHeight/2)/container.offsetHeight*bigImg.offsetHeight-move.offsetHeight/2;
    //����left��ֵ
    bigImg.style.top=-bigImgTop+'px';
})