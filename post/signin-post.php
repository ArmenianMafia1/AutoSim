<?php
session_start();
if(!isset($_SESSION['name'])) {
    $_SESSION['name'] = "test";
}
$total = $_SESSION['name'];
require_once __DIR__ . '/../vendor/autoload.php';
//require __DIR__ . '/lib/game.inc.php';
$controller = new Bullscows\UserController($_POST);
//print_r($_POST);
$_SESSION['name'] = $_POST['name'];

print_r($_SESSION);
header("Location: ../bullscows.php");
//echo "aaa";
exit;