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

    global $game;
    $game = New Game();
    $carlist = array();

    $myfile = fopen("roster.tsv", "r") or die("Unable to open file!");
    //echo fread($myfile,filesize("roster.tsv"));
    $fileContent = file_get_contents("roster.tsv");

    $filename = 'roster.tsv';
    $contents = file($filename);



    $counter = 0;
    foreach($contents as $line) {
        if($counter != 0) {

            $pieces = explode("~", $line);
            $test = explode("~", $line);

            $car = new Car;
            $driver = new Driver;
            $org= new Organization;


            $driver->name = $pieces[1];
            $driver->superspeedway = $pieces[6];
            $driver->intermediate = $pieces[7];
            $driver->flat = $pieces[8];
            $driver->short = $pieces[9];
            $driver->roadcourse = $pieces[10];
            $driver->morale = $pieces[11];
            $driver->aggression = $pieces[12];
            $driver->age = $pieces[13];
            $driver->careertitles = $pieces[14];
            $driver->careerwins = $pieces[15];
            $driver->careertopfives = $pieces[16];
            $driver->careertoptens = $pieces[17];
            $driver->careerraces = $pieces[18];
            $driver->yrsleft = $pieces[19];

            $org->name = $pieces[4];
            $org->manufacture = $pieces[5];

            $car->number = $pieces[0];
            $car->driver = $driver;
            $car->sponsor1 = $pieces[2];
            $car->sponsor2 = $pieces[3];
            $car->organization = $org;
            $car->engine = $pieces[20];
            $car->chassis = $pieces[21];
            $car->aero = $pieces[22];
            $car->pitcrew = $pieces[23];
            $car->prestige = $pieces[24];
            $car->status = $pieces[25];



            array_push($carlist, $car);



        }

        $counter += 1;

    }

    $filename = 'roster.tsv';
    $contents = file($filename);

    //echo '<pre>'; print_r($carlist); echo '</pre>';

    //$pieces = explode("~", $fileContent);

    //print_r($pieces);
    //fclose($myfile);

    $game->carlist = $carlist;

    $filename = 'gamerules.tsv';
    $contents = file($filename);

    $counter = 0;
    $scheduleFlag = false;
    $schedule = array();

    foreach($contents as $line) {
        $pieces = explode("~", $line);

        if ($counter == 1) {
            $game->year = $pieces[0];
            $game->points = $pieces[1];
            $game->carsPerRace = $pieces[2];

        }

        if ($counter == 3) {

            $game->startingNumberOfRaces = $pieces[0];


        }

        if ($scheduleFlag == true and $pieces[0] != "New Races") {

            $race = new Race();
            $race->num = $pieces[0];
            $race->name = $pieces[1];
            $race->track = $pieces[2];
            $race->type = $pieces[3];
            $race->laps = $pieces[4];

            array_push($game->schedule, $race);

        }

        if ($pieces[0] == "New Races") {
            $scheduleFlag = false;
        }



        if ($pieces[0] == "Race #") {

            $scheduleFlag = true;

        }

        $counter += 1;


    }


    if (isset($_POST['submit'])) {
        $game->run_race();
        //someFunction();
    }
    function someFunction() {
        echo "hi";
    }

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