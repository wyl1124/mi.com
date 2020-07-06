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
                            <div class="smallpic">
                                <!-- 小图 -->
                                <img src="${baseUrl}/src/${pic[0].src}" alt="">
                                <!--遮罩层-->
                                <!-- 小放 -->
                                <div class="movebox hide"></div>
                            </div>
                            <div class="bigImg hide">
                                <!-- 大放 -->
                                <img src="${baseUrl}/src/${pic[0].src}" alt="" class="bigpic">
                                <!-- 大图 -->
                            </div>
                        </div>
                        <!--小图切换-->
                                <ul class="tup1">
                                        <li class="aaa">
                                            <img src="${baseUrl}/src/${pic[0].src}">
                                        </li>
                                        <li>
                                            <img src="${baseUrl}/src/${pic[1].src}">
                                        </li>
                                        <li>
                                            <img src="${baseUrl}/src/${pic[2].src}">
                                        </li>
                                        <li>
                                            <img src="${baseUrl}/src/${pic[3].src}">
                                        </li>
                                        <li>
                                            <img src="${baseUrl}/src/${pic[4].src}">
                                        </li>
                                        <li>
                                            <img src="${baseUrl}/src/${pic[5].src}">
                                        </li>
                                    </ul>
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
                                <div class="jian iconfont del">&#xe631;</div>
                                <div class="pt">
                                    <input type="number" value="1" class="value num" min="1" max="${res.num}">
                                </div>
                                <div class="jian iconfont add">&#xe630;</div>
                            </div>
                            <div class="k-1">
                                <i class="iconfont">&#xe644;</i>加入购物车
                            </div>
                        </div>
                    </div>
                    `;
                    $('.products-det').append(temp);

                    callback && callback(res.id,res.price); 

                    function fangda() {
                        var movebox = $('.movebox'),
                            bigpic = $('.bigpic'),
                            big = $('.bigImg'),
                            smallpic = $('.smallpic'),
                            simg = document.querySelector('.smallpic>img'),
                            sbig = document.querySelector('.bigImg>img');
                            console.log(bigpic);
                        // 1. 绑定事件
                        smallpic.on('mouseover', function() {

                            // 让元素显示
                            movebox.addClass('show');
                            big.addClass('show');

                            // movebox的大小计算
                            movebox.css({
                                width: (smallpic.width() * big.width()) / bigpic.width() + 'px',
                                height: (smallpic.height() * big.height()) / bigpic.height() + 'px',
                            })


                            // 2.让movebox跟随鼠标移动
                            smallpic.on('mousemove', function(ev) {
                                let top = ev.pageY - smallpic.offset().top - movebox.height() / 2;
                                let left = ev.pageX - smallpic.offset().left - movebox.width() / 2;

                                // 3.比例计算

                                let ratio = bigpic.width() / smallpic.width(); // 小数 大于1的数

                                // 边界管理
                                if (top <= 0) {
                                    top = 0;
                                } else if (top >= smallpic.height() - movebox.height()) {
                                    top = smallpic.height() - movebox.height() - 2;
                                }

                                if (left <= 0) {
                                    left = 0;
                                } else if (left >= smallpic.width() - movebox.width()) {
                                    left = smallpic.width() - movebox.width() - 2;
                                }

                                movebox.css({
                                    top: top + 'px',
                                    left: left + 'px'
                                });

                                bigpic.css({
                                    top: -top * ratio + 'px',
                                    left: -left * ratio + 'px'
                                });
                            });
                        });

                        smallpic.on('mouseout', function() {
                            movebox.removeClass('show');
                            big.removeClass('show');
                        });

                        $('.tup1>li').on({
                            'mouseover': function() {
                                star.call(this);
                                simg.src = `${baseUrl}/src/img/p${res.id-1}-${$('.tup1>li').index(this)}.jpg`;
                                sbig.src = `${baseUrl}/src/img/p${res.id-1}-${$('.tup1>li').index(this)}.jpg`;
                            },
                            'mouseout': function() {
                                $('.tup1>li').removeClass('aaa');
                            }
                        });

                        function star() {
                            // console.log(this);
                            let _index = $('.tup1>li').index(this);
                            $('.tup1>li').each(function(elm, i) {
                                if (i == _index) $(elm).addClass('aaa');
                            });
                        }
                    }
                    fangda();

                     // 增加数量按钮功能
                     $('.add').on('click', function() {
                        let num = $('.num').val();
                        if (num >= res.num) {
                            alert('您已购买为库存最大值了');
                        } else {
                            num++;
                        }
                        $('.num').val(num);
                        // console.log(num);
                    });

                    // 减少数量的按钮功能
                    $('.del').on('click', function() {
                        let num = $('.num').val();
                        if (num > 1) {
                            num--;
                        } else {
                            num = 1;
                        }
                        $('.num').val(num);
                        console.log(num);
                    });
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




