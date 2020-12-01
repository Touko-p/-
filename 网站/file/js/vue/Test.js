var num1, num2, sum, test;
var message="什么，竟然被发现了！！！";

function f() {
    document.title=message;
    message=message.substring(1,message.length)+message.substring(0,1);
}

f()

num1=Math.floor(Math.random()*100);
num2=Math.floor(Math.random()*100);
sum=num1+num2;
// test=Number(prompt(num1+'+'+num2+'='));
//
// if(test==sum){
//     alert('你真是个小机灵鬼')
// }
// else{
//     alert('笨比')
//     window.open('', '_self', '');
//     window.close();
// }
setInterval("f()",250)
