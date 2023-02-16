// 选择支付和购物车
$(function(){
    
    $(".dahezi .xx").on("click",function(event){
        $(".dahezi").children().css("border","1px solid #ccc")
       $(this).css("border","1px solid red")
        // if( $(event.target).prop("class")!="xx"){
        //     $(event.target).parents('div.xx').css("border","1px solid red")
        // }else if($(event.target).prop("class")=="xx"){
        //     $(event.target).css("border","1px solid red")
        // }
       
        
    })
})

// 获取值
$(function(){
    var a = decodeURIComponent(window.location.search);
    a = a.replace("?", "");
    a = a.split("*");
    console.log(a)
    $("#t1").html(`${a[0]}`)
    $("#t2").html(`${a[1]}`)
    $("#t3").html(`${a[2]}`)
    $("#t4").html(`${a[4]}`)
    $("#t5").html(`${a[5]}${a[3]}`)
})
// 定时器
var b=840
      function fn(){
       
          b=b-1;
          var c= Math.floor(b/60)
          var d=b%60
        
        if(c<10){
            c="0"+c
        }
        if(d<10){
            d="0"+d
        }
        $("#divide").html(c)
        $("#second").html(d) 
      }
      setInterval("fn()",1000)
    //   定时器
// 获取传过来的值并打印
$(function(){
    $("#qrzf").on("click",function(){
       var a =$("#t1").html()
       var b =$("#t2").html()
       var c =$("#t3").html()
       var d = $("#t4").html()
       var e =$("#t5").html()
       window.location.href=`zfcg1.html?${a}*${b}*${c}*${d}*${e}`
    })
})