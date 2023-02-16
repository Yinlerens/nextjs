    //   获取电影院数据
    var dyysj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
        type: 'get',
        async: false,
        // 向页面输出电影院
        success: function (res) {
            dyysj= res.operas;
            for(i=0;i<dyysj.length;i++){
                $("#buttom").append(` <div class="buttom2 gggg" >
                <div class="left">
                  <p class="leftmoviesName">${dyysj[i].name}</p>
                  <p>${dyysj[i].address}</p>
                  <p><span>改签</span>
                    <span>折扣卡</span></p>
                </div>
                <div class="right">
                   <div class="box1">
                       <b>
                          ￥23      
                       </b><span>
                          起
                       </span>
                       <span>
                          24km
                       </span>
                      </div>
                   <div class="box2">选座购票</div>
                </div>
            </div>`)
            }

        }
    });

        // 点击选项切换
$("#t1").on("click",function(event){
 
    if(event.target.className=="ppq"){
     $("#t1 li").css("background-color","#fff")
     $(event.target).css("background-color","#f99135")
     $(event.target).css("border-radius","14px")
     $(event.target).css("text-align","center")
    }
   
     
 
 })
$("#t2").on("click",function(event){
 
    if(event.target.className=="ppq"){
     $("#t2 li").css("background-color","#fff")
     $(event.target).css("background-color","#f99135")
     $(event.target).css("border-radius","14px")
     $(event.target).css("text-align","center")
    }
   
     
 
 })
$("#t3").on("click",function(event){
 
    if(event.target.className=="ppq"){
     $("#t3 li").css("background-color","#fff")
     $(event.target).css("background-color","#f99135")
     $(event.target).css("border-radius","14px")
     $(event.target).css("text-align","center")
    }
   
     
 
 })
$("#t4").on("click",function(event){
 
    if(event.target.className=="ppq"){
     $("#t4 li").css("background-color","#fff")
     $(event.target).css("background-color","#f99135")
     $(event.target).css("border-radius","14px")
     $(event.target).css("text-align","center")
    }
   
     
 
 })

// 点击购票传数据
$(".gggg").on("click",function(event){
     if(event.target.className=="box2"){
        var c1 =$(event.target).parents('.buttom2').find(".leftmoviesName").html()
        console.log(c1)
        window.location.href =`./yy2.html?${c1}`
     }
})