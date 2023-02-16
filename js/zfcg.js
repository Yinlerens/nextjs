$(function(){
    var a = decodeURIComponent(window.location.search);
    a = a.replace("?", "");
    a = a.split("*");
    console.log(a)
     $("#t1").html(`${a[1]}`)
     $("#t3").html(`${a[0]}`)
     $("#t4").html(`${a[4]}`)
     $("#t5").html(`${a[3]}`)
     $("#t6").html(`${a[1]}`)
     $("#t7").html(`￥${a[2]}`)


        //   获取电影数据


    var dysj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        async: false,
        success: function (res) {
            dysj = res.movies;

        }
    });
 for( var i in dysj){
      if(dysj[i].title==a[0]){
        $("#t2").prop("src",`${dysj[i].imgSrc}`)
        break
      }
 }

})
// // 存数据
// $(function(){
    
// })