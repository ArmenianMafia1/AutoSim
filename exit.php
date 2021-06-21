<?php
start_session();
unset($_SESSION['name']);
header('Location: index.php');

?>