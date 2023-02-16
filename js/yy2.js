$(function () {


    // 获取传过来的值
    var a = decodeURIComponent(window.location.search);
    a = a.replace("?", "");
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

    var cc
    var dyysj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
        async: false,
        type: 'get',
        async: false,
        success: function (res1) {
            dyysj = res1.operas;

            //  遍历电影数据传值并且得到电影院数据



        }
    });
    //   获取电影数据
    for (var i = 0; i < dyysj.length; i++) {
        if (a == dyysj[i].name) {

            $("#t2").prop("backgroundImage", `${dyysj[i].img_src}`)
            $("#t3").html(`${dyysj[i].name}`)
            $("#t6").html(`${dyysj[i].name}`)


            $("#t4").html(`${dyysj[i].address}`)
            $("#t5").html(`${dyysj[i].phone}`)

            cc = dyysj[i].movies
            var DD = dyysj[i].address
            // var map = new BMapGL.Map('container');
            map.centerAndZoom(new BMapGL.Point(116.331398, 39.897445), 12);
            //创建地址解析器实例
            var myGeo = new BMapGL.Geocoder();
            // 将地址解析结果显示在地图上，并调整地图视野
            myGeo.getPoint(a, function (point) {
                if (point) {
                    map.centerAndZoom(point, 16);
                    map.addOverlay(new BMapGL.Marker(point, { title: DD }))
                } else {
                    alert('您选择的地址没有解析到结果！');
                }
            }, '成都市')
            break
        }
    }

    // console.log(cc)
    // console.log(dysj)
    var ccc = 4
    for (var k = 0; k < cc.length; k++) {
        for (var j = 0; j < dysj.length; j++) {
            if (cc[k] == dysj[j].id) {


                $("#t7").prepend(`<img src = "${dysj[j].imgSrc}" class= "asdf" alt = "" id = "b${ccc}" >`)
                console.log(`${dysj[j].title}`)
                ccc--
                break

            }
        }
    }
    for (var j = 0; j < dysj.length; j++) {
        if (cc[2] == dysj[j].id) {
      
            $(".rrr").html(`${dysj[j].price}`)
            $("#t9").html(`${dysj[j].title}`)
            $("#t10").html(`${dysj[j].score}`)
            $("#t11").html(`${dysj[j].duration}`)
            $("#t12").html(`${dysj[j].actors}`)
            break

        }
    }

    var c = 2
    var d
    $("#left").on("click", function () {

        $(".asdf").css("width", "140px")
        $(".asdf").css("height", "194px")
        $(".asdf").css("border", "none")
        if (c == 0) {
            c = 4
        }
        c--

        $(`#b${c}`).css("width", "170px")
        $(`#b${c}`).css("height", "235px")
        $(`#b${c}`).css("border", "2px solid #f99135")

        if (c == 1) {
            c = 5
        }
        for (var j = 0; j < dysj.length; j++) {
            //     if(c==1||c==2||c==3){
            //      d=c
            //     }else if(c==5 ){
            //     d=1
            //     }else if(c==4){
            //    d=0
            //     }

            if (c == 3) {
                d = 1
            } else if (c == 0) {
                d = 0
            } else if (c == 1) {
                d = 3
            } else if (c == 2) {
                d = 2
            }
            
            if (cc[d] == dysj[j].id) {
                $("#t9").html(`${dysj[j].name}`)
                $("#t10").html(`${dysj[j].score}`)
                $("#t11").html(`${dysj[j].duration}`)
                $("#t12").html(`${dysj[j].actors}`)
                $(".rrr").html(`${dysj[j].price}`)
                console.log(c)
                break
            }
        }


    })
    $("#right").on("click", function () {

        $(".asdf").css("width", "140px")
        $(".asdf").css("height", "194px")
        $(".asdf").css("border", "none")
        if (c == 5) {
            c = 1
        }
        c++

        $(`#b${c}`).css("width", "170px")
        $(`#b${c}`).css("height", "235px")
        $(`#b${c}`).css("border", "2px solid #f99135")





        if (c == 4) {
            c = 0
        }

        if (c == 3) {
            d = 1
        } else if (c == 0) {
            d = 0
        } else if (c == 1) {
            d = 3
        } else if (c == 2) {
            d = 2
        }

        for (var j = 0; j < dysj.length; j++) {
            if (cc[d] == dysj[j].id) {
                $("#t9").html(`${dysj[j].title}`)
                $("#t10").html(`${dysj[j].score}`)
                $("#t11").html(`${dysj[j].duration}`)
                $("#t12").html(`${dysj[j].actors}`)
                $(".rrr").html(`${dysj[j].price}`)
                console.log(c)
                break
            }
        }
    })
})



//点击切换图片
$(function () {


})

// 判断是否到达开始时间然后改变售票状态
$(function () {
    var date = new Date();
    a = date.getHours()

    if (a >= 24) {
        $("#T9,#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T9,#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 22) {
        $("#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 20) {
        $("#T7,#T6,#T5,#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T7,#T6,#T5,#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 18) {
        $("#T6,#T5,#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T6,#T5,#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 16) {
        $("#T5,#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T5,#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 14) {
        $("#T4,#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T4,#T3,#T2,#T1").html("停止售票")
    }else if (a >= 12) {
        $("#T3,#T2,#T1").css("background-color", "#ffbb7f")
        $("#T3,#T2,#T1").html("停止售票")
    }else if (a >= 10) {
        $("#T2,#T1").css("background-color", "#ffbb7f")
        $("#T2,#T1").html("停止售票")
    }else if (a >= 8) {
        $("#T1").css("background-color", "#ffbb7f")
        $("#T1").html("停止售票")
    }else if (a < 8) {
        $("#T9,#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").css("background-color", "#f99135")
        $("#T9,#T8,#T7,#T6,#T5,#T4,#T3,#T2,#T1").html("正在售票")
    }




})

// 实时获取时间
$(function(){
    var date=new Date()
    var a=date.getMonth()+1
    var b=date.getDate()
    $("#t133").text(`今天 ${a}月${b}日`)
})



// 点击购票传数据并判断是否可以点击
$("#TZ").on("click", function (event) {

    if(window.sessionStorage.getItem("dlxi")!=null){
        if ($(event.target).html() == "正在售票") { 

            var ee = decodeURIComponent(window.location.search);
           ee = ee.replace("?", "");
            // 获取 开场时间
         var a= $(event.target).prev().prev().prev().prev().html()
           // 获取价格
         var b=$(event.target).prev().html()
         // 播放厅
         var c=$(event.target).prev().prev().html()
            // 获取 今天时间
         var d=$('#t9').html()
         window.location.href=`./选座-已选.html?${a}*${b}*${c}*${d}*${ee}`
        }
    }else{
        alert("请先登录")
        $(".modal").show();
        $(".formdivDl").show();
        $(".formdivZc").hide();
        $(".titleRegister").css("borderBottom", "#f99135 4px solid")
        $(".titleLogin").css("borderBottom", "none")
        $(".titleRegister").css("color", "black")
        $(".titleLogin").css("color", "#999999")
    }
 
})



