<?php
session_start();
require_once('Car.php');
require_once('Driver.php');
require_once('Organization.php');
require_once('Game.php');
require_once('Race.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="autosim.css" type="text/css" rel="stylesheet"/>
    <script src="autosim.js"></script>
    <script>
        window.onload = autosim;
    </script>
  <title>AutoSim</title>
</head>

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

        ?>
    </fieldset>
</form>

<body>


<input type="file" name="file" id="roster" value="Upload roster.tsv Here">

<input type="file" name="file" id="gamerules" value="Upload gamerules.tsv Here">

<input type="file" name="file" id="freeAgents" value="Upload freeagents.tsv Here">

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

    //echo '<pre>'; print_r($game->schedule); echo '</p

    if (isset($_POST['submit'])) {

        //$game->run_race();
        //$game->update();

        //someFunction();
    }

    if (isset($_POST['submit2'])) {
        someFunction();
        //someFunction();
    }

    function someFunction() {
        echo "hi";
    }



    ?>


        <div id="play-area"></div>


</html>