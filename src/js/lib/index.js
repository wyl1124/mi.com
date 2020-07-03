let baseUrl = "http://localhost/H5-2003/item1";    //基础路径

define(['jquery'],function($){
    return{
        render:function(){
            $.ajax({
                type: "get",
                url:`${baseUrl}/src/interface/getall.php`,
                dataType: "json",
                success: function (res) {
                    console.log(res);
                    let temp = '';
                    console.log(typeof(temp))
                    res.forEach(elm => {
                        console.log(elm.pic);
                        let pic = JSON.parse(elm.pic);
                        console.log(pic[0].src);
                        temp += `<li class="picitem">
                            <a href="${baseUrl}/src/html/products.html?id=${elm.id}">
                                <div class="p-pic">
                                    <img src="${baseUrl}/src/${pic[0].src}">
                                </div>
                                <div class="p-title">
                                    ${elm.title}
                                </div>
                                <div class="p-price"><i class="qian">￥</i>${elm.price}</div>
                            </div>
                            <div class="pic-marking save">
                                <div class="pic-boxs">
                                    <i>已省</i>
                                    <i><em>¥</em>12.6</i>
                                </div>
                                <img src="../img/2.png" alt="" class="pic-img">
                            </a>
                        </li>`;
                    });
                 
                    $('.kuai-R-list').html(temp);
                }
            });
        }
    }
})