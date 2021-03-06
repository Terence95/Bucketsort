/*
TERENCE
3.31 将事件处理换成了跨浏览器的事件处理程序
*/
// window.onload = function () {
    
//     var btn = document.getElementById('button');
//     // EventUtil.addEventListener(btn,"onclick",sort);
//     // dom2级事件处理
//     // btn.addEventListener("click",sort,true);   
//     EventUtil.addHandler(btn,"click",sort);
// }

window.addEventListener('load',function(){
    var btn = document.getElementById('button');
    // EventUtil.addEventListener(btn,"onclick",sort);
    // dom2级事件处理
    // btn.addEventListener("click",sort,true);   
    EventUtil.addHandler(btn,"click",sort);
},false)

function sort() {
    var input = document.getElementById('input').value;
    var arr = input.split(',');
    var book = [];
    //这个范围代表的是输入的数字可以是100以下的
    book.length = 101;
    for(var i = 0; i < book.length; i++){
        book[i] = 0;
    }
    // alert(book[0]);
    //将arr里的数字录入 book里 book[i],i就是input的数字
    for(i = 0 ;i < arr.length; i++){
        // document.write(arr[i]+"<br/>");
       book[arr[i]]++;
    }
     
    var asc = document.getElementById('asc');
    var dsc = document.getElementById('dsc');

    if((asc.checked == true) && (dsc.checked == false)){
        // 降序排列
        dsc.checked = false;
        for(var i = 0; i <= book.length; i++){ //依次判断book[0] - book[100]
             for (var j = 0; j < book[i]; j++) { // j < book[i] 因为book[i]里存的是i出现的次数
                     document.write(i+" ");  // 此处循环表示i出现了几次就把i打出几次
             }
        }
    }else if(asc.checked == false && dsc.checked == true){
         // 按降序排列的
        for(var i = book.length; i >= 0; i--){ //依次判断book[0] - book[100]
            for (var j = 0; j < book[i]; j++) { // j < book[i] 因为book[i]里存的是i出现的次数
                    document.write(i+" ");  // 此处循环表示i出现了几次就把i打出几次
            }
        }
    }
}
//保证复选框只有一个被选中
function checkBoxValidate(cb) {
    var checkbox = document.getElementById('checkboxes'); // get div checkbox
    for (j = 0; j < 2; j++) {
        if (eval("checkbox.children[" + j + "].checked") == true) {
            checkbox.children[j].checked = false;
                if (j == cb) {
                   checkbox.children[j].checked = true;
                }
        }
   }
}

// 跨浏览器事件处理
// addHandler函数接收三个参数，要操作的元素,事件名称，和事件处理程序函数
var EventUtil = {
    addHandler:function (element,type,handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else{
            element["on"+type] = null;
        }
    },
    removeHandler:function (element,type,handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on" + type,handler);
        }else{
            element["on"+type] = null;
        }
    }
};
