<?php
    header('content-type:text/html;charset=utf-8');

    $mysql_conf = array(
        'host'=>'localhost:3306',  // 地址
        'db_user'=>'root', // 用户名
        'db_pass'=>'root', // 密码
        'db'=>'h5-2003'    // 数据库名
    );

    // 连接数据库（登录） mysqli
    $mysqli = new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);

    // var_dump($mysqli);

    if($mysqli->connect_errno){  // 判断是否连接成功
        // die()函数 用于终止代码执行
        die('连接错误'.$mysqli->connect_errno);
    }

    // 设置查询字符集
    $mysqli->query('set names utf8');

    // 选择数据库
    $select_db = $mysqli->select_db($mysql_conf['db']);

    // 判断数据库是否选择成功
    if(!$select_db){
        die('数据库选择错误'.$mysqli->error);
    }


    // ------------------------------------------
    // 查询数据库

    // sql语句
    $sql = "select * from users";

    // 执行sql语句 query()
    // 使用query()方法 执行查询时 获得到的结果  叫 结果集
    $result = $mysqli->query($sql);

    // var_dump($result);
    
    // 从结果集中获取一条数据
    // $row = $result->fetch_assoc();
    // $row2 = $result->fetch_assoc();
    // $row3 = $result->fetch_assoc();

    // var_dump($row);
    // echo '<br>';
    // var_dump($row2);
    // echo '<br>';
    // var_dump($row3);

    $arr = array(); // 定义一个空数组
    while($row = $result->fetch_assoc()){ // 循环从结果集中获取一条数据
        array_push($arr,$row);
    }

    // var_dump($arr);
    $json = json_encode($arr);
    echo $json;

    $mysqli->close(); // 关闭连接
?>