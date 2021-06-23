<?php
session_start();
require_once('Car.php');

?>


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

}

$game->run_race();

?>