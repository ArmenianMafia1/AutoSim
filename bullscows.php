<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="bullscows.css" type="text/css" rel="stylesheet"/>
    <script src="bullscows.js"></script>
    <script>
        window.onload = bullscows;
    </script>
  <title>AutoSim</title>
</head>
<body>
<form id="gameform">
    <fieldset>
    <?php
    if (isset($_SESSION['name'])) {
        echo '<h1>';
        $value = strip_tags($_SESSION['name']);
        echo $value;
        echo " Alpha Test</h1>";

    }
    else {
        $_SESSION = array();
        $_POST = array();
        unset($_SESSION['name']);

        header("Location: index.php");
    }

    $myfile = fopen("roster.tsv", "r") or die("Unable to open file!");
    //echo fread($myfile,filesize("roster.tsv"));
    $fileContent = file_get_contents("roster.tsv");
    $pieces = explode("~", $fileContent);

    print_r($pieces);
    fclose($myfile);

    ?>




<?php /*
<h1><?php echo $_POST["name"]; ?>'s Bulls and Cows</h1>
  <fieldset>
    <h1><?php echo $_POST["name"]; ?> Bulls and Cows</h1>
    <table class="game">
      <tr>
        <td>1:</td>
        <td>same</td>
        <td><img src="images/bull.png" alt="Bull"> <img src="images/bull.png" alt="Bull"></td>
      </tr>
      <tr>
        <td>2:</td>
        <td>task</td>
        <td><img src="images/bull.png" alt="Bull">
          <img src="images/cow.png" alt="Cow">
          <img src="images/cow.png" alt="Cow"></td>
      </tr>
      <tr>
        <td>3:</td>
        <td>cars</td>
        <td><img src="images/bull.png" alt="Bull"> <img src="images/cow.png" alt="Cow"></td>
      </tr>
      <tr>
        <td>4:</td>
        <td>home</td>
        <td></td>
      </tr>
    </table>
    <p>Guess: <input type="text" name="word"></p>
    <p><input type="submit" name="guess" value="Guess">
      <input type="submit" name="giveup" value="Give Up">
      <input type="submit" name="newgame" value="New Game"></p>
    <p><input type="submit" name="hint" value="Hint!"></p>
    <p><input type="submit" name="exit" value="Exit"></p>
  </fieldset>
</form>
<p class="solution">salt</p></body> */ ?>

</html>