
$(function () {
    // 获取传过来的值
    var a = decodeURIComponent(window.location.search);
    a = a.replace("?", "");

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
            dysj= res.movies;

        }
    });
    // 获取电影分类
    var dyfl

    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllTypes',
        type: 'get',
        async: false,
        success: function (res) {
            dyfl = res.types;

        }
    });

    console.log(dyfl)
    //  遍历电影数据传值并且得到电影id判断电影类型
    var ID
    var ccc=""
    for (i = 0; i < dysj.length; i++) {
        if (a ==  dysj[i].title) {

            $("#bl0").prop("src", `${ dysj[i].imgSrc}`)
            $("#bl1").html(`${ dysj[i].title}`)
              ID=dysj[i].movieType
              for(var j in ID){
                  for(var k in dyfl){
                     if(ID[j]==dyfl[k].id){
                         ccc= ccc+dyfl[k].name+'&nbsp;'
                         break
                     }
                  }
              }

             $("#bl2").html(`${ ccc}`)
            $("#bl3").html(`${ dysj[i].region}/${ dysj[i].duration}`)
            $("#bl4").html(`${ dysj[i].release}`)

            $("#bl8").html(`${ dysj[i].score}`)
            $("#bl9").html(`${ dysj[i].price}`)
            $("#bl10").html(`${ dysj[i].title}`)
            $("#bl11").html(`${ dysj[i].desc}`)
            $("#bl12").html(`${ dysj[i].director}`)
            $("#bl13").html(`${ dysj[i].comments[0]}`)
            $("#bl14").html(`${ dysj[i].comments[1]}`)
            $("#bl15").html(`${ dysj[i].comments[2]}`)
            $("#bl16").html(`${ dysj[i].comments[3]}`)
            $("#bl17").html(`${ dysj[i].comments[4]}`)

            break
        }
    }

    $("#bl19").on("click", function () {
        $("#bl18").css("display", "block")

    })
    $("#bl20").on("click", function () {
        $("#bl18").css("display", "none")

    })

    // 添加星星
    $("#bl22").on("click", function (event) {
        if ($(event.target).prop("src").indexOf("star") != -1) {
            $(event.target).prop("src", "./../image/一颗星星.png")
        } else {
            $(event.target).prop("src", "../image/评价star.png")
        }
        var fff = $(event.target).prop("src")
        var asdf = $(event.target).attr("data")
        console.log(asdf)
        var ccc = document.querySelectorAll("#bl22>img")
        $(ccc).prop("src", "../image/评价star.png")
        for (var k = 0; k <= asdf; k++) {
            $(ccc[k]).prop("src", fff)
        }
        if ($(event.target).attr("data") > 1 && fff.indexOf("star") != -1) {
            $(ccc).prop("src", "../image/评价star.png")
        }

    })

    // 点击添加评论
    $("#bl21").on("click", function () {
        $("#bl18").css("display", "none")
        var q1 = $("#pl").val()
        var q2 = $("#bl22").html()
        $("#Shorts").append(`<div>
<div class="top">
    <img src="../image/user1.jpg" alt="">
    <div class="user">
        <strong>你的评论</strong>
        <p class="dddd">刚刚${q2}</p>

    </div>
    <div class="zan">
        <img src="../image/影片详情页_03.jpg" alt="">
    </div>
</div>
<div class="bottom">
    <p id="bl17">${q1}
    </p>
</div>
</div>`)
    })

    // 点击介绍和演员切换
    $("#dj1").on("click", function () {
        $("#dj1").css("border-bottom", "2px solid #f99135")
        $("#dj1").css("color", "#f99135")
        $("#sj1").css("display", "block")
        $("#dj2").css("border", "none")
        $("#dj2").css("color", "#000")
        $("#sj2").css("display", "none")

    })
    $("#dj2").on("click", function () {
        $("#dj2").css("border-bottom", "2px solid #f99135")
        $("#dj2").css("color", "#f99135")
        $("#sj2").css("display", "block")
        $("#dj1").css("border", "none")
        $("#dj1").css("color", "#000")
        $("#sj1").css("display", "none")

    })

    // 点击特惠购票跳转
    $("#bl7").on('click', function (event) {

        if (window.sessionStorage.getItem("dlxi") == null) {
            alert("请先登录")
            event.preventDefault();
        } else {

            window.location.href = ""
        }
    })


})


{/*  */ }