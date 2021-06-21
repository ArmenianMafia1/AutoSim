<?php
//require_once __DIR__ . '/vendor/autoload.php';
//$controller = new Bullscows\UserController($_POST);
session_start();
$_SESSION = array();
$_POST = array();

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AutoSim</title>
  <link href="autosim.css" type="text/css" rel="stylesheet"/>
</head>
<body>

<form id="signin" action="post/signin-post.php" method="POST">
  <fieldset>
    <p><img src="images/banner.png" width="521" height="346" alt="Bulls and Cows Banner"></p>
    <p>Welcome to AutoSim!</p>
    <p><label for="name">Your Name: </label>
      <input type="text" name="name" id="name"></p>
    <p><input type="submit" value="Start Game"></p>
  </fieldset>
</form>
</body>
</html>