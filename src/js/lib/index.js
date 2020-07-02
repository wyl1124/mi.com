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
                    res.forEach(elm=>(
                        temp +=`<a href="./detail.html" target="_blank">
                        <div class="i-size-box">
                            <img class="img-agent lazyload" src="${baseUrl}/src/${pic}">
                        </div>
                        <p class="i-size-tit is-tags-mark"><u class="jsd-tag"></u> ${elm.title} </p>
                        <span data-pmid="77944676" data-productid="66384732"><em>¥</em>${elm.price}</span>
                        <div class="marking save">
                            <div class="boxs">
                                <i>已省</i>
                                <p><em>¥</em>12.6</p>
                            </div>
                        </div>
                    </a>`
                    ))

                    $('item').html(temp);
                }
            });
        }
    }
})