import './../css/index.css'
//������ҳ
/*!
* ������ҳ ע��
* **/
require(['./common.js'], (common) => {
    common.initIndex();
    $(function () {
        console.log("this is jQuery");
    })
})