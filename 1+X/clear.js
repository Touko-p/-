// (1)������ť����ҳ������ǰ��Ҫ�����ҳ���е�ԭ������
// (2)��ȡ<header>��<aside>��ǩ��ʹ��getElementsByTagName()������ȡ<header>��<aside>��ǩ
// (3)�ж��Ƿ����ӽڵ㣺ͨ��hasChildNodes()�����ж��Ƿ����ӽڵ�
// (4)�Ƴ��ӽڵ㣺ͨ��removeChild()�����Ƴ��ӽڵ�
// (5)��ȡ��һ���ӽڵ㣺ͨ��firstChild���Ի�ȡ��һ���ӽڵ�
// (6)������ݣ���<p>��ǩ��ֵ���ַ���
// (7)��loadJSON()������loadXML()�����ĵ�1�в���clear()�����룬ʵ��ҳ�������첽ˢ��


function clear() {
    var dom=document.getElementsByTagName("header")[0];
    while (dom.hasChildNodes()){
        dom.removeChild(dom.firstChild);
    }
    var dom=document.getElementsByTagName("aside")[0];
    while (dom.hasChildNodes()){
        dom.removeChild(dom.firstChild);
    }
    document.getElementsByTagName("p")[0].innerHTML="";
}