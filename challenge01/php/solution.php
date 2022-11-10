<?php 

$input  = fopen('users.txt','r');
$user = [];
$i = 0;

while($line = fgets($input)){
    if($line === "\n"){
        if(count(array_intersect(['usr','eme','psw','age','loc','fll'],array_keys($user)))== 6)
        {
            echo rtrim(++$i.$user['usr'])."\n";
        }
        $user = [];
    }else{
        $user_info = explode(" ",$line);
        array_map(function($val) use(&$user){
            if(!empty($val)){
                $keyval = explode(":",$val);
                $user[$keyval[0]] = $keyval[1];
            }
        },$user_info);
    }
}

fclose($input);