<?php

$name_dir = "name/name.txt";
$yourname_dir = "name/YOURNAME.txt";
$name = readfile($name_dir);
$yourname = readfile($yourname_dir);

$confess_dir = "confess/";

$content = '

<!DOCTYPE html>
<html>

<head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Paaminin si crush na crush ka niya">
      <meta name="keywords" content="Crush, paaminin si crush">
      <meta name="author" content="Jimwell Ibay">
      
      <link rel="stylesheet" href="../style/style.css">

  <title>'.$name.'</title>
</head>

<body>

<div class="container" align="center">
  
  <div class="text">
    Hello '.$yourname.' congratulations '.$name.' is have crush on you!🥰
  </div>
  
</div>

</body>

</html>


';

$file = fopen($confess_dir.$name.".html", "w");
fwrite($file, $content);
fclose($file);

?>

<!DOCTYPE html>
<html>

<head>

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="Paaminin si crush na crush ka niya">
      <meta name="keywords" content="Crush, paaminin si crush">
      <meta name="author" content="Jimwell Ibay">
      
      <link rel="stylesheet" href="style/style.css">

  <title>🥰🥰🥰</title>
</head>

<body>

<div class="container" align="center">
  
  <div class="text">
    Ayieeeeeeeeeh sabi na ehh crush mo ako 🥰
  </div>
  
</div>

</body>

</html>

