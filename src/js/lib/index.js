let baseUrl = "http://localhost/H5-2003/item";    //基础路径

define(['jquery'],function($){
    return{
        render:function(){
            $.ajax({
                type: "get",
                url: "url",
                dataType: "json",
                success: function (response) {
                    
                }
            });
        }
    }
})