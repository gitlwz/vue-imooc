import './../css/index.css'
//这是首页
/*!
* 这是首页 注释
* **/
require(['./common.js'], (common) => {
    common.initIndex();
    $(function () {
        console.log("this is jQuery");
    })
})