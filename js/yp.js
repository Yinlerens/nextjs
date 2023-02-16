$(function () {
    // 获取电影分类信息

    var dyfl
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes',
        type: 'get',
        async: false,
        success: function (res) {
            dyfl = res.types;


        }
    });

    //   获取电影数据
    var dysj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        async: false,
        success: function (res) {
            dysj = res.movies;

            for (i = 0; i < dysj.length; i++) {
                $("#bottom").append(`<div class="tp">
               <img src="${dysj[i].imgSrc}" class="FGHJK" alt="">
               <p class="leftmoviesNameDown">${dysj[i].title}</p>
               <p>${dysj[i].score}</p>
               </div>`)
            }
        }
    });

    //  点击电影跳转
    $("#bottom").on("click", function (event) {
        if (event.target.className == "FGHJK") {
            var c1 = $(event.target).parents('.tp').find(".leftmoviesNameDown").html()
            console.log(c1)
            window.location.href = `./ypxqy.html?${c1}`
        }
    })


    // 点击选项切换
    $("#T1").on("click", function (event) {

        if (event.target.className == "ppq") {
            $("#T1 li").css("background-color", "#fff")
            $(event.target).css("background-color", "#f99135")
            $(event.target).css("border-radius", "14px")
            $(event.target).css("text-align", "center")
        }



    })
    $("#T2").on("click", function (event) {

        if (event.target.className == "ppq1") {
            $("#T2 li").css("background-color", "#fff")
            $(event.target).css("background-color", "#f99135")
            $(event.target).css("border-radius", "14px")
            $(event.target).css("text-align", "center")
        }



    })
    $("#T3").on("click", function (event) {

        if (event.target.className == "ppq") {
            $("#T3 li").css("background-color", "#fff")
            $(event.target).css("background-color", "#f99135")
            $(event.target).css("border-radius", "14px")
            $(event.target).css("text-align", "center")
        }



    })

    // 分类
    $(".ppq").on('click', function () {
        var mz = this.innerHTML
        var bh
        //    遍历电影分类得到编号
        for (var k in dyfl) {
            // console.log(dyfl)
            if (dyfl[k].name==mz) {
                bh = dyfl[k].id
                console.log(bh)
                break  
            }

        }
        $("#bottom").empty()
    //   遍历电影
           for(var i in dysj){
              for( var c in dysj[i].movieType ){
                 if(dysj[i].movieType[c]==bh){
                    $("#bottom").append(`<div class="tp">
                    <img src="${dysj[i].imgSrc}" class="FGHJK" alt="">
                    <p class="leftmoviesNameDown">${dysj[i].title}</p>
                    <p>${dysj[i].score}</p>
                    </div>`)
                 }
              }
           }
// 点鼠标点击的是全部时
   if(mz=="全部")
   for (i = 0; i < dysj.length; i++) {
    $("#bottom").append(`<div class="tp">
   <img src="${dysj[i].imgSrc}" class="FGHJK" alt="">
   <p class="leftmoviesNameDown">${dysj[i].title}</p>
   <p>${dysj[i].score}</p>
   </div>`)
}
    })
})




