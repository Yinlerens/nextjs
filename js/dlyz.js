$(function () {
    // 点击顶部登录弹出登录框
    $(".dl").on("click", function () {
        $(".modal").show();
        $(".formdivDl").show();
        $(".formdivZc").hide();
        $(".titleRegister").css("borderBottom", "#f99135 4px solid")
        $(".titleLogin").css("borderBottom", "none")
        $(".titleRegister").css("color", "black")
        $(".titleLogin").css("color", "#999999")
        // console.log("***");
    });
    // 点击顶部注册弹出注册框
    $(".zc").on("click", function () {
        $(".modal").show();
        $(".formdivZc").show();
        $(".formdivDl").hide();
        $(".titleRegister").css("borderBottom", "none")
        $(".titleLogin").css("borderBottom", "#f99135 4px solid")

        $(".titleRegister").css("color", "#999999")
        $(".titleLogin").css("color", "black")
        // console.log("***");
    });
    // 点击登录注册框中的登录注册标题tab切换
    $(".modal .modalMainbox .bigbox .title div").on("click", function () {
        // $(".modal").show();
        // $(".formdivZc").show();
        var $dlORzc = $(this).text();

        if ($dlORzc == "登录") {
            $(".formdivDl").show();
            $(".formdivZc").hide();
            $(".titleRegister").css("borderBottom", "#f99135 4px solid")
            $(".titleLogin").css("borderBottom", "none")
            $(".titleRegister").css("color", "black")
            $(".titleLogin").css("color", "#999999")
        } else if ($dlORzc == "注册") {
            $(".formdivDl").hide();
            $(".formdivZc").show();
            $(".titleRegister").css("borderBottom", "none")
            $(".titleLogin").css("borderBottom", "#f99135 4px solid")
            $(".titleRegister").css("color", "#999999")
            $(".titleLogin").css("color", "black")
        }
    });
    // 点击登录注册框中的X关闭弹框
    $(".modal .modalMainbox .guan").on("click", function () {
        $(".modal").hide();
    });
    // 点击注册页面的立即登录切换到登录界面
    $(".modal .modalMainbox .bigbox .formdivZc .dlNow").on("click", function () {
        $(".modal").show();
        $(".formdivDl").show();
        $(".formdivZc").hide();
        $(".titleRegister").css("borderBottom", "#f99135 4px solid")
        $(".titleLogin").css("borderBottom", "none")

        $(".titleRegister").css("color", "black")
        $(".titleLogin").css("color", "#999999")
    })

    // 注册 验证 

    var tel = /^1[3-9][0-9]{9}$/;
    var mima = /[a-zA-Z0-9]{6,20}/;
    //  手机号验证？
    $(".zuTel").on("keyup", function () {
        if (tel.test($(".zuTel").val())) {
            $(".zuTel").next().html(" ")
        } else {
            $(".zuTel").next().html("请输入正确格式的手机号")
        }
    })
    // 密码格式验证

    $(".ss").on("keyup", function () {
        if (mima.test($(".ss").val())) {

            $(".ss").next().text(" ")
        } else {
            $(".ss").next().text("请输入6到20位数字或者字母")
        }
        var s = $('.ss').val();
        console.log(s)
    })


    // 密码确认验证
    $(".againPsw").on("keyup", function () {
        if ($(".ss").val() == $(".againPsw").val()) {
            $(".againPsw").next().html(" ")
        } else {
            $(".againPsw").next().html("请输入相同的密码")
        }
        console.log($(".againPsw").val())

    })

    $('#dlNow').on("click", function () {
        var ls = window.localStorage
        var bs = ls.getItem("user");
        if ((tel.test($(".zuTel").val())) && (mima.test($(".ss").val())) && ($(".ss").val() == $(".againPsw").val())) {
            var a
            if (bs == null || (bs.indexOf(`"acc":"${$(".zuTel").val()}"`) == -1)) {

                if (bs == null) {
                    var a = []
                } else {

                    a = JSON.parse(bs)

                }
                a[a.length] = {
                    acc: $(".zuTel").val(),
                    dcc: $(".againPsw").val(),

                }
                ls.setItem("user", JSON.stringify(a))

                alert("注册成功请直接登录")
                $(".formdivDl").show();
                $(".formdivZc").hide();
                $(".titleRegister").css("borderBottom", "#f99135 4px solid")
                $(".titleLogin").css("borderBottom", "none")
                $(".titleRegister").css("color", "black")
                $(".titleLogin").css("color", "#999999")


            } else {
                alert("账号已经注册请直接登录")
                $(".formdivDl").show();
                $(".formdivZc").hide();
                $(".titleRegister").css("borderBottom", "#f99135 4px solid")
                $(".titleLogin").css("borderBottom", "none")
                $(".titleRegister").css("color", "black")
                $(".titleLogin").css("color", "#999999")
            }
        } else {
            alert("请正确输入信息进行注册")
        }

    })








})

$(function () {
    // 随机验证码
    // 获取随机验证码的值

    function fn() {
        qwer = ""
        var a = document.querySelector('canvas').getContext("2d")
        a.clearRect(0, 0, 80, 36)
        for (i = 1; i < 5; i++) {
            var clr = "#"
            var b = [parseInt(Math.random() * 10) + 48, parseInt(Math.random() * 26) + 65, parseInt(Math.random() * 26) + 97]
            var c = parseInt(Math.random() * (b.length))
            var d = String.fromCharCode(b[c])
            var zi = ['Gill Sans', 'Gill Sans MT', "宋体", "微软雅黑", 'Trebuchet MS']
            var zi1 = parseInt(Math.random() * (zi.length))
            var zt = zi[zi1]
            for (j = 1; j <= 3; j++) {
                var b = [parseInt(Math.random() * 10) + 48, parseInt(Math.random() * 26) + 65, parseInt(Math.random() * 26) + 97]
                var c = parseInt(Math.random() * (b.length))
                var d = String.fromCharCode(b[c])
                clr += d + d
            }
            var w = parseInt(Math.random() * 15) + (i - 1) * 15
            var h = parseInt(Math.random() * 15) + 15
            var ztdx = parseInt(Math.random() * 10) + 15



            a.beginPath()
            a.font = `${ztdx}px ${zt}`
            a.fillStyle = `${clr}`
            a.fillText(`${d}`, `${w}`, `${h}`)
            a.closePath()
            qwer += d



        }
        var x = Math.random() * 26 + 4
        var y = Math.random() * 26 + 4
        a.moveTo(0, `${x}`)
        a.lineTo(80, `${y}`)
        a.strokeStyle = `${clr}`
        a.stroke()
        qwer = qwer
        console.log(qwer)
    }
    fn()
    document.querySelector('canvas').addEventListener("click", fn)


    var tel = /^1[3-9][0-9]{9}$/;
    var mima = /[a-zA-Z0-9]{6,20}/;

    //  手机号验证？
    $("#tel").on("keyup", function () {
        if (tel.test($("#tel").val())) {
            $("#tel").next().html(" ")
        } else {
            $("#tel").next().html("请输入正确格式的手机号")
        }
    })
    // 密码格式验证

    $("#psw").on("keyup", function () {
        if (mima.test($("#psw").val())) {

            $("#psw").next().text(" ")
        } else {
            $("#psw").next().text("请输入6到20位数字或者字母")
        }
    })

    // 验证码验证

    $("#yz").on("keyup", function (event) {

        if ($("#yz").val() == qwer) {

            $("#yz").next().text(" ")
        } else {
            $("#yz").next().text("请输入正确验证码")
        }
    })


    document.querySelector("#dlbtn1").addEventListener("click", function () {

        var ls = window.localStorage
        var bs = ls.getItem("user");
        var cs = JSON.parse(bs);

        console.log(bs)
        console.log(cs)
        var a = $(".tel").val(), b = $(".psw").val();
        if (bs == null || (bs.indexOf(`"acc":"${$("#tel").val()}"`) == -1)) {
            alert("该账号未注册，请先注册")
            $(".modal").show();
            $(".formdivZc").show();
            $(".formdivDl").hide();
            $(".titleRegister").css("borderBottom", "none")
            $(".titleLogin").css("borderBottom", "#f99135 4px solid")

            $(".titleRegister").css("color", "#999999")
            $(".titleLogin").css("color", "black")

        } else {
            var zt = false
            for (var i in cs) {
                if (cs[i].acc == a) {
                    if (cs[i].dcc == b) {
                        zt = true
                    }
                }
            }
            if (zt) {

                alert("登录成功")
                var qq = window.sessionStorage
                
                qq.setItem("dlxi", `${$("#tel").val()}`)
                window.location.reload();

            } else {
                alert("账户或密码错误")
                fn()

            }

        }

    })

})
    
//  判断登录状态，改变登录展示

$(function () {
    if (window.sessionStorage.getItem("dlxi") != null) {
        var a = window.sessionStorage.getItem("dlxi")

        $("#title").html(`<div id="touxiang1" style="width: 30px;
        height: 30px;
        float: left;
        border-radius: 50%;
        background-image: url(./../image/默认头像.jpg); background-size: contain;
        background-repeat: no-repeat"></div> <span id="MZ1" style="line-height: 33px;"> ${a}</span> <span id="zhuxiao">注销</span>`)

    }
    $("#zhuxiao").on("click", function () {
        var qq = window.sessionStorage
        qq.clear()
        window.location.reload();
        
    })
})

// 搜索
$(function () {
    var dxsj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        success: function (res) {
            dxsj = res.movies;



        }
    });
    //    for( var i=0;i<dxsj.length;i++){
    //     $("#mylist").append(`<option value="">${dxsj[i].title}</option>`)
    //   }

    $("#shousuo").on('keyup', function () {
        var a = $("#shousuo").val();
        $("#tishi").empty()
        // C的作业是限制提示框的数量这里设置的为最多出现4次
        var c = 0
        if (a != "") {
            for (i = 0; i < dxsj.length; i++) {
                if (dxsj[i].title.indexOf(a) != -1) {
                    c++
                    $("#tishi").append(`<p  >${dxsj[i].title}</p>`)
                }
                if (c == 4) {
                    break
                }

            }
        }


    })
    $("#tishi").on("click", function (event) {
        var cc = event.target.innerHTML
        $("#shousuo").val(cc)
        $("#tishi").empty()
    })



})
//点击会员判断是否登录
$(function () {
    $("#huiyuan").on('click', function () {
        if (window.sessionStorage.getItem("dlxi") != null) {
            window.location.href = "./personalCenter.html"
        } else {
            alert("请先登录")
        }
    })
})
// 点击眼睛查看密码
$("#mima1").on("mousedown", function () {
    $("#mima1").css("background-image", "url(./../image/eye.png")
    $("#mima1").next().prop("type", "text")
})

$("#mima1").on("mouseup", function () {
    $("#mima1").css("background-image", "url(./../image/闭眼.png")
    $("#mima1").next().prop("type", "password")
})

$("#mima2").on("mousedown", function () {
    $("#mima2").css("background-image", "url(./../image/eye.png")
    $("#mima2").next().prop("type", "text")
})

$("#mima2").on("mouseup", function () {
    $("#mima2").css("background-image", "url(./../image/闭眼.png")
    $("#mima2").next().prop("type", "password")
})



$("#mima3").on("mousedown", function () {
    $("#mima3").css("background-image", "url(./../image/eye.png")
    $("#mima3").next().prop("type", "text")
})

$("#mima3").on("mouseup", function () {
    $("#mima3").css("background-image", "url(./../image/闭眼.png")
    $("#mima3").next().prop("type", "password")
})

// 点击搜索跳转
$("#searchimg").on("click", function () {
    var a = $("#shousuo").val()
    window.location.href = `./ypxqy.html?${a}`
})
// 判断用户是否有更改名字的行为若有则更改值
$(function(){
    var ls=window.localStorage
    var a = window.sessionStorage.getItem("dlxi")
    if(ls.getItem(a)!=null){
        var c=JSON.parse(ls.getItem(a))
     if(c.img!=undefined){
        $("#touxiang1").css("background-image",`url(${c.img})`)
     }
     if(c.mingzi!=undefined){
        $("#MZ1").html(`${c.mingzi}`)
     }
     
    }

})

// 绑定跳转
$(function(){ 
    $("#SY").on("click",function(){
        window.location.href="zy.html"
    })
    $("#yp").on("click",function(){
        window.location.href="yp.html"
    })
    $("#YC").on("click",function(){
        window.location.href="yy1.html"
    })
    $("#YCZX").on("click",function(){
        window.location.href="影城资讯.html"
    })

})