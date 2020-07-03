require.config({
    paths:{
        jquery:'./jquery.min',
        products:'./lib/products'
    },
    shim:{}
});

require(['products'],function(products){
    products.render();
});