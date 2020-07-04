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
                        let temp = '';
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
                            <div class="bind-box  single">
                            <div class="main-body first-main ">
                                <div class="clear body-list first-list">
                                    <div class="td tb-chk">
                                        <input type="checkbox" id="p1">
                                    </div>
                                    <div class="clear td tb-info">
                                        <a href="" target="" title="" class="info-img">
                                            <img class="i-img" src="${baseUrl}/src/${pic[0].src}"" onerror="this.src='//cart.samsclub.cn/statics/sam/img/cart/defaultproduct_90x90.png'"> 
                                            <div class="kong"></div>
                                        </a>
                                        <h6 class="info-name" bagtype="1"><a href="" target="" title=""> ${elm.title}</a></h6>
                                            <p class="info-waring">
                                            </p>
                                            <p class="info-waring" style="margin-top:auto;">
                                                支持极速达&nbsp;&nbsp;
                                            </p>
                                    </div>
                                    <div class="td tb-price">${elm.price}</div>
                                    <input class="tb-amount" type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                                    <div class="td tb-weight">${elm.kg}</div>
                                    <div class="td tb-total"><span>¥</span>${(arr[0].num*elm.price).toFixed(2)}</div>
                                    <div class="td tb-oper">
                                        <a href="javascript:;" class="iconfont icon-delete removeItemBtn" itemid="74480355_0-1" data-tpa="SAM_CART_DeleteBtn" data-event="add_cart" data-pmid="74480355" data-tce="amount-2"></a>
                                    </div>
                                </div>
            
                            </div>
                            </div>
                            `;  
                            
                            temp = `
                            <div class="L">
                            <!--总和控件-->
                            <div class="kong"></div>
                            <div class="k k-1"><a href="javascript:;">批量删除</a></div>
                            <div class="k">
                                <p><em>合计重量</em><span>${arr[0].num}*${elm.kg}</span></p>
                            </div>
                            <div class="k">
                                <p><em>预计运费</em><span>￥1</span></p>
                            </div>
                            <div class="k">
                                <p><em>商品金额</em><span>￥${(arr[0].num*elm.price).toFixed(2)}</span></p>
                            </div>
                            <div class="k">
                                <p><em>优惠金额</em><span>-￥0</span></p>
                            </div>
                    </div>
                    <div class="R">
                        <!--累加总和-->
                        <a href="javascript:;" class="a1">去结算</a>
                        <div class="R-1">
                            <em>合计</em>
                            <span>￥<i class="sl">${(arr[0].num*elm.price).toFixed(2)}</i></span>(<u class="num">1</u>件)
                        </div>
                    </div>
                            `;
                            
                        })
                        $('.table-tbody').append(tempstr);
                        $('.liebiao').append(temp);
                    }
                });
            }
        }
    };
});

