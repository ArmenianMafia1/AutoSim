function autosim() {


    var guesses = 0;

    var word = randomWord();
    console.log(word);

    var html = '';

    //var html = '<form id="gameform"><fieldset>';

    //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";


    html += '<table class="game">';
    html += '<div id="guesses">&nbsp;</div>';
    //html += '<tr> <td>1:</td> <td>same</td> <td><img src="images/bull.png" alt="Bull"> <img src="images/bull.png" alt="Bull"></td> </tr>';

    html += '<p>Guess: <input type="text" id = "guess" name="word"></p>';
    html += '<p id="message">&nbsp;</p>';
    html += '<div id="buttons">';
    html += '<p><input type="submit" id = "race" name="guess" value="Run Race">';
    html += '<input type="submit" id = "giveup" name="giveup" value="Give Up">';
    html += '<input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"></p>';
    html += '<div id="hint1">'
    html += '<p><input type="submit" id = "hint" name="hint" value="Hint!"></p></div>';
    html += '</div>';
    html += '<p><input type="submit"  id="exit" name="exit" value="Exit"></p>';
    html += '</form>'
    html += '</fieldset>';
    html += '<p class="solution">';
    html += word;
    html += '</p></body> ';



    document.getElementById("play-area").innerHTML = html;

    document.getElementById("race").onclick = function (event) {
        event.preventDefault();

        document.getElementById("message").innerHTML = "<h1>Ran Race</h1>";
    }
      /*
    document.getElementById("ng").onclick = function(event) {
        event.preventDefault();

        /*
        var guesses = 0;

        var word = randomWord();
        console.log(word);

        var html = '';

        //var html = '<form id="gameform"><fieldset>';

        //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";


        html += '<table class="game">';
        html += '<div id="guesses">&nbsp;</div>';
        //html += '<tr> <td>1:</td> <td>same</td> <td><img src="images/bull.png" alt="Bull"> <img src="images/bull.png" alt="Bull"></td> </tr>';

        html += '<p>Guess: <input type="text" id = "guess" name="word"></p>';
        html += '<p id="message">&nbsp;</p>';
        html += '<div id="buttons">';
        html += '<p><input type="submit" id = "try" name="guess" value="Guess">';
        html += '<input type="submit" name="giveup" value="Give Up">';
        html += '<input type="submit" id = "newgame1" name="newgame1" value="New Game"></p>';
        html += '<p><input type="submit" name="hint" value="Hint!"></p>';
        html += '<p><input type="submit"  id="exit" name="exit" value="Exit" action="http://webdev.cse.msu.edu/~hagopi10/exam/" ></p>';
        html += '</div>';
        html += '</form>'
        html += '</fieldset>';
        html += '<p class="solution">';
        html += word;
        html += '</p></body> ';

        document.getElementById("play-area").innerHTML = html;



    }
   */
    document.getElementById("exit").onclick = function (event) {
        event.preventDefault()
        console.log("test");
        window.location.href = "index.php";

    }

    document.getElementById("giveup").onclick = function (event) {

        event.preventDefault();

        if (guesses === 0) {
            document.getElementById("guesses").innerHTML += '<table class="game"><tbody><tr>';

        }

        guesses += 1;
        document.getElementById("message").innerHTML = "<h1>You gave up!</h1>";
        document.getElementById("try").innerHTML = "";
        document.getElementById("guesses").innerHTML += '<td>';
        document.getElementById("guesses").innerHTML += guesses;
        document.getElementById("guesses").innerHTML += '</td>';
        document.getElementById("guesses").innerHTML += ": ";
        document.getElementById("guesses").innerHTML += '<td>';
        document.getElementById("guesses").innerHTML += word;
        document.getElementById("guesses").innerHTML += '</td>';
        for (var i = 0; i < word.length; i++) {
                document.getElementById("guesses").innerHTML += '<td>';
                document.getElementById("guesses").innerHTML += '<img src="images/bull.png" alt="Bull">';
                document.getElementById("guesses").innerHTML += '</td>';


        }

        document.getElementById("guesses").innerHTML += "</tbody></table>";
        document.getElementById("buttons").innerHTML = '<p><input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"</p>';
        //document.getElementById("buttons").innerHTML += '<p><input type="submit"  id="exit" name="exit" value="Exit" action="http://webdev.cse.msu.edu/~hagopi10/exam/" ></p>';

    }

    document.getElementById("hint").onclick = function (event) {
        ///test
        event.preventDefault();

        var num = Math.floor(Math.random() * 3);

        if (num == 0) {
            document.getElementById("hint1").innerHTML = "<p>The first letter is " + word[0] + "</p>";

        }
        if (num == 1) {
            document.getElementById("hint1").innerHTML = "<p>The second letter is " + word[1] + "</p>";

        }

        if (num == 2) {
            document.getElementById("hint1").innerHTML = "<p>The third letter is " + word[2] + "</p>";

        }
        if (num == 3) {
            document.getElementById("hint1").innerHTML = "<p>The fourth letter is " + word[2] + "</p>";

        }



    }

}


function randomWord() {
    var words =  ["home","mega","blue","send","frog","hair","late",
        "club","bold","lion","sand","pong","army","bank","bird",
        "bowl","cave","desk","drum","dung","ears","film","fire","fork",
        "game","gate","girl","hose","junk","maze","meat","milk","mist",
        "nail","navy","ring","rock","rope","salt","ship","shop","star",
        "worm","zone"];

    return words[Math.floor(Math.random() * words.length)];
}

/*
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
    <p class="solution">salt</p>'
 */