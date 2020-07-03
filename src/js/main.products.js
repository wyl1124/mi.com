require.config({
    paths:{
        jquery:'./jquery.min',
        products:'./lib/products',
        cookie:'./cookie'
    },
    shim:{}
});

require(['jquery','products'],function($,products){
    products.render(function(id,price){
        $('.k-1').on('click',function(){
            alert('加入购物车');
            products.additem(id,price,$('.num').val());
        })
    });
    
});

