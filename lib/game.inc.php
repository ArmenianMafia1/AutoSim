<?php
require_once __DIR__ . '/vendor/autoload.php';
// Start the PHP session system
session_start();

define("BULLSCOWS_SESSION", 'Bullscows');

if(!isset($_SESSION[BULLSCOWS_SESSION])) {
    $_SESSION[BULLSCOWS_SESSION] = new Bullscows\Bullscows();
}


if(isset($_GET['name'])) {
    $_SESSION[BULLSCOWS_SESSION] = new Bullscows\Bullscows(strip_tags($_GET['name']));
}

$bullscows = $_SESSION[BULLSCOWS_SESSION];