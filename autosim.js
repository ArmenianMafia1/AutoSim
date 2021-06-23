function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}

function autosim() {

    class Game {
        constructor() {
            this.carlist = new Array();
            this.schedule = new Array();
            this.champions = new Array();
            this.freeAgents = new Array();
            this.freeAgentsLegal = new Array()
            this.retired = new Array();
            this.week = 1;
            this.points = 2000;
            this.year = 2000;
            this.carsInRace = 43;
            this.numRaces = 37;
            this.silly = false;


        }

        randomName() {
            let first = ["John", "Jack", "Adam", "Kenny", "Dave", "Ryan", "Joseph", "Johnny", "JJ", "Jeremy", "Jake", "Alex", "Allen", "Aiden", "Ricky", "Bobby", "Robert", "Alexander", "Jimmie", "Kurt", "Rick", "Darren",  "Michael", "Colby", "David", "Scott", "Robby", "Henry", "Will", "Ron", "Jon", "Marc", "Mitch", "Mitchell", "Bill", "Barry", "Reed", "Sterling", "Wes", "J.J.", "Blake", "Justin", "Dustin", "Patrick", "Pat", "Will", "Casey", "Larry", "Matthew", "Matt", "Tyler", "Dale", "Louis", "Mark", "Tony", "Joe", "Kyle", "AJ", "Steven", "Jimmy", "Kevin"]
            let last = ['Abbott',
                'Acevedo',
                'Acosta',
                'Adams',
                'Adkins',
                'Aguilar',
                'Aguirre',
                'Albert',
                'Alexander',
                'Alford',
                'Allen',
                'Allison',
                'Alston',
                'Alvarado',
                'Alvarez',
                'Anderson',
                'Andrews',
                'Anthony',
                'Armstrong',
                'Arnold',
                'Ashley',
                'Atkins',
                'Atkinson',
                'Austin',
                'Avery',
                'Avila',
                'Ayala',
                'Ayers',
                'Bailey',
                'Baird',
                'Baker',
                'Baldwin',
                'Ball',
                'Ballard',
                'Banks',
                'Barber',
                'Barker',
                'Barlow',
                'Barnes',
                'Barnett',
                'Barr',
                'Barrera',
                'Barrett',
                'Barron',
                'Barry',
                'Bartlett',
                'Barton',
                'Bass',
                'Bates',
                'Battle',
                'Bauer',
                'Baxter',
                'Beach',
                'Bean',
                'Beard',
                'Beasley',
                'Beck',
                'Becker',
                'Bell',
                'Bender',
                'Benjamin',
                'Bennett',
                'Benson',
                'Bentley',
                'Benton',
                'Berg',
                'Berger',
                'Bernard',
                'Berry',
                'Best',
                'Bird',
                'Bishop',
                'Black',
                'Blackburn',
                'Blackwell',
                'Blair',
                'Blake',
                'Blanchard',
                'Blankenship',
                'Blevins',
                'Bolton',
                'Bond',
                'Bonner',
                'Booker',
                'Boone',
                'Booth',
                'Bowen',
                'Bowers',
                'Bowman',
                'Boyd',
                'Boyer',
                'Boyle',
                'Bradford',
                'Bradley',
                'Bradshaw',
                'Brady',
                'Branch',
                'Bray',
                'Brennan',
                'Brewer',
                'Bridges',
                'Briggs',
                'Bright',
                'Britt',
                'Brock',
                'Brooks',
                'Brown',
                'Browning',
                'Bruce',
                'Bryan',
                'Bryant',
                'Buchanan',
                'Buck',
                'Buckley',
                'Buckner',
                'Bullock',
                'Burch',
                'Burgess',
                'Burke',
                'Burks',
                'Burnett',
                'Burns',
                'Burris',
                'Burt',
                'Burton',
                'Bush',
                'Butler',
                'Byers',
                'Byrd',
                'Cabrera',
                'Cain',
                'Calderon',
                'Caldwell',
                'Calhoun',
                'Callahan',
                'Camacho',
                'Cameron',
                'Campbell',
                'Campos',
                'Cannon',
                'Cantrell',
                'Cantu',
                'Cardenas',
                'Carey',
                'Carlson',
                'Carney',
                'Carpenter',
                'Carr',
                'Carrillo',
                'Carroll',
                'Carson',
                'Carter',
                'Carver',
                'Case',
                'Casey',
                'Cash',
                'Castaneda',
                'Castillo',
                'Castro',
                'Cervantes',
                'Chambers',
                'Chan',
                'Chandler',
                'Chaney',
                'Chang',
                'Chapman',
                'Charles',
                'Chase',
                'Chavez',
                'Chen',
                'Cherry',
                'Christensen',
                'Christian',
                'Church',
                'Clark',
                'Clarke',
                'Clay',
                'Clayton',
                'Clements',
                'Clemons',
                'Cleveland',
                'Cline',
                'Cobb',
                'Cochran',
                'Coffey',
                'Cohen',
                'Cole',
                'Coleman',
                'Collier',
                'Collins',
                'Colon',
                'Combs',
                'Compton',
                'Conley',
                'Conner',
                'Conrad',
                'Contreras',
                'Conway',
                'Cook',
                'Cooke',
                'Cooley',
                'Cooper',
                'Copeland',
                'Cortez',
                'Cote',
                'Cotton',
                'Cox',
                'Craft',
                'Craig',
                'Crane',
                'Crawford',
                'Crosby',
                'Cross',
                'Cruz',
                'Cummings',
                'Cunningham',
                'Curry',
                'Curtis',
                'Dale',
                'Dalton',
                'Daniel',
                'Daniels',
                'Daugherty',
                'Davenport',
                'David',
                'Davidson',
                'Davis',
                'Dawson',
                'Day',
                'Dean',
                'Decker',
                'Dejesus',
                'Delacruz',
                'Delaney',
                'Deleon',
                'Delgado',
                'Dennis',
                'Diaz',
                'Dickerson',
                'Dickson',
                'Dillard',
                'Dillon',
                'Dixon',
                'Dodson',
                'Dominguez',
                'Donaldson',
                'Donovan',
                'Dorsey',
                'Dotson',
                'Douglas',
                'Downs',
                'Doyle',
                'Drake',
                'Dudley',
                'Duffy',
                'Duke',
                'Duncan',
                'Dunlap',
                'Dunn',
                'Duran',
                'Durham',
                'Dyer',
                'Eaton',
                'Edwards',
                'Elliott',
                'Ellis',
                'Ellison',
                'Emerson',
                'England',
                'English',
                'Erickson',
                'Espinoza',
                'Estes',
                'Estrada',
                'Evans',
                'Everett',
                'Ewing',
                'Farley',
                'Farmer',
                'Farrell',
                'Faulkner',
                'Ferguson',
                'Fernandez',
                'Ferrell',
                'Fields',
                'Figueroa',
                'Finch',
                'Finley',
                'Fischer',
                'Fisher',
                'Fitzgerald',
                'Fitzpatrick',
                'Fleming',
                'Fletcher',
                'Flores',
                'Flowers',
                'Floyd',
                'Flynn',
                'Foley',
                'Forbes',
                'Ford',
                'Foreman',
                'Foster',
                'Fowler',
                'Fox',
                'Francis',
                'Franco',
                'Frank',
                'Franklin',
                'Franks',
                'Frazier',
                'Frederick',
                'Freeman',
                'French',
                'Frost',
                'Fry',
                'Frye',
                'Fuentes',
                'Fuller',
                'Fulton',
                'Gaines',
                'Gallagher',
                'Gallegos',
                'Galloway',
                'Gamble',
                'Garcia',
                'Gardner',
                'Garner',
                'Garrett',
                'Garrison',
                'Garza',
                'Gates',
                'Gay',
                'Gentry',
                'George',
                'Gibbs',
                'Gibson',
                'Gilbert',
                'Giles',
                'Gill',
                'Gillespie',
                'Gilliam',
                'Gilmore',
                'Glass',
                'Glenn',
                'Glover',
                'Goff',
                'Golden',
                'Gomez',
                'Gonzales',
                'Gonzalez',
                'Good',
                'Goodman',
                'Goodwin',
                'Gordon',
                'Gould',
                'Graham',
                'Grant',
                'Graves',
                'Gray',
                'Green',
                'Greene',
                'Greer',
                'Gregory',
                'Griffin',
                'Griffith',
                'Grimes',
                'Gross',
                'Guerra',
                'Guerrero',
                'Guthrie',
                'Gutierrez',
                'Guy',
                'Guzman',
                'Hahn',
                'Hale',
                'Haley',
                'Hall',
                'Hamilton',
                'Hammond',
                'Hampton',
                'Hancock',
                'Haney',
                'Hansen',
                'Hanson',
                'Hardin',
                'Harding',
                'Hardy',
                'Harmon',
                'Harper',
                'Harrell',
                'Harrington',
                'Harris',
                'Harrison',
                'Hart',
                'Hartman',
                'Harvey',
                'Hatfield',
                'Hawkins',
                'Hayden',
                'Hayes',
                'Haynes',
                'Hays',
                'Head',
                'Heath',
                'Hebert',
                'Henderson',
                'Hendricks',
                'Hendrix',
                'Henry',
                'Hensley',
                'Henson',
                'Herman',
                'Hernandez',
                'Herrera',
                'Herring',
                'Hess',
                'Hester',
                'Hewitt',
                'Hickman',
                'Hicks',
                'Higgins',
                'Hill',
                'Hines',
                'Hinton',
                'Hobbs',
                'Hodge',
                'Hodges',
                'Hoffman',
                'Hogan',
                'Holcomb',
                'Holden',
                'Holder',
                'Holland',
                'Holloway',
                'Holman',
                'Holmes',
                'Holt',
                'Hood',
                'Hooper',
                'Hoover',
                'Hopkins',
                'Hopper',
                'Horn',
                'Horne',
                'Horton',
                'House',
                'Houston',
                'Howard',
                'Howe',
                'Howell',
                'Hubbard',
                'Huber',
                'Hudson',
                'Huff',
                'Huffman',
                'Hughes',
                'Hull',
                'Humphrey',
                'Hunt',
                'Hunter',
                'Hurley',
                'Hurst',
                'Hutchinson',
                'Hyde',
                'Ingram',
                'Irwin',
                'Jackson',
                'Jacobs',
                'Jacobson',
                'James',
                'Jarvis',
                'Jefferson',
                'Jenkins',
                'Jennings',
                'Jensen',
                'Jimenez',
                'Johns',
                'Johnson',
                'Johnston',
                'Jones',
                'Jordan',
                'Joseph',
                'Joyce',
                'Joyner',
                'Juarez',
                'Justice',
                'Kane',
                'Kaufman',
                'Keith',
                'Keller',
                'Kelley',
                'Kelly',
                'Kemp',
                'Kennedy',
                'Kent',
                'Kerr',
                'Key',
                'Kidd',
                'Kim',
                'King',
                'Kinney',
                'Kirby',
                'Kirk',
                'Kirkland',
                'Klein',
                'Kline',
                'Knapp',
                'Knight',
                'Knowles',
                'Knox',
                'Koch',
                'Kramer',
                'Lamb',
                'Lambert',
                'Lancaster',
                'Landry',
                'Lane',
                'Lang',
                'Langley',
                'Lara',
                'Larsen',
                'Larson',
                'Lawrence',
                'Lawson',
                'Le',
                'Leach',
                'Leblanc',
                'Lee',
                'Leon',
                'Leonard',
                'Lester',
                'Levine',
                'Levy',
                'Lewis',
                'Lindsay',
                'Lindsey',
                'Little',
                'Livingston',
                'Lloyd',
                'Logan',
                'Long',
                'Lopez',
                'Lott',
                'Love',
                'Lowe',
                'Lowery',
                'Lucas',
                'Luna',
                'Lynch',
                'Lynn',
                'Lyons',
                'Macdonald',
                'Macias',
                'Mack',
                'Madden',
                'Maddox',
                'Maldonado',
                'Malone',
                'Mann',
                'Manning',
                'Marks',
                'Marquez',
                'Marsh',
                'Marshall',
                'Martin',
                'Martinez',
                'Mason',
                'Massey',
                'Mathews',
                'Mathis',
                'Matthews',
                'Maxwell',
                'May',
                'Mayer',
                'Maynard',
                'Mayo',
                'Mays',
                'Mcbride',
                'Mccall',
                'Mccarthy',
                'Mccarty',
                'Mcclain',
                'Mcclure',
                'Mcconnell',
                'Mccormick',
                'Mccoy',
                'Mccray',
                'Mccullough',
                'Mcdaniel',
                'Mcdonald',
                'Mcdowell',
                'Mcfadden',
                'Mcfarland',
                'Mcgee',
                'Mcgowan',
                'Mcguire',
                'Mcintosh',
                'Mcintyre',
                'Mckay',
                'Mckee',
                'Mckenzie',
                'Mckinney',
                'Mcknight',
                'Mclaughlin',
                'Mclean',
                'Mcleod',
                'Mcmahon',
                'Mcmillan',
                'Mcneil',
                'Mcpherson',
                'Meadows',
                'Medina',
                'Mejia',
                'Melendez',
                'Melton',
                'Mendez',
                'Mendoza',
                'Mercado',
                'Mercer',
                'Merrill',
                'Merritt',
                'Meyer',
                'Meyers',
                'Michael',
                'Middleton',
                'Miles',
                'Miller',
                'Mills',
                'Miranda',
                'Mitchell',
                'Molina',
                'Monroe',
                'Montgomery',
                'Montoya',
                'Moody',
                'Moon',
                'Mooney',
                'Moore',
                'Morales',
                'Moran',
                'Moreno',
                'Morgan',
                'Morin',
                'Morris',
                'Morrison',
                'Morrow',
                'Morse',
                'Morton',
                'Moses',
                'Mosley',
                'Moss',
                'Mueller',
                'Mullen',
                'Mullins',
                'Munoz',
                'Murphy',
                'Murray',
                'Myers',
                'Nash',
                'Navarro',
                'Neal',
                'Nelson',
                'Newman',
                'Newton',
                'Nguyen',
                'Nichols',
                'Nicholson',
                'Nielsen',
                'Nieves',
                'Nixon',
                'Noble',
                'Noel',
                'Nolan',
                'Norman',
                'Norris',
                'Norton',
                'Nunez',
                'Obrien',
                'Ochoa',
                'Oconnor',
                'Odom',
                'Odonnell',
                'Oliver',
                'Olsen',
                'Olson',
                'Oneal',
                'Oneil',
                'Oneill',
                'Orr',
                'Ortega',
                'Ortiz',
                'Osborn',
                'Osborne',
                'Owen',
                'Owens',
                'Pace',
                'Pacheco',
                'Padilla',
                'Page',
                'Palmer',
                'Park',
                'Parker',
                'Parks',
                'Parrish',
                'Parsons',
                'Pate',
                'Patel',
                'Patrick',
                'Patterson',
                'Patton',
                'Paul',
                'Payne',
                'Pearson',
                'Peck',
                'Pena',
                'Pennington',
                'Perez',
                'Perkins',
                'Perry',
                'Peters',
                'Petersen',
                'Peterson',
                'Petty',
                'Phelps',
                'Phillips',
                'Pickett',
                'Pierce',
                'Pittman',
                'Pitts',
                'Pollard',
                'Poole',
                'Pope',
                'Porter',
                'Potter',
                'Potts',
                'Powell',
                'Powers',
                'Pratt',
                'Preston',
                'Price',
                'Prince',
                'Pruitt',
                'Puckett',
                'Pugh',
                'Quinn',
                'Ramirez',
                'Ramos',
                'Ramsey',
                'Randall',
                'Randolph',
                'Rasmussen',
                'Ratliff',
                'Ray',
                'Raymond',
                'Reed',
                'Reese',
                'Reeves',
                'Reid',
                'Reilly',
                'Reyes',
                'Reynolds',
                'Rhodes',
                'Rice',
                'Rich',
                'Richard',
                'Richards',
                'Richardson',
                'Richmond',
                'Riddle',
                'Riggs',
                'Riley',
                'Rios',
                'Rivas',
                'Rivera',
                'Rivers',
                'Roach',
                'Robbins',
                'Roberson',
                'Roberts',
                'Robertson',
                'Robinson',
                'Robles',
                'Rocha',
                'Rodgers',
                'Rodriguez',
                'Rodriquez',
                'Rogers',
                'Rojas',
                'Rollins',
                'Roman',
                'Romero',
                'Rosa',
                'Rosales',
                'Rosario',
                'Rose',
                'Ross',
                'Roth',
                'Rowe',
                'Rowland',
                'Roy',
                'Ruiz',
                'Rush',
                'Russell',
                'Russo',
                'Rutledge',
                'Ryan',
                'Salas',
                'Salazar',
                'Salinas',
                'Sampson',
                'Sanchez',
                'Sanders',
                'Sandoval',
                'Sanford',
                'Santana',
                'Santiago',
                'Santos',
                'Sargent',
                'Saunders',
                'Savage',
                'Sawyer',
                'Schmidt',
                'Schneider',
                'Schroeder',
                'Schultz',
                'Schwartz',
                'Scott',
                'Sears',
                'Sellers',
                'Serrano',
                'Sexton',
                'Shaffer',
                'Shannon',
                'Sharp',
                'Sharpe',
                'Shaw',
                'Shelton',
                'Shepard',
                'Shepherd',
                'Sheppard',
                'Sherman',
                'Shields',
                'Short',
                'Silva',
                'Simmons',
                'Simon',
                'Simpson',
                'Sims',
                'Singleton',
                'Skinner',
                'Slater',
                'Sloan',
                'Small',
                'Smith',
                'Snider',
                'Snow',
                'Snyder',
                'Solis',
                'Solomon',
                'Sosa',
                'Soto',
                'Sparks',
                'Spears',
                'Spence',
                'Spencer',
                'Stafford',
                'Stanley',
                'Stanton',
                'Stark',
                'Steele',
                'Stein',
                'Stephens',
                'Stephenson',
                'Stevens',
                'Stevenson',
                'Stewart',
                'Stokes',
                'Stone',
                'Stout',
                'Strickland',
                'Strong',
                'Stuart',
                'Suarez',
                'Sullivan',
                'Summers',
                'Sutton',
                'Swanson',
                'Sweeney',
                'Sweet',
                'Sykes',
                'Talley',
                'Tanner',
                'Tate',
                'Taylor',
                'Terrell',
                'Terry',
                'Thomas',
                'Thompson',
                'Thornton',
                'Tillman',
                'Todd',
                'Torres',
                'Townsend',
                'Tran',
                'Travis',
                'Trevino',
                'Trujillo',
                'Tucker',
                'Turner',
                'Tyler',
                'Tyson',
                'Underwood',
                'Valdez',
                'Valencia',
                'Valentine',
                'Valenzuela',
                'Vance',
                'Vang',
                'Vargas',
                'Vasquez',
                'Vaughan',
                'Vaughn',
                'Vazquez',
                'Vega',
                'Velasquez',
                'Velazquez',
                'Velez',
                'Villarreal',
                'Vincent',
                'Vinson',
                'Wade',
                'Wagner',
                'Walker',
                'Wall',
                'Wallace',
                'Waller',
                'Walls',
                'Walsh',
                'Walter',
                'Walters',
                'Walton',
                'Ward',
                'Ware',
                'Warner',
                'Warren',
                'Washington',
                'Waters',
                'Watkins',
                'Watson',
                'Watts',
                'Weaver',
                'Webb',
                'Weber',
                'Webster',
                'Weeks',
                'Weiss',
                'Welch',
                'Wells',
                'West',
                'Wheeler',
                'Whitaker',
                'White',
                'Whitehead',
                'Whitfield',
                'Whitley',
                'Whitney',
                'Wiggins',
                'Wilcox',
                'Wilder',
                'Wiley',
                'Wilkerson',
                'Wilkins',
                'Wilkinson',
                'William',
                'Williams',
                'Williamson',
                'Willis',
                'Wilson',
                'Winters',
                'Wise',
                'Witt',
                'Wolf',
                'Wolfe',
                'Wong',
                'Wood',
                'Woodard',
                'Woods',
                'Woodward',
                'Wooten',
                'Workman',
                'Wright',
                'Wyatt',
                'Wynn',
                'Yang',
                'Yates',
                'York',
                'Young',
                'Zamora',
                'Zimmerman'];
            var index = Math.floor( Math.random()*first.length );
            var firstname = first[index];
            index = Math.floor( Math.random()*last.length );
            var lastname = last[index];
            var fullname = firstname + " " + lastname;
            return fullname;


        }

        sillySeason() {

            game.carlist = game.displayStandings();

            var retiredString = "";

            for (var i = 0; i < game.carlist.length; i++) {

                var car = game.carlist[i];




                car.driver.age += 1;

                if(car.driver.age < 24) {
                    car.driver.superspeedway += 4;
                    car.driver.intermediate += 4;
                    car.driver.flat += 4;
                    car.driver.shortTrack += 4;
                    car.driver.roadCourse += 4;

                }

                if(car.driver.age < 32) {
                    car.driver.superspeedway += 2;
                    car.driver.intermediate += 2;
                    car.driver.flat += 2;
                    car.driver.shortTrack += 2;
                    car.driver.roadCourse += 2;

                }

                if (car.driver.topTens < 4 && car.driver.wins < 1) {
                    var odds = Math.floor( Math.random()*100 );

                    if (odds > 40) {
                        game.freeAgents.push(car.driver);
                        car.driver = new Driver("N/A");
                    }

                }

                console.log(game.freeAgents);

                if(car.driver.age > 39) {
                    car.driver.superspeedway -= 4;
                    car.driver.intermediate -= 4;
                    car.driver.flat -= 4;
                    car.driver.shortTrack -= 4;
                    car.driver.roadCourse -= 4;

                }

                if(car.driver.age > 45) {
                    car.driver.superspeedway -= 6;
                    car.driver.intermediate -= 6;
                    car.driver.flat -= 6;
                    car.driver.shortTrack -= 6;
                    car.driver.roadCourse -= 6;

                }

                if(car.driver.age > 51) {

                    game.retired.push(car.driver);

                    retiredString += car.driver.name + " has retired!<br>"

                    var retiredString2 = car.driver.name + "Final stats | Titles: "
                        +  car.driver.careerTitles + " | Wins: "
                        +  car.driver.careerWins + " | Top Fives: "
                        +  car.driver.careerTopFives + " | Top Tens: "
                        +  car.driver.careerTopTens + " | Races: "
                        +  car.driver.careerRaces + "<br>"

                    retiredString += retiredString2;

                    car.driver = new Driver("N/A");
                }

            }

            game.freeAgentsLegal = [];

            for (var f = 0; f < game.freeAgents.length; f++) {

                var FA = game.freeAgents[f];

                if (FA.age > 21 && FA.age < 48 && (FA.superspeedway + FA.intermediate + FA.roadCourse) / 3 > 62) {
                    console.log("FREE AGENTS LEGAL", game.freeAgentsLegal, FA.name);
                    game.freeAgentsLegal.push(FA);
                }

                FA.age += 1;

                if (FA.age < 18) {
                    FA.superspeedway += 5;
                    FA.intermediate += 5;
                    FA.flat += 5;
                    FA.roadCourse += 5;
                    FA.superspeedway += 5;

                }

                if (FA.age < 24) {
                    FA.superspeedway += 3;
                    FA.intermediate += 3;
                    FA.flat += 3;
                    FA.roadCourse += 3;
                    FA.superspeedway += 3;

                }

            }

            console.log("FREE AGENTS LEGAL", game.freeAgentsLegal);

            for (var i = 0; i < game.carlist.length; i++) {

                var car = game.carlist[i];

                if (car.driver.name == "N/A") {
                    if (game.freeAgentsLegal.length > 0) {
                        var index = Math.floor( Math.random()*game.freeAgentsLegal.length );
                        car.driver = game.freeAgentsLegal[index];
                        game.freeAgentsLegal.splice( index, 1 ); // Remove the item from the array
                        var index1 = game.freeAgents.indexOf(car.driver);
                        if (index1 > -1) {
                            game.freeAgents.splice(index1, 1);
                        }
                        retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " +car.organization.manufacture + "<br>";
                        retiredString += retiredString2;
                    }


                    else {
                        car.driver = new Driver(game.randomName());
                        car.driver.age = 21;
                        car.driver.superspeedway = 65;
                        car.driver.intermediate = 65;
                        car.driver.flat = 65;
                        car.driver.shortTrack = 65;
                        car.driver.roadCourse = 65;
                        retiredString2 = car.driver.name + " has signed with " + car.organization.name + " to drive the #" + car.number + " " +car.organization.manufacture + "<br>";
                        retiredString += retiredString2;
                    }

                }




            }

            for (var i = 0; i < game.carlist.length; i++) {


            }

                console.log(game.carlist);
                console.log(game.retired);
                return retiredString;
        }

        runRace() {

                console.log("starting carlist: " + this.carlist)
                var carlist2 =  [...this.carlist];

                var elite = Array();
                var great = Array();
                var good = Array();
                var average = Array();
                var backup = Array()

                var carlist3 = Array();
                var points = 180;


                console.log(game.schedule[game.week-2].trackType);

                for (var line = 0; line < game.carlist.length; line++) {
                    game.carlist[line].driver.formula = game.carlist[line].driver.points + (game.carlist[line].driver.races * 20)  + (game.carlist[line].driver.topTens * 10) + (game.carlist[line].driver.careerTopTens * 5) + (game.carlist[line].driver.wins * 25) + (game.carlist[line].driver.careerWins * 10) + (game.carlist[line].engine * 9) + (game.carlist[line].chassis * 8)
                }


                if (game.schedule[game.week-2].trackType == "Superspeedway") {
                    console.log(game.schedule[game.week-1].trackType);
                    //console.log("did it the superspeedway way");
                    var arraychances = [80, 78, 76, 75, 74, 72]

                    var odds = Math.floor( Math.random()*arraychances.length );


                    for (var line = 0; line < carlist2.length; line++) {
                        if (((carlist2[line].engine + carlist2[line].aero + carlist2[line].driver.superspeedway) / 3) > arraychances[odds] ) {
                            console.log(carlist2[line]);
                            elite.push(carlist2[line]);
                        } else {
                            if (((carlist2[line].engine + carlist2[line].aero + carlist2[line].driver.superspeedway) / 3) > arraychances[odds] - 8) {
                                console.log(carlist2[line]);
                                great.push(carlist2[line]);
                            }
                            else {
                                good.push(carlist2[line]);
                            }

                        }
                    }
                }

                else if (game.schedule[game.week-2].trackType == "Short Track") {
                    console.log(game.schedule[game.week-1].trackType);
                    var arraychances = [84, 83, 82, 81, 80, 78, 76, 75, 74]

                    var odds = Math.floor( Math.random()*arraychances.length );

                    for (var line = 0; line < carlist2.length; line++) {
                        //
                        // console.log("did it the short way");
                        if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds]) {
                            console.log(carlist2[line]);
                            elite.push(carlist2[line]);
                        } else {
                            if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds] - 7) {
                                console.log(carlist2[line]);
                                great.push(carlist2[line]);
                            }
                            else {
                                if (((carlist2[line].aero + carlist2[line].driver.shortTrack) / 2) > arraychances[odds] - 11) {
                                    console.log(carlist2[line]);
                                    good.push(carlist2[line]);
                                }
                                else {
                                    average.push(carlist2[line]);
                                }

                            }

                        }
                    }
                }

                else if (game.schedule[game.week-2].trackType == "Road Course") {
                    console.log(game.schedule[game.week-1].trackType);

                    for (var line = 0; line < carlist2.length; line++) {
                        console.log("did it the short way");
                        if (((carlist2[line].chassis + carlist2[line].engine + carlist2[line].driver.roadCourse +
                            carlist2[line].driver.roadCourse + carlist2[line].driver.roadCourse) / 5) > 82) {
                            console.log(carlist2[line]);
                            elite.push(carlist2[line]);
                        } else {
                            if (((carlist2[line].chassis + carlist2[line].engine + carlist2[line].driver.roadCourse +
                                carlist2[line].driver.roadCourse + carlist2[line].driver.roadCourse) / 5) > 75) {
                                console.log(carlist2[line]);
                                great.push(carlist2[line]);
                            }
                            else {
                                good.push(carlist2[line]);
                            }

                        }
                    }
                }

                else {
                    for (var line = 0; line < carlist2.length; line++) {
                        //console.log("did it the normal way");
                       // console.log((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate + carlist2[line].driver.flat) / 4 );

                        var odds = Math.floor( Math.random()*100 );

                        console.log(carlist2[line].status);

                        var car = carlist2[line];

                        if (carlist2[line].status == "Part Time" && carlist2[line].driver.races > 15) {
                            if (odds > 98 && !containsObject(car, average)) {
                                average.push(carlist2[line]);
                            }
                        }

                        else {
                            if (carlist2[line].driver.topTens > 18 && game.week > 21 ) {
                                if (odds > 60) {
                                    great.push(carlist2[line]);
                                }
                                else {
                                    good.push(carlist2[line]);
                                }

                            }
                            else {
                                if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3 ) > 86 && !containsObject(car, elite)) {
                                    console.log(carlist2[line]);
                                    elite.push(carlist2[line]);
                                }
                                else if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3 ) > 78 && !containsObject(car, great)) {
                                    great.push(carlist2[line]);
                                }
                                else if (((carlist2[line].engine + carlist2[line].chassis + carlist2[line].driver.intermediate) / 3 ) > 70 && !containsObject(car, good)) {
                                    good.push(carlist2[line]);
                                }
                                else {
                                    if (!containsObject(car, average)) {
                                        average.push(carlist2[line]);
                                    }

                                }
                            }
                        }


                    }
                }

                var array3 = game.returnTopCars();

                for (line = 0; line < array3.length; line++) {
                    var odds1 = Math.floor( Math.random()*100 );
                    if (array3[line].status != "Part Time" || game.schedule[game.week-2].trackType == "Superspeedway") {
                        backup.push(array3[line]);
                    }
                    else {
                        if (odds1 < 60) {
                            backup.push(array3[line]);
                        }
                    }

                }

                console.log("BACKUP! ", backup)


                if (game.week > 5) {

                    for (var line = 0; line < game.carsInRace-8; line++) {

                        var driver = new Driver("first last");

                        var odds = Math.floor( Math.random()*100 );

                        if (elite.length > 0) {
                            var index = Math.floor( Math.random()*elite.length );
                            carlist3.push( elite[index] );
                            var driver = elite[index].driver;
                            elite.splice( index, 1 ); // Remove the item from the array
                        }
                        else {
                            if (great.length > 0) {
                                var index = Math.floor(Math.random() * great.length);
                                carlist3.push(great[index]);
                                var driver = great[index].driver;
                                great.splice(index, 1); // Remove the item from the array
                            } else {
                                if (good.length > 0) {
                                    var index = Math.floor(Math.random() * good.length);
                                    carlist3.push(good[index]);
                                    var driver = good[index].driver;
                                    good.splice(index, 1); // Remove the item from the array
                                } else {
                                    if (average.length > 0) {
                                        var index = Math.floor(Math.random() * average.length);
                                        carlist3.push(average[index]);
                                        var driver = average[index].driver;
                                        average.splice(index, 1); // Remove the item from the array
                                    }
                                }
                            }
                        }


                        if(line == 0) {
                            if(driver.careerWins < 8 && driver.age < 40) {
                                driver.intermediate += 4;
                                driver.superspeedway += 4;
                                driver.flat += 4;
                                driver.shortTrack += 4;
                                driver.roadCourse += 4;
                            }

                            driver.wins += 1;
                            driver.careerWins += 1;
                            driver.topFives += 1;
                            driver.careerTopFives += 1;
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }

                        if(line > 0 && line < 5) {
                            driver.topFives += 1;
                            driver.careerTopFives += 1;
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }

                        if(line > 4 && line < 10) {
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }


                        driver.races += 1
                        driver.careerRaces += 1;
                        driver.points += points;

                        if (points > 150) {
                            points -= 5;
                        }
                        else {
                            points -= 3;
                        }




                        console.log("pushed to carlist " + line + ") " + carlist3[line].driver.name);
                    }

                    var idx = 0;

                    for (line; line <= game.carsInRace-1; line++) {

                        var driver = new Driver("first last");

                        var notFound = true;

                        var filteredArray = backup.filter(function(x) {
                            return carlist3.indexOf(x) < 0;
                        });

                        console.log("filtered array", filteredArray);


                        if (line < game.carsInRace - 2) {
                            carlist3.push(filteredArray[idx])

                        }
                        else {
                            var randIdx = Math.floor( Math.random()*filteredArray.length );
                            carlist3.push(filteredArray[randIdx])
                        }



                        driver.races += 1
                        driver.careerRaces += 1;
                        driver.points += points;

                        if (points > 150) {
                            points -= 5;
                        }
                        else {
                            points -= 3;
                        }

                        if (carlist3[line]) {
                            console.log("pushed to carlist new week " + carlist3[line].driver.name) + " " + line;
                        }

                        notFound = true;


                    }

                }
                else {
                    for (var line = 0; line < game.carsInRace; line++) {

                        var driver = new Driver("first last");

                        var odds = Math.floor( Math.random()*100 );

                        if (elite.length > 0) {
                            var index = Math.floor( Math.random()*elite.length );
                            carlist3.push( elite[index] );
                            var driver = elite[index].driver;
                            elite.splice( index, 1 ); // Remove the item from the array
                        }
                        else {
                            if (great.length > 0) {
                                var index = Math.floor(Math.random() * great.length);
                                carlist3.push(great[index]);
                                var driver = great[index].driver;
                                great.splice(index, 1); // Remove the item from the array
                            } else {
                                if (good.length > 0) {
                                    var index = Math.floor(Math.random() * good.length);
                                    carlist3.push(good[index]);
                                    var driver = good[index].driver;
                                    good.splice(index, 1); // Remove the item from the array
                                } else {
                                    if (average.length > 0) {
                                        var index = Math.floor(Math.random() * average.length);
                                        carlist3.push(average[index]);
                                        var driver = average[index].driver;
                                        average.splice(index, 1); // Remove the item from the array
                                    }
                                }
                            }
                        }


                        if(line == 0) {
                            if(driver.careerWins < 8 && driver.age < 40) {
                                driver.intermediate += 4;
                                driver.superspeedway += 4;
                                driver.flat += 4;
                                driver.shortTrack += 4;
                                driver.roadCourse += 4;
                            }

                            driver.wins += 1;
                            driver.careerWins += 1;
                            driver.topFives += 1;
                            driver.careerTopFives += 1;
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }

                        if(line > 0 && line < 5) {
                            driver.topFives += 1;
                            driver.careerTopFives += 1;
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }

                        if(line > 4 && line < 10) {
                            driver.topTens += 1;
                            driver.careerTopTens += 1;
                        }


                        driver.races += 1
                        driver.careerRaces += 1;
                        driver.points += points;

                        if (points > 150) {
                            points -= 5;
                        }
                        else {
                            points -= 3;
                        }




                        console.log("pushed to carlist " + carlist3[line].driver.name);
                    }
                }






            console.log("pushed!!!" + carlist3);
            return carlist3;
        }

        displayStandings() {
            var carlist2 =  [...this.carlist];
            var carlist3 = Array();

            carlist2.sort((a, b) => (a.driver.points < b.driver.points) ? 1 : -1);

           return carlist2;

        }

        returnTopCars() {
            var carlist2 =  [...this.carlist];
            var carlist3 = Array();

            carlist2.sort((a, b) => (a.driver.formula < b.driver.formula) ? 1 : -1);

            return carlist2;

        }

        displayChampion() {

            return game.champions;

        }
    }

    class Car {
        constructor(number, sponsor1, driver, organization) {
            this.number = number;
            this.sponsor1 = sponsor1;
            this.driver = driver;
            this.organization = organization;
            this.engine = 0;
            this.chassis = 0;
            this.aero = 0;
            this.pitCrew = 0;
            this.prestige = 0;
            this.status = "Full Time";


        }
    }


    class Driver {
        constructor(name) {
            this.name = name;
            this.wins = 0;
            this.topFives = 0;
            this.topTens = 0;
            this.races = 0;
            this.careerTitles = 0;
            this.careerWins = 0;
            this.careerTopFives = 0;
            this.careerTopTens = 0;
            this.careerRaces = 0;
            this.points = 0;
            this.superspeedway = 0;
            this.intermediate = 0;
            this.flat = 0;
            this.shortTrack = 0;
            this.roadCourse = 0;
            this.age = 0;
            this.formula = 0;

        }
    }

    class Organization {
        constructor(name, manufacture) {
            this.name = name;
            this.manufacture = manufacture;
        }
    }

    class Race {
        constructor(raceName, trackName, trackType ) {
            this.raceName = raceName
            this.trackName = trackName
            this.trackType = trackType
        }
    }

    /*var xhr=new XMLHttpRequest();
    xhr.open("GET","roster.tsv");
    xhr.onload=function(){
        console.log(xhr.responseText);
    }
    xhr.send();*/
    var game = new Game();

    //readTextFile("file:C://Users//steve//Desktop//Autosim Web//roster.tsv");


    document.getElementById('roster').onchange = function(){

        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){
            // Entire file
            console.log(this.result);

            // By lines
            var lines = this.result.split('\n');
            for(var line = 1; line < lines.length; line++){
                //console.log(lines[line]);

                var data = lines[line].split('~');

                console.log(data);

                var driver = new Driver(data[1]);

                driver.superspeedway = parseInt(data[6]);
                driver.intermediate = parseInt(data[7]);
                driver.flat = parseInt(data[8]);
                driver.shortTrack = parseInt(data[9]);
                driver.roadCourse = parseInt(data[10]);
                driver.age = parseInt(data[13]);
                driver.careerTitles = parseInt(data[14]);
                driver.careerWins = parseInt(data[15]);
                driver.careerTopFives = parseInt(data[16]);
                driver.careerTopTens = parseInt(data[17]);
                driver.careerRaces = parseInt(data[18]);




                var organization = new Organization(data[4], data[5])

                var car = new Car(data[0], data[2], driver, organization);

                car.engine = parseInt(data[20]);
                car.chassis = parseInt(data[21]);
                car.aero = parseInt(data[22]);
                car.pitCrew = parseInt(data[23]);
                car.prestige = parseInt(data[24]);
                car.status = data[25];

                game.carlist.push(car);


            }

            for(var line1 = 0; line1 < game.carlist.length; line1++){



                console.log("carlist " + game.carlist[line1].driver.name);

            }




        };
        reader.readAsText(file);




    };

    document.getElementById('gamerules').onchange = function(){

        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){
            // Entire file
            console.log(this.result);

            // By lines
            var sched = false;

            var lines = this.result.split('\n');

            for(var line = 1; line < lines.length; line++){

                var data = lines[line].split('~');

                if (line == 1) {
                    game.year = parseInt(data[0]);
                    game.points = parseInt(data[1]);
                    game.carsInRace = parseInt(data[2]);

                }

                if (line == 3) {
                    game.numRaces = parseInt(data[0])+1;

                }


                if (sched) {

                    if (data[0] == "New Races") {
                        sched = false;
                    }
                    else {
                        var race = new Race(data[1], data[2], data[3]);
                        game.schedule.push(race);
                    }
                }

                if (data[0] == "Race #") {
                    sched = true;
                }

            }






        };
        reader.readAsText(file);




    };

    document.getElementById('freeAgents').onchange = function(){

        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){
            // Entire file
            console.log(this.result);

            // By lines
            var sched = false;

            var lines = this.result.split('\n');

            for(var line = 1; line < lines.length; line++){

                var data = lines[line].split('~');

                if (line != 0) {
                    var driver = new Driver(data[0]);
                    driver.age = parseInt(data[1]);
                    driver.superspeedway = parseInt(data[2]);
                    driver.intermediate = parseInt(data[2]);
                    driver.flat = parseInt(data[3]);
                    driver.shortTrack = parseInt(data[4]);
                    driver.roadCourse = parseInt(data[5]);
                    driver.careerTitles = parseInt(data[7]);
                    driver.careerWins = parseInt(data[8]);
                    driver.careerTopFives = parseInt(data[9]);
                    driver.careerTopTens = parseInt(data[10]);
                    driver.careerRaces = parseInt(data[11]);

                    game.freeAgents.push(driver);
                    console.log("pushed", driver.name, driver.age)

                }



            }






        };
        reader.readAsText(file);




    };


    var guesses = 0;

    var word = randomWord();
    console.log(word);

    var html = '';

    //var html = '<form id="gameform"><fieldset>';

    //var str2 = '<h1>' +  $_POST["name"] + "'s Bulls and Cows</h1>";


    html += '<table class="game">';
    html += '<div id="guesses">&nbsp;</div>';
    //html += '<tr> <td>1:</td> <td>same</td> <td><img src="images/bull.png" alt="Bull"> <img src="images/bull.png" alt="Bull"></td> </tr>';

    html += '<div id="buttons">';
    html += '<p><input type="submit" id = "race" name="guess" value="Run Race">';
    html += '<input type="submit" id = "standings" name="giveup" value="Standings">';
    html += '<input type="submit" id = "fastsim" name="giveup" value="Fast Sim">';
    html += '<input type="submit" id = "champions" name="giveup" value="Champions">';
    //html += '<input type="submit" id = "newgame" name="new" value="New Game" onclick="Bullscows()"></p>';
    //html += '<div id="hint1">'
    ///html += '<p><input type="submit" id = "hint" name="hint" value="Hint!"></p></div>';
    //html += '</div>';
    html += '<p id="message">&nbsp;</p>';
    html += '<p><input type="submit"  id="exit" name="exit" value="Exit"></p>';
    html += '</form>'
    html += '</fieldset>';
    html += '<p class="solution">';
    html += word;
    html += '</p></body> ';



    document.getElementById("play-area").innerHTML = html;

    document.getElementById("race").onclick = function (event) {
        event.preventDefault();

        if (game.week != game.numRaces && game.silly == false) {

            document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week-1].raceName + " at " + game.schedule[game.week-1].trackName + "</h1>";

            game.week += 1;

            var results = game.runRace();

            console.log(results);

            var html = "<p class='standings'>";

            for (var i = 0; i < results.length; i++) {
                var num1 = i+1;
                var str1  = num1 + ' | #' + results[i].number + ' ' +
                    results[i].driver.name + ' | ' +
                    results[i].sponsor1 + ' | ' +
                    results[i].organization.name + ' | ' +
                    results[i].organization.manufacture + '\n<br>';
                html += str1;


            }
            html += "</p>"

        }


        else {

            if (game.silly) {

                var ss = game.sillySeason();
                console.log("SILLY SEASON", ss);

                document.getElementById("message").innerHTML = "<h1>" + game.year + " Silly Season</h1>";

                var results = game.displayStandings();

                console.log(results);

                var html = "<p class='standings'>";

                html += ss;

                html += "</p>"



                for (var i = 0; i < game.carlist.length; i++) {
                    game.carlist[i].driver.wins = 0;
                    game.carlist[i].driver.topFives = 0;
                    game.carlist[i].driver.topTens = 0;
                    game.carlist[i].driver.races = 0;
                    game.carlist[i].driver.points = 0;
                }

                game.silly = false;

            }

                else {

                document.getElementById("message").innerHTML = "<h1>" + game.year + " Final Standings</h1>";

                var results = game.displayStandings();

                console.log(results);

                var html = "<p class='standings'>";

                for (var i = 0; i < results.length; i++) {
                    var num1 = i+1;
                    var str1  = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                        + ' | Wins: ' + results[i].driver.wins
                        + ' | Top Fives: ' + results[i].driver.topFives
                        + ' | Top Tens: ' + results[i].driver.topTens
                        + ' | Races: ' + results[i].driver.races
                        + ' | Points: ' + results[i].driver.points + '<br>';
                    html += str1;


                }

                html += "</p>";
                i = 0;
                num1 = i+1;
                results[i].driver.careerTitles += 1;
                str1  = game.year + ' | ' + results[i].number + ' ' + results[i].driver.name
                    + ' | Title #' + results[i].driver.careerTitles
                    + ' | Team: ' + results[i].organization.name
                    + ' | Make: ' + results[i].organization.manufacture +'<br>';
                html += str1;


                game.champions.push(str1)




                game.week = 1;
                game.year += 1;


                game.silly = true;


            }
        }


        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("standings").onclick = function (event) {
        event.preventDefault();



        document.getElementById("message").innerHTML = "<h1>" + game.year + " Standings after " + game.week + " Races </h1>";


        var results = game.displayStandings();

        console.log(results);

        var html = "<p class='standings'>";

        for (var i = 0; i < results.length; i++) {
            var num1 = i+1;
            var str1  = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                + ' | Wins: ' + results[i].driver.wins
                + ' | Top Fives: ' + results[i].driver.topFives
                + ' | Top Tens: ' + results[i].driver.topTens
                + ' | Races: ' + results[i].driver.races
                + ' | Points: ' + results[i].driver.points + '<br>';
            html += str1;


        }

        html += "</p>";


        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("fastsim").onclick = function (event) {
        event.preventDefault();

        if (game.week != game.numRaces) {

            for (var t = 0; t < 12; t++) {


                document.getElementById("message").innerHTML = "<h1>" + game.year + " Week " + game.week + " | " + game.schedule[game.week-1].raceName + " at " + game.schedule[game.week-1].trackName + " (Fast Sim) </h1>";

                game.week += 1;

                var results = game.runRace();

                console.log(results);

                var html = "<p class='standings'>";

                for (var i = 0; i < results.length; i++) {
                    var num1 = i+1;
                    var str1  = num1 + ' | #' + results[i].number + ' ' +
                        results[i].driver.name + ' | ' +
                        results[i].sponsor1 + ' | ' +
                        results[i].organization.name + ' | ' +
                        results[i].organization.manufacture + '\n<br>';
                    html += str1;


                }
            html += "</p>"
            }

        }
        else {


            document.getElementById("message").innerHTML = "<h1>" + game.year + " Final Standings</h1>";

            var results = game.displayStandings();

            console.log(results);

            var html = "<p class='standings'>";

            for (var i = 0; i < results.length; i++) {
                var num1 = i+1;
                var str1  = "#" + num1 + ' ' + results[i].number + ' ' + results[i].driver.name
                    + ' | Wins: ' + results[i].driver.wins
                    + ' | Top Fives: ' + results[i].driver.topFives
                    + ' | Top Tens: ' + results[i].driver.topTens
                    + ' | Races: ' + results[i].driver.races
                    + ' | Points: ' + results[i].driver.points + '<br>';
                html += str1;


            }

            html += "</p>";

            i = 0;
            num1 = i+1;
            results[i].driver.careerTitles += 1;
            str1  = game.year + ' | ' + results[i].number + ' ' + results[i].driver.name
                + ' | Title #' + results[i].driver.careerTitles
                + ' | Team: ' + results[i].organization.name
                + ' | Make: ' + results[i].organization.manufacture +'<br>';
            html += str1;

            game.champions.push(str1)



            game.week = 1;
            game.year += 1;

            for (var i = 0; i < game.carlist.length; i++) {
                game.carlist[i].driver.wins = 0;
                game.carlist[i].driver.topFives = 0;
                game.carlist[i].driver.topTens = 0;
                game.carlist[i].driver.races = 0;
                game.carlist[i].driver.points = 0;
            }

            var ss = game.sillySeason();
            console.log(ss);
        }




        document.getElementById("message").innerHTML += html;
    }

    document.getElementById("champions").onclick = function (event) {
        event.preventDefault();


        document.getElementById("message").innerHTML = "<h1>Champions</h1>";


        var html = "<p class='standings'>";
        for (i = 0; i < game.champions.length; i++) {
            html += game.champions[i];
        }
        html += "</p>"

        document.getElementById("message").innerHTML += html;
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

    document.getElementById("exit").onclick = function (event) {
        event.preventDefault()
        console.log("test");
        window.location.href = "index.php";

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

       */

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