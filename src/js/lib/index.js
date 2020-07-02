let baseUrl = "http://localhost/H5-2003/item";    //基础路径

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
                    
                    res.forEach(elm => {
                        console.log(elm.pic);
                        let pic = JSON.parse(elm.pic);
                        console.log(pic[0].src);
                        temp += `<li class="item">
                            <a href="${baseUrl}/src/html/product.html?id=${elm.id}">
                                <div class="p-pic">
                                    <img src="${baseUrl}/src/${pic[0].src}">
                                </div>
                                <div class="p-title">
                                    ${elm.title}
                                </div>
                                <div class="p-price"><span class="yuan">￥</span>${elm.price}</div>
                                <div class="marking save">
                                <div class="boxs">
                                    <i>已省</i>
                                    <p><em>¥</em>12.6</p>
                                </div>
                            </div>
                            </a>
                        </li>`;
                    });

                    $('item').html(temp);
                }
            });
        }
    }
})