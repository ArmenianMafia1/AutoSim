<?php

namespace Bullscows;

class UserController
{
    public function __construct($post)
    {
        //array $post
        $this->post = $post;

        $root = "/~hagopi10/exam/";
        $this->redirect = "$root/Bullscows.php";

        if (isset($post['name'])) {
            $this->redirect = "$root/Bullscows.php?name=" . $post['name'];

        }
        else {
            $_POST = array();
            header("Location: http://webdev.cse.msu.edu/~hagopi10/exam/");

        }



    }

    private $redirect;
    private $post;
    private $name;

    /**
     * @return string
     */
    public function getRedirect()
    {
        return $this->redirect;
    }    // Page we will redirect the user to.


}