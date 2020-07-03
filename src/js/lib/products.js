let baseUrl = "http://localhost/H5-2003/item1"; 

define(['jquery'],function($){
    return{
        render:function(){ 
            let id = location.search.split("=")[1];
            console.log(id);
            // $.ajax({
            //     type: "get",
            //     url: `${baseUrl}/src/interface/getitem.php`,
            //     data: {
            //         id:id
            //     },
            //     dataType: "json",
            //     success: function (res) {
            //         console.log(res);
            //     }
            // });
        }   
    }
})