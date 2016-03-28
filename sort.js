/*
TERENCE
*/
window.onload = function () {
    var btn = document.getElementById('button');
    btn.onclick = sort;
}

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