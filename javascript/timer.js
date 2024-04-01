let playing = false;
let buzzing = false;
let player = 1;
let p1time =45;
let p2time = 45;

const videoGameArray = ["Images/VideoGames/xbox.PNG",
"Images/VideoGames/amongus.webp",
"Images/VideoGames/AlanWake.jpg",
"Images/VideoGames/halo.jpg",
"Images/VideoGames/callofduty.jpg",
"Images/VideoGames/finalfantasy.jpg",
"Images/VideoGames/zelda.avif",
"Images/VideoGames/playstation.jpg",
"Images/VideoGames/dysonsphere.png",
"Images/VideoGames/rdd.PNG",
"Images/VideoGames/coh.webp",
"Images/VideoGames/hogwartslegacy.webp",
"Images/VideoGames/gta5.jpg",
"Images/VideoGames/crashbandicoot.png",
"Images/VideoGames/hkia.jpg",
"Images/VideoGames/godofwar.jpg",
"Images/VideoGames/donkykong.PNG",
"Images/VideoGames/tomclancy.png",
"Images/VideoGames/factorio.jpg",
"Images/VideoGames/fifa.jpg",
"Images/VideoGames/fnaf.png",
"Images/VideoGames/fortnite.webp",
"Images/VideoGames/gamecube.jpg",
"Images/VideoGames/left4dead.jpg",
"Images/VideoGames/mortalcombat.png",
"Images/VideoGames/mspacman.webp",
"Images/VideoGames/pikmen.png",
"Images/VideoGames/pong.jpg",
"Images/VideoGames/skyrim.jpg",
"Images/VideoGames/spyro.webp",
"Images/VideoGames/streetfighter.png",
"Images/VideoGames/witcher.PNG",
"Images/VideoGames/wow.png",
"Images/VideoGames/digdug.PNG",
"Images/VideoGames/pcmasterrace.png",
"Images/VideoGames/goldeneye.jpg",
"Images/VideoGames/sims.jpg",
"Images/VideoGames/monkeyball.PNG",
"Images/VideoGames/supersmashbros.PNG"]

const videoGameAnswerArray = ["XBox",
"Among Us",
"Alan Wake",
"Halo",
"Call of Duty",
"Final Fantasy",
"The Legend of Zelda",
"Playstation",
"Dyson Sphere Program",
"Red Dead Redemption",
"City of Heroes",
"Hogwarts Legacy",
"GTA 5",
"Crash Bandicoot",
"Hello Kitty Island Adventure",
"God of War",
"Donkey Kong",
"Tom Clancy",
"Factorio",
"FIFA",
"Five Nights at Freddys",
"Fortnite",
"Gamecube",
"Left 4 Dead",
"Mortal Combat",
"Ms Pacman",
"Pikmin",
"Pong",
"Skyrim",
"Spyro",
"StreetFighter",
"The Witcher",
"World of Warcraft",
"Dig Dug",
"PC Masterrace",
"Golden Eye",
"Sims",
"Monkey Ball",
"Super Smash Brothers"
]
const artsAndCraftsArray = ["Images/artsandcrafts/crayons.jpg",
"Images/artsandcrafts/clothespins.jpg",
"Images/artsandcrafts/glitter.jpg",
"Images/artsandcrafts/beads.jpg",
"Images/artsandcrafts/thumbtacks.webp",
"Images/artsandcrafts/twine.webp",
"Images/artsandcrafts/stickers.jpg",
"Images/artsandcrafts/googleyeyes.jpg",
"Images/artsandcrafts/paint.webp",
"Images/artsandcrafts/glue.jpg",
"Images/artsandcrafts/easle.webp",
"Images/artsandcrafts/buttons.webp",
"Images/artsandcrafts/markers.webp",
"Images/artsandcrafts/holepuncher.jpg",
"Images/artsandcrafts/exactoknife.webp",
"Images/artsandcrafts/hotgluegun.avif",
"Images/artsandcrafts/pipecleaners.webp",
"Images/artsandcrafts/rubberbands.webp",
"Images/artsandcrafts/scissors.jpg",
"Images/artsandcrafts/clay.jpg",
"Images/artsandcrafts/coloredpencils.jpg",
"Images/artsandcrafts/popsiclesticks.webp",
"Images/artsandcrafts/cricut.PNG",
"Images/artsandcrafts/eggcarton.webp",
"Images/artsandcrafts/fasteners.jpg",
"Images/artsandcrafts/gluedots.avif",
"Images/artsandcrafts/printer.jpg",
"Images/artsandcrafts/oragami.jpg",
"Images/artsandcrafts/vynl.webp",
"Images/artsandcrafts/woodburning.PNG",
"Images/artsandcrafts/stencils.jpg",
"Images/artsandcrafts/canvas.png",
"Images/artsandcrafts/papercutter.jpg",
"Images/artsandcrafts/thread.jpg",
"Images/artsandcrafts/superglue.jpg",
"Images/artsandcrafts/weedingtool.jpg",
"Images/artsandcrafts/hotgluesticks.jpg",
"Images/artsandcrafts/velcro.jpg",
"Images/artsandcrafts/compasstool.jpg",
"Images/artsandcrafts/laminator.jpg",
"Images/artsandcrafts/papercrimper.webp",
"Images/artsandcrafts/woodcutter.PNG"]
const artsAndCraftsAnswersArray = ["Crayons",
"Clothespins",
"Glitter",
"Beads",
"Thumbtacks",
"Twine",
"Stickers",
"Googly Eyes",
"Paint",
"Glue",
"Easle",
"Buttons",
"Markers",
"Hole Puncher",
"X-Acto Knife",
"Hot Glue Gun",
"Pipecleaners",
"Rubber bands",
"Scissors",
"Clay",
"Colored Pencils",
"Popsicle Sticks",
"Cricut",
"Egg Carton",
"Fasteners",
"Glue dots",
"Printer",
"Oragami",
"Vynl",
"Woodburning",
"Stencils",
"Canvas",
"Paper Cutter",
"Thread",
"Superglue",
"Weeding Tool",
"Hot Glue Sticks",
"Velcro",
"Compass Tool",
"Laminator",
"Paper Crimper",
"Woodcutter"]
const cocktailsArray = ["Images/cocktails/martini.png",
"Images/cocktails/mojito.png",
"Images/cocktails/oldfassioned.png",
"Images/cocktails/paloma.png",
"Images/cocktails/pinacolada.png",
"Images/cocktails/screwdriver.png",
"Images/cocktails/bloodymary.png",
"Images/cocktails/cosmopolitan.png",
"Images/cocktails/longisland.png",
"Images/cocktails/maitai.png",
"Images/cocktails/margarita.png",
"Images/cocktails/sidecar.png",
"Images/cocktails/moscowmule.png",
"Images/cocktails/whiterussian.png",
"Images/cocktails/amarettosour.png",
"Images/cocktails/royalhawiian.png",
"Images/cocktails/b52.png",
"Images/cocktails/americano.png",
"Images/cocktails/rustynail.png",
"Images/cocktails/darknstormy.png",
"Images/cocktails/sazerac.png",
"Images/cocktails/sexonthebeach.png",
"Images/cocktails/daiquiri.png",
"Images/cocktails/espressomartini.png",
"Images/cocktails/frenchconnection.png",
"Images/cocktails/gimlet.png",
"Images/cocktails/mintjulep.png",
"Images/cocktails/appletini.png"]
const cocktailAnswerArray = ["Martini",
"Mojito",
"Old Fashioned",
"Paloma",
"Pina Colada",
"Screwdriver",
"Bloody Mary",
"Cosmopolitan",
"Long Island Iced Tea",
"Mai Tai",
"Margarita",
"Sidecar",
"Moscow Mule",
"White Russian",
"Amaretto Sour",
"Royal Hawiian",
"B52",
"Americano",
"Rusty Nail",
"Dark n Stormy",
"Sazerac",
"Sex on the Beach",
"Daiquiri",
"Espresso Martini",
"French Connection",
"Gimlet",
"Mint Julep",
"Appletini"]

const cofeeArray = ["Images/CoffeeStuff/blackcoffee.PNG",
"Images/CoffeeStuff/mug.jpg",
"Images/CoffeeStuff/frappe.jpg",
"Images/CoffeeStuff/coffeemaker.jpg",
"Images/CoffeeStuff/starbucks.webp",
"Images/CoffeeStuff/mocha.PNG",
"Images/CoffeeStuff/coffeebeans.jpg",
"Images/CoffeeStuff/whippedcream.jpg",
"Images/CoffeeStuff/coffeegrinder.jpg",
"Images/CoffeeStuff/cinnamon.jpg",
"Images/CoffeeStuff/dunkindonuts.jpg",
"Images/CoffeeStuff/espresso.jpg",
"Images/CoffeeStuff/biscotti.jpg",
"Images/CoffeeStuff/deathwish.PNG",
"Images/CoffeeStuff/chocolatesyrup.jpg",
"Images/CoffeeStuff/folgers.PNG",
"Images/CoffeeStuff/Americano.jpg",
"Images/CoffeeStuff/sugar.jpg",
"Images/CoffeeStuff/valhallajava.jpg",
"Images/CoffeeStuff/creampitcher.PNG",
"Images/CoffeeStuff/cappachino.jpg",
"Images/CoffeeStuff/doppio.PNG",
"Images/CoffeeStuff/galao.PNG",
"Images/CoffeeStuff/irish.PNG",
"Images/CoffeeStuff/redeye.PNG",
"Images/CoffeeStuff/tendrops.jpg",
"Images/CoffeeStuff/whippedcreamdispenser.jpg",
"Images/CoffeeStuff/caffine.png"]
const cofeeAnswerArray = ["Black Coffee",
"Mug",
"Frappe",
"Coffee Maker",
"Starbucks",
"Mocha",
"Coffee Beans",
"Whipped Cream",
"Coffee Grinder",
"Cinnamon",
"Dunkin Donuts",
"Espresso",
"Biscotti",
"Death Wish",
"Chocolate Syrup",
"Folgers",
"Americano",
"Sugar",
"Valhalla Java",
"Cream Pitcher etc.",
"Cappuccino",
"Doppio",
"Galao",
"Irish",
"Red Eye",
"Tendrops",
"Whipped Cream Dispenser",
"Caffeine"
]
const nhlteamsArray = ["Images/nhlteams/blackhawks.PNG",
"Images/nhlteams/anaheimducks.PNG",
"Images/nhlteams/philadelphiaflyers.PNG",
"Images/nhlteams/sanjosesharks.PNG",
"Images/nhlteams/seattlekraken.PNG",
"Images/nhlteams/buffalosabres.PNG",
"Images/nhlteams/calgaryflames.PNG",
"Images/nhlteams/carolinahurricanes.PNG",
"Images/nhlteams/dallasstars.PNG",
"Images/nhlteams/winnipegjets.PNG",
"Images/nhlteams/tampabaylightning.PNG",
"Images/nhlteams/stlouisblues.PNG",
"Images/nhlteams/vancouvercannuks.PNG",
"Images/nhlteams/arizonacoyotes.PNG",
"Images/nhlteams/avalanches.PNG",
"Images/nhlteams/bostonbruins.PNG",
"Images/nhlteams/newjerseydevils.PNG",
"Images/nhlteams/montrealcanadiens.PNG",
"Images/nhlteams/edmontonoilers.PNG",
"Images/nhlteams/floridapanthers.PNG",
"Images/nhlteams/ottawasenators.PNG",
"Images/nhlteams/nashvillepredators.PNG",
"Images/nhlteams/pittsburghpenguins.PNG",
"Images/nhlteams/vegasgoldenknights.PNG",
"Images/nhlteams/bluejackets.PNG",
"Images/nhlteams/detroidredwings.PNG",
"Images/nhlteams/losangeleskings.PNG",
"Images/nhlteams/minnesotawilds.PNG"]
const nhlteamsAnswersArray = ["Chicago Blackhawks",
"Anaheim Ducks",
"Philadelphia Flyers",
"San Jose Sharks",
"Seattle Krakens",
"Buffalo Sabres",
"Calgary Flames",
"Carolina Hurricanes",
"Dallas Stars",
"Winnipeg Jets",
"Tampa Bay Lightning",
"St. Louis Blues",
"Vancouver Canucks",
"Arizona Coyotes",
"Colorado Avalanches",
"Boston Bruins",
"New Jersey Devils",
"Montreal Canadiens",
"Edmonton Oilers",
"Florida Panthers",
"Ottawa Senators",
"Nashville Predators",
"Pittsburgh Penguins",
"Vegas Golden Knights",
"Columbus Blue Jackets",
"Detroit Red Wings",
"Los Angeles Kings",
"Minnesota Wilds"]

const sitcomsArray = ["Images/sitcoms/bigbang.jpg",
"Images/sitcoms/seinfeld.jpg",
"Images/sitcoms/letterkenny.jpg",
"Images/sitcoms/newgirl.jpg",
"Images/sitcoms/parksandrec.jpg",
"Images/sitcoms/theoffice.webp",
"Images/sitcoms/schittscreek.jpg",
"Images/sitcoms/scrubs.jpg",
"Images/sitcoms/futurama.webp",
"Images/sitcoms/modernfamily.jpg",
"Images/sitcoms/friends.jpg",
"Images/sitcoms/community.jpg",
"Images/sitcoms/brooklyn99.webp",
"Images/sitcoms/brokegirls.jpg",
"Images/sitcoms/blackish.PNG",
"Images/sitcoms/goldengirls.avif",
"Images/sitcoms/curbyourenthusiasm.webp",
"Images/sitcoms/proudfamily.webp",
"Images/sitcoms/freshprince.PNG",
"Images/sitcoms/howimetyourmother.jpg",
"Images/sitcoms/goodtimes.jpg",
"Images/sitcoms/thegoldbergs.jpg",
"Images/sitcoms/tedlasso.jpg",
"Images/sitcoms/theleague.jpg",
"Images/sitcoms/whatwedointheshadows.jpg",
"Images/sitcoms/zoey101.jpg",
"Images/sitcoms/kingofqueens.jpg",
"Images/sitcoms/drakeandjosh.webp",
"Images/sitcoms/everybodyhateschris.jpg",
"Images/sitcoms/familymatters.jpg",
"Images/sitcoms/malcolminthemiddle.jpg",
"Images/sitcoms/ilovelucy.jpg",
"Images/sitcoms/lastmanstanding.jpg",
"Images/sitcoms/superstore.jpg",
"Images/sitcoms/everybodylovesraymond.jpg",
"Images/sitcoms/gilmoregirls.jpg",
"Images/sitcoms/roseanne.jpg",
"Images/sitcoms/notdeadyet.png",
"Images/sitcoms/tacoma.jpg",
"Images/sitcoms/themiddle.jpg",
"Images/sitcoms/fullhouse.jpg",
"Images/sitcoms/ghosts.jpg"]

const sitcomsAnswerArray = ["Big Bang Theory",
"Seinfeld",
"Letterkenny",
"New Girl",
"Parks and Rec",
"The Office",
"Schitts Creek",
"Scrubs",
"Futurama",
"Modern Family",
"Friends",
"Community",
"Brooklyn 99",
"2 Broke Girls",
"Blackish",
"Golden Girls",
"Curb Your Enthusiasm",
"The Proud Family",
"The Fresh Prince Of Bel-Air",
"How I Met Your Mother",
"Good Times",
"The Goldbergs",
"Ted Lasso",
"The League",
"What We Do in the Shadows",
"Zoey 101",
"King of Queens",
"Drake and Josh",
"Everybody Hates Chris",
"Family Matters",
"Malcolm in the Middle",
"I Love Lucy",
"Last Man Standing",
"Superstore",
"Everybody Loves Raymond",
"Gilmore Girls",
"Roseanne",
"Not Dead Yet",
"Tacoma FD",
"The Middle",
"Full House",
"Ghosts"]

const spilloverArray = ["Images/celebrities/adamsandler.jpg",
"Images/celebrities/annehathaway.jpg",
"Images/celebrities/bradleycooper.webp",
"Images/celebrities/bradpitt.jpg",
"Images/celebrities/chrisevans.webp",
"Images/celebrities/danielcraig.webp",
"Images/celebrities/danielradcliffe.jpg",
"Images/celebrities/denzelwashington.jpg",
"Images/celebrities/dwaynejohnson.webp",
"Images/celebrities/emmawatson.jpg",
"Images/celebrities/harrisonford.jpg",
"Images/celebrities/jackiechan.jpg",
"Images/celebrities/johnnydepp.webp",
"Images/celebrities/keanureeves.jpg",
"Images/celebrities/leo.webp",
"Images/celebrities/liamneeson.jpg",
"Images/celebrities/markwahlberg.jpg",
"Images/celebrities/mattdamon.webp",
"Images/celebrities/morganfreeman.png",
"Images/celebrities/natalieportman.jpg",
"Images/celebrities/nicolascage.jpg",
"Images/celebrities/orlandobloom.webp",
"Images/celebrities/rdj.webp",
"Images/celebrities/robbinwilliams.webp",
"Images/celebrities/samuelljackson.jpg",
"Images/celebrities/scarjo.webp",
"Images/celebrities/stevecarrel.jpg",
"Images/celebrities/tomhanks.jpg",
"Images/celebrities/willfarrel.jpg",
"Images/celebrities/willsmith.jpg",
"Images/celebrities/zachg.jpg",
"Images/celebrities/owenwilson.jpg"]

const spilloverAnswerArray = [
"Adam Sandler",
"Anne Hathaway",
"Bradley Cooper",
"Brad Pitt",
"Chris Evans",
"Daniel Craig",
"Daniel Radcliffe",
"Denzel Washington",
"Dwayne Johnson",
"Emma Watson",
"Harrison Ford",
"Jackie Chan",
"Johnny Depp",
"Keanu Reeves",
"Leonardo DeCaprio",
"Liam Neeson",
"Mark Wahlberg",
"Matt Damon",
"Morgan Freeman",
"Natalie Portman",
"Nicolas Cage",
"Orlando Bloom",
"Robert Downey Jr.",
"Robbin Williams",
"Samuel L. Jackson",
"Scarlett Johansson",
"Steve Carrel",
"Tom Hanks",
"Will Farrel",
"Will Smith",
"Zach Galifinakis",
"Owen Wilson"]

const timArray = []
const timAnswerArray = []
const sylviaArray = []
const sylviaAnswerArray = []

const categories = [videoGameArray, cofeeArray, artsAndCraftsArray, cocktailsArray, nhlteamsArray, sitcomsArray, timArray, sylviaArray, spilloverArray];
const categoriesAnswers = [videoGameAnswerArray, cofeeAnswerArray, artsAndCraftsAnswersArray, cocktailAnswerArray, nhlteamsAnswersArray, sitcomsAnswerArray, timAnswerArray, sylviaAnswerArray, spilloverAnswerArray];
let i=0;
let categoryIndex = 40;
let imageCounter = 1;
let winText = " wins!";
let challenger = "none";
let defender = "none"

function startUp(){
	var r = window.location.search;
	catSelection = r.substr(r.indexOf("=")+1);
	if(catSelection.includes("videoGames"))
		categoryIndex = 0;
	else if(catSelection.includes("coffee"))
		categoryIndex = 1;
	else if(catSelection.includes("artsandcrafts"))
		categoryIndex = 2;
	else if(catSelection.includes("cocktails"))
		categoryIndex = 3;
	else if(catSelection.includes("nhlteams"))
		categoryIndex = 4;
	else if(catSelection.includes("sitcoms"))
		categoryIndex = 5;
	else if(catSelection.includes("tims"))
		categoryIndex = 6;
	else if(catSelection.includes("sylvia"))
		categoryIndex = 7;
	else if(catSelection.includes("spillover"))
		categoryIndex = 8;
	document.getElementById("answers").style.display = "none"
	document.getElementById("correctAnswers").style.display = "none"
	document.getElementById("cover").style.display = "none"
	document.getElementById('battle').play();
	nextImage();
	timer();
}
function iterateCounter(){
	imageCounter += 1;
	document.getElementById("counter").innerHTML = imageCounter;	
}
function nextImage(){
	if(i>categories[categoryIndex].length-1){
		i=0;
		categoryIndex=8;
	}
	document.slide.src = categories[categoryIndex][i];
	i = i+1;
}

function setFirstTimer(){
	document.getElementById("timer1").innerHTML = 50;
}

function setValue(){
	var r = window.location.search;
	slice = r.substr(r.indexOf("=")+1);
	document.getElementById("timer1").innerHTML = slice;
}

function ending(challengerOrDefender){
	document.getElementById("cover").style.display = "block"
	document.getElementById("battle").pause();
	document.getElementById('booing').volume=.2;
	document.getElementById('ending').play();
	document.getElementById("covertext").style.fontSize = "2em"
	if (challenger.localeCompare(challengerOrDefender)==0){
		if(defender.localeCompare("Sara")==0){
			document.getElementById('ending').pause();
			document.getElementById('booing').play();
		}
		document.getElementById("covertext").style.color = '#EE4B2B'
	}
	else{
		if(challenger.localeCompare("Sara")==0){
			document.getElementById('ending').pause();
			document.getElementById('booing').play();
		}
		document.getElementById("covertext").style.color = '#0096FF'
	}
	document.getElementById("covertext").innerHTML = challengerOrDefender+winText;
	setTimeout(load_home, 5000);
}

function load_home() {
     window.location.href = "index.html";
}


function timer(){
	timevar = setTimeout(timer, 1000);
	if (player === 1){
		document.getElementById("timer1").innerHTML = p1time;
		p1time = p1time-1;
		if (p1time <= -1){
			clearTimeout(timevar)
			ending(defender)
		}
	}
	else{
		document.getElementById("timer2").innerHTML = p2time;
		p2time = p2time-1;
		if (p2time <= -1){
			clearTimeout(timevar)
			ending(challenger)
		}
	}
		
}

function transition(){
	document.getElementById("covertext").style.fontSize = "3em"
	iterateTransition(3)
	setTimeout(iterateTransition, 1000, 2);
	setTimeout(iterateTransition, 2000, 1);
	setTimeout(startUp, 3000);
	
}
function iterateTransition(time){
	document.getElementById("covertext").innerHTML = time;
}

function switchPlayer(){
	if (player === 1){
		player = 2;
	}
	else 
		player = 1;
	
}

/* document.onkeypress = function (e) {
    if (e.keyCode === 75) {
        switchPlayer()
    }
	
} */
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 13 ){
	if (buzzing == false){
		iterateCounter()
		correctMechanic()
		switchPlayer()
	}
  }
  else if(e.keyCode == 8){
	if (buzzing == false){
	 iterateCounter()
	 passMechanic()
	}
  }
  else if(e.keyCode == 32){
	 if (playing === false){
		playing = true
		transition()
	 }
  }
  else if(e.keyCode == 74){
	 if (challenger.localeCompare("none")==0){
		challenger = "Justin";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Justin";
	 }
  }
  else if(e.keyCode == 75){
	 if (challenger.localeCompare("none")==0){
		challenger = "Jake";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Jake";
	 }
  }
  else if(e.keyCode == 66){
	 if (challenger.localeCompare("none")==0){
		challenger = "Baylee";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Baylee";
	 }
  }
  else if(e.keyCode == 72){
	 if (challenger.localeCompare("none")==0){
		challenger = "TJ";
	 } else if (defender.localeCompare("none")==0){
		 defender ="TJ";
	 }
  }
  else if(e.keyCode == 65){
	 if (challenger.localeCompare("none")==0){
		challenger = "Amy";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Amy";
	 }
  }
  else if(e.keyCode == 86){
	 if (challenger.localeCompare("none")==0){
		challenger = "Sylvia";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Sylvia";
	 }
  }
  else if(e.keyCode == 84){
	 if (challenger.localeCompare("none")==0){
		challenger = "Tim";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Tim";
	 }
  }
  else if(e.keyCode == 83){
	 if (challenger.localeCompare("none")==0){
		challenger = "Sara";
	 } else if (defender.localeCompare("none")==0){
		 defender ="Sara";
	 }
  }

});

function passMechanic(){
	let timer = "";
	if(player == 1){
		timer = "timer1"
	}
	else{
		timer = "timer2"
	}
	buzzing = true;
	document.getElementById('buzzer').play();
	document.getElementById(timer).style.color = '#FFA500'
	document.getElementById(timer).style.borderColor = "#FFA500";
	document.getElementById("answers").style.display = "block"
	document.getElementById("answers").innerHTML = categoriesAnswers[categoryIndex][i-1];
	if(categoriesAnswers[categoryIndex][i-1].length>13){
		document.getElementById("answers").style.fontSize = "4em"
	}
	setTimeout(passMechanicUndo, 3000, timer);
}

function passMechanicUndo(timer){
	buzzing = false;
	document.getElementById(timer).style.color = '#ffd700'
	document.getElementById(timer).style.borderColor = "#ffd700"
	document.getElementById("answers").style.fontSize = "8em"
	document.getElementById("answers").style.display = "none"
	nextImage();
}

function correctMechanic(){
	buzzing = true;
	document.getElementById('chime').play();
	document.getElementById("correctAnswers").style.display = "block"
	document.getElementById("correctAnswers").innerHTML = categoriesAnswers[categoryIndex][i-1];
	setTimeout(correctMechanicUndo, 1000);
}

function correctMechanicUndo(){
	buzzing = false;
	document.getElementById("correctAnswers").style.display = "none"
	nextImage()
}