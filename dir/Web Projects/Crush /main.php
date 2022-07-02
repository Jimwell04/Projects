<?php

$inputname = POST["name"];
$name = "name/name.txt";

$file = fopen($name, "w");
fwrite($file, $inputname);
fclose($file);

?>

