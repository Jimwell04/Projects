<?php

$inputname = POST["name"];
$name = "name/name.txt";

$file = fopen($name, "w");
fwrite($file, $inputname);
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

  <title>Crush moba ako?</title>
</head>

<body>
  
  <div class="container" align="center">
    
    <div class="text">
      Crush moba ako?
    </div>
    
    <div class="space"></div>
    
    <form>
      
      <div class="choice">
        
        <a href="confess.php">
          
          <input type="submit" value="Oo">
          
        </a>
        
        <input type="button" value="Hindi" id="hindi">
        
      </div>
      
    </form>
    
  </div>

<script src="script/script.js"></script>

</body>

</html>


