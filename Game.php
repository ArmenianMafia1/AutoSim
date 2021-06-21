<?php


class Game
{
    public $year = 2000;
    public $week = 1;
    public $points = 2000;
    public $carsPerRace = 43;
    public $startingNumberOfRaces = 36;
    public $schedule = Array();
    public $carlist = Array();

    function update() {
        $this->week = 2;
        echo "updated week to $this->week!!!";

    }
    function run_race() {
        $temp_carlist = $this->carlist;

        $elite = Array();
        $good = Array();
        $average = Array();

        foreach ($temp_carlist as $car) {
            if($car->engine > 85) {
                array_push($elite, $car);
            }
            elseif ($car->engine > 75) {
                array_push($good, $car);
            }
            else {
                array_push($average, $car);
            }
        }

        $race = $this->schedule[($this->week-1)];
        echo "$this->year $race->name - Race $this->week of $this->startingNumberOfRaces <br>";

        for ($x = 1; $x <= $this->carsPerRace; $x++) {
            /*$val = array_rand($temp_carlist, $num = 1);
            $car = $temp_carlist[$val];
            unset($temp_carlist[$val]);*/

            if (!empty($elite)) {
                $val = array_rand($elite, $num = 1);
                $car = $elite[$val];
                unset($elite[$val]);
            }
            else {
                if (!empty($good)) {
                    $val = array_rand($good, $num = 1);
                    $car = $good[$val];
                    unset($good[$val]);
                }
                else {
                    if (!empty($average)) {
                        $val = array_rand($average, $num = 1);
                        $car = $average[$val];
                        unset($average[$val]);
                    }
                }

            }

            $driver = $car->driver;
            $org = $car->organization;

            echo "#$x: $car->number | $driver->name | $car->sponsor1 | $org->name |  $org->manufacture  <br>";


        }
    }


}