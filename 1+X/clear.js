// (1)单击按钮更新页面内容前需要先清除页面中的原有数据
// (2)获取<header>、<aside>标签：使用getElementsByTagName()函数获取<header>、<aside>标签
// (3)判断是否有子节点：通过hasChildNodes()函数判断是否有子节点
// (4)移除子节点：通过removeChild()函数移除子节点
// (5)获取第一个子节点：通过firstChild属性获取第一个子节点
// (6)清除内容：给<p>标签赋值空字符串
// (7)在loadJSON()函数和loadXML()函数的第1行插入clear()：代码，实现页面内容异步刷新


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