window.onload=function(){
    init();
    var liEles=document.querySelectorAll(".nav li");
    var contentEles=document.querySelectorAll(".tab-content>div");
    liEles.forEach(function(item,index){
       
        item.onclick=function(){
            for(var i=0;i<liEles.length;i++){
                liEles[i].className="";
                contentEles[i].style.display="none";
            }
          
            item.className="active";
            document.querySelectorAll(".tab-content>div")[index].style.display="block";
        }
    });
}

function init(){
 var liEles=document.querySelectorAll(".nav li");
 //让第一个li设置class样式
 liEles[0].className="active";
 //2.让.content下的第一个div显示
 var contentEles=document.querySelectorAll(".tab-content>div");
 //让第一个div显示
 contentEles[0].style.display="block";
}
// 用户改变图像名字储蓄

$(function(){
    var dataURL
    // 改变图片
  $("#tp").on("change",function(){
    var image = this.files[0]; //获取文件域中选中的图片
    var reader = new FileReader(); //实例化文件读取对象
    reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
    reader.onload = function(ev) { //文件读取成功完成时触发
       dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
        document.querySelector("#zs").src = dataURL; //将DataURL码赋值给img标签
        console.log(dataURL);
    }
    console.log(image);

    //   启用改变图像按钮 
$("#an").prop("disabled",false)
$("#an").css("background-color","#f99135")
  })

//   点击按钮存入图片信息并更换头像
$("#an").on("click",function(){
    $("#touxiang1").css("background-image",`url(${dataURL})`)
    var ls=window.localStorage
    var bs=window.sessionStorage
    // 获取登录手机号存值
     bs=bs.getItem("dlxi")

     if(ls.getItem(bs)==null){
        var gg={
            img:dataURL
        }
        ls.setItem(bs,JSON.stringify(gg))
     }else{
        var cc=JSON.parse(ls.getItem(bs))
          cc.img=dataURL
          ls.setItem(bs,JSON.stringify(cc))
     }
    
    


})
//用户输入名字后启用按钮
$("#mingzi").on('keyup',function(){
    if($("#mingzi").val()!=""){
        $("#bcmz").prop("disabled",false)
        $("#bcmz").css("background-color","#f99135")
    }
    if($("#mingzi").val()==""){
        $("#bcmz").prop("disabled",true)
        $("#bcmz").css("background-color","#e6e6e6")
    }
     
})
// 点击保存按钮改名名字并保存数据

$("#bcmz").on("click",function(){
  $("#MZ1").html($("#mingzi").val())
  var ls=window.localStorage
  var bs=window.sessionStorage
  // 获取登录手机号存值
   bs=bs.getItem("dlxi")

   if(ls.getItem(bs)==null){
    var aa={
        mingzi:$("#mingzi").val()
    }
    ls.setItem(bs,JSON.stringify(aa))
 }else{
    var aa=ls.getItem(bs)
   aa=JSON.parse(aa)
  aa.mingzi=$("#mingzi").val()
  
  console.log(aa)
  ls.setItem(bs,JSON.stringify(aa))
 }
  

})


})
// 用户改变密码
$(function(){
    var d1=false
    var d2=false
    var d3=false
    // 原密码
  $("#JMM").on("keyup",function(){
    var a = window.sessionStorage.getItem("dlxi");
    var ls=window.localStorage
    var bs = ls.getItem("user");
    bs=JSON.parse(bs)
     for(var i in bs){
       if(bs[i].acc==a){
       var b=bs[i].dcc
       break
       }
     }
     if($("#JMM").val()!=b){
        $("#j1").css("display","block")
        d1=false
     }else if($("#JMM").val()==b){
        $("#j1").css("display","none")
        d1=true
     }

  }) 
//   新密码
$("#XMM").on("keyup",function(){
    var a=/[a-zA-Z0-9]{6,20}/
     if(a.test($("#XMM").val())==false){
        $("#j2").css("display","block")
        d2=false
     }else if(a.test($("#XMM").val())==true){
        $("#j2").css("display","none")
        d2=true
     }

  }) 
// 确认密码

$("#QRMM").on("keyup",function(){
    var a=$("#XMM").val()
    var b=$("#QRMM").val()
     if(a!=b){
        $("#j3").css("display","block")
        d3=false
     }else if(a==b){
        $("#j3").css("display","none")
        d3=true
     }
     if(d1&&d2&&d3){
    document.querySelector("#bcmi").disabled=false
    document.querySelector("#bcmi").style.backgroundColor="#f99135"
     }

  })
//   改变密码保存数据
document.querySelector("#bcmi").addEventListener("click",function(){
    var a = window.sessionStorage.getItem("dlxi");
    var ls=window.localStorage
    var bs = ls.getItem("user");
    bs=JSON.parse(bs)
     for(var i in bs){
       if(bs[i].acc==a){
        bs[i].dcc=$("#QRMM").val()
        break
          
       }
     }
     ls.setItem("user",JSON.stringify(bs))
     alert("请重新登录")
     window.sessionStorage.clear()
     window.location.reload()
})
  

})
// 删除
$(function(){
    $(".pp").on('click',function(){
       $(this).parents('table').remove() 
    })
})