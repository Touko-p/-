const word=document.querySelector('.word');
let str='我是MOLLY,一个老色批';


for (let i=1;i<str.length+1;i++){
    setTimeout(function () {
        word.innerHTML=str.substr(0,i)
    },(i-1)*300);
}
// function setText(t) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             word.innerHTML=t;
//             resolve();
//         },200)
//     }))
// }
//
// async  function main(flag) {
//     if(flag){
//         for (let i=1;i<=str.length;i++){
//             await setText(str.substr(0,i));
//         }
//     }else {
//         for (let i=str.length;i>0;i--){
//             await setText(str.substr(0,i))
//         }
//     }
//     setTimeout(()=>{
//         main(!flag);
//     },1000)
// }
//
// main(1);