let baseUrl = "http://localhost/H5-2003/item";    //基础路径

define(['jquery'],function($){
    return{
        render:function(){
            $.ajax({
                type: "get",
                url:`${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                }
            });
        }
    }
})