
// 获取值
$(function () {
    var date = new Date()
    var yue = date.getMonth() + 1
    var ri = date.getDate()

    // 获取传过来的值
    var a = decodeURIComponent(window.location.search);
    a = a.replace("?", "");
    a = a.split("*");
    console.log(a)
    $("#t1").html(`${a[3]}`)
    $("#t").html(`${a[4]}`)
    $("#t2").html(`${a[2]}`)
    $("#t3").html(`￥${a[1]}/张`)
    $("#t4").html(`&nbsp;${yue}月${ri}日${a[0]}`)

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
    for (var i = 0; i < dysj.length; i++) {
        if (a[3] == dysj[i].title) {
            $("#t5").prop("src", dysj[i].imgSrc)
            $("#t6").html(dysj[i].duration)
            break
        }
    }


})
// 打印椅子
$(function () {
    //top椅子添加
    for (var index = 1; index < 81; index++) {
        var topDiv = '';
        var id = 'i' + index;
        topDiv += `<div class='def' id=${id}></div>`
        $('.seatTop').append(topDiv);
        $('.seatTop').children().prop('style', 'background-image:url(../image/kx.png)')



        // $('#i45,#i46,#i47,#i48').prop('style', 'background-image:url(../image/ys.png)')
    }
    // 改变top中椅子的样式
    for (var index = 1; index < 81; index++) {
        if (index < 37) {
            $(`#i${index}`).prop('style', 'background-image:url(../image/ys.png)')
        }
        if (index > 44 && index < 49) {
            $(`#i${index}`).prop('style', 'background-image:url(../image/ys.png)')
        }

    }

    //left的椅子添加
    for (var index = 81; index < 117; index++) {
        var leftDiv = '';
        var id = 'i' + index;
        leftDiv += `<div class='def' id=${id}></div>`
        $('.seatLeft').append(leftDiv);
        $(`#i${index}`).prop('style', 'background-image:url(../image/kx.png)')

    }
    //right的椅子添加
    for (var index = 117; index < 153; index++) {
        var rightDiv = '';
        var id = 'i' + index;
        rightDiv += `<div class='def' id=${id}></div>`
        $('.seatRight').append(rightDiv);
        $(`#i${index}`).prop('style', 'background-image:url(../image/kx.png)')
    }
    // bottom的椅子添加
    for (var index = 153; index < 168; index++) {
        var bottomDiv = '';
        var id = 'i' + index;
        bottomDiv += `<div class='def' id=${id}></div>`
        $('.seatBottom').append(bottomDiv);
        $(`#i${index}`).prop('style', 'background-image:url(../image/kx.png)')
    }
    $("#i157,#i156").prop('style', '')

})
// 点击椅子改变状态并传值
$(function () {
    var qqqq = 0
    $("#tt1").on("click", function (event) {
        // 获取传过来的价格
        var jg = decodeURIComponent(window.location.search);
        jg = jg.replace("?", "");
        jg = jg.split("*");
        jg = jg[1]

        if ($(event.target).css("background-image").indexOf("kx") != -1) {
            $(event.target).css("background-image", "url(../image/yx.png)")

            // 获取点击的是第几个
            var a = $(event.target).prop("id").replace("i", "")
            //   判断是第几排第几坐
            var pai
            var zuo
            if (a <= 80) {
                pai = Math.ceil(a / 16)

                if (a % 16 == 0) {
                    zuo = 16
                } else {
                    zuo = a % 16
                }

            } else if (a >= 81 && a <= 116) {
                pai = Math.ceil((a - 80) / 6) + 5
                if ((a - 80) % 6 == 0) {
                    zuo = 6
                } else {
                    zuo = (a - 80) % 6
                }

            } else if (a >= 117 && a <= 152) {
                pai = Math.ceil((a - 117) / 6) + 5
                if ((a - 116) % 6 == 0) {
                    zuo = 6 + 6
                } else {
                    zuo = (a - 116) % 6 + 6
                }

            } else if (a >= 153 && a <= 155) {

                pai = 12

                zuo = a - 152


            } else if (a >= 158 && a <= 167) {
                pai = 12
                zuo = a - 157 + 3


            }
            // 点击添加元素
            $("#zw").append(`<div class="scZz" date=${a}>${pai}排${zuo}座</div>`)
            //    添加价格
            qqqq += Number(jg)
            $("#jg").html(qqqq)


        } else if ($(event.target).css("background-image").indexOf("yx") != -1) {
            $(event.target).css("background-image", "url(../image/kx.png)")
            // 获取点击的是第几个
            var a = $(event.target).prop("id").replace("i", "")
            //  获取所有添加的元素
            var dddd = document.querySelectorAll(".scZz")

            //    遍历找到对应元素删除
            if (dddd != []) {
                for (var i in dddd) {

                    if (dddd[i].getAttribute("date") == a) {
                        document.querySelector("#zw").removeChild(dddd[i])
                        break
                    }
                }
            }

            qqqq-=Number(jg)
       $("#jg").html(qqqq)
        }



    })



})
// 传值
$(function(){
   $("#tel").on('keyup',function(){
    var dddd = document.querySelectorAll(".scZz")
      if(dddd!=[]){
        if($("#tel").val().length==11){
            $("#qrxz").css("background-color","red")
            $("#qrxz").on("click",function(){
   
                var a=$("#t1").html()
                var b=$("#t4").html()
                var c=$("#jg").html()
                var dddd = document.querySelectorAll(".scZz")
               
                var d=""
                for(var I in dddd){
                    if(dddd[I].innerHTML!=undefined){
                        d+=dddd[I].innerHTML
                    }
                   
                }
                var e=$("#t").html()
                var f=$("#t2").html()
   
             window.location.href=`zfqr.html?${a}*${b}*${c}*${d}*${e}*${f}`
   
            })
         }else{
           $("#qrxz").off("click")
           $("#qrxz").css("background-color","#e5e5e5")
         }
      }else{
          alert("请先选票")
      }
   }) 
})
