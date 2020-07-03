let baseUrl = "http://localhost/H5-2003/item1"; 

define(['jquery','cookie'],function($,cookie){
    return{
        render: function(callback){ 
            let id = location.search.split("=")[1];
            // console.log(id);
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/interface/getitem.php`,
                data: {
                    id:id
                },
                dataType: "json",
                success: function (res) {
                    let pic = JSON.parse(res.pic);

                    let temp = `  
                    <div class="shop">
                        <!--放大镜-->
                        <div id="box1">
                            <div id="spic">
                                <!-- 小图 -->
                                <img src="${baseUrl}/src/${pic[0].src}" alt="">
                                <!--遮罩层-->
                                <!-- 小放 -->
                                <div id="sf"></div>
                            </div>
                            <div id="df">
                                <!-- 大放 -->
                                <img src="${baseUrl}/src/${pic[0].src}" alt="" id="datu">
                                <!-- 大图 -->
                            </div>
                        </div>
                        <!--小图切换-->
                        <div id="list">
                            <img src="${baseUrl}/src/${pic[0].src}" alt="">
                            <img src="${baseUrl}/src/${pic[1].src}" alt="">
                            <img src="${baseUrl}/src/${pic[2].src}" alt="">
                            <img src="${baseUrl}/src/${pic[3].src}" alt="">
                            <img src="${baseUrl}/src/${pic[4].src}" alt="">
                        </div>
                    </div>
                    <!--标题--->
                    <div class="ringt" style="width: 800px;">
                        <p class="p1">
                            ${res.title}
                            <em></em>
                            <a></a>
                        </p>
                        <p class="p2">${res.title}</p>
                    </div>
                    <div class="cont" style="width: 800px;">
                        <div class="jiage">
                            <span class="s1">
                                <sub>￥</sub>
                                <del class="mony shuzi">${res.price}</del>
                                <em>降价通知</em>
                            </span>
                            <span class="s2">重量：0.9kg </span>
                        </div>
                        <div class="yonghu">
                            <i class="icons iconfont">&#xe63c;</i>
                            <u>99%</u>的用户给出好评
                        </div>
                        <div class="songh">
                            <i class="icons iconfont">&#xe639;</i>
                            <p><span>送货至</span>
                                <span style="padding: 0 10px 0 4px;color: #333;font-weight: 600; ;">深圳市福田区福田区农林路69号印力中心</span>
                                <span style="color: greenyellow;">有货</span><span style="font-size: 11px;">,10:30前下单,预计07月05日 10:50-11:30前送达,依照您在结算页面选择的配送时间窗而定</span>
                            </p>
                            <p id="deliverMap" class="maps">仅配送<a class="" href="javascript:;">指定区域<u class="iconfont"></u></a></p>
                        </div>
                        <div class="tuihuo">
                            <i class="icons iconfont">&#xe63a;</i>
                            <a href="">不支持7天无理由退货</a>
                        </div>
                        <div class="gwc">
                            <div class="k">
                                <div class="jian iconfont">&#xe631;</div>
                                <div class="pt">
                                    <input type="number" value="1" class="value num" min="1" max="${res.num}">
                                </div>
                                <div class="jian iconfont">&#xe630;</div>
                            </div>
                            <div class="k-1">
                                <i class="iconfont">&#xe644;</i>加入购物车
                            </div>
                        </div>
                    </div>
                    `;
                    $('.products-det').append(temp);

                    callback && callback(res.id,res.price); 
                }
            });
        },
        additem:function(id,price,num){

            let shop = cookie.get('shop');


            let products = {
                id:id,
                price:price,
                num:num
            }
            if(shop){
                shop = JSON.parse(shop);
                
                if(shop.some(elm=> elm.id == id)){
                    shop.forEach(elm=> {
                        elm.id == id?elm.num=num:null;
                    }); 
                } else{
                    shop.push(products);
                }
            }else{
                shop = [];
                shop.push(products);
            }

            cookie.set('shop',JSON.stringify(shop),1);
        }
    }
})


