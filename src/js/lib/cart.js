let baseUrl = "http://localhost/H5-2003/item1"; 

define(['jquery','cookie'],function($,cookie){
    return {
        render:function(){
            let shop = cookie.get('shop');

            if(shop){
                shop = JSON.parse(shop);
                let idlist = shop.map(elm=>elm.id).join();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/src/interface/shop.php`,
                    data: {
                        idlist:idlist
                    },
                    dataType: "json",
                    success: function (res) {
                        console.log(res)
                        let tempstr = '';
                        
                        res.forEach(elm=>{
                            let pic = JSON.parse(elm.pic);

                            let arr = shop.filter(val =>val.id == elm.id);

                            // console.log(arr);

                        //     tempstr+=`
                        //     <li class="item">
                        //     <div class="c-box">
                        //         <input type="checkbox" id="p1">
                        //     </div>
                        //     <div class="p-pic">
                        //         <img src="${baseUrl}/src/${pic[0].src}">
                        //     </div>
                        //     <div class="p-title">
                        //        ${elm.title}
                        //     </div>
                        //     <div class="p-num">
                        //         数量: <input type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                        //     </div>
                        //     <div class="p-price">
                        //         单价: ${elm.price}
                        //     </div>
                        //     <div class="p-price-sum">
                        //         总价: ${(arr[0].num*elm.price).toFixed(2)}
                        //     </div>
                        //     <div class="p-del">
                        //         <a href="javascript:;">删除</a>
                        //     </div>
                        // </li>

                        //     `; 
                            tempstr+=`
                                
                            `;                  
                        })
                        $('.productslist').append(tempstr)
                    }
                });
            }
        }
    };
});

