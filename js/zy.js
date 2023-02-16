// 引入ajxl数据


$(function () {



    // 向页面导入图片
    var dxsj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        async:false,
        success: function (res) {
            dxsj = res.movies

            for (i = 0; i < 8; i++) {
                $("#zzrx").append(`
        <div class="leftmovies " data=${dxsj[i].id}>
        <div class="leftmoviesImg">
            <img src="${dxsj[i].imgSrc}" alt="" class="FGHJK">
        </div>
        <div class="leftmoviesNameORstore">
            <div class="leftmoviesName">${dxsj[i].title}</div>
            <div class="leftmoviesStore">${dxsj[i].score}</div>
        </div>
    </div>
        `)
            }
            for (i = 8; i < 16; i++) {
                $("#zzrx1").append(`
      <div class="leftmoviesDown" data=${dxsj[i].id}>
        <div class="leftmoviesImgDown">
            <img src="${dxsj[i].imgSrc}" class="FGHJK" alt="">
        </div>
        <div class="leftmoviesNameORstoreDown">
            <div class="leftmoviesNameDown">${dxsj[i].title}</div>
            <div class="leftmoviesStoreDown">${dxsj[i].score}</div>
        </div>
        <div class="releaseDate">
            8月5日上映
        </div>
    </div>
        `)
            }
        }
    });
    //   搜索框


})


// 快速购票


$(function () {




    var dxysj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
        type: 'get',

        success: function (res) {
            dxysj = res.operas;

            for (var c = 0; c < dxysj.length; c++) {
                $('#xzyy').append(`<option value="${dxysj[c].name}" >${dxysj[c].name}</option>`)

            }

        }


    });



    var dxsj
    $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        async: false,
        success: function (res) {


            dxsj = res.movies;


            console.log(dxsj)

        }
    });

    console.log(dxsj)
    var sz1 = ""
    var cc;
    $("#xzyy").on("change", function (event) {

        cc = document.querySelectorAll("#xzyy>option")

        for (var i = 0; i < cc.length; i++) {
            if (cc[i].selected == true) {
                console.log(cc[i].innerHTML)
                sz1 = i
                break
            }
        }





        var zhi = cc[sz1].innerHTML
        for (var c = 0; c < dxysj.length; c++) {
            if (dxysj[c].name == zhi) {
                var id1 = dxysj[c].movies
                break
            }

        }
        console.log(id1)

        $('#xzdy').empty()
        for (k = 0; k < dxsj.length; k++) {
            for (j = 0; j <= id1.length; j++) {
                if (dxsj[k].id == id1[j]) {

                    $('#xzdy').append(`<option value="" >${dxsj[k].title}</option>`)
                }
            }
        }
        $('#xzcz').empty()
        $('#xzsj').empty()
        var dd = 11
        var cc = 27
        for (i = 0; i < 4; i++) {
            dd += 2
            cc += 1
            $('#xzcz').append(`<option value="" >${dd}:00</option>`

            )
            $('#xzsj').append(`<option value="" >2021年11月${cc}日</option>`

            )
        }

    })




})
 // 点击电影1跳转


 $("#zzrx").on("click",function(event){
  if(event.target.className=="FGHJK"){
    var c1 =$(event.target).parents('.leftmovies').find(".leftmoviesName").html()
console.log(c1)
window.location.href =`./ypxqy.html?${c1}`
  }

 
    

 })  
 $("#zzrx1").on("click",function(event){
  if(event.target.className=="FGHJK"){
    var c1 =$(event.target).parents('.leftmoviesDown').find(".leftmoviesNameDown").html()
console.log(c1)
window.location.href =`./ypxqy.html?${c1}`
  }

 
    

 })  


   




// $(".FGHJK").on("click", function (event) {
//     console.log(111)
//     var c1 = $(".leftmoviesName").text()
//     if (c1 != "") {
//         window.location.href = `./ypxqy.html?${c1}`
//     }
// })



//  var cc = document.querySelectorAll('.FGHJK')
//  for (i = 0; i < cc.length; i++) {
 
//      cc[i].addEventListener("click", function (event) {
//          console.log(111)
 
//      },true)
//  }
 
//  console.log(3333)